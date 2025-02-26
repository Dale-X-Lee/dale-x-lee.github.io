---
layout: post
title: Three Ways to Think of Connections on Vector Bundles(In Chinese)
date: 2024-10-05 21:30:16
description: To record three usual ways to think of connections on vecter bundles.
tags:
categories: sample-posts
toc:
  beginning: true
---
## 摘要

向量丛上的联络（或协变导数）是几何学里一个基本的概念。这篇文章的主要目的是罗列理解联络的三种方式：视作局部的联络1-形式、视作平行移动、视作向量丛切空间的直和分解。并叙述主丛上的联络如何与这三种看法关联起来。本文不适合用作初次学习联络的资料，更适合已经了解过联络定义和基本性质的读者。

### 一些记号

对于一个向量丛$\pi: E \rightarrow M$，和$M$中任意一点$x$，用$E_x$表示$E$在$x$处的纤维，对$E$的截面$\xi: M \rightarrow E$，用$\xi_x$表示$\xi$在$x \in M$处的值。

## 1. 向量丛上的联络

几何学里，一个向量丛$E$上的联络$\nabla$有一个形式的定义：

> **定义**：一个向量丛$\pi: E \rightarrow M$上的联络是一个实线性映射
>
> $$
> \nabla: \Gamma(TM) \times \Gamma(E) \rightarrow \Gamma(E)
> $$
>
> 使得对任意的光滑函数$f\in C^{\infty}(M)$、向量场$v \in \Gamma(TM)$和向量丛的截面$\xi \in \Gamma(E)$，有
>
> * $\nabla_{fv} \xi = f \nabla_v\xi$.
> * $\nabla_v(f\xi) = v(f)\cdot\xi + f\nabla_v \xi$.
>
> 这里$\Gamma(F)$表示由向量丛$F$的全体光滑截面构成的集合。

这种定义虽然简单清楚，但我认为不够直观。接下来的三种解释方式从不同的角度说明了这一定义对应的几何直观。

### 1.1. 联络1-形式$\omega$

联络1-形式提供了一种表示和计算联络的方便的方法。我们在选取了向量丛在$U \subset M$上的一组局部标架$\xi_1, \xi_2, \dots, \xi_r$之后，$E$的截面$\xi$可以表示成$\xi_1, \dots, \xi_r$的线性组合：

$$
\xi = s^i \xi_i
$$

这里$s^i: U \rightarrow \mathbb{R}$是$U$上的光滑函数。利用联络的定义可以算出：

$$
\nabla \xi = \mathrm{d}s^i \otimes \xi_i + s^i \nabla \xi_i
$$

注意到$\nabla_v\xi_i$可以写成$\omega_i^{\ j}(v)\xi_j$的形式，这里$\omega_i^{\ j}$是$M$上的1-形式，所以我们的联络进一步可以写成：

$$
\nabla \xi = \mathrm{d}s^i \otimes \xi_i + s^i \omega_i^{\ j}\otimes \xi_j
$$

很多时候上面的式子会被简写为$\nabla = \mathrm{d} + \omega$，这里$\omega = (\omega_i^{\ j})_{n \times n}$被称作联络1-形式。

这里的联络1-形式依赖于局部标架的选取。如果我们选取了另一组标架$\tilde{\xi}_1, \dots, \tilde{\xi}_r$，这两个标架之间的关系可以用一个取值为可逆矩阵的光滑函数$A$来描述：

$$
(\tilde{\xi}_1, \tilde{\xi}_2, \dots, \tilde{\xi}_r) = (\xi_1, \xi_2, \dots, \xi_r)\cdot A
$$

这里的乘法是驻点的矩阵乘法。那么由标架$\tilde{\xi}_1, \dots, \tilde{\xi}_r$给出的联络1-形式$\tilde{\omega}$可以被表示为：

$$
\tilde{\omega} = A^{-1}\omega A + A^{-1}\mathrm{d}A
$$

反之，如果对$E$的每个局部平凡化都可以定义一个1-形式矩阵$\omega$，且不同平凡化之间的1-形式矩阵满足上面的变换关系，我们就能得到一个联络。

