---
layout: post
title: Deduction of Morse Inequality, Perfect Morse Function and Decomposition into Derict Sum(In Chinese)
date: 2024-10-20 14:30:16
description: Some notes when learning Morse theory for the second time.
tags:
categories: sample-posts
toc:
  beginning: true
---

## 摘要

本文会给出Morse-Bott函数对应的Morse不等式的推导，并由此从代数的角度给出一个Morse-Bott函数是完美的(perfect)的充要条件。我们在推导中假定，下水平集在越过临界点时拓扑上的变化是已经熟知的结论。

## 定义与主定理

Morse理论的大致想法是：通过空间$M$上一个“足够好”的函数$f$（这样的函数通常被叫做Morse-Bott函数）的临界点来描述空间$M$本身的拓扑性质。具体来说，Morse理论中的空间指的是紧致微分流形；一个函数$f$需要满足下面两点才能被叫做“足够好”：

* 函数$f$的临界点集$C_f$的每个连通分支$C_i$都是一个子流形。
* 函数$f$在任意一个临界点$p \in C_i$处的“Hessian矩阵”限制在$C_i$的法丛上非退化。

我们再引入一些定义。

对临界点集的每个联通分支$C_i$，将$f$在$C_i$上的Hessian矩阵的负惯性指数称为$C_i$的指标，一般用$\lambda_{C_i}$来表示。更进一步，在选定了一个黎曼度量之后，可以定义出$C_i$的法丛$\nu_{C_i}$，根据$f$的Hessian矩阵的特征值的正负，我们可以将法丛$\nu_{C_i}$进一步分解成两部分：

$$
\nu_{C_i} = \nu_{C_i}^+ \oplus \nu_{C_i}^-
$$

并用$\theta^{\pm}$表示由$\nu_{C_i}^{\pm}$的定向给出的纤维丛。

对于任意一个拓扑空间$X$和主理想整环$R$，我们可以定义一个无穷形式幂级数$P_t(X; R) \in \mathbb{Z}[[t]]$，它的$k$次项系数正好是第$k$个$R$系数约化奇异上同调群关于$R$的秩，也就是

$$
P_t(X; R) = \sum_{k \geq 0}\mathrm{rank}_R\left(H^k(X; R)\right)\cdot t^k
$$

这个多项式被称作空间$X$的Poincaré多项式。我们后面只会使用到$R$为整数环$\mathbb{Z}$或$\mathbb{Q}$的某个扩域的情形。在不引发歧义的情况下，我们会将Poincaré多项式简记为$P_t(X)$. 在此基础上，我们可以定义一个Morse-Bott函数$f$的Morse多项式

$$
\mathfrak{M}_t(f; R) := \sum_{C_i} t^{\lambda_{C_i}}P_t(C_i; \theta^-\otimes R)
$$

这里的求和是对临界点集$C_f$的全体连通分支$C_i$求和。

在这些定义的基础上，我们可以陈述Morse理论的一个主要结果：

> 对紧致流形$M$和其上的Morse-Bott函数$f$，如果设$f$的临界点的连通分支为$C_1, C_2, \dots, C_N$，那么存在一个以非负整数为系数的无穷形式幂级数$R(t)$，使得$f$的Morse多项式和$M$的Poincaré多项式的差正好是$(1+t)R(t)$，也就是
>
> $$
> \mathfrak{M}_t(f;R)-P_t(M; R) = (1+t)R(t)
> $$
>
> 这里$R$是整数环$\mathbb{Z}$或有理数域$\mathbb{Q}$的扩域。

这被称作Morse不等式，是本文的主定理。

## 主定理的证明

为了后面叙述的方便，我们再引入一些定义。

对于一个函数$f: M \rightarrow \mathbb{R}$，将集合$f^{-1}(-\infty, a)$称作$f$的下水平集，记作$M^a$.

我们的证明需要用到下面的引理：

> 对紧致流形$M$和其上的Morse-Bott函数$f$：
>
> (1)如果$f$在$[a, b]$中无临界值，那么$M^b$与$M^a$同伦等价。
>
> (2) 如果$f$在区间$[a, b]$的临界值只有$c_0 \in (a, b)$，设$C$是取值为$c_0$的那些临界点，那么有空间的同伦等价：
>
> $$
> M^b \sim M^a \cup_{\phi} \nu_{C}^-
> $$
>
> 这里$\phi: \partial \nu_{C}^- \rightarrow M^a$是一个光滑映射。

