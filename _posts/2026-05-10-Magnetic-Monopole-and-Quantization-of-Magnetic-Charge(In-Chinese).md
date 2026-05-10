---
layout: post
title: Magnetic Monopole and Quantization of Magnetic Charge(In Chinese)
date: 2026-05-10 09:44:38
description: We summary two ways to deduce quantization of magnetic charge, One adapted from Dirac's original idea, and another with gauge theory point of view.
tags:
  
categories: Notes
toc:
  sidebar: left
---

这篇笔记的目的是在特定假定下证明，如果存在磁单极子，那么它的磁荷会是量子化的，也就是它会是某个常数的整数倍。我们会在两种不同的假定下证明这件事。

后面我们统一使用高斯单位制。我们还是从经典理论开始。

## 磁矢势和Dirac弦

我们假定三维空间 $$\mathbb{R}^{3}$$ 中只有一个磁单极子，它的磁荷为 $$q_{m}$$ 且位于原点处。那么类似电荷，它会导致一个磁场，在位置 $$\boldsymbol{r}$$ 处的磁感应强度为 $$\boldsymbol{B} = \frac{q_{m}}{\vert \boldsymbol{r}\vert ^{3}}\boldsymbol{r}$$. 这时候磁荷的大小也可以用单位球面 $$S^{2}$$ 上的积分来表示：

$$
q_{m} = \frac{1}{4\pi} \int_{S^{2}} \boldsymbol{B}\cdot \boldsymbol{n}\,\mathrm{d}S
$$

我们之后将会证明右侧的积分是量子化的。为了方便下一节的讨论，我们对右侧的等式再作进一步变形。

在电磁学中，我们通常用磁矢势 $$\boldsymbol{A}$$ 来研究磁场，也就是一个旋度为 $$\boldsymbol{B}$$ 的向量场：

$$
\nabla\times\boldsymbol{A} = \boldsymbol{B}
$$

这里我们也想用采用同样的办法，考虑一个满足上面等式的向量场 $$\boldsymbol{A}$$. 不幸的是，我们仅能在 $$\boldsymbol{B}$$ 没有源的时候找到满足要求的 $$\boldsymbol{A}$$，而磁单极子导致磁场出现了源。所以替代的办法是，我们在一个更小的区域上定义磁矢势 $$\boldsymbol{A}$$.

我们考虑的区域是 $$\mathbb{R}^{3}$$ 去掉一条从原点出发的射线，也就是

$$
D = \mathbb{R}^{3}\setminus \{t \boldsymbol{v} \mid t \geqslant 0\}, \quad \boldsymbol{v}\in \mathbb{R}^{3},\boldsymbol{v}\neq 0.
$$

可以证明的是，在去掉这样的射线之后，我们能够在 $$D$$ 上定义磁矢势 $$\boldsymbol{A}$$. 一般地，去掉其他一些曲线之后，我们也可以定义磁矢势 $$\boldsymbol{A}$$，我们把这样的曲线称为一条Dirac弦(Dirac string)。在我们的情景中，Dirac弦一定是一条从原点出发且趋向于无穷远的曲线。

为了计算简便，我们后面仅考虑两条特殊的Dirac弦：经过单位球的南、北极点的射线。我们记

$$
\begin{aligned}
 D_{S} & = \mathbb{R}^{2}\setminus \{\text{经过北极点}(0,0,1)\text{的射线}\} \\
 D_{N} & = \mathbb{R}^{2}\setminus \{\text{经过南极点}(0,0,-1)\text{的射线}\} \\
\end{aligned}
$$

粗略来说，$$D_{S},D_{N}$$ 和单位球的交集分别是南、北半球，且 $$D_{N},D_{S}$$的并集正好是整个空间去掉原点。

我们假设 $$D_{N}, D_{S}$$ 上的磁矢势分别为 $$\boldsymbol{A}^{N},\boldsymbol{A}^{S}$$. 这时候我们沿着赤道 $$S^{1} = S^{2}\cap \{z=0\}$$ 将单位球 $$S^{2}$$ 分成南、北半球，那在每个半球上把磁感应强度的积分写成磁矢势的积分：

