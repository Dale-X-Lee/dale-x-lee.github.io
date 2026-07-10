---
layout: post
title: Spin Representation and Fermions(In Chinese)
date: 2026-06-25 22:59:01
description: We describe a case where the irreducible representation of Clifford algebras "naturally" appear: the creation and annihilation operators acting on the space of quantum states of many-fermion system.
tags:
categories: Notes
toc:
  sidebar: left
---

这篇笔记的目的是回答下面的问题：所谓的自旋表示(spin representation)是怎么构造出来的。一些提到自旋群 $$\mathrm{Spin}(n)$$ 的数学教材，如 Lawson 的 *Spin Greometry*、Sepanski 的 *Compact Lie Groups*，因为篇幅的限制无法展示构造的动机，这给我带来了部分的困扰。但在具备了一定的物理知识之后，我们可以说明，它的一种构造方式是考虑多费米子系统。

我们后面对自旋表示的定义是，将复 Clifford 代数 $$\mathbb{C}l(n)$$ 的不可约表示限制到 $$\operatorname{Spin}(n+1)$$ 上得到的表示。因此后面我们主要考虑 Clifford 代数的表示。

## 多粒子系统的波函数

为了减少阅读所需的前置物理知识，我们在这一节和下一节里先介绍多费米子系统的描述。

在（大部分人理解的）量子力学里，人们会用一个复值函数 $$\psi(x)$$ 来描述单个粒子，如 $$\vert \psi(x)\vert ^{2}/\int \vert \psi(x)\vert ^{2}\,\mathrm{d}x$$ 被解释为粒子出现在 $$x$$ 处的概率密度，又比如两个粒子的内积

$$
\langle\psi \vert \phi \rangle = \int_{\mathbb{R}}\overline{\psi(x)} \phi(x)\,\mathrm{d}x
$$

会被解释为一个处于 $$\psi$$ 状态的粒子“转变为” $$\phi$$ 状态的概率。于是粒子的所有可能状态构成了 $$L^{2}(\mathbb{R}^{d})$$，即平凡可积的函数空间。这是一个无穷维空间，也就是在这种描述下，粒子有无穷多个不能相互“转变”的状态。

> **注记**：严格来说，如果两个波函数相差常数倍，即 $$\phi(x) = \lambda \psi(x)$$，那它们被认为是同一种状态。不过这里为了理解的简便，我们将它们视为不同的状态。

对于两个粒子的系统，我们很自然会考虑用一个二元函数 $$\Psi(x_{1},x_{2})$$ 来描述它，比如两个粒子分别处于 $$x_{1},x_{2}$$ 处的概率密度是：

$$
\vert \Psi(x_{1},x_{2})\vert ^{2}\Big/\iint \vert \Psi(x_{1},x_{2})\vert ^{2}\,\mathrm{d}x_{1}\mathrm{d}x_{2}
$$

所以系统的所有可能状态构成的空间似乎能选为 $$L^{2}(\mathbb{R}^{d}\times \mathbb{R}^{d})$$. 借助映射

$$
\begin{aligned}
 L^{2}(\mathbb{R}^{d}) \otimes L^{2}(\mathbb{R}^{d}) & \longrightarrow L^{2}(\mathbb{R}^{d}\times \mathbb{R}^{d}) \\
 \psi(x_{1})\otimes \phi(x_{2}) & \longmapsto \psi(x_{1})\phi(x_{2})
\end{aligned}
$$

我们也可以将这个空间表示为 $$L^{2}(\mathbb{R}^{d})\otimes L^{2}(\mathbb{R}^{d})$$ 关于内积的完备化，这里记为 $$L^{2}(\mathbb{R}^{d})\bar{\otimes} L^{2}(\mathbb{R}^{d})$$.

但很多时候，我们并不需要考虑整个空间，因为物理会对波函数提出限制。一个最基本且常见的限制是，单看出现概率的话，两个粒子是不可分辨的。换言之，交换 $$\Psi(x_{1},x_{2})$$ 的两个坐标 $$x_{1},x_{2}$$，只会让 $$\Psi$$ 的值变化一个相位，即

$$
\Psi(x_{2},x_{1}) = e^{i\theta} \Psi(x_{1},x_{2}), \quad \forall x_{1},x_{2}.
$$

这里 $$\theta$$ 是一个不依赖 $$x_{1},x_{2}$$ 的常数。注意上面的表达式对任意的 $$x_{1},x_{2}$$ 都成立，所以我们可以在等式两边同时交换 $$x_{1},x_{2}$$，得到：