联络1-形式的好处是，利用它可以迅速地算出一些重要的几何量，如联络$\nabla$的曲率可以表示成：

$$
\Omega = \mathrm{d} \omega - \omega \wedge \omega
$$

### 1.2. 沿着曲线的平行移动

在定义了联络$\nabla$之后，我们可以定义平行向量场：一个沿着曲线$\gamma$的向量场$\xi$被称作与$\gamma$平行，如果$\xi$沿着$\gamma$的协变导数等于0，也就是

$$
\nabla_{\dot{\gamma}(t)} \xi = 0
$$

这里$\dot{\gamma}$表示$\gamma$的切向量。

利用前面给出的联络1-形式的局部表示，我们知道，一个向量场平行于一条曲线相当于它的分量满足一个一阶的常微分方程。所以利用常微分方程解的存在唯一性理论可以知道，对给定的曲线$\gamma$和初值$\xi_0 \in E_{\gamma(0)}$，存在唯一一个初值为$\xi_0$的、平行于曲线$\gamma$的向量场$\xi(t; \gamma,\xi_0)$. 更进一步，这个向量场光滑地依赖初值$\xi_0$.

当固定时间$t$，改变初值$\xi_0$时，我们会得到一个将$\gamma(0)$处的纤维$E_{\gamma(0)}$映到$\gamma(t)$处的纤维$E_{\gamma(t)}$的映射

$$
\mathscr{P}_\gamma^{0 \to t}: E_{\gamma(0)} \rightarrow E_{\gamma(t)}
$$

这个映射被叫做沿着$\gamma$的平行移动。一般地，我们用同样的方法可以定义从$\gamma(a)$到$\gamma(b)$的平行移动$\mathscr{P}_\gamma^{a \to b}: E_{\gamma(a)} \rightarrow E_{\gamma(b)}$.

平行移动的几何意义是相对直观的：它告诉了我们如何将一点处的纤维沿着一条曲线“不变地”移动到另一点处。事实上，$\nabla$能够被叫做“联络”的一个重要原因就是它定义的平行移动告诉了将不同点处的纤维联系了起来。

尽管我们是利用联络定义的平行移动，但在仅知道平行移动的情况下，我们可以重新计算出联络，也就是下面的等式：

$$
\nabla_{\dot{\gamma}(0)}\xi = \lim_{t \to 0} \frac{\mathscr{P}_\gamma^{t \to 0}\xi_{\gamma(t)} - \xi_{\gamma(0)}}{t}
$$

在这个意义上，联络和平行移动是等价的。

### 1.3. 向量丛切丛的直和分解

这一种理解方式来自于构造向量丛截面的“导数”。对于向量丛$E$的一个截面$\xi: M \rightarrow E$，它的切映射很自然地定义了一个导数：

$$
\mathrm{D}\xi: TM \rightarrow TE
$$

但我们期望一个截面在求导之后得到的是另一个截面，所以我们采取的办法是：将$TE$中的点$w \in T_\xi E$投影到$TE$沿着纤维方向的切空间$T_\xi(E_{\pi(\xi)})$上，注意到$E_{\pi(\xi)}$是线性空间，所以$T_\xi(E_{\pi(\xi)})$自然地同构于向量丛的纤维$E_{\pi(\xi)}$. 这样，取值在$TE$中的“导数”就被变成了取值在$E$中的“导数”。

这里投影的选择不是唯一确定的，我们没有一个自然地方式将$TE$投影到$E$，因此我们需要在$E$中每一点$\xi$处指定一个投影

$$
\mathcal{P}_\xi: T_\xi E \rightarrow \ker (\mathrm{D}\pi|_{\xi}: T_\xi E \rightarrow T_{\pi(\xi)}X ) \cong E_{\pi(\xi)}
$$

这时候，我们的协变导数可以写成：

$$
(\nabla \xi)|_x = d_{\xi_x}^{-1} \circ \mathcal{P}_{\xi_x}\big((D\xi)|_x\big)
$$

