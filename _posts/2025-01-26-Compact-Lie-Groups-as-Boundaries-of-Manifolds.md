---
layout: post
title: Compact Lie Groups as Boundaries of Manifolds(In Chinese)
date: 2025-01-26 00:58:16
description: A constructive proof that every Lie group is the boundary of certain smooth manifold.
tags:
categories: Notes
toc:
  beginning: true
---
我们在这篇笔记里给出一个简单的构造：对任意一个紧李群$$G$$，我们给出一个具体的带边紧流形$$M$$，使得它的边界$$\partial M$$微分同胚于$$G$$.

## 流形的构造

我们不加证明地使用下面的结果：
> **结论**：对任意一个紧流形$$G$$，存在$$G$$真李子群$$H$$，使得
>
> $$ H \cong S^1 $$
>
> 这里$$S^1\subset \mathbb{C}$$上的运算由$$\mathbb{C}$$上乘法诱导。

我们这里不区分$$H$$和$$S^1$$，这样$$S^1$$在$$G$$上的右乘给出了$$G$$上的紧、自由$$S^1$$-右作用，这使得$$G$$成为了$$G/S^1$$上一个$$S^1$$-主丛：

$$
\begin{matrix}
    S^1 & \hookrightarrow & G \\
    && \downarrow \\
    && G/S^1 \\
\end{matrix}
$$

取$$S^1$$在$$\mathbb{C}$$上的表示$$\rho(e^{i\theta})z = e^{i\theta}z$$. 这一表示定义了配从

$$
E = G\times_{\rho} \mathbb{C} = \{[(g, z)]\mid g\in G, z\in \mathbb{C}\}
$$

注意到$$\mathbb{C}$$上的标准内积是$$S^1$$-不变的，所以它诱导了向量丛$$E$$上的内积$$g(u,v)$$，于是可以得到$$E$$的单位球丛

$$
B(E)= \{v\in E \mid g(v,v)\leqslant 1\} =\{[(g,z)]\in E \mid |z| \leqslant 1\}
$$

其中最后一个等号用到了$$g$$的定义。我们说明$$B(E)$$的边界正好是$$G$$.

事实上，我们有

$$
\begin{aligned}
    \partial \bigl(B(E)\bigr) & = \{v\in E \mid g(v,v)=1\} \\
    & = \{[(g,z)]\mid z\in S^1\} \\
    & = G \times_{\rho}S^1
\end{aligned}
$$

而容易看出$$G \times_{\rho} S^1$$和$$G$$微分同胚的（例如可由$$S^1$$-等变映射

$$
\begin{matrix}
m \colon & G \times S^1 & \longrightarrow & G \\
& (g,z) & \longmapsto & g\cdot z \\
\end{matrix}
$$

诱导光滑映射

$$
\begin{matrix}
\tilde{m} \colon &  \partial \bigl(B(E)\bigr) &\longrightarrow & G \\
& [(g,z)] & \longmapsto & g\cdot z \\
\end{matrix}
$$

然后靠证明$$\tilde{m}$$的单的和切映射处处是线性同构来说明）。这样我们就完成了构造。

## 一个例子：作为流形边界的三维实射影空间

对四元数$$\mathbb{H}$$上的球面

$$
S^3 = \{x + yi+zj+wk \mid x^2+y^2+z^2+w^2=1\}
$$

容易看出它在四元数乘法下封闭，并且可以证明，它可以保持内积地作用在

$$$\mathbb{R}^3=\{ui+vj+wk\mid u,v,w\in\mathbb{R}\}$$

上：

$$
\alpha \cdot r := \alpha r \alpha^{-1},\quad \forall \alpha \in S^3, r\in \mathbb{R}^3
$$

因此我们会得到李群同态：

$$
S^3 \longrightarrow SO(3)
$$

这一同态的核恰好为$$\pm 1$$，所以我们会有微分同胚：

$$
\mathbb{R}P^3 \cong S^3/\{\pm 1\} \cong SO(3)
$$

这样三维实射影空间$$\mathbb{R}P^3$$会是某个流形的边界。我们在这里给出一个更加具体的构造。

我们取$$S^2$$的切空间

$$
TS^3 = \{(x,v)\mid x,v\in\mathbb{R}^3, x\cdot x = 1, x\cdot v = 0\}
$$

它的单位球丛是：

$$
N = \{(x,v) \in \mathbb{R}^3\times \mathbb{R}^3 \mid x\cdot v = 0, x\cdot x = 1, v\cdot v \leqslant 1\}
$$

这时有：

$$
\mathbb{R}P^3 \cong \partial N
$$

事实上，这个同胚可由下面的的映射给出：

$$
\partial N \ni (x,v) \longmapsto (x,v,x\times v) \in SO(3) \cong \mathbb{R}P^3
$$

其中我们将$$\mathbb{R}^3$$中元素视为列向量，$$x\times v$$表示两个向量的叉乘。