$$
\Psi(x_{1},x_{2}) = e^{i\theta} \Psi(x_{2},x_{1}) = e^{2i\theta} \Psi(x_{1},x_{2}). \\
$$

这说明 $$e^{2i\theta} = 1$$，也就是 $$e^{i\theta} = \pm 1$$. 因此对于全同粒子，在交换它们的次序时，会有两种可能：波函数不变或波函数多出一个负号。我们将满足前一种情况的粒子称为玻色子(Boson)，将满足后一种情况的称为费米子(Fermion)。

后面我们只考虑费米子。描述费米子的波函数必须是关于坐标反对称的，比如

$$
\psi(x_{1})\phi(x_{2}) - \psi(x_{2})\phi(x_{1})
$$

事实上，在用映射

$$
\psi \wedge \phi \longmapsto \psi(x_{1})\phi(x_{2})-\psi(x_{2})\phi(x_{1})
$$

将 $$L^{2}(\mathbb{R}^{d})\wedge L^{2}(\mathbb{R}^{d})$$ 嵌入到 $$L^{2}(\mathbb{R}^{d} \times \mathbb{R}^{d})$$ 之后可以证明，两个费米子系统的状态可以用 $$L^{2}(\mathbb{R}^{d})\wedge L^{2}(\mathbb{R}^{d})$$ 的完备化来描述，我们将它记为 $$L^{2}(\mathbb{R}^{d})\bar{\wedge} L^{2}(\mathbb{R}^{d})$$，或 $$\bar{\wedge}^{2} L^{2}(\mathbb{R}^{d})$$.

一般地，对于具有 $$n$$ 个全同费米子的系统，我们可以用空间 $$\bar{\wedge}^{n} L^{2}(\mathbb{R}^{d})$$ 来描述它的状态，而如果想要描述粒子数不确定的全同费米子系统，我们需要的空间是

$$
\bar{\bigoplus_{n\geqslant 0}}\, \bar{\wedge}^{n} L^{2}(\mathbb{R}^{d}).
$$

这里 $$\bar{\bigoplus}$$ 表示直和后做完备化。这个空间也被称为 Fock 空间。

后面我们考虑的费米子只有有限多个不可相互“转化”的状态，这时候描述粒子状态的空间会从无穷维空间 $$L^{2}(\mathbb{R}^{d})$$ 变为有限维的复内积空间 $$(V,\langle\cdot,\cdot\rangle)$$. 相应的，粒子数不确定的费米子系统的状态构成的空间是

$$
\bigoplus_{n\geqslant 0} \wedge^{n} V = \wedge^{*} V.
$$

这是一个有限维的内积空间。

## 产生算符和湮灭算符

虽然从数学的角度来看，Fock 空间的描述很具体，但从物理的角度来看，使用外积并不是一个方便的描述方式。更物理的描述办法是使用所谓的占据数表象(occupation number presentation)，这会自然地给出产生算符(creation operator)和湮灭算符(annihilation operator)。

我们假设描述粒子状态的空间 $$V$$ 的维数是 $$N$$，也就是我们可以找到 $$N$$ 个不同的状态：

$$
v_{1},v_{2},\dots,v_{N}
$$

它们中任意两个都不能相互“转化”，且任何一种状态 $$v\in V$$ 都可以写成它们的线性组合（换言之，它们构成 $$V$$ 的一组正交基）。此外我们假设每个 $$v_{i}$$ 的长度都是 $$1$$. 使用它们可以给出 Fock 空间 $$\wedge^{*}V$$ 的一组正交基：

$$
\omega_{n_{1}n_{2}n_{3}\cdots n_{N}} = \bigwedge_{k=1}^{N} v_{k}^{n_{k}}, \quad n_{k}\in \{0,1\}
$$

这里我们约定 $$v^{1}=v,v^{0} = 1$$. 如果用物理的说法，$$\omega_{n_{1}\cdots n_{N}}$$ 表示的是由 $$n=\sum_{k}n_{k}$$个粒子构成的系统的状态，其中有 $$n_{k}$$ 个粒子处于第 $$k$$ 个状态 $$v_{k}$$. 因为每个 $$n_{k}$$ 描述了有多少个粒子处于（或者说，占据）了第 $$k$$ 个状态，所以这组基被称为占据数表象。

