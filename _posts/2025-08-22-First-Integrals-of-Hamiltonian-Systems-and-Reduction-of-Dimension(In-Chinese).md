---
layout: post
title: First Integrals of Hamiltonian Systems and Reduction of Dimension(In Chinese)
date: 2025-08-22 01:49:50
description: A geometric way to reduce the dimension of a Hamiltonian system with a first integral, together with some explanation on proof of Darboux's theorem.
tags:
  
categories: Notes
toc:
  beginning: true
---

Hamilton力学中的一个经典结果是：如果已知系统的一个守恒量，那么原本的系统等效于一个更低维的系统。这也是辛约化的最简单情形（具有动量映射的$$\mathbb{R}$$作用）。

在一些教材上（如Arnold《经典力学的数学方法》），这部分的推导以计算为主，我们需要选取某些函数并考虑特定的微分方程。这篇笔记的目的是对原本的推导过程提供一种更加几何的解释。

我们假定读者对流形以及其上的辛形式、辛形式定义的Poisson括号以及Hamilton系统的定义和基本性质有一定了解，同时也知道（李）群作用和群作用的商空间的概念。在没有特别说明的情况下，我们始终假定$$(M,\omega)$$是一个辛流形，且$$\dim M = 2n$$.

## Hamilton系统的约化

在牛顿力学中，一个熟知的结果是：*如果一个力学系统具有一个守恒量，那么我们可以将系统约化为自由度更小的系统*。这一结果实际上来自于常微分方程的结果。

> 一个力学系统可以用一个一阶常微分方程来描述：$$\dot{u}(t) = f(t,u(t))$$. 这里$$u(t)=(u_{1}(t),u_{2}(t),\dots,u_{n}(t))$$落在$$\mathbb{R}^{n}$$中。一个守恒量$$F(u(t))\equiv C$$说明方程的解落在$$\mathbb{R}^{n}$$的子集$$F^{-1}(0)$$上。在大部分情况下，这个子集会是一个（余一维）子流形，即在一个小区域内，$$F^{-1}(0)$$中的点可以靠$$n-1$$个独立的量$$v=(v_{1},\dots,v_{n-1})$$确定。这样原本的方程可以转化为一个低维空间上的方程$$\dot{v}(t)=\tilde{f}(t,v(t))$$.

因为Hamilton力学是牛顿力学的等价描述，因此上面的结论在Hamilton力学中会有对应物。但这里有些微妙的地方是：Hamilton力学中的相空间$$M$$的维数是原本空间的两倍，因此我们需要实现的约化应当是：

> **结论**：如果$$F$$是Hamilton系统$$(M,\omega,H\colon M \rightarrow \mathbb{R})$$的一个守恒量，那么Hamilton系统$$(M,\omega,H)$$的求解可以约化为一个$$2n-2$$维Hamilton系统$$(N,\Omega,\tilde{H})$$的求解，即$$\dim N = 2n-2$$.

实现约化的办法和前面是有些类似的。我们考虑从$$x_{0}\in M$$出发的Hamilton流，因为$$F$$限制在$$H$$定义的Hamilton流的流线上是常数，所以我们可以只考虑$$M$$的子空间$$F^{-1}(c)$$（这里$$c=F(x_{0})$$是由初值确定的常数）。在适当的条件（通常是$$\mathrm{d}F_{x_{0}} \neq 0$$）下，我们找到某个包含$$x_{0}$$的开集$$U$$使得$$U\cap F^{-1}(c)$$是一个余一维的子流形。这时候我们只需要在一个$$2n-1$$维空间$$U\cap F^{-1}(c)$$上求解Hamilton流。

我们下面将维数进一步降低。我们考虑由$$F$$定义的Hamilton向量场$$X_{F}$$，它由下面的等式给出

$$
\omega(X_{F},\cdot) = -\mathrm{d}F(\cdot)
$$

利用这个等式可以算出：$$\mathrm{d}F(X_{F}) \equiv 0$$，所以$$X_{F}$$实际上给出了$$U\cap F^{-1}(c)$$上的“向量场”，进而定义了上面的流

$$
\Phi_{F} \colon (-\varepsilon,\varepsilon)\times \left(U\cap F^{-1}(c)\right) \longrightarrow F^{-1}(c)
$$

这里$$\varepsilon$$是某个很小的正数。

粗略来说，流$$\Phi_{F}$$给出了$$\mathbb{R}$$在$$U\cap F^{-1}(c)$$上的自由光滑作用，所以我们可以考虑它的商空间

$$
N \approx \left(U\cap F^{-1}(c)\right)/\mathbb{R}
$$

在$$U$$选取得足够小的时候，这是一个$$2n-2$$维的流形，它在点$$x$$处的切空间自然地同构于$$T_{x}F^{-1}(c)/\operatorname{Span}\{X_{F}\vert _{x}\}$$. 利用一些线性代数的知识可以证明，原本的$$\omega$$诱导了$$N$$上的辛形式$$\Omega$$. 这样就得到了一个$$2n-2$$维的辛流形$$(N,\Omega)$$. 此外，利用$$F$$是守恒量可以证明，原本的Hamilton量也会诱导商空间$$N$$上的Hamilton量$$\tilde{H}$$，并且它给出的Hamilton流正好是原本的Hamilton流在$$N$$上的投影。