我们略去引理的证明。

因为流形是紧致的，所以我们可以构造一列下水平集

$$
\emptyset \subset \cdots \subset M^{a} \subset M^{b} \subset M^c \subset \cdots \subset M
$$

使得任何两个相邻下水平集之间只有一个$f$的临界值。我们希望对这一列下水平集归纳地证明

$$
\mathfrak{M}_t(f|_{M^a};R)-P_t(M^a; R) = (1+t)R_a(t)
$$

其中$f|_{M^a}$表示$f$在$M^a$上的限制。归纳的奠基是容易的，我们主要看如何从$M^a$上的等式到$M^b$上的等式。

对两个相邻的下水平集$M^a \subset M^b$，设其间的临界点集为$C$. 通过对$f$作微扰，我们可以不妨假定$C$是连通的。为了展示证明的主要想法，我们进一步假设$\nu_C^-$是可定向向量丛。这一节最后的注记解释了处理不可定向的情况的方法。

首先，空间对$(M^b, M^a)$诱导了长正合列：

$$
\cdots \xrightarrow{\delta^*_{k-1}} H^k(M^b, M^a) \xrightarrow{q^*_k} H^k(M^b) \xrightarrow{i^*_k} H^k(M^a) \xrightarrow{\delta^*_k} \cdots
$$

利用引理以及Thom同构，我们知道$H^k(M^b, M^a)$和$H^{k-\lambda_C}(C)$同构。因此上面的长正合列变成了：

$$
\cdots \xrightarrow{\delta^*_{k-1}} H^{k - \lambda_C}(C) \xrightarrow{q^*_k} H^k(M^b) \xrightarrow{i^*_k} H^k(M^a) \xrightarrow{\delta^*_k} \cdots
$$

我们来看长正合列中的每个映射，它们给出了一系列短正合列：

$$
0 \rightarrow \ker i^*_k \rightarrow H^k(M^b) \rightarrow \mathrm{im}\ i^*_k \rightarrow 0
$$

$$
0 \rightarrow \ker q^*_k \rightarrow H^{k-\lambda_C}(C) \rightarrow \mathrm{im}\ q^*_k \rightarrow 0
$$

$$
0 \rightarrow \ker \delta^*_k \rightarrow H^k(M^a) \rightarrow \mathrm{im}\ \delta^*_k \rightarrow 0 \\
$$

进而可以得到等式：

$$
\begin{matrix}
    \mathrm{rank}\left(\ker i^*_k \right) + \mathrm{rank}\left(\mathrm{im}\ i^*_k \right) &=& \mathrm{rank}\left(H^k(M^b) \right) \\
    \mathrm{rank}\left(H^{k-\lambda_C}(C) \right) &=&\mathrm{rank}\left(\ker q^*_k \right) + \mathrm{rank}\left(\mathrm{im}\ q^*_k\right) \\
    \mathrm{rank}\left(H^k(M^a) \right) &=& \mathrm{rank}\left(\ker \delta^*_k \right) + \mathrm{rank}\left(\mathrm{im}\ \delta^*_k \right) \\
\end{matrix}
$$

将上面三个等式相加，并利用长正合列将所有的“$\ker$”都替换为“$\mathrm{im}$”后得到：

$$
\begin{aligned}
    &\mathrm{rank}\left(H^{k - \lambda_C}(C) \right) - \Bigl(\mathrm{rank}\left(H^k(M^b) \right) - \mathrm{rank}\left(H^k(M^a) \right) \Bigr) \\
    & =\mathrm{rank}\left(\mathrm{im}\ \delta^*_{k-1} \right) + \mathrm{rank}\left(\mathrm{im}\ \delta^*_k \right)
\end{aligned}
$$

在上面的等式两边同时乘以$t^k$，并对$k$求和就得到：

$$
t^{\lambda_C} P_t(C)-\left(P_t(M^b) - P_t(M^a)\right) = (1+t)R_C(t)
$$