> **注记**：注意因为外积的反对称性质，每个 $$n_{k}$$ 不能超过 1，也就是在态 $$\omega_{n_{1}\cdots n_{N}}$$ 中，不存在两个粒子处于相同的状态。一般地，对所谓的纯态(pure state)，即形如 $$\bigwedge_{l} u_{l}\in \wedge^{*} V$$ 的非零元，里面粒子的状态 $$u_{l}$$ 一定两两不同。这一性质可以被视为泡利不相容原理的数学陈述。

有了占据数之后，我们可以去操作这些占据数。一类操作方法是添加一个状态为 $$v_{k}$$ 的粒子，让 $$\omega_{n_{1}\cdots n_{N}}$$ 的指标 $$n_{k}$$ 加一，这会定义产生算符 $$c_{k}^{\dagger}$$：

$$
c_{k}^{\dagger}: \omega_{n_{1}\cdots n_{N}} \longmapsto v_{k}\wedge\omega_{n_{1}\dots n_{N}}
$$

另一种方法是移除一个状态为 $$v_{k}$$ 的粒子，让指标 $$n_{k}$$ 减一，这会定义湮灭算符 $$c_{k}$$：

$$
c_{k}: \omega_{n_{1}\cdots n_{N}} \longmapsto (-1)^{\sum_{l<k} n_{l}}\omega_{n_{1}\cdots n_{k-1}(n_{k}-1)n_{k+1}\cdots n_{N}}
$$

这里我们约定 $$v^{-1} = 0$$. 因为 $$\omega_{n_{1}\cdots n_{N}}$$ 是 Fock 空间的一组基，所以 $$c_{k}^{\dagger},c_{k}$$ 能唯一地延拓为 Fock 空间上真正的算符。

我们先给出产生、湮灭算符的一些主要性质，这会在我们后面的推导中用到：

> **性质**：对任意的 $$1\leqslant j,k\leqslant N$$，有：
>
> - $$c_{k}$$ 的伴随算子为 $$c_{k}^{\dagger}$$.
> - $$\{c_{j},c_{k}\} = \{c_{j}^{\dagger},c_{k}^{\dagger}\} = 0$$.
> - $$\{c_{j}^{\dagger},c_{k}\} = \delta_{jk}$$.
>
> 这里 $$\{a,b\} = ab+ba$$ 是两个算符的反交换子。

物理里引入产生、湮灭算符的一个好处是，使用它们可以很方便地表示各种物理量。一个例子是，考虑算符 $$c_{k}^{\dagger}c_{k}$$，它满足：

$$
c_{k}^{\dagger}c_{k}(\omega_{n_{1}\cdots n_{N}}) = n_{k}\cdot \omega_{n_{1}\cdots n_{N}}
$$

因此可以算出系统的总粒子数是

$$
\langle\omega_{n_{1}\cdots n_{N}},\sum_{k}c_{k}^{\dagger}c_{k}(\omega_{n_{1}\cdots n_{N}})\rangle.
$$

一般地，对 $$\wedge^{*}V$$ 中的任意叠加态 $$\omega$$，我们可以在不将它写成 $$\omega_{n_{1}\cdots n_{N}}$$ 的线性组合的情况下写出它的平均粒子数，即 $$\langle\omega,\sum_{k}c_{k}^{\dagger}c_{k}(\omega) \rangle$$.

产生、湮灭算符的另一个好处是，它们的乘积唯一对应于 Fock 空间中的一个状态 $$\omega_{n_{1}\cdots n_{N}}$$，因为我们有唯一的办法得到具有上述状态的系统：从真空出发，依次生成 $$n_{N}$$ 个处于状态 $$v_{N}$$ 的粒子、$$n_{N-1}$$ 个处于 $$v_{N-1}$$ 的粒子……我们给出数学上更准确的说法。在 Fock 空间里，我们将 $$1 \in \wedge^{0} V = \mathbb{C}$$ 称为真空态，因为它可以被视为没有任何粒子的状态。这样上面的说法可以被重述为

> **性质**：线性映射：
>
> $$
> \begin{aligned}
> \mathbb{C}[c_{1}^{\dagger},\dots,c_{N}^{\dagger}] & \longrightarrow \wedge^{*} V \\
> c_{k_{1}}^{\dagger}c_{k_{2}}^{\dagger}\cdots c_{k_{m}}^{\dagger} & \longmapsto c_{k_{1}}^{\dagger}c_{k_{2}}^{\dagger}\cdots c_{k_{m}}^{\dagger}(1)
> \end{aligned}
> $$
>
> 给出了线性同构。

