---
layout: post
title: Bounded Operators Can Not Satisfy Canonical Commutative Relation(In Chinese)
date: 2024-06-11 14:05:16
description: The proof of the fact that two bounded operators can not satisfy the C.C.R.
tags:
categories: sample-posts
toc:
  beginning: true
---
这篇的目的是记录下面的定理和它的证明：

> **定理**：设$$P, Q$$是Hilbert空间$$\mathscr{H}$$上的算子，且满足
>
> $$
> PQ - QP = i \cdot \mathrm{id}_{\mathscr{H}}
> $$
>
> 那么$$P, Q$$中至少有一个是无界算子。

## 一点背景：量子化

一种解释[量子化](https://en.wikipedia.org/wiki/Canonical_quantization)的方式是，人们希望建立量子力学和经典力学之间的联系，而建立的办法就是，直接给出通常的物理量和量子力学中的物理量（也就是某个Hilbert空间$$\mathscr{H}$$上的算子）的对应关系。用稍微数学一些的话来说，我们期望找到一个映射：

$$
\begin{matrix}
    \mathscr{Q}: & \{\text{物理量}\} & \longrightarrow & \{\mathscr{H}\text{上算子}\} \\
    & u & \longmapsto & \hat{u}: \mathscr{H} \rightarrow \mathscr{H}
\end{matrix}
$$

更进一步，我们希望这个映射能够保持一些运算，使得我们可以从经典力学的方程直接得到量子力学的方程。比如，我们希望：

* $$\mathscr{Q}$$是实线性的。
* $$[\hat{u}, \hat{v}] = i \hbar \widehat{\{u, v\}}$$
这里$$[\hat{u}, \hat{v}]:=\hat{u}\hat{v}-\hat{v}\hat{u}$$被叫做对易子或者交换子，$$\{\cdot, \cdot\}$$是哈密顿力学里的[Poisson括号](https://en.wikipedia.org/wiki/Poisson_bracket)。

举个例子，在一维的系统里，我们考虑位置$$x$$和动量$$p$$量子化。我们已经知道：

$$
\{x, p\} = 1
$$

因此，$$x$$和$$p$$的量子化$$\hat{x}, \hat{p}$$必须满足：

$$
[\hat{x}, \hat{p}] = i\hbar \cdot \mathrm{id}_{\mathscr{H}}
$$

这个等式就被叫做典则交换关系(canonical commutation relation, C.C.R.)。因为数学上，可以将$$\hbar$$吸收到$$\hat{x}, \hat{p}$$中，所以这篇文章里也将等式$$PQ-QP = i \cdot \mathrm{id}_{\mathscr{H}}$$称作C.C.R.。

## 定理的证明

这个定理的证明并不复杂。办法是使用反证法，假设存在两个有界算子$$P,Q$$满足C.C.R.。那么我们有这样的观察：

* 如果$$P, Q$$满足C.C.R.，那么$$c \cdot \mathrm{id}_{\mathscr{H}}+P$$和$$Q$$也满足C.C.R.。

所以我们可以取充分大的常数$$c$$，使得$$P$$是可逆的。为了方便，我们记$$R = QP$$，那么我们的C.C.R.就变成了

$$
P R P^{-1} = R + i \cdot \mathrm{id}_{\mathscr{H}}
$$

考虑两边算子的谱可以知道：

$$
\sigma(R) = \sigma(PRP^{-1}) = \sigma(R) + i
$$

这意味着，如果$$\lambda$$是$$R$$的一个谱点，那么$$\lambda + i$$也是$$R$$的谱点。所以利用归纳法可以知道，对任意的正整数$$n$$，$$\lambda + ni$$是$$R$$的谱，这样$$R$$的谱$$\sigma(R)$$一定无界。

但由$$R = QP$$和$$P,Q$$是有界算子马上知道，$$R$$是有界算子，进而$$\sigma(R)$$必须是有界集。这样我们就得到了矛盾。

## 一些补充

可以认为这个定理提供了研究无界算子的一个动机：量子力学必须要使用无界算子来描述物理量。

另外注意到有限维空间上的线性算子一定是有界的，所以从这个定理可以得到下面的推论：

> **推论**：如果线性空间$$V$$上的算子$$P, Q$$满足C.C.R.，那么$$V$$一定是一个无穷维（赋范）线性空间。

可以认为这个推论解释了为什么量子力学需要引入Hilbert空间。

此外，在算子$$P, Q$$无界的时候，是有可能满足C.C.R.的，比如取$$\mathscr{H} = \mathcal{L}^2(\mathbb{R})$$，再取

$$
\begin{aligned}
    \big(P\psi\big)(x) & = -i\frac{\mathrm{d}}{\mathrm{d}x}\psi(x) \\
    \big(Q\psi\big)(x) & = x \cdot \psi(x)
\end{aligned}
$$

这时候$$P, Q$$形式上满足C.C.R.。

这里使用了“形式上”三个字是因为，无界算子的C.C.R.不能直接理解成通常的交换子。严格来说，无界算子的C.C.R.要靠有界算子$$e^{iP}, e^{iQ}$$的交换性来定义。这时候，C.C.R.被表述为所谓的[Weyl关系(Weyl relations)](https://en.wikipedia.org/wiki/Canonical_commutation_relation#Weyl_relations)。
