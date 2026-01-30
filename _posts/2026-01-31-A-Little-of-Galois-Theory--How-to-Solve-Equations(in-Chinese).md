---
layout: post
title: A Little of Galois Theory- How to Solve Equations(in Chinese)
date: 2026-01-31 02:27:42
description: A note on how to solve algbraic equations, following the idea of Galois. This is tending to advanced high school students with few knowledge of group theory and fied extensions.
tags:
  
categories: Notes
toc:
  beginning: true
---

这篇笔记受到Kline的《古今数学思想》和[arxiv里一篇文章](https://arxiv.org/abs/1108.4593)的启发，试图用一种不同于教科书且相对初等的办法引入伽罗瓦理论。这篇笔记的一个目的是提供研究伽罗瓦理论的动机，因此内容和教科书相差很大，对系统学习伽罗瓦理论未必有帮助。

> **注记**：相较于这篇笔记，一个更好的阅读材料是Bewersdorff的书[*Galois Theory for Beginners: A Historical Perspective*](https://bookstore.ams.org/view?ProductCode=STML/95)，里面的内容更贴合历史发展，相关的例子和话题更丰富，并且对伽罗瓦理论的介绍会更全面。

我个人希望能让水平较好的高中生读懂这篇笔记的内容，虽然能否成功暂且不提。因此笔记中会将尽量将前置知识限制到大学数学之前，并尽量减少术语（因此不会引入域扩展之类的概念）。一些包含较多术语的内容放在了注记中，跳过它们不会影响阅读。

## 引入

在伽罗瓦之前，方程的求根已经被讨论清楚了：卡丹、费拉里等给出了3、4次方程的求根公式，之后阿贝尔和鲁菲尼证明了5次及以上的方程不可解。伽罗瓦的主要贡献在于提供了一个一般的方法来判断具体的方程(如 $$x^{5}+4x+3=0$$ )是否有（使用根式）求解的办法。

受限于篇幅和精力，我们无法介绍完整的伽罗瓦理论，只能用它来讨论方程的求根公式。具体来说，我们想讨论的问题是：对关于 $$x$$ 的方程

$$
x^{n}-\sigma_{1} x^{n-1}+\sigma_{2} x^{n-2} +\cdots + (-1)^{k}\sigma_{k} x^{n-k} +\cdots + (-1)^{n}\sigma_{n} = 0
$$

假设它有 $$n$$ 个解 $$r_{1},r_{2},\dots,r_{n}$$，那么如果我们将根 $$r_{1},\dots,r_{n}$$ 都视作形式变量（即多项式环的定义中的[未定元](https://en.wikipedia.org/wiki/Polynomial_ring)），那么使用系数 $$\sigma_{1},\dots,\sigma_{n}$$ 、四则运算和开根号，能否表示出 $$r_{1},r_{2},\dots,r_{n}$$？之后我们提到方程的“求根公式”，都按照这个意思理解。

受限于篇幅，我们只能严格说明次数为 $$2,3,4$$ 的方程为何可解。不过里面使用的想法适用于一般的方程。

## 从解方程到群

我们先看如何解方程。

根据韦达定理，$$\sigma_{1},\dots,\sigma_{n}$$ 实际上为 $$r_{1},\dots,r_{n}$$ 的初等对称多项式，即

$$
\sigma_{k} = \sum_{1\leqslant i_{1} < i_{2}<\cdots <i_{k}\leqslant n} r_{i_{1}}r_{i_{2}}\cdots r_{i_{k}}
$$

所以我们实际上想用 $$r_{1},\dots,r_{n}$$ 的初等对称多项式表示出 $$r_{1},\dots,r_{n}$$. 我们稍微改变一下看法，考虑更一般的问题：

## 任意方程的可解性

最后，我们简单介绍一下如何判定某个具体的方程是否有根式解，比如我们假设方程的系数都是有理数，如 $$x^{5} -5x^{4}+5x-1$$. 我们假设方程所有的根为 $$a_{1},\dots,a_{n}$$（$$a_{k}=a_{j}$$ 对应于有重根的情形）. 注意这时候每个 $$a_{k}$$ 都是一个复数，不再能视作多项式的形式变量 $$r_{k}$$.

我们求解的思路还是类似的。我们之前考虑的是所有多项式构成的集合，现在我们考虑有理系数多项式在 $$(a_{1},\dots,a_{n})$$ 处的值构成的集合，也就是：

$$
F = \{f(a_{1},a_{2},\dots,a_{n}) \in \mathbb{C}\mid f \text{ 为有理系数多项式}\}
$$

我们同样可以问，对那些多项式 $$h$$，复数 $$h(a_{1},\dots,a_{n})\in F$$ 可以靠系数作四则运算和开根号得到？

这一问题的回答仍然与 $$h$$ 的对称性有关。不过这时我们关心的是置换群 $$S_{n}$$ 在 $$F$$ 上的作用：

> **定义**(?)：对 $$S_{n}$$ 中的任意置换 $$\tau$$ 和 $$b=f(a_{1},\dots,a_{n}) \in F$$，我们定义 $$\tau$$ 作用在 $$f(a_{1},\dots,a_{n})$$ 上的结果为：
>
> $$
> \tau\cdot b = (\tau\cdot f)(a_{1},\dots,a_{n}) = f(a_{\tau(1)},\dots,a_{\tau(n)})
> $$

很多时候，这一定义会出问题，因为对 $$F$$ 中的元素，将它表示为根的多项式的办法有很多种：

> **例**：考虑一个简单的二次方程：$$x^{2}-1=0$$，它的两个根为
>
> $$
> a_{1}=1,a_{2} = -1
> $$
>
> 这时候 $$F$$ 就是有理数集 $$\mathbb{Q}$$. 考虑 $$F$$ 中元素
>
> $$
> 1 = a_{1} = 2a_{1}-1
> $$
>
> 当我们使用 $$S_{2}$$ 中的对换 $$\pi_{12}$$ 作用时，上面的两种表示会给出不同的结果：
>
> $$
> \pi_{12}\cdot 1 =
> \begin{cases}
> \pi_{12}\cdot a_{1} = a_{2} = -1 \\
> \pi_{12}\cdot (2a_{1}-1) = 2a_{2}-1 = -3 \\
> \end{cases}
> $$
>
> 这样的矛盾是我们不想要的。

解决问题的办法是，我们取 $$S_{n}$$ 的一个子群，使得这个子群按照上面的办法作用在 $$F$$ 上不会出问题。这样的群被称为方程定义的伽罗瓦群

> **定义**(伽罗瓦群)：设某个 $$n$$ 次有理系数方程 $$f=0$$ 的根为$$a_{1},\dots,a_{n}$$. 那么这个方程定义的伽罗瓦群 $$\operatorname{Gal}(f)\subseteq S_{n}$$ 由满足下面条件的置换 $$\tau$$ 构成：
>
> - 对任意两个有理系数多项式 $$g,h$$，如果
>
> $$
> g(a_{1},\dots,a_{n}) = h(a_{1},\dots,a_{n})
> $$
>
>   那么
>
> $$
> (\tau\cdot g)(a_{1},\dots,a_{n}) = (\tau\cdot h)(a_{1},\dots,a_{n}).
> $$
>
> 上面的条件也可以替换为：
>
> - 对任意的有理系数多项式 $$g$$ 使得 $$g(a_{1},\dots,a_{n}) = 0$$，都有 $$(\tau\cdot g)(a_{1},\dots,a_{n}) = 0$$.
>
> 所以
>
> $$
> \begin{aligned}
> \operatorname{Gal}(f) = \{\tau\in S_{n} \mid & \forall g\in \mathbb{Q}[r_{1},\dots,r_{n}],\\
> & g(a_{1},\dots,a_{n})=0 \Rightarrow (\tau\cdot g)(a_{1},\dots,a_{n})=0 \} \\
> \end{aligned}
> $$

可以证明，上面定义的 $$\operatorname{Gal}(f)$$ 的确构成一个群。且此时伽罗瓦群在 $$F$$ 上的作用不会出问题。

然后我们可以证明一个新的“对称多项式基本定理”：

> **定理**：对任意的 $$b\in F$$，它能够靠系数的四则运算得到（即它是有理数）当且仅当它在伽罗瓦群 $$\operatorname{Gal}(f)$$ 的作用下不变，即 $$\tau\cdot b = b ,\forall \tau \in \operatorname{Gal}(f)$$.

这一定理的证明要用到更多内容，读者可以在介绍伽罗瓦理论的教科书中找到（如Artin的[*Algebra*](https://www.amazon.com/Algebra-2nd-Michael-Artin/dp/0132413779)），我们这里略去。

然后我们可以考虑归纳地寻找更多的多项式 $$h$$，使得 $$h(a_{1},\dots,a_{n})$$ 是可以求值的。这部分的过程使用的定理、推导与前面的讨论基本是类似的，所以我们直接给出最终的结果：

> **定理3.2**：一个有理系数方程 $$f=0$$ 有根式解的充分条件是：存在一列群
>
> $$
> \{\operatorname{id}\}=G_{N} \subseteq G_{N-1}\subseteq \cdots \subseteq G_{1} \subseteq G_{0} = \operatorname{Gal}(f)
> $$
>
> 它们满足：对任意的 $$0\leqslant k < N$$，$$G_{k+1}$$ 是 $$G_{k}$$ 的正规子群，且存在 $$G_{k}$$ 中某个置换 $$\tau$$，使得
>
> $$
> G_{k+1},\tau G_{k+1},\tau^{2}G_{k+1},\dots,\tau^{m-1}G_{k+1}
> $$
>
> 的并集为 $$G_{k}$$.
>
> 更进一步，上面的条件也是有根式解的必要条件。

这一定理正是伽罗瓦证明的诸多重要结果之一。