这里$d_{\xi_x}: E_{x} \rightarrow T_{\xi_x}(E_{x})$是由$E_{x}$的线性结构得到的自然同构，也就是将$0$处的切空间平移到$\xi$处之后得到的同构。

最后指出一点：线性空间的投影$P: V \rightarrow V$完全由它的像和核确定。在这里，$E$中每一点$\xi$处的投影$P_\xi$的像是$\ker \mathrm{D}\pi_{\xi}$，是一个已经被确定的子空间，因此在每点处指定一个投影相当于在每点处指定了一个子空间$H_{\xi}$，使得我们有直和分解：

$$
T_{\xi}E = \ker \mathrm{D}\pi_{\xi} \oplus H_{\xi}
$$

### 注记

在我们给出的三种理解方式里，只有联络1-形式的理解方式能很轻松地给出联络的等价定义，通过平行移动和投影都不太能简洁地给出联络的等价定义。

## 2. 主丛和主丛上的联络

引入主丛的一种方法是利用向量丛的结构群。对一个秩为$r$的向量丛$\pi: E \rightarrow M$，在找了$M$的一组开覆盖$\{U_\alpha\}_{\alpha \in I}$，使得$E$限制在每个$U_\alpha$上有平凡化$\varphi_\alpha$之后，平凡化之间的转移映射给出了一组转移函数

$$
\{g_{\alpha\beta}: U_\alpha \cap U_\beta \rightarrow G \subset GL(r, \mathbb{R})\}_{\alpha, \beta \in I}
$$

使得

$$
\varphi_{\alpha} \circ \varphi_{\beta}^{-1}(x, v) = (x, g_{\alpha\beta}(x)\cdot v), \forall x \in U_\alpha \cap U_\beta, v \in \mathbb{R}^r
$$

这里的群$G$就被称作向量丛$E$的结构群。

转移函数告诉了我们，如何将一组平凡丛$\{U_{\alpha}\times \mathbb{R}^r\}_{\alpha \in I}$粘接成向量丛$E$，也就是我们有向量丛的同构：

$$
E \cong \left(\amalg_{\alpha \in I} U_\alpha \times \mathbb{R}^r\right)/(x, v) \sim (x, g_{\alpha\beta}(x)v)
$$

这也告诉我们，一个向量丛的转移函数实际上蕴含了这个向量丛的所有信息，因此有关向量丛的问题都可以视作有关转移函数和群的问题。这时候，我们定义：

$$
\mathrm{Fr}_G(E) = \left(\amalg_{\alpha \in I} U_\alpha \times G\right)/(x, h) \sim (x, g_{\alpha\beta}(x)\cdot h)
$$

这是一个在$M$上的、纤维为$G$的纤维丛，它蕴含着原本的向量丛$E$的所有信息，且从转移映射的角度来说，这个几何对象更加自然。

我们定义的$\mathrm{Fr}_G(E)$是主丛的一个例子。一般的，我们有下面的定义：
> **定义**：对给定的李群$G$，如果一个纤维丛$\pi: P \rightarrow M$以$G$为纤维，且$G$能够光滑地右作用在$P$上，使得$G$的作用保持每个纤维不动，且在每个纤维上是自由、传递的，就称$P$是一个$G$-主丛。