$$
\begin{aligned}
 \int_{S^{2}} \boldsymbol{B}\cdot \boldsymbol{n}\,\mathrm{d}S
 =\;\; & \int_{S^{2}\cap \{z\geqslant 0\}} \left(\nabla \times \boldsymbol{A}^{N}\right) \cdot \boldsymbol{n}\,\mathrm{d}S \\
 & + \int_{S^{2}\cap \{z\leqslant 0\}} \left(\nabla \times \boldsymbol{A}^{S}\right) \cdot \boldsymbol{n}\,\mathrm{d}S \\
 \overset{\text{Stokes}}{=} & \oint_{S^{1}} \boldsymbol{A}^{N}\cdot\mathrm{d}\boldsymbol{l}-\oint_{S^{1}} \boldsymbol{A}^{S}\cdot\mathrm{d}\boldsymbol{l} \\
 =\;\; & \oint_{S^{1}} \left(\boldsymbol{A}^{N}-\boldsymbol{A}^{S}\right)\cdot \mathrm{d}\boldsymbol{l}. \\
\end{aligned}
$$

在 $$xy$$-平面上看，赤道 $$S^{1}$$ 的方向是沿逆时针旋转。这样我们可以得到计算磁荷的另一个办法：

$$
q_{m} = \frac{1}{4\pi} \oint_{S^{1}} \left(\boldsymbol{A}^{N}-\boldsymbol{A}^{S}\right)\cdot \mathrm{d}\boldsymbol{l}.
$$

到此为止，我们所有的讨论都没有办法说明磁荷是量子化的。为了得到量子化，我们无论如何都需要额外的假设。

## 和量子力学的相容性

在这一部分我们假定磁单极子的存在和量子力学的基本结果不矛盾，在此基础上推出磁荷的量子化。我们的办法是考虑一个无自旋带电粒子的运动，我们不妨假设它的电荷为$$-e$$. 量子力学告诉我们，粒子的波函数 $$\psi(\boldsymbol{r},t)$$ 应该满足的薛定谔方程是：

$$
\left(i\hbar\partial_{t}-e\phi\right)\psi = -\frac{\hbar^{2}}{2m}\sum_{k=1}^{3} \left(\partial_{k}-i\frac{e}{\hbar c}A_{k}\right)^{2}\psi
$$

这里 $$(A_{1},A_{2},A_{3}) = \boldsymbol{A}$$ 是磁矢势，$$\phi$$ 是电势，$$\partial_{k}$$ 表示对第 $$k$$ 个空间坐标求偏导。但上面的方程假定了处处都可以定义磁矢势 $$\boldsymbol{A}$$，对磁单极子的情况，我们在区域 $$D_{N},D_{S}$$ 上会写出两个不同的方程：

$$
\begin{aligned}
 \left(i\hbar\partial_{t}-e\phi^{N}\right) \psi^{N} & = -\frac{\hbar^{2}}{2m}\sum_{k=1}^{3} \left(\partial_{k}-i\frac{e}{\hbar c}A^{N}_{k}\right)^{2}\psi^{N} \\
 \left(i\hbar\partial_{t}-e\phi^{S}\right) \psi^{S} & = -\frac{\hbar^{2}}{2m}\sum_{k=1}^{3} \left(\partial_{k}-i\frac{e}{\hbar c}A^{S}_{k}\right)^{2}\psi^{S} \\
\end{aligned}
$$

注意到这两个方程描述的是同一个粒子，所以两个波函数 $$\psi^{N},\psi^{S}$$ 之间会有关联，具体来说，因为 $$\left\lvert\psi^{N}\right\rvert ^{2},\left\lvert\psi^{S}\right\rvert ^{2}$$ 分别描述了粒子在 $$D_{N},D_{S}$$ 上的概率分布，那它们在 $$D_{N},D_{S}$$ 的公共部分应当具有相同的分布，也就是

$$
\left\vert \psi^{N}(\boldsymbol{r},t)\right\vert = \left\vert \psi^{S}(\boldsymbol{r},t)\right\vert , \quad \forall \boldsymbol{r}\in D_{N}\cap D_{S}.
$$

这样我们可以假设这两个波函数只差一个相位[^注1]，即

$$
\psi^{S}(\boldsymbol{r},t) = u(\boldsymbol{r},t)\cdot\psi^{N}(\boldsymbol{r},t),\quad \vert u(\boldsymbol{r},t)\vert \equiv 1.
$$