在这个意义上，我们可以将 Fock 空间等同于全体产生算符生成的代数 $$\mathbb{C}[c_{1}^{\dagger},\dots,c_{N}^{\dagger}]$$.

## Majorana费米子和Clifford代数

产生、湮灭算符的反交换关系

$$
\{c_{j}^{\dagger},c_{k}\} = \delta_{jk}
$$

或许会让人想到 Clifford 代数的交换关系，事实上，在经过一些代数变形后，我们可以说明，产生、湮灭算符生成的代数同构于 Clifford 代数。我们的办法是考虑产生算符的实部和虚部：我们假设

$$
c_{k}^{\dagger} = \frac{1}{2}\left(\gamma_{k}+i\gamma_{N+k}\right)
$$

其中 $$\gamma_{k},\gamma_{N+k}$$ 是两个自伴算符，换言之，我们有

$$
\gamma_{k} = c_{k}^{\dagger} + c_{k}, \quad \gamma_{N+k} = -i\left(c_{k}^{\dagger}-c_{k}\right)
$$

通常 $$\gamma_{\alpha}(1) \in \wedge^{*}V$$ 被称为 Majorana (马约拉纳)费米子。利用 $$c,c^{\dagger}$$ 的反交换关系，我们可以得到 $$i\gamma_{\alpha}$$ 之间的反交换关系：

$$
\{i\gamma_{\alpha},i\gamma_{\beta}\} = -2\delta_{\alpha\beta}, \quad \forall 1\leqslant \alpha,\beta \leqslant 2N.
$$

这一反交换关系和 Clifford 代数 $$\mathbb{C}[e_{1},\dots,e_{2N}]$$ 满足的交换关系完全一致：

$$
e_{k}e_{l}+e_{k}e_{l} = -2\delta_{kl}
$$

上面的所有讨论总结起来是下面的结论：

> **结论**：（复）Clifford 代数 $$\mathbb{C}l(2N)$$ 同构于产生、湮灭算符生成的 $$\mathbb{C}[c_{1}^{\dagger},\dots,c_{N}^{\dagger},c_{1},\dots,c_{N}]$$，因此后者在 Fock 空间上的作用诱导了作用：
>
> $$
> \mathbb{C}l(2N)\cong \mathbb{C}l(\operatorname{Span}\{\gamma_{k}\}) \curvearrowright \wedge^{*}V \cong \mathbb{C}[c_{1}^{\dagger},\dots,c_{N}^{\dagger}].
> $$

事实上，我们还有：