这里一个没有那么严谨的地方是：$G$-主丛的纤维实际上不是$G$，而是所谓的[$G$-torsor](https://en.wikipedia.org/wiki/Principal_homogeneous_space)，或$G$-主齐性空间。一个李群$G$的主齐性空间和这里李群本身是微分同胚的，但$G$-主齐性空间上没有群结构，只有$G$的右作用。

利用配丛的概念，我们可以从一个$G$-主丛构造出一个向量丛。假设在有了$G$-主丛$P$和群$G$在线性空间$V$上的一个表示$\rho: G \rightarrow GL(V)$之后，我们可以定义出$P$的配丛$P\times_{\rho}V$，它是一个以$V$为纤维的向量丛：

$$
P\times_{\rho}V := \left(P \times V\right)/G
$$

这里$G$通过下面的方式左作用在$P \times V$上：

$$
h \cdot (p, v) = (p\cdot h^{-1}, \rho_{h}v), \forall h \in G, p \in P, v \in V
$$

比如我们之前定义的$\mathrm{Fr}_G(E)$在$\mathbb{R}^r$，通过将$G$嵌入到$GL(r, \mathbb{R})$中，我们可以得到一个表示$\iota$，这时候我们的配丛$\mathrm{Fr}_G(E) \times_{\iota} \mathbb{R}^r$恰好同构于向量丛$E$.

### 2.1. 主丛上的联络

我们接下来给出主丛上联络的定义。

> **定义**：一个$G$-主丛$\pi: P \rightarrow M$上的联络是$P$的切丛$TP$的一个子丛$H$，使得在$P$上每一点$p \in P_x$处，有直和分解
>
> $$
> T_pP = T_p(P_x) \oplus H_p
> $$
>
> 且$H$在$G$的右作用下不变。

注意到，上面的直和分解实际上给出了在每一点$p \in P_x$处的投影映射

$$
\mathcal{P}_p: T_pP \rightarrow T_p(P_x) = \ker \mathrm{D}\pi_p
$$

因此，我们可以给出下面的等价定义：

> **定义**：$G$-主丛$P$上的联络是一个向量丛的投影
>
> $$
> \mathcal{P}: TP \longrightarrow \ker \mathrm{D}\pi
> $$
>
> 使得对任意的$g \in G$，有$g_* \circ \mathcal{P} = \mathcal{P} \circ g_*$. 这里$g_*$表示由$G$在$P$上的右作用诱导的$TP$上的右作用$g_*: TP \rightarrow TP$.

因为$g_*$给出了$G$在$P$的切丛$TP$上的左作用，这时候定义中的等式$g_* \circ \mathcal{P} = \mathcal{P} \circ g_*$相当于说，投影$\mathcal{P}$是$G$-等变的。所以联络的定义可以简短地叙述为：主丛上的联络是从它的切丛到它纤维的切丛的一个$G$-等变的投影。

另外可以看出来，这一定义对应着向量丛上联络的第三种看法：将联络看作丛投影。我们接下来解释如何从主丛上的联络得到联络1-形式和主丛上的平行移动。

#### 2.1.1. 联络1-形式

从定义得到联络1-形式$\omega \in \Omega(P; \mathfrak{g})$是相对轻松的。我们只需要稍微修改一下投影$\mathcal{P}$的值域即可。

注意到，每个纤维$P_x$是一个$G$-主齐性空间，所以纤维$P_x$上任意一点$p$处的切空间$T_p(P_x)$和$\mathfrak{g}$之间存在一个典则同构：

$$
\begin{aligned}
    d_p: \mathfrak{g} & \xrightarrow{\cong} T_p(P_x) \\
    u & \longmapsto X_u=\frac{\mathrm{d}}{\mathrm{d}t}\bigg|_{t = 0}p\cdot\exp(tu)\\
\end{aligned}
$$

我个人更喜欢用另一种方式理解这一典则同构：$G$在每根纤维上的作用是传递的，意味着任意一根纤维上每个点的地位是对等的（比如任选一个点，都能以它为基点将这根纤维等同于$G$），每一点的切空间在相差一个$G$的作用的意义下是相同的，而容易看出一点处的切空间等同于$\mathfrak{g}$，因此我们可以构造这一典则同构。

有了典则同构$d_p$之后，我们可以在每一点$p \in P_x$处定义李代数值的联络1-形式：

$$
\omega_p := d_p^{-1}\circ\mathcal{P}_p: T_pP \longrightarrow \mathfrak{g}
$$

此外，由$\mathcal{P}$的性质可以得到联络1-形式的性质。$\mathcal{P}$是投影等价于对任意李代数中元素$u$，有$\omega_p(X_u) = u$. $\mathcal{P}$是$G$-等变的等价于$\omega$是$G$-等变的，也就是$(g^*\omega)_{p} = \mathrm{Ad}_{g^{-1}} \circ \omega_p$，其中$\mathrm{Ad}_g$是$G$在$\mathfrak{g}$上的伴随作用。这使得我们可以用联络1-形式给出联络的等价定义：

> **定义**：一个$G$-主丛$P$上的联络是$P$上一个李代数值的1-形式
>
> $$
> \omega: TP \longrightarrow \mathfrak{g}
> $$
>
> 使得对任意的$g \in G$和$u \in \mathfrak{g}$，有
>
> * $\omega(X_u) = u$
> * $g^*\omega = \mathrm{Ad}_{g^{-1}}\circ \omega$

在大部分时候，这一定义是更加常用的，因为$\omega$可以方便地参与到许多的运算中，而投影$\mathcal{P}$不能。比如类似向量丛的情形，我们可以用联络1-形式轻松地写出联络的曲率：

$$
\Omega = \mathrm{d}\omega + \frac{1}{2}[\omega, \omega]
$$

其中$[\omega, \eta]$被定义为

$$
[\omega, \eta](X, Y) = [\omega(X), \eta(Y)] - [\omega(Y), \eta(X)]
$$

在进入有关平行移动的讨论之前，我们说明一下联络1-形式的局部表示。选取底空间$M$中的一个开集$U$和$U$上的局部截面$s: U \rightarrow P$。这时我们可以得到$U$上的1-形式：

$$
s^*\omega \in \Omega^1(M; \mathfrak{g})
$$

这被称作联络1-形式$\omega$在$U$上的局部表示。注意到$\omega$的局部表示依赖于截面$s$的选取，因此一般不能将$s^*\omega$粘接为某个全局1-形式$\tilde{\omega} \in \Omega^1(M,\mathfrak{g})$. 我们后面会看到，$s^*\omega$对应着向量丛的联络1-形式。

此外利用拉回的自然性我们可以得到局部上曲率的计算方式：

$$
s^*\Omega = \mathrm{d}(s^*\omega) + \frac{1}{2}[s^*\omega, s^*\omega]
$$

#### 2.1.2 平行移动

利用联络$\mathcal{P}$也可以定义主丛上的平行移动。

对底空间$M$上的曲线$\gamma: [a, b] \rightarrow M$，沿着$\gamma$的截面$s: [a, b] \rightarrow P$被称为平行于$\gamma$的截面，如果对任意的$t \in [a, b]$，有

$$
\mathcal{P}\bigl(\dot{s}(t)\bigr) = 0
$$

如果用联络1-形式来叙述的话，$s$与$\gamma$平行当且仅当对任意的$t$，有$\omega\bigl(\dot{s}(t)\bigr) = 0$.

这里的平行可以和向量丛中的平行截面类似理解。切向量$\mathcal{P}(\dot{s}(t)) \in T_{s(t)}P_{\gamma(t)}$反映了截面$s$沿着纤维方向的变化量，因此起到了原先协变导数的作用。而这个量等于$0$就意味着截面$s$关于联络$\mathcal{P}$沿着纤维没有变化，因此可以看作平行于曲线$\gamma$.

在局部坐标上讨论的话，一个截面$s$平行于$\gamma$会等价于$s$的局部坐标满足某个一阶常微分方程，所以根据常微分方程的理论可以知道，在给定初值$s(a)$的情形下，存在唯一平行于$\gamma$的截面，且这个截面光滑地依赖于初值$s(a)$的选取。

因此，在固定时间$t$，只改变初值的时候，我们会得到一个映射

$$
\mathscr{P}_{\gamma}^{0 \to t}: P_{\gamma(0)} \longrightarrow P_{\gamma(t)}
$$

一般地，我们会有$\mathscr{P}_{\gamma}^{a \to b}: P_{\gamma(a)} \rightarrow P_{\gamma(b)}$. 我们把这一映射叫做沿着$\gamma$的平行移动。

一个值得注意的地方是，平行移动是保持$G$-torsor结构的，或者说平行移动作为映射是$G$-等变的。这可以从$\mathcal{P}$是$G$-等变的推出。此外，类似向量丛，我们从平行移动也可以重建出联络的信息。对$P$的切向量$X \in T_pP$，选取一个从$p \in P_x$出发，初速度为$X$的曲线$\tilde{\gamma}$，它在$M$上的投影是一条曲线$\gamma$. 这时候我们有关系式：

$$
\mathcal{P}(X) = \dot{s}(0)
$$

其中$s(t) = \mathscr{P}_{\gamma}^{t \to 0}\tilde{\gamma}(t)$是$P_x$上的曲线。

### 2.2. 从主丛的联络到配丛的联络

这一节我们来解释主丛的联络和配丛的联络之间的关系。更严格地说，我们解释如何从主丛上的联络得到配丛上的联络。我们假设$\pi: P \rightarrow M$是一个$G$-主丛，其上的联络为$\omega \in \Omega^1(P; \mathfrak{g})$. $G$的一个表示$\rho: G \rightarrow GL(V)$给出了$P$的一个配丛

$$
\pi_E: E = P \times_{\rho} V \longrightarrow M
$$

我们将解释主丛上的联络如何给出配丛上的丛投影、平行移动和联络1-形式。并在附录中给出用平行移动定义和用联络1-形式定义的等价性。

我们先看如何定义$E$上的丛投影。主丛$P$上的丛投影给出了切丛$TP$的子丛$HP$，这一子丛可以被自然地提升为$T(P\times V)$的子丛：

$$
p^*HP := \bigsqcup_{(p, v) \in P \times V} H_pP \oplus 0
$$

其中$p: P \times V \rightarrow P$是自然投影。又注意到商映射

$$
q: P \times V \longrightarrow P\times_{\rho}V
$$

的切映射将$T_{(p, v)}(P \times V)$映为$T_{[(p, v)]}E$，因此$p^*HP$也被映为了$TE$的一个子丛$HE$. 注意到$HP$在$G$作用下是不变的的，因此尽管$P \times V$中许多点会被映到了$E$上的一个点$[(p, v)]$，但这些点处的“水平丛”被映为$TE$的同一个子空间，因此$HE$是良定的。$HE$定义了一个丛投影

$$
\mathcal{P}_E: TE \longrightarrow \ker \pi_E
$$

利用这个丛投影就可以给出$E$上的联络。验证这是一个联络的办法是直接写出它的联络1-形式。我们略去具体的计算过程。

另一个办法是利用平行移动。对任意一条曲线$\gamma: \mathbb{R} \rightarrow M$，它定义了$P$上的平行移动$\mathscr{P}_{\gamma}^{a \to b}$. 由此我们可以得到$P \times_{\rho} V$上的平行移动：

$$
\begin{matrix}
    \mathscr{P}_{\gamma, E}^{a \to b}: & E_{\gamma(a)} & \longrightarrow & T_{\gamma(b)}E \\
    & [(p, v)] & \longmapsto & [(\mathscr{P}_{\gamma}^{a \to b}(p), v)]
\end{matrix}
$$

注意到平行移动$\mathscr{P}_{\gamma}^{a \to b}$是$G$-等变的，所以$\mathscr{P}_{\gamma, E}^{a \to b}$不依赖于代表元$(p, v)$的选取，是良定的。这时候我们可以定义$E$上的联络为：

$$
\nabla_{\dot{\gamma}(0)}X = \lim_{t \to 0} \frac{\mathscr{P}_{\gamma,E}^{t \to 0}X_{\gamma(t)}- X_{\gamma(0)}}{t}
$$

在不作具体计算的情况下，用联络1-形式定义$E$上的联络是最快的。在选取了$P$的一个局部截面$s: U \rightarrow P$之后，$s$给出了$E$的局部平凡化：

$$
\begin{matrix}
    \varphi: & E|_{U} & \longrightarrow & U \times V \\
    & [(s(x), v)] & \longmapsto & (x, v)
\end{matrix}
$$

在这一平凡化下，我们规定$E$上联络的联络1-形式为

$$
\omega_E = \rho_*(s^*\omega) \in \Omega^1(U, \mathrm{End}(V))
$$

其中$\rho_*: \mathfrak{g} \rightarrow \mathrm{End}(V)$是由$\rho$定义的前推。

我们可以进一步写出这个联络的曲率的局部表示：$\Omega_E = \rho_*(s^*\Omega)$.

## 附录：联络1-形式的计算

这里附上用平行移动计算配丛上联络1-形式的过程，其中$P \rightarrow X$是主丛：
> Assume that $E = P \times_{\rho} \mathbb{K}^r$.
>
> Since $P$ is locally trivial, we can choose a open neighborhood $U \subseteq X$ such that there is a section $s: U \rightarrow P$. The section $s$ yields a local trivialization $\Phi: E|_U \rightarrow U \times \mathbb{K}^r$ whose inverse is
>
> $$
> \Phi^{-1}: \big(x, (y^1, \dots, y^r)\big) \longmapsto [s(x), (y^1, \dots, y^r)]
> $$
>
> For a curve $\gamma: [0, 1] \rightarrow U$ with $\gamma(0) = x$ and $\dot{\gamma}(0) = u$, its horizontal lift $\tilde{\gamma}$ is of the form:
>
> $$
> \tilde{\gamma}(t) = s(\gamma(t)) \cdot g(t)
> $$
>
> where $g: [0, 1] \rightarrow G$ is smooth. Without loss of generality, we assume that $g(0) = e$. Since $\tilde{\gamma}$ is horizontal, we have
>
> $$
> \begin{aligned}
> 0 = \omega(\dot{\tilde{\gamma}}(0)) & = \omega\bigl((R_{g(0)})_*ds_x(\dot{\gamma}(0)) + \Theta(\dot{g}(0))^{\sharp}_x\bigr)\\ & = \omega((R_{g(0)})_*ds_x(u)) + \Theta(\dot{g}(0))
> \end{aligned}
> $$
>
> where $\Theta$ is the Maurer-Cartan form on $G$.
>
> Note that $g(0) = e$, so we have:
>
> $$
> \dot{g}(0) = - (s^*\omega)(u)
> $$
>
> The curve $\tilde{\gamma}$ induces the parallel transport
>
> $$
> \tau^{E, \omega}_{\gamma|_{[0, t]}}: [s(x), \vec{y}] = [\tilde{\gamma}(0), \vec{y}] \longmapsto [\tilde{\gamma}(t), \vec{y}] = [s(\gamma(t)), \rho\bigl(g(t)\bigr)\vec{y}]
> $$
>
> So for $\psi \in \Gamma(E|_U), \psi_{x'} = [x', \vec{y}(x')]$ we have
>
> $$
> \begin{aligned}
> \nabla^{\omega}_u \psi
> & = \frac{d}{dt}\bigg\vert_{t=0} \left(\tau^{E, \omega}_{\gamma|_{[0, t]}}\right)^{-1}(\psi_{\gamma(t)}) \\
> & = \frac{d}{dt}\bigg\vert_{t=0} [s(x), \rho\bigl(g(t)^{-1}\bigr)\cdot \vec{y}(\gamma(t))]\\
> & = [s(x), - \bigl(\rho_*\dot{g}(0)\bigr)\cdot \vec{y}(0) + \rho(g(0)) \cdot \frac{d}{dt}\vec{y}(0)]
> \end{aligned}
> $$
>
> We already know that $g(0) = e$ and $\dot{g}(0) = - (s^*\omega) (u)$, so we have:
>
> $$
> \begin{aligned}
> \nabla^{\omega}_u \psi & = [s(x), \rho_*(s^*\omega(u)) \cdot \vec{y} + \frac{d}{dt}\vec{y}(0)] \\
> & = [s(x), \rho_*(s^*\omega(u)) \cdot \vec{y} + u(\vec{y})]
> \end{aligned}
> $$