这里我们很希望把 $$u$$ 写成 $$\exp(i\theta)$$ 的形式，但这会导致一些问题，比如 $$\theta$$ 会是一个不连续的函数或者是多值函数。为了叙述清晰，我们保留 $$u(\boldsymbol{r},t)$$ 这一记号。

这时候我们可以重写 $$\psi^{S}$$ 的演化方程，将它写为有关 $$\psi^{N}$$ 的方程。经过一些计算会得到：

$$
\begin{aligned}
 \left(i\hbar\partial_{t}-e\phi^{S} + i \hbar u^{-1}\partial_{t} u\right) & \psi^{N} \\
 = -\frac{\hbar^{2}}{2m}\sum_{k=1}^{3} & \left(\partial_{k}-i\frac{e}{\hbar c}A^{S}_{k}+u^{-1}\partial_{k} u\right)^{2}\psi^{N} \\
\end{aligned}
$$

所以 $$\psi^{N}$$ 会同时满足两个演化方程，换言之，对 $$\psi^{N}$$ 的任意初值（注意我们之前并没有指定 $$\psi^{N}$$ 的初值），两个演化方程给出了相同的 $$\psi^{N}$$. 那唯一的可能是这两个两个演化方程完全相同。因此比较两者后我们得到 $$\boldsymbol{A}^{N},\boldsymbol{A}^{S}$$ 的关系：

$$
\begin{aligned}
 & -i\frac{e}{\hbar c}A^{S}_{k}+u^{-1}\partial_{k} u=-i\frac{e}{\hbar c}A^{N}_{k}\\
 \Leftrightarrow\; & \boldsymbol{A}^{N}-\boldsymbol{A}^{S} = \frac{i\hbar c}{e}\cdot u^{-1}\nabla u\\
\end{aligned}
$$

所以我们将磁荷进一步写为:

$$
\begin{aligned}
 q_{m} & = \frac{i\hbar c}{e}\int_{S^{1}} u^{-1}\nabla u \cdot \mathrm{d}\boldsymbol{l} \\
 & = \frac{i\hbar c}{4\pi e}\int_{\gamma(t)=(\cos t,\sin t)} u^{-1}(\gamma(t)) \nabla_{\dot{\gamma}(t)} u\,\mathrm{d}t
\end{aligned}
$$

这时候我们具体设出 $$u$$ 的辐角：$$u(\gamma(t)) = \exp(i\theta(t))$$ ($$0\leqslant t\leqslant 2\pi$$)，则上式右侧可以被进一步化简，得到

$$
q_{m} = \frac{\hbar c}{4\pi e} \int_{0}^{2\pi} -\frac{\mathrm{d}\theta}{\mathrm{d}t}\,\mathrm{d}t = \frac{\hbar c}{4\pi e}\left(\theta(0)-\theta(2\pi)\right)
$$

最后注意到 $$\exp(\theta(0)) = u(1,0,0,t) = \exp(\theta(2\pi))$$，所以辐角 $$\theta$$ 在 $$0,2\pi$$ 处相差 $$2\pi$$ 的整数倍，所以我们最终得到了等式：

$$
q_{m} = \frac{\hbar c}{2 e} n, \qquad n \in \mathbb{Z}
$$

也就是磁荷一定是量子化的：

$$
2\frac{e\cdot q_{m}}{\hbar c} \in \mathbb{Z}.
$$