当然，上面的论证并不方便计算，所以我们再给出另一种构造$$(N,\Omega)$$的办法，这种办法也更接近大部分教材上的计算思路。这个想法实际上将上面抽象的商空间$$N$$具体实现为$$M$$的一个子流形。

事实上，我们总能选取一个$$2n-2$$维的子流形$$N\subseteq U\cap F^{-1}(c)$$，使得它和向量场$$X_{F}$$“横截相交”，即对任意的$$x\in N$$，都有

$$
T_{x}F^{-1}(c) = T_{x}N \oplus \operatorname{Span}\{X_{F}\}
$$

> **注记**：一种选取$$N$$的办法是，先选取一个函数$$G$$，使得$$\mathrm{d}G(X_{F})$$恒不为$$0$$，然后取$$N$$是$$G$$的水平集，即
>
> $$
> N = G^{-1}(c')\cap \left(U\cap F^{-1}(c)\right)
> $$
>
> 其中$$c'=G(x_{0})$$. 这样的选取对我们之后的计算也有帮助。

我们将$$\omega$$限制在$$N$$上，会得到闭的2-形式$$\Omega$$，此外将$$H$$限制在$$N$$上会得到函数$$\tilde{H}$$. 经过一点计算可以证明，$$\Omega$$非退化，因此是$$N$$上的辛形式。这样就得到了一个$$2n-2$$维的Hamilton系统$$(N,\Omega,\tilde{H})$$. 下面考虑如何将原本的问题约化到$$(N,\Omega,\tilde{H})$$中。

因为$$N$$和$$X_{F}$$“横截相交”，所以我们可以适当缩小$$U$$，使得流$$\Phi_{F}$$给出$$(-\varepsilon,\varepsilon)\times N$$和$$U\cap F^{-1}(c)$$之间的同胚

$$
\begin{array}{rcl}
 (-\varepsilon,\varepsilon)\times N & \xrightarrow{\simeq} & U\cap F^{-1}(c) \\
 (s,x) & \longmapsto & \Phi_{F}(s,x) \\
\end{array}
$$

这个同胚将$$M$$上的Hamilton流$$\phi_{H}(t)$$变为了$$(-\varepsilon,\varepsilon)\times N$$上的流

$$
\Phi_{F}^{-1}(\phi_{H}(t))=(s(t),\tilde{\phi}(t)) \in (-\varepsilon,\varepsilon)\times N
$$

然后经过一点计算，可以证明$$\tilde{\phi}$$就是$$(N,\Omega,\tilde{H})$$给出的Hamilton流，而由$$F$$和$$N$$的选取，可以根据$$\tilde{\phi}(t)$$计算出$$s(t)$$，这样原本的问题就完全转化为了$$2n-2$$维Hamilton系统中的问题。

> **注记**：当$$N$$是某个函数$$G$$的水平集时，$$s(t)$$会有一个显式的表达式：它可以由一个和$$G,\tilde{\phi}$$有关的积分表示出来。

## 一点应用：达布定理

事实上，达布定理的一种证明思路和上面的过程相当类似（另一种证明办法是使用所谓的[Moser技巧](https://en.wikipedia.org/wiki/Moser%27s_trick)，例如可以参考[王作勤老师的讲义](http://staff.ustc.edu.cn/~wangzuoq/Courses/16F-Manifolds/Notes/Lec24.pdf)）。

我们首先有两个观察：

* 在上面的论证中，Hamilton量$$H$$并不影响约化的过程（事实上我们论证中主要用到的是$$F$$是守恒量，即它和$$H$$的Poisson括号$$\{G,H\}$$恒为$$0$$）。
* 子流形$$N$$的选取相当任意。

第一个观察说明，实际上任给辛流形$$(M,\omega)$$上的函数$$F$$后，我们都可以作约化，而第二个观察告诉我们，我们可以适当地选取$$N$$，以获得更好的性质。

基于这两点观察，我们对维数归纳地证明达布定理。对辛流形$$(M,\omega)$$，我们适当地选取一个函数$$F$$（比如要求它的微分在局部上非退化），使得它局部上给出一个非退化Hamilton向量场$$X_{F}$$，然后再选取函数$$G$$使得在某个开集$$U$$上有

$$
\mathrm{d}G(X_{F})\vert_{U} \equiv 1
$$

这时可以依次验证下面几件事

* $$[X_{F},X_{G}] = X_{\{F,G\}} = X_{\mathrm{d}G(X_{F})} = 0$$.
* $$X_{F},X_{G}$$定义的流$$\phi_{F},\phi_{G}$$（在局部上）交换，即$$\phi^{t}_{F}\circ \phi^{s}_{G} = \phi^{s}_{G}\circ \phi^{t}_{F}, \forall s,t$$.
* 函数$$F,G$$和流$$\phi_{F},\phi_{G}$$（在局部上）给出了同胚

 $$
 \begin{array}{rcl}
 U & \xrightarrow{\simeq} & (-\varepsilon,\varepsilon)^{2} \times N \\
 x & \longmapsto & (G(x),F(x),\phi^{-G(x)}_{F}\circ\phi^{-F(x)}_{G}(x))\\
 \end{array}
 $$

  这里$$N=F^{-1}(0)\times G^{-1}(0)$$和上一节定义相同。
* 上面的同胚将辛形式$$\omega$$映为$$\mathrm{d}G\wedge\mathrm{d}F + \Omega$$，其中$$\Omega$$是$$N$$上的辛形式。

所以利用归纳法就可以证明达布定理。