> **命题**：上面的作用诱导了代数之间的同构：
>
> $$
> \mathbb{C}l(\operatorname{Span}\{\gamma_{k}\}) \cong \operatorname{End}(\wedge^{*}V).
> $$
>
> 因此这一作用一定是不可约表示，进而定义了自旋表示。
>
> **证明**：这里我们不加证明地使用 $$\dim_{\mathbb{C}} \mathbb{C}l(2N) = 2^{2N}$$. 这一结果可以由 $$\mathbb{C}l(2N) \cong \text{``}\mathbb{C}l(2N-2) \otimes \mathbb{C}l(2)\text{"}$$归纳地证明。
>
> 因为两个代数维数相同，故只需说明诱导的映射是满射。考虑 $$\mathbb{C}l(2N)$$ 中元素 $$c^{\dagger}_{k_{1}}c_{k_{2}}^{\dagger}\cdots c_{k_{n}}^{\dagger}c_{j_{m}}c_{j_{m-1}\cdots c_{j_{1}}}$$，其中 $$k_{1},\dots,k_{n}$$ 和 $$j_{1},\dots,j_{m}$$ 关于下标递增。它作用在 $$v_{i_{1}}\wedge v_{i_{2}}\wedge\cdots\wedge v_{i_{l}}$$($$i_{1}<\cdots < i_{l}, l\leqslant m$$) 上的结果是：
>
> $$
> \begin{cases}
> 0, & \text{if } l < m; \\
> 0, & \text{if } l = m \text{ and } (i_{1},\dots,i_{l})\neq (j_{1},\dots, j_{m});\\
> v_{k_{1}}\wedge\cdots\wedge v_{k_{n}},& \text{if } l=m \text{ and } (i_{1},\dots,i_{l}) = (j_{1},\dots, j_{m}).\\
> \end{cases}
> $$
>
> 利用这个我们可以对 $$p$$ 归纳地证明：对任意的线性映射 $$\phi\in \operatorname{End}(\wedge^{*} V)$$，存在元素 $$\gamma^{(p)}\in \mathbb{C}l(2N)$$ 使得
>
> $$
> (\omega \mapsto \gamma^{(p)}\cdot \omega)\vert _{\wedge^{\leqslant p} V} = \phi\vert _{\wedge^{\leqslant p} V}
> $$
>
> 其中 $$\wedge^{\leqslant p} V$$ 有所有不超过 $$p$$ 个粒子(即不超过 $$p$$ 次外积)的状态构成。最后取 $$p=\dim N$$ 就能证明上述同构是满射。

我们还可以具体地表示出这一作用：我们将 $$V$$ 等同于 $$\mathbb{C}[c_{1}^{\dagger},\dots,c_{N}^{\dagger}]$$，那么对 $$\gamma = \sum_{k=1}^{2N} a_{k}\gamma_{k}$$ ($$a_{k}\in\mathbb{C}$$)，可设 $$\gamma = \sum_{j=1}^{N}(\alpha_{k}c_{k}^{\dagger} + \beta_{k}c_{k})$$，则它作用在 $$\omega = c_{j_{1}}^{\dagger}c_{j_{2}}^{\dagger}\cdots c_{k_{n}}^{\dagger}$$ 上是

$$
\begin{aligned}
\gamma \cdot \omega
= \left(\sum_{k}\alpha_{k} c_{k}^{\dagger}\right) \cdot \omega + \{\sum_{k}\beta_{k} c_{k}, \omega\},
\end{aligned}
$$

这里右侧的 $$\cdot$$ 是代数 $$\mathbb{C}[c_{1}^{\dagger},\dots,c_{N}^{\dagger}]$$ 中的乘法，$$\{\cdot,\cdot\}$$ 是反交换子。

更进一步，带双线形型的空间之间的同构

$$
\begin{aligned}
(\mathbb{C}^{2N}, (a,b) = \sum_{j}a_{j}b_{j}) & \cong (\operatorname{Span}\{\gamma_{k}\}, \{\gamma,\delta\} = \gamma\delta+\delta\gamma) \\
(a_{k}) & \mapsto \sum_{k}a_{k}\gamma_{k}
\end{aligned}
$$

诱导了 Clifford 代数的同构和线性空间的同构：

$$
\mathbb{C}l(2N) \cong \mathbb{C}l(\operatorname{Span}\{\gamma_{k}\}), \qquad V \cong W \subseteq \mathbb{C}^{2N}.
$$

借助这两个同构我们可以得到 $$\mathbb{C}l(2N)$$ 的表示的具体描述。这一描述实际上和大部分数学材料(如*Compact Lie Groups*)中的定义是一致的。在此我们省略计算过程。

## 奇数维情形

上面的讨论只给出了偶数维的情况(即 $$\operatorname{Spin}(2N)$$)，我们稍作修改即可得到奇数维的自旋表示。对费米子系统，我们可以定义所谓的奇偶性算符(parity operator)，它的定义方式是：

$$
\pi(\omega_{n_{1}n_{2}\dots n_{N}}) = (-1)^{\sum n_{k}} \omega_{n_{1}n_{2}\dots n_{N}}.
$$

也就是说，它保持恰有偶数个粒子的状态不变，并改变恰有奇数个粒子的状态的符号。我们可以证明：

> **命题**：线性空间的同构
>
> $$
> \begin{aligned}
> \mathbb{C}^{2N+1} & \cong \operatorname{Span}\{\gamma_{k}\} \\
> (a_{k},\lambda) & \mapsto \pm\lambda \pi + \sum_{k}a_{k}\gamma_{k}
> \end{aligned}
> $$
>
> 诱导了两个同构：
>
> $$
> \mathbb{C}l(2N+1)\cong \mathbb{C}[\pi, c_{1}^{\dagger},\dots,c_{N}^{\dagger},c_{1},\dots,c_{N}]
> $$
>
> 进而在 Fock 空间上的作用给出了 $$\mathbb{C}l(2N+1)$$ 的两个不等价的表示。此外这两个表示诱导了代数之间的同构
>
> $$
> \mathbb{C}l(2N+1) \cong \operatorname{End}(\wedge^{*}V) \oplus \operatorname{End}(\wedge^{*}V)
> $$
>
> 因此这两个表示都是不可约表示，进而用它们可以定义自旋表示。

## 对基底的讨论

上面的所有讨论都是在默认了状态空间 $$V$$ 有一组基的情况下进行的，但在线性空间的视角来看，选取基底并不是一件自然的事情。我们这一节里使用和基底无关的语言重新叙述上面的构造。

一般地，给定了 $$V$$ 中任何一个状态 $$v$$ 之后，产生和湮灭一个状态为 $$v$$ 的粒子也会定义产生和湮灭算符：

$$
\begin{aligned}
c(v)^{\dagger}(\omega) & = v\wedge \omega \\
c(v)(\omega) & = \iota_{\langle v,\cdot\rangle}\omega\\
& = \omega(\langle v,\cdot\rangle, \cdot,\cdot,\dots,\cdot) \\
\end{aligned}
$$

这里在最后一个等号右侧，我们将 $$\omega \in \wedge^{*}V$$ 视为 $$V^{*}$$ 上的反对称多重线性形式。很容易验证，当 $$v$$ 取为基向量 $$v_{k}$$ 时，它定义的产生、湮灭算符分别是 $$c_{k}^{\dagger},c_{k}$$.

这时候上面原本依赖基底选取的代数

$$
\mathbb{C}[c_{1}^{\dagger},\dots,c_{N}^{\dagger}],\quad\mathbb{C}[c_{1}^{\dagger},\dots,c_{N}^{\dagger}, c_{1},\dots,c_{N}]
$$

可以分别重写为：

$$
\mathbb{C}[c(v)^{\dagger} \mid v \in V], \quad \mathbb{C}[c(v)^{\dagger},c(v)\mid v\in V].
$$

得到自旋表示的关键是证明后一个空间和某个 Clifford 代数同构。我们的办法还是借助 Majorana 费米子，即考虑形如 $$c(v)\pm c(v)^{\dagger}$$ 的算符。我们有：

> **命题**：设 $$V$$ 上的内积为 $$\langle\cdot,\cdot\rangle$$. 将 $$V$$ 视作实线性空间，其上的实内积为 $$g(\cdot,\cdot) = \operatorname{Re}\langle \cdot,\cdot\rangle$$. 那么映射
>
> $$
> \begin{aligned}
> V & \longrightarrow \mathbb{C}[c(v)^{\dagger},c(v)\mid v\in V] \\
> v & \longmapsto c(v)^{\dagger} + c(v)
> \end{aligned}
> $$
>
> 诱导了同构
>
> $$
> \mathbb{C}l(V, g) \cong \mathbb{C}[c(v)^{\dagger},c(v)\mid v\in V].
> $$
>
> 进而后者在 $$\wedge^{*}V \cong \mathbb{C}[c(v)^{\dagger} \mid v\in V]$$ 上的作用给出了 $$\mathbb{C}l(V,g)$$ 的不可约表示。

对于奇数维的情况，我们有

> **命题**：同上，记 $$g(\cdot,\cdot) = \operatorname{Re}\langle \cdot,\cdot\rangle$$. 那么映射
>
> $$
> \begin{aligned}
> V \oplus \mathbb{C} & \longrightarrow \mathbb{C}[\{c(v)^{\dagger},c(v)\mid v\in V\}\cup \{\pi\}] \\
> v\oplus \lambda & \longmapsto c(v)^{\dagger} + c(v) \pm \lambda \pi
> \end{aligned}
> $$
>
> 诱导了两个同构
>
> $$
> \mathbb{C}l(V\oplus \mathbb{C}) \cong \mathbb{C}[\{c(v)^{\dagger},c(v)\mid v\in V\}\cup \{\pi\}].
> $$
>
> 其中 $$\pi$$ 是奇偶性算符。进而后者在 $$\wedge^{*}V \cong \mathbb{C}[c(v)^{\dagger} \mid v\in V]$$ 上的作用给出了 $$\mathbb{C}l(V\oplus \mathbb{C})$$ 的两个不可约表示。

最后我们想要指出上面构造中的一个微妙之处：我们上面讨论的空间 $$V$$ 除了具有一个实内积 $$g(\cdot,\cdot) = \operatorname{Re}\langle \cdot,\cdot\rangle$$ 之外，还拥有一个和 $$g$$ 相容的复结构。因此虽然从多体费米子系统能自然地得到态矢量空间定义的 Clifford 代数的自旋表示，但任给一个带内积 $$g$$ 的实线性空间 $$V$$，我们需要人为地选取一个相容的复结构，才能把问题化归为多体费米子的情况。在这个意义上，上面构造自旋表示的方式是有些刻意的，它更应当被理解为一种巧合：在两个不相关的物理问题中恰好出现了相同的数学结构。