> **注记**：这一办法实际上受到了 Dirac 证明磁荷量子化的办法的启发。Dirac的证明是从波函数的相位 $$\exp(i\beta)$$ 的物理意义出发：相位 $$\beta$$ 的具体值并没有物理意义，但相位的相对变化 $$\nabla\beta$$ 是有物理后果的。所以可以仅考虑矢量 $$\boldsymbol{\kappa}=\nabla\beta$$. 更进一步，我们甚至可以不用要求 $$\kappa$$ 是梯度场（这时候 Dirac 称 $$\kappa$$ 是一个不可积相位(non-integrable phase).）。这时候如果考虑波函数不含相位的部分（即$$\exp(-i\beta)\psi$$）的演化，那它的演化方程和电磁场中带电粒子的演化十分类似。因此 Dirac 认为可以将4-电磁势视为一个不可积相位，而波函数的单值性会导致相位沿着闭曲线的变化是 $$2\pi$$ 的整数倍。这样靠Stokes公式和对闭曲线作形变，我们就能得到磁荷的量子化。具体可以参考论文[Quantised singularities in the electromagnetic field](https://doi.org/10.1098/rspa.1931.0130).

## 电磁场作为规范场

上面的办法是相当初等的看法，随着规范场论发展，我们对电磁场有了另一种看法（或者假设）。于此同时，纤维丛(特别是示性类)理论提供了相当不平凡的数学工具。在两者的共同加持下，磁荷的量子化就成了一个简单的推论。

为了减小阅读的难度，我们先简单回顾一下复线丛上的联络。

给定一个流形 $$M$$ 和上面的复线丛 $$L$$，上面的一个联络 $$\nabla$$ 是定义在 $$L$$ 的光滑截面上的线性映射

$$
\nabla\colon \Gamma(E) \longrightarrow \Gamma(T^{*}M\otimes E)
$$

且满足所谓的莱布尼兹律：对任意的截面 $$s\in \Gamma(E)$$ 和 $$f\in C^{\infty}(M)$$，有

$$
\nabla (f\cdot s) = \mathrm{d}f \otimes s + f\cdot \nabla s.
$$

后面我们始终假定 $$L$$ 上有一个Hermite内积$$\langle\cdot,\cdot\rangle$$，且我们的联络和内积相容，也就是

$$
\mathrm{d}\langle s_{1},s_{2}\rangle = \langle \nabla s_{1},s_{2} \rangle + \langle s_{1},\nabla s_{2}\rangle.
$$

在选取了一个 $$U$$ 上($$U\subseteq M$$)的非退化单位截面 $$s_{0}$$ 之后，任意一个 $$U$$ 上的光滑截面都可以被表示为 $$f \cdot s_{0}$$ 的形式，进而可以算出

$$
\nabla (f\cdot s_{0}) = \mathrm{d}f \otimes s - f\cdot \left(i\mathcal{A}^{\nabla}\otimes s_{0}\right)
$$

这里 $$\mathcal{A}^{\nabla} \in \Omega^{1}(U,\mathbb{C})$$ 是一个实值的1-形式（因为 $$\nabla$$ 和度量相容）。我们称 $$\mathcal{A}^{\nabla}$$ 是 $$\nabla$$ 定义的联络1-形式。不难看出，联络1-形式既依赖于联络 $$\nabla$$，也依赖于截面 $$s_{0}$$ 的选取。

从联络1-形式我们可以算出联络的曲率2-形式 $$\mathcal{F}^{\nabla}$$:

$$
\mathcal{F}^{\nabla} = -i\mathrm{d}\mathcal{A}^{\nabla}
$$

可以证明，$$\mathcal{F}^{\nabla}$$ 不依赖于截面 $$s_{0}$$ 的选取，也就是使用不同的截面会定义出相同的曲率2-形式。

然后我们可以陈述在规范场论中对电磁场做出的假设：

> 电磁场是一个规范场，也就是：
>
> 在将电磁场 $$\boldsymbol{E},\boldsymbol{B}$$ 等同于2-形式
>
> $$
> \begin{aligned}
> \mathcal{F}_{em} = & E_{1}\,\mathrm{d}r_{1}\,\mathrm{d}t + E_{2}\,\mathrm{d}r_{2}\,\mathrm{d}t + E_{3}\,\mathrm{d}r_{3}\,\mathrm{d}t \\
> & + B_{1}\,\mathrm{d}r_{2}\,\mathrm{d}r_{3} + B_{2}\,\mathrm{d}r_{3}\,\mathrm{d}r_{1} + B_{3}\,\mathrm{d}r_{1}\,\mathrm{d}r_{2} \\
>\end{aligned}
> $$
>
> 之后，$$\mathcal{F}_{em}$$ 和某个线丛上联络的曲率只差常数倍。具体来说，对电荷量为 $$-e$$ 的粒子，$$-i\frac{e}{\hbar c}\mathcal{F}_{em}$$ 是某个线丛上联络的曲率。

这这样的假定下，如果我们考虑磁单极子，那磁单极子产生的磁场应该可以用流形 $$M = (\mathbb{R}^{3}\setminus \{0\})\times \mathbb{R}$$ 上的某个线丛 $$L$$ 的联络来描述，即

$$
-i\frac{e}{\hbar c}\mathcal{F}_{em} = \mathcal{F}^{\nabla}
$$

并且原本对磁场的曲面积分也可以重新写成对2-形式的积分：

$$
q_{m} = \frac{1}{4\pi}\int_{S^{2}} \mathcal{F}_{em} = -\frac{\hbar c}{2e}\int_{S^{2}}\frac{1}{2\pi i}\mathcal{F}^{\nabla}.
$$

为了得到磁荷的量子化，我们只需要引援 Chern-Weil 理论中的结果：

> **定理**：2-形式 $$\frac{1}{2\pi i}\mathcal{F}^{\nabla}$$ 定义的 de-Rham 上同调类 $$\frac{1}{2\pi i}[\mathcal{F}^{\nabla}]\in H^{2}_{dR}(M)$$ 恰好为线丛 $$L$$ 的第一陈类 $$c_{1}(L)$$，且陈类在任何流形上的积分都是整数。

所以在数学工具的帮助下，我们再次得到了 $$2\frac{q_{m} e}{\hbar c} \in \mathbb{Z}$$.

## 成对出现的磁荷与Dirac弦

在规范场的视角下，我们还可以使用(代数)拓扑的工具得到更多的结果。这一节里我们假定读者对代数拓扑的主要结果和示性类的性质有所了解。我们先总结一下上一节的讨论给出的图像。

我们假设在空间 $$(\mathbb{R}^{3}\setminus \{0\})\times \mathbb{R}$$ 上有某个线丛 $$L$$. 因为我们这里只关心静止的磁荷，所以可以只考虑 3 维空间 $$\mathbb{R}^{3}\setminus \{0\}$$. 这时我们计算 $$0$$ 处的磁荷的办法是：先挖掉一个含 $$0$$ 的小球 $$B$$，然后计算线丛 $$L$$ 的第一陈类 $$c_{1}(L)$$ 在 $$\partial B$$ 上的积分。

这个办法可以很简单地推广到多个磁荷的情况：我们将 $$\mathbb{R}^{3}$$ 等同于去掉一个点的 3 维球面 $$S^{3} \setminus \{\infty\}$$，我们在放置了有限多个磁单极子之后，空间就变成了 $$S^{3}$$ 去掉有限多个点：$$S^{3}\setminus D$$，其中 $$D$$ 是一个有限集合。这时的磁场可以用 $$S^{3}\setminus D$$ 上的线丛 $$L$$ 来描述。

在每个磁单极子 $$p\in D$$ 处（我们认为 $$\infty$$ 处有个假想磁单极子），相差一个常数倍的意义下，它的磁荷 $$q_{m}(p)$$ 可以通过下面的办法计算：挖去以 $$p$$ 为中心的一个小球 $$B_{p}$$，然后 $$L$$ 的第一陈类 $$c_{1}(L)$$ 在小球边界 $$\partial B_{p}$$ 上的积分会给出磁荷 $$q_{m}(p)=\int_{\partial B_{p}}c_{1}(L)$$. 换言之，在小球的边界上，第一陈类可以用磁荷和 $$\partial B_{p}$$ 的基本类表示：

$$
c_{1}(L)\big\vert_{\partial B_{p}} = q_{m}(p) \operatorname{PD}[\partial B_{p}]
$$

这里 $$\operatorname{PD}$$ 表示 Poincaré 对偶。

基于上面的解释，我们会先展示，在包括了无穷远处的假想磁单极子之后，所有磁荷的和必须是 $$0$$.[^注2]

说明这件事的办法是利用 Mayer-Vietoris 长正合列( M-V 正合列)。我们将球面 $$S^{3}$$ 分成两部分：挖去的小球 $$\bigcup_{p\in D} B_{p}$$ 和剩下的部分，然后考虑这种剖分给出的 M-V 正合列：

$$
\begin{matrix}
 H^{2}(S^{3}) \longrightarrow & H^{2}(S^{3}\setminus \bigcup_{p\in D}B_{p}) & \overset{i^{*}}{\longrightarrow} & \bigoplus_{p\in D}H^{2}(\partial B_{p}) & \overset{d^{*}}{\longrightarrow} & H^{3}(S^{3}) \rightarrow 0 \\
 & c_{1}(L) & \longmapsto & i^{*}c_{1}(L) && \\
\end{matrix}
$$

一方面，我们考虑线丛 $$L$$ 的陈类 $$c_{1}(L)$$，会有

$$
i^{*}c_{1}(L) = c_{1}(i^{*} L) = \sum_{p\in D} c_{1}(L\big\vert_{\partial B_{p}}).
$$

进而有

$$
d^{*}\sum_{p\in D} c_{1}(L\big\vert_{\partial B_{p}}) = d^{*}i^{*} c_{1}(L) = 0.
$$

另一方面，按照 $$d^{*}$$ 的定义，可以证明：[^注3]

$$
d^{*}\sum_{p\in D} c_{1}(L\big\vert_{\partial B_{p}}) = d^{*}\sum_{p\in D} q_{m} \cdot \operatorname{PD}[\partial B_{p}] = \sum_{p\in D} q_{m}\cdot \operatorname{PD}[S^{3}].
$$

这和上一个等式结合就会得到 $$\sum_{p\in D} q_{m} = 0$$，也就是总的磁荷一定为0.

除了得到磁荷的性质之外，我们也能从上面的代数拓扑方法中复原出 Dirac 弦。办法是考虑 $$L$$ 的陈类 $$c_{1}(L)$$ 的Poincaré-Lefschetz 对偶

$$
\operatorname{PD}c_{1}(L) \in H_{1}(S^{3}, D),
$$

经过一些组合数学的论证可以证明，$$c_{1}(L)$$ 的代表元是一些连接磁单极子的曲线，即

$$
c_{1}(L) = \sum_{j=1}^{l}[\gamma_{j}], \quad \gamma_{j}(0),\gamma_{j}(1)\in D
$$

此外我们还能取 $$\gamma_{j}$$ 使得它们既不自交，也互不相交。

这时我们可以去掉所有 $$\gamma_{j}$$，考虑区域 $$M = S^{3}\setminus\bigcup_{j}\gamma_{j}$$. 而利用所谓的 Alexander 对偶[^注4]可以证明：

$$
[\mathcal{F}] = c_{1}(L\big\vert_{M})=0\in H^{2}(M)\cong H_{1}(S^{3},\bigcup_{j}\gamma_{j})
$$

换言之，电磁张量 $$\mathcal{F}$$ 在 $$M$$ 上是一个恰当形式。这意味着，在去掉所有 $$\gamma_{j}$$ 之后我们总能定义磁矢势 $$\boldsymbol{A}$$. 所以由陈类定义的曲线 $$\bigcup_{1\leqslant j\leqslant l}\gamma_{j}$$ 恰好是 Dirac 弦。

### 一个类似的例子

虽然我们证明的“磁荷的总和一定为0”并没有实际的物理意义，但在凝聚态物理中的三维材料的能带理论里，我们可以用同样的办法得到有意义的结果：受拓扑保护的能带相交点(band crossing)一定是“成对”出现。这部分我们将解释为何这一情况可以套用上面的办法。

（三维）能带理论考虑的主要几何结构是三维环面 $$T^{3}$$，一个物理系统会定义一个连续映射：

$$
\begin{aligned}
 T^{3} & \longrightarrow \{H\in M_{n}(\mathbb{C})\mid H = H^{*}\} \\
 k & \longmapsto H_{k}
\end{aligned}
$$

这时候每个 $$H_{k}$$ 会有 $$n$$ 个实特征值 $$\lambda_{k}^{(1)},\lambda_{k}^{(2)},\dots,\lambda_{k}^{(n)}$$. 随着 $$k$$ 的变化，这些特征值会连续地变动，形成 $$T^{3}\times \mathbb{R}$$ 上的 $$n$$ 个“条带” $$\{(k,\lambda_{k}^{(m)})\mid k\in T^{3}, 1\leqslant m \leqslant n\}$$. 这些条带就被称为物理系统的能带。

如果对每个 $$k$$，$$H_{k}$$ 都有 $$n$$ 个不同的特征值，这时候系统会有 $$n$$ 条互不相交的能带

$$
\{(k,\lambda_{k}^{(m)})\mid k \in T^{3}\}, \quad m=1,2,\dots,n.
$$

但一般来说，这并不成立，也就是两个能带会在某个位置相交，所以一个可以考虑的问题是，我们能否对物理系统作一定扰动，让两条相交的能带变成不交的？

在三维的时候，有些时候我们无法实现这件事。让我们考虑两条能带，假设它们仅在一点 $$k_{0}$$ 处相交。那么在这一点之外的每一点 $$k$$ 处，$$H_{k}$$ 的两个不同特征值定义了两个特征子空间，它们随着 $$k$$ 的变动得到的一族特征子空间构成了 $$T^{3}\setminus \{k_{0}\}$$ 上的两个复线丛。我们记位于下方的能带定义的复线丛为 $$L$$.

我们假设扰动后能够分开两个能带，那么位于下方的能带的特征子空间会定义 $$T^{3}$$ 上的线丛 $$L^{\varepsilon}$$，在假设扰动足够小的情况下，它在 $$T^{3}\setminus \{k_{0}\}$$ 上同构于原本的线丛 $$L$$. 换言之，我们得到了两个能带能够分离的必要条件：

> 如果两个仅在一点 $$k_{0}$$ 处相交的能带能够分离，那么按照上面办法定义的线丛 $$L\rightarrow T^{3}\setminus \{k_{0}\}$$ 一定能延拓为 $$T^{3}$$ 上的线丛。反之，如果 $$L$$ 不能延拓，则能带无法在扰动下分离。

而拓扑知识会给出线丛能否延拓的充要条件：

> **引理**：对 $$\mathbb{R}^{3}\setminus \{0\}$$ 上的线丛 $$L$$，那么以下几个条件等价：
>
> - $$L$$ 能延拓为 $$\mathbb{R}^{3}$$ 上的线丛。
> - $$L$$ 在限制在单位球 $$S^{2}$$ 是平凡丛。
> - $$L$$ 限制在单位球上有平凡的陈类，即 $$c_{1}(L\big\vert_{S^{2}}) = 0$$.

所以只要特征子空间构成的线丛 $$L$$ 具有非平凡的陈类，那我们无论如何微扰都无法将相交的能带分来。我们把这样的能带相交点称为受拓扑保护的。

这时候，如果我们设环面上有有限个受拓扑保护的能带相交点，它们构成的集合为 $$D$$，那它们给出了和前面相似的数学结构：

- 在 $$T^{3}\setminus D$$ 上有一个线丛 $$L$$.
- 对 $$D$$ 中每个点 $$k$$，取以 $$k$$ 为中心的小球 $$B_{k}$$，那 $$c_{1}(L\big\vert_{B_{k}})$$ 衡量了 $$k$$ 处的“荷”。

因此类似前面，我们可以考虑上同调群的正合列，并且得到以下结果：

- 在计算重数后，受到拓扑保护的能带相交点一定成对出现。
- 存在若干条曲线连接能带相交点，这些曲线的同调类由 $$L$$ 的陈类确定。

> **注记**：虽然理凝聚态物理和磁单极子的理论用到了相同的数学工具，但它们的物理是完全不同的。即使是物理学家有时也会混淆两个概念，读者可以参考维基百科中有关[寻找磁单极子的介绍](https://en.wikipedia.org/wiki/Magnetic_monopole#%22Monopoles%22_in_condensed-matter_systems)。

[^注1]: 仅在 $$\psi^{N}$$ 始终非零时才可以这样假设。但我们可以只考虑那些在 $$D_{N}\cap D_{S}$$ 上概率密度处处非零的粒子（甚至只需要粒子在赤道附近的概率密度处处非零就足够了）。

[^注2]: 这个结论看起来是无意义的，因为我们可以任意指定假想磁荷的值。但在其他情景里（比如三维定向闭流形上的磁单极子），我们得到严格意义上的“磁荷成对”出现。

[^注3]: 例如考虑由嵌入映射 $$(S^{3}\setminus \bigcup_{p\in D} B_{p}, \bigcup_{p\in D}B_{p})\rightarrow (S^{3}\setminus B_{p'},\bigcup_{p\in D} B_{p})$$ 诱导的长正合列之间的映射。

[^注4]: 粗略来说，即 $$H^{n-q}(M-K;\mathbb{R}) \cong \left(H_{n-q}(M-K;\mathbb{R})\right)^{*} \cong \left(H^{q}(M,K;\mathbb{R})\right)^{*}\cong H_{q}(M,K;\mathbb{R})$$. 这里我们取 $$M=S^{3}\setminus D,K = \bigcup_{j}\gamma_{j}$$. 详见姜伯驹《同调论》第五章定理5.6.