其中$R_C(t) = \sum_{k \geq 0} t^k \mathrm{rank}\left(\mathrm{im}\ \delta^*_k \right)$是一个非负整数系数的形式幂级数。因为$C$是$M^a$与$M^b$之间唯一的临界点集，所以$t^{\lambda_C}P_t(C)$就是$f|_{M^b}$的Morse多项式和$f|_{M^a}$的Morse多项式的差，进而上面的等式可以写成

$$
\begin{aligned}
    &\mathfrak{M}_t(f|_{M^b};R)-P_t(M^b; R)\\
    & = \bigl(\mathfrak{M}_t(f|_{M^a};R)-P_t(M^a; R)\bigr) + (1+t)R_C(t)\\
\end{aligned}
$$

利用这一等式，我们可以很轻松地完成归纳。

### 注记

有读者会注意到，我们在定义Morse多项式时，用到了向量丛$\nu_C^-$的定向丛$\theta^-$，但证明中却没有出现这一纤维丛，这是因为我们在证明中假定了向量丛$\nu_C^-$是可定向的。在不可定向的时候，我们需要用到twisted-Thom同构：

$$
H^*(\nu_C^-, \partial \nu_C^-; R) \cong H^{* - \lambda_C}(C; \theta^- \otimes R)
$$

这时候就会出现$\nu_C^-$的定向丛$\theta^-$.

在系数环$R$是实数域$\mathbb{R}$的时候，可以在Bott和Tu所著的书*Differential Forms in Algebraic Topology*中第一章最后一节找到这一同构的证明。

## 完美Morse函数

我们称一个Morse-Bott函数$f: M \rightarrow \mathbb{R}$是完美的(perfect)，如果它的Morse多项式正好等于$M$的Poincaré多项式。

根据上面的证明，我们知道，一个Morse-Bott函数$f$是完美的当且仅当对每个临界点集$C$，我们定义的多项式$R_C(t)$等于0. 这可以总结为下面的结论：

> 以下几个命题彼此等价：
>
> (1)一个函数$f: M \rightarrow \mathbb{R}$是完美的Morse-Bott函数
>
> (2)对临界点集的每个连通分支$C$和长正合列
>
> $$
> \cdots \xrightarrow{\delta^*_{k-1}} H^{k - \lambda_C}(C) \xrightarrow{q^*_k} H^k(M^b) \xrightarrow{i^*_k} H^k(M^a) \xrightarrow{\delta^*_k} \cdots
> $$
>
> 中的映射$\delta^*_k$，有$\mathrm{rank}\left(\mathrm{im}\ \delta^*_k \right) = 0$.
>
> (3)对每个$k$，上面长正合列中的映射$\delta^*_k$的像集由挠元素构成。

当上同调的系数环被选取为有理数域$\mathbb{Q}$或者它的扩域时，上同调环始终是无挠的，所以我们得到了：

> 在有理数域的扩域中，以下结论彼此等价：
>
> (1)一个函数$f: M \rightarrow \mathbb{R}$是完美的Morse-Bott函数
>
> (2)对临界点集的每个连通分支$C$和长正合列
>
> $$
> \cdots \xrightarrow{\delta^*_{k-1}} H^{k - \lambda_C}(C) \xrightarrow{q^*_k} H^k(M^b) \xrightarrow{i^*_k} H^k(M^a) \xrightarrow{\delta^*_k} \cdots
> $$
>
> 中的每个映射$\delta^*_k$，它的像是$0$.
>
> (3)上面的长正合列可以分裂为短正合列
>
> $$
> 0 \rightarrow H^{*-\lambda_C}(C) \xrightarrow{q^*} H^*(M^b) \xrightarrow{i^*} H^*(M^a) \rightarrow 0
> $$

注意到域系数的短正合列一定是分裂的，所以如果一个Morse函数$f$是完美的，下水平集每跨过一个临界点的一个连通分支，我们就能得到一个直和分解

$$
H^*(M^b) \cong H^{*-\lambda_C}(C)\oplus H^*(M^a)
$$

进而可以知道，我们有直和分解：

$$
H^*(M) \cong \bigoplus_{C_i} H^{*-\lambda_{C_i}}(C_i)
$$

这个等式相当于说，一个流形上的完美的Morse-Bott函数的临界点集几乎确定了这个流形的域系数上同调群。这里使用“几乎”是因为，上面的同构并不是典范的，这个同构依赖于归纳过程中将$M^a$的上同调群嵌入到$M^b$的上同调群的方式。
