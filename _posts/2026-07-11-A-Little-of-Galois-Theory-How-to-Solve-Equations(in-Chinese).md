---
layout: post
title: A Little of Galois Theory-How to Solve Equations(in Chinese)
date: 2026-07-11 06:49:06
description: A note on how to solve algebraic equations, following the idea of Galois. This is tending to advanced high school students with few knowledge of group theory and field extensions.
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

- 对一个关于 $$r_{1},r_{2},\dots,r_{n}$$ 的多项式 $$f(r_{1},\dots,r_{n})$$，它能否靠 $$\sigma_{1},\dots,\sigma_{n}$$ 的有限次四则运算和开根号得到？（为了叙述方便，我们之后称这样的多项式是可求值的。）

对这个问题，我们已经有了部分的答案：对所谓的“对称”多项式，上面问题的回答是肯定的，也就是

> **定理**（对称多项式基本定理）：如果多项式 $$f(r_{1},\dots,r_{n})$$ 是对称的，也就是如果交换任意两个变元 $$r_{i},r_{j}$$ 的位置后，多项式不变
>
> $$
> f(r_{1},\dots,r_{i},\dots,r_{j},\dots,r_{n}) = f(r_{1},\dots,r_{j},\dots,r_{i},\dots,r_{n})
> $$
>
> 那么 $$f$$ 可以表示为有关 $$\sigma_{1},\dots,\sigma_{n}$$ 的多项式。特别的，$$f$$ 是可求值的。

这一定理的[证明和例子](https://zhuanlan.zhihu.com/p/141923148)可以在网上找到，并且是完全初等的，我们这里略去。

> **注记**：用伽罗瓦理论的语言来说，这一定理说明了域扩张 $$\mathbb{C}(r_{1},\dots,r_{n})/\mathbb{C}(\mathbb{\sigma_{1},\dots,\sigma_{n}})$$ 的伽罗瓦群就是 $$S_{n}$$.

注意我们还可以对多项式开根号，所以如果一个多项式

$$
g=g(r_{1},\dots,r_{n})
$$

的某个方幂 $$g^{m}$$ 是对称多项式，那么 $$g$$ 也是可求值的。

> **例**（判别式）：对任意的 $$n$$ 次方程，我们考虑多项式
>
> $$
> \delta = \prod_{i<j}(r_{i}-r_{j}),\qquad \Delta = \delta^{2}
> $$
>
> 比如在 $$n=2,3$$ 时，对应的 $$\delta$$ 如下表所示
>
> |$$n$$|$$\delta$$|$$\Delta$$|
> |:-:|:-:|:-:|
> |2|$$r_{1}-r_{2}$$|$$r_{1}^{2}+r_{2}^{2}-2r_{1}r_{2} = \sigma_{1}^{2}-4\sigma_{2}$$|
> |3|$$(r_{1}-r_{2})(r_{2}-r_{3})(r_{1}-r_{3})$$|$$\cdots$$|
>
> 这时可以验证，$$\delta^{2}=\Delta$$ 是一个对称多项式（ $$\Delta$$ 被称为判别式）。所以 $$\delta=\sqrt{\Delta}$$ 是可求值的。
>
> **例**（二次方程）：我们试着把上面的思路用到二次方程上。根据前一个例子，我们知道 $$\delta = r_{1}-r_{2}$$ 是可求值的，这时候根据韦达定理：
>
> $$
> r_{1} + r_{2} = \sigma_{1}, \qquad r_{1}-r_{2} = \delta = \sqrt{\Delta}
> $$
>
> 注意这两个关于 $$r_{1},r_{2}$$ 的方程右边都是已知的，所以解方程组可以得到
>
> $$
> r_{1} = \frac{\sigma_{1} + \sqrt{\Delta}}{2},\quad r_{2} = \frac{\sigma_{1} - \sqrt{\Delta}}{2}
> $$
>
> 进一步化简就能得到二次方程的求根公式。

现在假设我们找到了某个不对称的多项式 $$g_{1}$$，使得 $$g_{1}^{m}$$ 是对称的，那 $$g_{1}$$ 可求值，且它与系数的四则运算会给出更多可求值的多项式。但这并不能让我们完全解出方程。所以我们试图重复上面的过程，问：

- 当一个多项式满足什么条件的时候，它可以表示为 $$\sigma_{1},\dots,\sigma_{n},g_{1}$$ 的多项式？
- 是否存在一个多项式 $$g_{2}$$，它不可以被表示为 $$\sigma_{1},\dots,\sigma_{n},g_{1}$$ 的多项式，但它的某个幂次 $$g_{2}^{m'}$$ 可以？

一般地，假如我们归纳地找到了一些可求值的多项式 $$g_{1},g_{2},\dots,g_{k}$$，那么我们后面关心下面两个问题：

- 一个多项式满足什么条件时，可以被表示为有关 $$\sigma_{1},\dots,\sigma_{n},g_{1},\dots,g_{k}$$ 的多项式？
- 是否存在一个多项式 $$g_{k+1}$$，它不可以被表示为 $$\sigma_{1},\dots,\sigma_{n},g_{1},\dots,g_{k}$$ 的多项式，但它的某个幂次 $$g_{k+1}^{m'}$$ 可以？

第二个问题的答案基本上决定了我们能否解出方程：假如它的回答是肯定的，那么我们可以不断地找出可求值的多项式，直到解出方程；而如果它的答案是否定的，那再经过一些论证就可以说明方程没有根式解。

> **注记**：了解过伽罗瓦理论的读者容易看出，上面第一个问题的回答需要伽罗瓦群
>
> $$
> G=\operatorname{Gal}\bigl(\mathbb{C}(r_{1},\dots,r_{n})/\mathbb{C}(\sigma_{1},\dots,\sigma_{n},g_{1},\dots,g_{k})\bigr)
> $$
>
> 因为加入 $$r_{1},\dots,r_{n}$$ 得到的域扩张是伽罗瓦扩张，所以一个多项式落在域 $$\mathbb{C}(\sigma_{1},\dots,\sigma_{n},g_{1},\dots,g_{k})$$ 中当且仅当它在 $$G$$ 的作用下不变。此外，根据伽罗瓦群的定义，我们还知道，群 $$G\subseteq S_{n}$$ 由那些保持 $$g_{1},\dots,g_{k}$$ 不变的置换构成。

在介绍一般的理论前，我们先来看一个具体的例子：三次方程。

### 例子：三次方程与拉格朗日预解式

我们已经知道了判别式的平方根 $$\delta = \sqrt{\Delta}$$ 是可求值的，这时候伽罗瓦理论给出了第一个问题的回答：

> **引理**：如果一个多项式 $$f(r_{1},r_{2},r_{3})$$ 是轮换对称的，也就是
>
> $$
> f(r_{1},r_{2},r_{3}) = f(r_{2},r_{3},r_{1}) = f(r_{3},r_{1},r_{2})
> $$
>
> 那么它可以由系数 $$\sigma_{1},\sigma_{2},\sigma_{3}$$ 和 $$\delta$$ 做四则运算得到。

一些简单的轮换对称多项式包括

$$
\begin{gathered}
 r_{1}^{2}r_{2}+r_{2}^{2}r_{3}+r_{3}^{2}r_{1} \\
 r_{1}r_{2}^{2}+r_{2}r_{3}^{2}+r_{3}r_{1}^{2} \\
 r_{1}^{3}r_{2}^{2}r_{3} + r_{2}^{3}r_{3}^{2}r_{1}+r_{3}^{3}r_{1}^{2}r_{2} \\
\end{gathered}
$$

我们这里简要给出引理的证明，它实际上来自于一般情形的证明。

> **证明**：当 $$f(r_{1},r_{2},r_{3})$$ 轮换对称时，那么交换 $$r_{1},r_{2}$$ 之后得到的多项式 $$f(r_{2},r_{1},r_{3})$$ 也是轮换对称的（例如在 $$r_{1}^{2}r_{2}+r_{2}^{2}r_{3}+r_{3}^{2}r_{1}$$ 中交换 $$r_{1},r_{2}$$ 就得到了 $$r_{1}r_{2}^{2}+r_{2}r_{3}^{2}+r_{3}r_{1}^{2}$$.），这是因为我们可以在轮换对称性的等式中将 $$r_{1},r_{2},r_{3}$$ 分别替换为 $$r_{2},r_{1},r_{3}$$.
>
> 我们考虑下面两个多项式（它们实际上受到后面Lagrange预解式的启发）：
>
> $$
> \begin{aligned}
> F_{1} & = f(r_{1},r_{2},r_{3})+f(r_{2},r_{1},r_{3}) \\
> F_{2} & = \delta\cdot\bigl(f(r_{1},r_{2},r_{3})-f(r_{2},r_{1},r_{3})\bigr)
> \end{aligned}
> $$
>
> 利用 $$f(r_{1},r_{2},r_{3})$$ 和 $$f(r_{2},r_{1},r_{3})$$ 的轮换对称性可以证明 $$F_{1},F_{2}$$ 是对称多项式（请读者自行验证），所以根据多项式基本定理，$$F_{1},F_{2}$$ 可以写成 $$\sigma_{1},\sigma_{2},\sigma_{3}$$ 的多项式，进而
>
> $$
> f(r_{1},r_{2},r_{3}) = \frac{1}{2}\left(F_{1}+\frac{F_{2}}{\delta}\right)
> $$
>
> 可以靠 $$\sigma_{1},\sigma_{2},\sigma_{3}$$ 和 $$\delta$$ 做四则运算得到。

第二个问题的回答来自于拉格朗日，他提出了所谓的拉格朗日预解式

$$
\begin{aligned}
 g_{2}(r_{1},r_{2},r_{3}) & = \varepsilon^{1} \cdot r_{1} + \varepsilon^{2}\cdot r_{2} + \varepsilon^{3} \cdot r_{3} \\
 g_{3}(r_{1},r_{2},r_{3}) & = \left(\varepsilon^{2}\right)^{1} \cdot r_{1} + \left(\varepsilon^{2}\right)^{2}\cdot r_{2} + \left(\varepsilon^{2}\right)^{3} \cdot r_{3} \\
\end{aligned}
$$

其中 $$\varepsilon = e^{2\pi i/3} \in \mathbb{C}$$ 是三次(本原)单位根。

拉格朗日预解式本身并不是对称的，因为经过直接的计算可以得到

$$
\begin{gathered}
 g_{2}(r_{1},r_{2},r_{3}) = \frac{1}{\varepsilon}g_{2}(r_{2},r_{3},r_{1}) = \frac{1}{\varepsilon^{2}}g_{2}(r_{3},r_{1},r_{2}) \\
 g_{3}(r_{1},r_{2},r_{3}) = \frac{1}{\varepsilon^{2}}g_{3}(r_{2},r_{3},r_{1}) = \frac{1}{\left(\varepsilon^{2}\right)^{2}}g_{3}(r_{3},r_{1},r_{2}) \\
\end{gathered}
$$

但因为 $$\varepsilon$$ 是三次单位根，所以从上面两个等式很容易看出来，$$g_{2}^{3},g_{3}^{3}$$ 都是轮换对称的，进而我们知道 $$g_{2},g_{3}$$ 都是可求值的。

这时我们知道的信息已经足够让我们求解出三个根 $$r_{1},r_{2},r_{3}$$，因为根据韦达定理和两个拉格朗日预解式，我们有关于 $$r_{1},r_{2},r_{3}$$ 的方程组

$$
\left\{
\begin{aligned}
 &r_{1} & + & r_{2} & + & r_{3} & = \sigma_{1}\\
 \varepsilon^{1} \cdot & r_{1} & + \varepsilon^{2}\cdot & r_{2} & + \varepsilon^{3} \cdot & r_{3} & = g_{2}\\
 \left(\varepsilon^{2}\right)^{1} \cdot & r_{1} & + \left(\varepsilon^{2}\right)^{2}\cdot & r_{2} & + \left(\varepsilon^{2}\right)^{3} \cdot & r_{3} & = g_{3} \\
\end{aligned}\right.
$$

这一方程组的右端都是可求值的，这样就能解出 $$r_{1},r_{2},r_{3}$$.

至此，我们的思路成功地解出了三次方程。

### 根的置换与多项式的对称性

我们现在回到一般情形的讨论。三次方程的例子让我们相信，我们之前提出的第一个问题的回答会是

> **(伪)定理**：如果一个多项式 $$f(r_{1},\dots,r_{n})$$ 具有某种对称性，那么它可以由系数 $$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1},\dots,g_{k}$$ 做四则运算得到。

为了系统陈述什么是定理陈述中的“对称性”，我们需要借助置换的语言。

> **注记**：有一件事我们仍然没有解释：伽罗瓦理论提醒我们研究对称性，那谁来提醒伽罗瓦研究对称性？这篇笔记不会给出这一问题的回答。我们只是指出，拉格朗日在伽罗瓦之前就注意到了多项式对称性和方程的联系，例如一个归功于拉格朗日的定理是，如果一个多项式经过交换变元的操作后能得到 $$m$$ 个不同的多项式，那么它可以写成一个 $$m$$ 次方程的解，且这个方程的系数都是对称多项式。之后阿贝尔（以及伽罗瓦）的工作中也出现了部分与拉格朗日类似的想法。

我们把一个从 $$\{1,2,\dots,n\}$$ 到自身的双射称为一个( $$n$$ 元)置换，并将所有 $$n$$ 元置换构成的集合称为 $$S_{n}$$，即

$$
S_{n} = \{\tau\colon \{1,2,\dots,\} \rightarrow \{1,2,\dots,n\} \mid \tau \text{为双射}\}
$$

我们将保持每个元素不动的置换记为 $$\operatorname{id}$$，称为恒同映射。一个简单的观察是，两个置换 $$\tau,\tau'$$的复合

$$
\tau\circ\tau' \colon i \longmapsto \tau(\tau'(i))
$$

仍然是一个置换，且每个置换 $$\tau$$ 都有一个逆映射 $$\tau^{-1}$$ （称为 $$\tau$$ 的逆），满足

$$
\tau\circ \tau^{-1} = \tau^{-1}\circ \tau = \operatorname{id}.
$$

> **注记**：上面的性质表明 $$S_{n}$$ 是一个“群”，但我们暂时不引入群论的语言，因为这里并没有充足的动机来研究群——我们现在所做的事情不过是起名字罢了。

每个置换 $$\tau$$ 都给出了一种变量替换的方式

$$
r_{1},r_{2},\dots,r_{n} \leadsto r_{\tau(1)},r_{\tau(2)},\dots, r_{\tau(n)}
$$

因此对每个多项式 $$f=f(r_{1},\dots,r_{n})$$，我们可以定义 $$\tau$$ 对它的作用：

$$
(\tau\cdot f) = f(r_{\tau(1)},r_{\tau(2)},\dots,r_{\tau(n)}).
$$

这给出了重新叙述对称性的办法。

> **例**(1)：取 $$\tau \in S_{3}$$ 为
>
> $$
> \tau(1) = 2,\quad \tau(2) = 3,\quad \tau(3) = 1
> $$
>
> 我们对 $$r_{1},r_{2},r_{3}$$ 的轮换
>
> $$
> r_{1},r_{2},r_{3} \leadsto r_{2},r_{3},r_{1}
> $$
>
> 可以用 $$\tau$$ 来表示：
>
> $$
> r_{1},r_{2},r_{3} \leadsto r_{\tau(1)},r_{\tau(2)},r_{\tau(3)}
> $$
>
> 这样一个多项式 $$f=f(r_{1},r_{2},r_{3})$$ 具有轮换对称性就可以写为
>
> $$
> f = \tau \cdot f = \tau^{2} \cdot f
> $$
>
> 这里 $$\tau^{2} = \tau \circ \tau$$. 所以我们可以说：
>
> $$
> \begin{aligned}
> f \text{ 轮换对称} & \Longleftrightarrow f \text{ 在 }\operatorname{id},\tau,\tau^{2} \text{ 的作用下不变}\\
> & \Longleftrightarrow f \text{ 在集合 }\{\operatorname{id},\tau,\tau^{2}\} \text{ 的作用下不变}
> \end{aligned}
> $$
>
> **例**(2)：对 $$1\leqslant i<j \leqslant n$$，我们取映射
>
> $$
> \begin{aligned}
> \pi_{ij}\colon \{1,2,\dots,n\} & \longrightarrow \{1,2,\dots,n\} \\
> \ell & \longmapsto \ell, \quad \forall \ell \neq i,j\\
> i & \longmapsto j \\
> j & \longmapsto i \\
> \end{aligned}
> $$
>
> 称$$\pi_{ij}$$为对换（因为它只交换一对数）。那么交换 $$r_{i},r_{j}$$ 等同于变量替换：
>
> $$
> r_{1},r_{2},\dots,r_{n} \leadsto r_{\pi_{ij}(1)},r_{\pi_{ij}(2)},\dots,r_{\pi_{ij}(n)}.
> $$
>
> 所以一个多项式 $$f$$ 是对称多项式当且仅当它在每个 $$\pi_{ij}$$ 的作用下不变。
>
> 我们还可以证明：对根的任何一个置换可以由有限次对换得到（读者可以自行尝试证明）。因为对称多项式 $$f$$ 在每一次对换下都不变，所以它在任意的置换下都不变，也就是
>
> $$
> \begin{aligned}
> f \text{ 是对称的} & \Longleftrightarrow f \text{ 在任意置换下不变}\\
> & \Longleftrightarrow f \text{ 在 } S_{n} \text{ 的作用下不变}
> \end{aligned}
> $$

仿照上面两个例子，我们可以用 $$S_{n}$$ 的子集来描述一个多项式的对称性：

> **定义**：对 $$S_{n}$$ 的子集 $$A$$ 和一个$$n$$元多项式 $$f$$，称 $$f$$ 具有$$A$$-对称性，如果 $$f$$ 在 $$A$$ 的作用下不变，即对 $$A$$ 中任意置换 $$\tau$$，都有 $$\tau \cdot f= f$$.

这里我们不对子集 $$A$$ 做任何要求。这会导致一些小问题。我们马上会指出来。

### 群与对称性

> **注记**：我个人认为此时引入群的动机仍然不算充分，不过为了缩短后面内容的长度，我们将“分类不同的对称性”作为引入群的动机。

如果计算具体的例子，我们会发现使用 $$S_{n}$$ 的子集定义的对称性有一个不足之处：对于两个不同的子集 $$A,B$$，$$A$$-对称性与$$B$$-对称性可能是一样的。

> **例**：和前面例子一样，用$$\pi_{ij}$$表示交换$$i,j$$的对换。我们取 $$A,B\subseteq S_{3}$$ 为
>
> $$
> A = \{\pi_{12},\pi_{23}\}, \qquad B = \{\pi_{12},\pi_{13}\}
> $$
>
> 这时候 $$f$$ 具有 $$A$$-对称性意味着 $$f$$ 在交换前两个变元或者交换后两个变元后不变，于是有
>
> $$
> \begin{matrix}
> \pi_{13}\cdot f & = & f(r_{3},r_{2},r_{1}) \\
> & \overset{\text{交换前两个}}{=} & f(r_{2},r_{3},r_{1}) \\
> & \overset{\text{交换后两个}}{=} & f(r_{2},r_{1},r_{3}) \\
> & \overset{\text{交换前两个}}{=} & f(r_{1},r_{2},r_{3}) \\
> & = & f
> \end{matrix}
> $$
>
> 所以 $$f$$ 在 $$\pi_{13}$$ 作用下也不变，进而 $$f$$ 也具有 $$B$$-对称性。
>
> 反之，在 $$f$$ 具有 $$B$$-对称性时，类似的有
>
> $$
> \begin{matrix}
> \pi_{23}\cdot f & = & f(r_{1},r_{3},r_{2}) \\
> & \overset{\text{交换首尾}}{=} & f(r_{2},r_{3},r_{1}) \\
> & \overset{\text{交换前两个}}{=} & f(r_{3},r_{2},r_{1}) \\
> & \overset{\text{交换首尾}}{=} & f(r_{1},r_{2},r_{3}) \\
> & = & f
> \end{matrix}
> $$
>
> 因此 $$f$$ 也具有 $$A$$-对称性。

所以一个可以考虑的支线问题是，多项式的互不等价的对称性有哪些？

我们先来看看上面是怎么证明两个对称性等价的：我们例子中最主要的推导是基于下面的原理：

> *如果一个多项式在两种置换下都不变，那么对它依次进行这两种置换后（也就是将两个置换复合后作用到多项式上），它也不变*

它的更准确陈述是这个未证明的性质

> **性质**：如果多项式 $$f$$ 在置换 $$\tau,\tau'$$ 的作用下均不变，那么 $$f$$ 在 $$\tau\circ\tau',\tau^{-1}$$ 的作用下也不变。

如果读者相信上面的原理是正确的，那么这一定理就是不证自明的。不过我们这里还是给出一个证明办法，里面用到的引理在后面的推导中会被反复使用。

> **证明**：我们先证明一个引理，它让我们在后续推导中可以假装忘记了“置换在多项式的作用”上的定义，只使用更简单的规则。
>
>> **引理**：我们前面给出的“置换在多项式上的作用”满足下面的性质：
> >
>> - 对任意的置换 $$\tau$$ 和任意两个多项式 $$f,g$$，有
> >
>> $$
>> \begin{aligned}
>> \tau\cdot \left(f+g\right) & = \left(\tau\cdot f\right)+\left(\tau \cdot g\right) \\
>> \tau\cdot \left(fg\right) & = \left(\tau\cdot f\right)\left(\tau \cdot g\right) \\
>> \end{aligned}
>> $$
> >
>> - 对任意两个置换 $$\tau,\tau'$$ 和任意一个多项式 $$f$$，有
> >
>> $$
>> \tau\cdot \left(\tau'\cdot f\right) = \left(\tau\circ\tau'\right)\cdot f
>> $$
> >
>> **引理的证明**：只需要按照定义验证即可证明第一个性质，我们将它留给读者。我们证明第二个性质。
> >
>> 先考虑特殊的多项式 $$r_{i}$$. 按照群作用的定义，有
> >
>> $$
>> \tau\cdot(\tau'\cdot r_{i}) = \tau\cdot r_{\tau'(i)} = r_{\tau(\tau'(i))} = (\tau\circ\tau')\cdot r_{i}.
>> $$
> >
>> 也就是第二个性质对 $$r_{i}$$ 成立。现在假设第二个性质对两个多项式 $$f,g$$都成立，那么有
> >
>> $$
>> \begin{aligned}
>> \tau\cdot(\tau'\cdot(f+g)) & = \tau\cdot(\tau'\cdot f + \tau'\cdot g) \\
>> & = \tau\cdot(\tau'\cdot f) + \tau\cdot(\tau'\cdot g) \\
>> & = (\tau\circ\tau')\cdot f + (\tau\circ\tau')\cdot g \\
>> & = (\tau\circ\tau')\cdot (f+g) \\
>> \tau\cdot(\tau'\cdot (fg)) & = \tau\cdot\bigl((\tau'\cdot f)(\tau'\cdot g)\bigr) \\
>> & = \bigl(\tau\cdot(\tau'\cdot f)\bigr)\bigl(\tau\cdot(\tau'\cdot g)\bigr) \\
>> & = \bigl((\tau\circ\tau')\cdot f\bigr) \bigl((\tau\circ\tau')\cdot g\bigr) \\
>> & = (\tau\circ\tau')\cdot (fg) \\
>> \end{aligned}
>> $$
> >
>> 也就是第二个性质对 $$f+g$$ 和 $$fg$$ 也成立。因为任意多项式都可以写成 $$r_{i}$$ 的一些有限次乘积的和，所以我们知道第二个性质对任意的多项式都成立。
>
> 回到原本的证明：$$f$$ 在 $$\tau,\tau'$$ 下不变表明：
>
> $$
> \tau\cdot f = f,\qquad \tau'\cdot f = f
> $$
>
> 因此有
>
> $$
> (\tau\circ\tau') \cdot f = \tau \cdot(\tau'\cdot f) = \tau\cdot f = f
> $$
>
> 这里第一个等号用到了上面的引理。此外有
>
> $$
> \tau^{-1}\cdot f = \tau^{-1}\cdot (\tau\cdot f) = (\tau^{-1}\circ\tau)\cdot f = \operatorname{id}\cdot f = f.
> $$
>
> 这里第二个等号用到了上面的引理。

所以对 $$S_{n}$$ 的任意一个集合 $$A$$ 和其中任意两个置换$$\tau,\tau'$$，上面的定理告诉我们，将 $$\tau\circ\tau',\tau^{-1}$$ 加入 $$A$$ 后，定义出的对称性和原先是等价的，于是我们可以利用复合和取逆映射不断向 $$A$$ 中加入元素，得到一个“极大”的集合

$$
\langle A\rangle = \{\tau_{1}^{s_{1}}\circ\tau_{2}^{s_{2}}\circ\cdots\circ\tau_{l}^{s_{l}} \mid l \in \mathbb{N}, \tau_{i}\in A, s_{i} = \pm 1\}
$$

它定义的对称性和 $$A$$ 定义的对称性是等价的。所以我们真正需要讨论的是那些形如 $$\langle A\rangle$$ 的集合。下面的结论给出了这些集合的另一种刻画方式：

> **性质&定义**：$$S_{n}$$ 的子集$$G$$能够被写成 $$\langle A\rangle$$ 的形式，当且仅当它对复合和取逆映射封闭，也就是对任意的 $$\tau,\tau'\in G$$，有
>
> $$
> \tau\circ\tau',\tau^{-1} \in G.
> $$
>
> 为了叙述的方便，我们称满足上面条件的子集 $$G$$ 为一个群(group)。特别的，$$S_{n}$$本身构成一个群，我们称它为$$n$$元置换群。对两个有包含关系的群 $$G \subseteq H$$（如任意一个群都包含在某个 $$S_{n}$$ 中），我们称 $$G$$ 是 $$H$$ 的子群。
>
> **证明**：这里只给出证明思路。
>
> 一方面，如果 $$G=\langle A\rangle$$，那么可以将 $$G$$ 中置换 $$\tau,\tau'$$ 可以写成 $$A$$ 中一些置换(和它们的逆)的复合，然后不难验证 $$\tau\circ\tau',\tau^{-1}$$ 也可以写成 $$A$$ 中一些置换(和它们的逆)的复合。
>
> 另一方面，当 $$G$$ 对复合和取逆映射封闭时，我们可以验证 $$G = \langle G\rangle$$.

我们这里对群的定义等价于现在的有限群，我们的定义是相当具体的：群就是 $$S_{n}$$ 的特殊子集。相较于现在教科书中对群的定义，这个定义更接近[伽罗瓦时代对群的理解](https://www.jstor.org/stable/2972411).

可以证明，如果使用子群来定义对称性，那么 $$S_{n}$$ 的子群完全分类了多项式的所有（置换）对称性。

> **定理0**：设 $$G,H$$ 是 $$S_{n}$$ 的两个子群，那么多项式的 $$H$$-对称性等价于 $$G$$-对称性的充分必要条件是 $$G=H$$.
>
> **证明**：在 $$G=H$$ 时，显然它们定义了相同的对称性。下面假设 $$G \neq H$$，不失一般性，不妨设 $$G$$ 中某个置换 $$\tau$$ 不属于 $$H$$. 我们下面证明存在一个多项式，它在 $$H$$ 的作用下不变，但在 $$G$$ 的作用下改变。对每个 $$\rho \in H$$，我们取多项式
>
> $$
> g_{\rho} = \sum_{j=1}^{n}\bigl(r_{j}-\rho(j)\bigr)^{2}
> $$
>
> 注意 $$\rho(j)$$ 都是整数，所以 $$g_{\rho}$$ 的定义是合理的。我们定义 $$f$$ 为所有 $$g_{\rho}$$ 的乘积。我们先验证 $$f$$ 在 $$H$$ 的作用下不变。
>
> 对任意的 $$\rho' \in H$$，我们有：
>
> $$
> \begin{aligned}
> \rho'\cdot g_{\rho} & = \sum_{j=1}^{n}\bigl(r_{\rho'(j)}-\rho(j)\bigr)\\
> & = \sum_{j=1}^{n}\left(r_{\rho'(j)}-\left(\rho\circ(\rho')^{-1}\right)(\rho'(j))\right)
> \end{aligned}
> $$
>
> 注意到 $$\rho'(1),\dots,\rho'(n)$$ 构成 $$1,2,\dots,n$$ 的排列，所以在交换求和次序之后得到：
>
> $$
> \rho'\cdot g_{\rho} = \sum_{l=1}^{n}\left(r_{l}-\left(\rho\circ(\rho')^{-1}\right)(l)\right) = g_{\rho(\rho')^{-1}}
> $$
>
> 进而
>
> $$
> \rho'\cdot f = \prod_{\rho\in H} \rho'\cdot g_{\rho} = \prod_{\rho\in H} g_{\rho(\rho')^{-1}} = \prod_{\rho(\rho')^{-1}\in H}g_{\rho(\rho')^{-1}} = f.
> $$
>
> 所以 $$f$$ 在 $$H$$ 的作用下不变。
>
> 我们再证明 $$\tau\cdot f \neq f$$ ，这样 $$f$$ 在 $$G$$ 的作用下改变。我们考虑 $$\tau\cdot f$$ 和 $$f$$ 在 $$r_{k}=k$$（$$k=1,2,\dots,n$$）时的值，有：
>
> $$
> \begin{aligned}
> f(1,2,\dots,n) & = g_{\operatorname{id}}(1,2,\dots,n) \prod_{\operatorname{id}\neq\rho \in H} g_{\rho}(1,\dots,n) \\
> & = \left(\sum_{k=1}^{n}(k-k)^{2}\right)\cdot \prod_{\operatorname{id}\neq\rho \in H} g_{\rho}(1,\dots,n) \\
> & = 0 \\
> \end{aligned}
> $$
>
> 而对于 $$\tau\cdot f$$，有
>
> $$
> \begin{aligned}
> (\tau\cdot f)(1,\dots,n) & = \prod_{\rho\in H} g_{\rho}\bigl(\tau(1),\tau(2),\dots,\tau(n)\bigr) \\
> & = \prod_{\rho \in H} \left(\sum_{j=1}^{n}\bigl(\tau(j)-\rho(j)\bigr)^{2}\right) \\
> \end{aligned}
> $$
>
> 由 $$\tau \notin H$$ 可知，对任意的 $$\rho \in H$$，都有 $$\rho \neq \tau$$，也就是存在某个 $$j$$ 使得 $$\tau(j)\neq \rho(j)$$. 这样上面乘积中的每一项都大于0，因此 $$(\tau \cdot f)(1,\dots,n) \neq 0$$. 所以 $$\tau \cdot f \neq f$$. 这样我们就证明了定理。

后面我们将用这一定理来寻找不具有特定对称性的多项式。

> **注记**：这个定理可以视作是伽罗瓦理论基本定理的一个特例。因为
>
> $$
> \begin{aligned}
> & G\text{-对称性等价于} H \text{-对称性}\\ \Longleftrightarrow & \{G\text{-不变多项式}\}=\{H\text{-不变多项式}\} \\
> \Longleftrightarrow & G,H\text{ 有相同的不动域} \\
> \end{aligned}
> $$
>
> 而伽罗瓦理论基本定理告诉我们，$$G,H$$有相同的不动域当且仅当$$G=H$$.

至此我们先暂停一下，简单看看我们目前做了什么：我们提出了一种解方程的思路，并用它成功证明了三次方程一定可解；我们的思路中需要利用多项式的对称性来证明这个多项式是否可求值，因此为了系统地描述对称性，我们引入了群的概念。

不过我们仍然不知道开始提出的两个问题的回答，因此也不知道我们的思路能否应用到一般的方程上。我们接下来将利用群的工具逐步给出这两个问题的回答。这部分内容会包含更多的数学推导，因此更难读。

## 用群求解方程

为了书写的方便，我们后面将 $$\tau\circ\tau'$$ 简写为 $$\tau\tau'$$. 对整数 $$n$$，在 $$n>0$$ 时用 $$\tau ^{n}$$ 表示 $$n$$ 个 $$\tau$$ 的复合；在 $$n<0$$ 时用 $$\tau^{n}$$ 表示 $$-n$$ 个 $$\tau^{-1}$$ 的复合。不难验证等式 $$\tau^{m}\tau^{n} = \tau^{m+n}$$.

有了前面的讨论，我们可以把之前提出的两个问题改进为：

- 如果我们归纳地找到了 $$g_{1},g_{2},\dots,g_{k}$$，那 $$f$$ 在 $$S_{n}$$ 的哪个子群 $$G_{k}$$ 的作用下不变时，它可以靠 $$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1},\dots,g_{k}$$ 做四则运算得到？
- 我们能否找到某个 $$g_{k+1}$$，使得它不具有 $$G$$-对称性，但它的某个方幂 $$g_{k+1}^{m}$$ 具有 $$G_{k}$$-对称性？

我们先从简单情形开始。对第一个问题，我们先考虑 $$k=1$$ 的情形，也就是我们只知道一个可求值的多项式 $$g_{1}$$，且 $$g_{1}^{m}$$是对称多项式。这时我们要找的是 $$S_{n}$$ 的某个子群 $$G_{1}$$. 对第二个问题，我们考虑 $$k=0$$ 的情形，也就是问什么时候存在一个不对称的多项式 $$g_{1}$$，但它的某个方幂 $$g_{1}^{m}$$ 是对称多项式。

### 第一个问题的回答

如果我们将第一个问题的提问方向变一下，改成：

- 如果一个多项式 $$f$$ 可以靠 $$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1}$$ 的四则运算得到，那么能否找到一个群 $$G_{1}\subseteq S_{n}$$，它保持 $$f$$ 不变？

这个新问题是相当容易回答的：我们取那些保持 $$g_{1}$$ 不变的置换，把它们构成的集合叫做 $$G_{1}$$. 那么 $$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1}$$ 在 $$G_{1}$$ 的作用下不变，因此它们在经过任意四则运算后得到的多项式在 $$G_{1}$$ 的作用下也不变（这可以靠上一节最后的引理推出）。此外，同样，利用上一节最后的引理可以证明，$$G_{1}$$ 的确是一个群。

我们希望这样构造出的 $$G_{1}$$ 就是第一个问题的答案，也就是下面的定理：

> **定理1.0**：设多项式 $$g_{1}$$ 满足 $$g_{1}^{m'}$$ 在 $$S_{n}$$ 的作用下不变；又设群 $$G_{1}$$ 由那些保持 $$g_{1}$$ 不变的置换构成。那么对任意多项式 $$f$$，只要 $$f$$ 在 $$G_{1}$$ 的作用下不变，它就一定能靠系数$$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1}$$ 作四则运算得到。

之前对三次方程的讨论实际上就是这一定理的特例。

> **例**（三次方程）：对三次方程，当我们把 $$g_{1}$$ 取成
>
> $$
> g_{1} = (r_{1}-r_{2})(r_{2}-r_{3})(r_{1}-r_{3}) = \sqrt{\Delta}
> $$
>
> 时，我们来看哪些置换保持 $$g_{1}$$ 不变。
>
> 置换群 $$S_{3}$$ 只有6个元素(为什么)：
>
> $$
> \begin{aligned}
> \text{恒同映射：} & \operatorname{id} \\
> \text{3个对换：} & \pi_{12}, \pi_{23}, \pi_{13} \\
> \text{2个轮换：} & \tau = \begin{pmatrix}123 \\ \downarrow\downarrow\downarrow \\ 231\end{pmatrix}\tau^{2} = \begin{pmatrix}123 \\ \downarrow\downarrow\downarrow \\ 312\end{pmatrix}\\
> \end{aligned}
> $$
>
> 可以验证，对换 $$\pi_{ij}$$ 作用到 $$g_{1}$$ 上的效果是
>
> $$
> \pi_{ij}\cdot g_{1} = -g_{1} \neq g_{1}
> $$
>
> 而每个轮换都保持 $$g_{1}$$ 不变。所以保持 $$g_{1}$$ 不变的子群是
>
> $$
> G_{1} = \{\operatorname{id}, \tau,\tau^{2}\}
> $$
>
> 而根据之前的证明，任何一个在 $$G_{1}$$ 作用下不变的多项式都可以靠系数和 $$g_{1}$$ 做四则运算得到。

### 正规子群

为了得到这一定理的证明，我们研究置换群 $$S_{n}$$ 在 $$g_{1}$$ 上的作用，由此得到群 $$G_{1}$$ 的性质。我们会发现 $$G_{1}$$ 是 $$S_{n}$$ 的一类特殊的子群，这类子群在群论中被称为正规子群(我们稍后会给出定义)。

我们先看 $$g_{1}$$ 在 $$S_{n}$$ 的作用下能取到哪些多项式。我们有：

> **引理1.0**：如果 $$g_{1}^{m'}$$ 在 $$S_{n}$$ 的作用下不变，那么存在某个正整数 $$m$$，使得对任意的 $$\tau \in S_{n}$$，$$\tau$$ 作用在 $$g_{1}$$ 的效果相当于 $$g_{1}$$ 乘上某个 $$m$$ 次单位根，即
>
> $$
> \tau\cdot g_{1} = \epsilon \cdot g_{1}, \quad \epsilon \in \mathbb{C},\epsilon^{m} = 1
> $$
>
> 且对每个 $$m$$ 次单位根 $$\epsilon$$，都存在某个置换 $$\tau_{\epsilon} \in S_{n}$$ 使得
>
> $$
> \tau_{\epsilon} \cdot g_{1} = \epsilon \cdot g_{1}.
> $$
>
> 换言之，如果记 $$\varepsilon=e^{2\pi i/m} \in \mathbb{C}$$ 为 $$m$$ 次本原单位根，那么对 $$\tau \in S_{n}$$，$$\tau \cdot g_{1}$$ 的所有可能取值为
>
> $$
> g_{1},\varepsilon g_{1},\varepsilon^{2}g_{1},\dots,\varepsilon^{m-1}g_{1}.
> $$

这一引理的证明并不算重要，读者可以考虑跳过。

> **证明**：考虑 $$g_{1}^{m'}$$，对任意的置换 $$\tau \in S_{n}$$，根据之前的引理和 $$g_{1}^{m'}$$ 在 $$S_{n}$$ 作用下的不变性，有
>
> $$
> (\tau\cdot g_{1})^{m'} = \tau\cdot (g_{1}^{m'}) = g_{1}^{m'}.
> $$
>
> 这说明 $$\tau\cdot g_{1} = \epsilon \cdot g_{1}$$，其中 $$\epsilon$$ 是某个 $$m'$$次单位根。所以 $$\tau\cdot g_{1}$$ 的所有可能取值形如
>
> $$
> e^{i\theta}g_{1},\qquad 0< \theta \leqslant 2\pi.
> $$
>
> 且 $$\theta$$ 形如 $$\frac{2k\pi}{m'}$$，只能取到有限多个值。我们设它可以取到的最小值为 $$\theta_{0}$$，且置换 $$\tau_{0} \in S_{n}$$ 满足 $$\tau_{0}\cdot g_{1} = e^{i\theta_{0}} g_{1}$$.
>
> 我们下面证明，$$\theta_{0} = \frac{2\pi}{m}$$，且 $$m$$ 为引理所需的正整数 $$m$$. 这样就证明了引理。
>
> 首先可以设$$\theta_{0} = \frac{p}{m}\cdot 2\pi$$，其中 $$p,m$$ 是两个互素的正整数。由[贝祖定理](https://zhuanlan.zhihu.com/p/1974802289895171698)可知，存在整数 $$a,b$$ 使得 $$ap = bm+1$$，通过将 $$a,b$$ 替换为 $$a+km,b+kp$$，可以设 $$a,b>0$$. 这时候有
>
> $$
> \begin{aligned}
> \tau_{0}^{a}\cdot g_{1} & = \tau_{0}^{a-1} \cdot(\tau_{0}\cdot g_{1}) = \tau_{0}^{a-1}\cdot(e^{i\theta_{0}}g_{1}) \\
> & = e^{i\theta_{0}}\left(\tau_{0}^{a-2} \cdot(\tau_{0}\cdot g_{1})\right) = e^{i\theta_{0}}\tau_{0}^{a-2}\cdot(e^{i\theta_{0}}g_{1}) \\
> & = e^{2i\theta_{0}}\left(\tau_{0}^{a-3} \cdot(\tau_{0}\cdot g_{1})\right) = e^{2i\theta_{0}}\tau_{0}^{a-3}\cdot(e^{i\theta_{0}}g_{1}) \\
> & = \cdots \\
> & = e^{ia\theta_{0}} \cdot g_{1} \\
> & = e^{i(\frac{ap}{m}\cdot 2\pi)}g_{1} \\
> & = e^{i(\frac{2\pi}{m}+2b\pi)}g_{1} \\
> & = e^{2\pi i/m}g_{1} \\
> \end{aligned}
> $$
>
> 这说明 $$\theta$$ 可以取到$$\frac{1}{m}$$，因此根据 $$\theta_{0}$$ 的最小性可知 $$\frac{p}{m}\leqslant \frac{1}{m}$$，也就是 $$p\leqslant 1$$. 因此 $$p$$ 只可能为 $$1$$. 记 $$\varepsilon = e^{2\pi i/m} = e^{i\theta_{0}}$$. 重复上面的计算可知，对任意的 $$0\leqslant k \leqslant m-1$$，有
>
> $$
> \tau_{0}^{k} \cdot g_{1} = \varepsilon^{k}g_{1}
> $$
>
> 所以 $$\tau \cdot g_{1}$$ 一定可以取到所有形如 $$\varepsilon^{k}g_{1}$$ 的值。
>
> 另一方面，如果 $$\tau\cdot g_{1}$$ 取到了 $$\varepsilon^{k} g_{1}$$ 以外的值，我们可以设存在某个 $$\tau_{1}$$ 满足
>
> $$
> \begin{aligned}
> \tau_{1} \cdot g_{1} = e^{\frac{2k\pi i}{m}+i\theta_{1}}g_{1} = \varepsilon^{k}e^{i\theta_{1}}g_{1}, \qquad 0< \theta_{1} < \frac{2\pi}{m}=\theta_{0}.
> \end{aligned}
> $$
>
> 这时类似前面可以算出
>
> $$
> \begin{aligned}
> \tau_{0}^{-k}\tau_{1}\cdot g_{1} & = \tau^{-k}\cdot(\tau_{1}\cdot g_{1}) = \varepsilon^{k}e^{i\theta_{1}}(\tau^{-k}\cdot g_{1}) \\
> & = \varepsilon^{k}e^{i\theta_{1}} \varepsilon^{-k}g_{1} = e^{i\theta_{1}}g_{1} \\
> \end{aligned}
> $$
>
> 注意到 $$0<\theta_{1}<\theta_{0}$$，这就与 $$\theta_{0}$$ 的最小性矛盾了。这样 $$m$$ 就是引理所需的正整数。

现在设正整数 $$m$$ 由引理1.0给出，取$$\varepsilon=e^{2\pi i/m}$$. 依据作用在 $$g_{1}$$ 上的值，我们可以将 $$S_{n}$$ 中的置换分成 $$m$$ 类：

$$
\begin{aligned}
 C_{0} & = \{\tau \in S_{n} \mid \tau\cdot g_{1} = g_{1}\} = G_{1} \\
 C_{1} & = \{\tau \in S_{n} \mid \tau\cdot g_{1} = \varepsilon g_{1}\} \\
 & \vdots \\
 C_{k} & = \{\tau \in S_{n} \mid \tau\cdot g_{1} = \varepsilon^{k} g_{1}\} \\
 & \vdots \\
 C_{m-1} & = \{\tau \in S_{n} \mid \tau\cdot g_{1} = \varepsilon^{m-1} g_{1}\} \\
\end{aligned}
$$

这 $$m$$ 个集合两两不交，且并集为 $$S_{n}$$. 事实上，我们可以更简单地表示这些集合。对置换 $$\tau \in S_{n}$$ 和任意一个集合 $$A\subseteq S_{n}$$，我们记

$$
\tau A = \{\tau \rho \mid \rho \in A \}, \qquad A \tau = \{\rho \tau \mid \rho \in A\}
$$

> **引理2.0**：存在一个置换$$\tau_{0} \in S_{n}$$，使得下列等式成立：
>
> $$
> \begin{aligned}
> C_{1} & = \tau_{0} G_{1} = G_{1}\tau_{0} \\
> C_{2} & = \tau_{0}^{2} G_{1} = G_{1} \tau_{0}^{2} \\
> &\vdots \\
> C_{k} & = \tau_{0}^{k} G_{1} = G_{1} \tau_{0}^{k} \\
> &\vdots \\
> C_{m-1} & = \tau_{0}^{m-1}G_{1} = G_{1}\tau_{0}^{m-1} \\
> \end{aligned}
> $$
>
> 进而 $$S_{n}$$ 可以写成下列集合的不交并：
>
> $$
> G_{1},\tau_{0} G_{1}, \tau_{0}^{2} G_{1},\dots,\tau_{0}^{m-1}G_{1}.
> $$
>
> 特别的，$$S_{n}$$ 中任意置换都可以写成 $$\tau_{0}^{k}\cdot \rho$$（$$\rho \in G_{1}$$）的形式。 此外对任意的置换 $$\tau \in S_{n}$$，都有 $$\tau G = G \tau$$.
>
> **证明**：我们取置换 $$\tau_{0} \in S_{n}$$ 使得
>
> $$
> \tau_{0} \cdot g_{1} = \varepsilon g_{1}
> $$
>
> 那么和引理1.0的证明类似，可以得到：
>
> $$
> \tau_{0} ^{k} = \varepsilon^{k} g_{1}, \qquad \forall k\in \mathbb{Z}.
> $$
>
> 我们先证明 $$C_{k} \subseteq \tau_{0}^{k} G_{1}$$. 对 $$C_{k}$$ 中任意元素 $$\pi$$，记 $$\rho = \tau_{0}^{-k}\pi$$，那么 $$\pi = \tau_{0}^{k}\cdot \rho$$. 并且我们可以算出：
>
> $$
> \rho \cdot g_{1} = \tau_{0}^{-k}\cdot(\pi \cdot g_{1}) = \tau_{0}^{-k}\cdot (\varepsilon^{k} g_{1}) = \varepsilon^{k}\varepsilon^{-k} g_{1} = g_{1}
> $$
>
> 因此 $$\rho$$ 保持 $$g_{1}$$ 不变，换言之，$$\rho$$ 落在 $$G_{1}$$ 中。所以 $$\pi = \tau_{0}^{k}\rho$$ 落在 $$\tau_{0}^{k}G_{1}$$ 中。这就说明了 $$C_{k}$$ 被 $$\tau_{0}^{k}G_{1}$$ 包含。
>
> 我们再证明 $$C_{k} \supseteq \tau_{0}^{k}G_{1}$$. 事实上，任取 $$\tau_{0}^{k}\rho \in \tau_{0}^{k}G_{1}$$，由 $$\rho \in G_{1}$$ 可以算出
>
> $$
> \left(\tau_{0}^{k}\rho\right) \cdot g_{1} = \tau_{0}^{k} \cdot \left(\rho \cdot g_{1}\right) = \tau_{0}^{k} \cdot g_{1} = \varepsilon^{k} g_{1}
> $$
>
> 这说明 $$\tau_{0}^{k}\rho$$ 落在 $$C_{k}$$ 中，因此 $$\tau_{0}^{k}G_{1} \subseteq C_{k}$$.
>
> 这样我们就证明了 $$C_{k} = \tau_{0}^{k} G_{1}$$. 类似可以证明 $$C_{k} = G_{1}\tau_{0}^{k}$$，我们将这一部分留给读者。
>
> 我们下面证明对任意的 $$\tau \in S_{n}$$ 都有 $$\tau G_{1} = G_{1} \tau$$.
>
> 由于 $$S_{n}$$ 是 $$C_{k} = \tau_{0}^{k}G_{1}$$ 的并集，我们可以假设 $$\tau = \tau_{0}^{k}\rho$$，其中 $$\rho \in G_{1}$$. 于是有
>
> $$
> \begin{aligned}
> \tau G_{1} & = \{\tau_{0}^{k}(\rho\rho') \mid \rho' \in G_{1}\} \\
> & = \{\tau_{0}^{k}\rho' \mid \rho' \in G_{1}\} \\
> & = \tau_{0}^{k}G_{1} = C_{k}. \\
> \end{aligned}
> $$
>
> 这里第二个等号是因为映射 $$G_{1} \ni \rho' \rightarrow \rho\rho' \in G_{1}$$ 是一一对应(为什么)。类似的，我们也可以设 $$\tau = \rho'\tau_{0}^{k'}$$，其中 $$\rho' \in G_{1}$$. 这时会算出
>
> $$
> G_{1} \tau = C_{k'}.
> $$
>
> 我们只需要证明 $$k=k'$$. 因为 $$C_{0},\dots,C_{m-1}$$ 两两不交，所以只需要证明 $$C_{k}$$ 和 $$C_{k'}$$ 的交集非空。注意到
>
> $$
> \tau \in \tau G_{1} \cap G_{1}\tau = C_{k}\cap C_{k'}
> $$
>
> 所以我们得到了 $$\tau G_{1} = G_{1}\tau$$.

定理中 $$\tau G_{1} = G_{1} \tau$$（$$\forall \tau \in S_{n}$$）对一般的子群并不成立，我们会在之后的例子里看到这一点。因此我们将满足这一条件的子群单独列出来讨论。

> **定义**：对群 $$G$$ 的子群 $$H$$，如果它满足：对任意的 $$\tau \in G$$，都有 $$\tau H = H\tau$$，那我们称 $$H$$ 是 $$G$$ 的一个正规子群（记为 $$H \lhd G$$）。

所以我们现在知道，$$G_{1}$$ 必须是 $$S_{n}$$ 的正规子群，且是特殊的正规子群。

> **注记**：对群 $$G$$ 的正规子群 $$H$$，我们可以构造所谓的商群 $$G/H$$. 这时候引理2.0 有一个更简单地叙述方式：$$G_{1}$$ 是 $$S_{n}$$ 的正规子群，且商群 $$S_{n}/G_{1}$$ 是由一个元素生成。因为我们这里使用群的定义并不能方便地定义商群，所以我们不做过多介绍。

我们来看一个之前见过的例子：

> **例**(置换群 $$S_{3}$$)：我们考虑$$3$$元置换群 $$S_{3}$$. 和之前一样，用 $$\pi_{ij}$$ 表示交换 $$i,j$$ 给出的对换。取置换 $$\tau$$ 为轮换：
>
> $$
> \tau(1)=2,\quad \tau(2) = 3, \quad \tau(3)=1
> $$
>
> 之前对判别式的讨论告诉我们，$$S_{3}$$有子群
>
> $$
> \{\operatorname{id},\tau, \tau^{2}\}
> $$
>
> 我们的引理保证了它是一定是正规子群，此时 $$S_{3}$$ 是以下两个集合的不交并：
>
> $$
> \begin{gathered}
> \{\operatorname{id},\tau,\tau^{2}\},\\
> \{\pi_{12},\pi_{23},\pi_{13}\} = \pi_{12}\{\operatorname{id},\tau,\tau^{2}\} = \{\operatorname{id},\tau,\tau^{2}\}\pi_{12} \\
> \end{gathered}
> $$
>
> 我们现在考虑 $$S_{3}$$ 的另一个子群
>
> $$
> G = \{\operatorname{id},\pi_{12}\}
> $$
>
> 我们可以算出：
>
> $$
> \begin{aligned}
> \tau G = \{\tau,\pi_{13}\} &\neq G\tau = \{\tau, \pi_{23}\} \\
> \tau^{2} G = \{\tau^{2},\pi_{23}\} & \neq G\tau^{2} = \{\tau^{2}, \pi_{13}\}
> \end{aligned}
> $$
>
> 所以此时我们虽然有
>
> $$
> S_{3} = G \cup \tau G \cup \tau^{2}G
> $$
>
> 但 $$G$$ 不是 $$S_{3}$$ 的正规子群。

下面两个例子会在求解4、5次方程时用到。读者可以先跳过，到具体求解的时候再回来看这两个例子

> **例**(1)：我们考虑$$4$$元置换群 $$S_{4}$$. 对 $$k$$ 个互不相同的元素 $$i_{1},i_{2},\dots,i_{k}$$，用 $$\pi_{i_{1}i_{2}\cdots i_{k}}$$ 表示关于 $$i_{1},i_{2},\dots,i_{k}$$ 的 $$k$$ 元轮换，即
>
> $$
> \begin{aligned}
> \pi_{i_{1}\cdots i_{k}}\colon \ell &\longmapsto \ell, & \forall & \ell \notin \{i_{1},\dots,i_{k}\} \\
> i_{l} & \longmapsto i_{l+1}, & \forall & 1\leqslant l\leqslant k-1 \\
> i_{k} & \longmapsto i_{1}. \\
> \end{aligned}
> $$
>
> 例如在 $$S_{4}$$ 中，有
>
> $$
> \begin{aligned}
> \pi_{123}: 1 \mapsto 2 \\ 2 \mapsto 3 \\ 3 \mapsto 1\\ 4\mapsto 4 \\
> \end{aligned}
> \qquad
> \begin{aligned}
> \pi_{2134}: 2 \mapsto 1 \\ 1 \mapsto 3 \\ 3 \mapsto 4\\ 4\mapsto 2 \\
> \end{aligned}
> $$
>
> 然后我们可以写出 $$S_{4}$$ 中的所有24个元素：
>
> $$
> \begin{aligned}
> S_{4} = \{ & \operatorname{id}, \\
> & \pi_{12},\ \pi_{13},\ \pi_{14},\ \pi_{23},\ \pi_{24},\ \pi_{34}, \\
> & \pi_{12}\pi_{34},\ \pi_{13}\pi_{24},\ \pi_{14}\pi_{23}, \\
> & \pi_{123},\ \pi_{132},\ \pi_{124},\ \pi_{142},\ \pi_{134},\ \pi_{143},\ \pi_{234},\ \pi_{243}, \\
> & \pi_{1234},\ \pi_{1243},\ \pi_{1324},\ \pi_{1342},\ \pi_{1423},\ \pi_{1432}\\
> \} & \\
> \end{aligned}
> $$
>
> 那些保持 $$\sqrt{\Delta} = \prod_{i<j}(r_{i}-r_{j})$$ 不变的置换构成 $$S_{4}$$ 的一个子群，我们称它为交错群 $$A_{4}$$：
>
> $$
> \begin{aligned}
> A_{4} = \{ & \operatorname{id},\ \pi_{12}\pi_{34},\ \pi_{13}\pi_{24},\ \pi_{14}\pi_{23}, \\
> & \pi_{123},\ \pi_{132},\ \pi_{124},\ \pi_{142},\ \pi_{134},\ \pi_{143},\ \pi_{234},\ \pi_{243} \} \\
> \end{aligned}
> $$
>
> 利用 $$S_{4},A_{4}$$ 的元素个数很容易证明，$$A_{4}$$ 是 $$S_{4}$$ 的正规子群，且 $$S_{4} = A_{4} \cup \pi_{12}A_{4}$$.
>
> 我们取 $$A_{4}$$ 的子集：
>
> $$
> K = \{\operatorname{id},\ \pi_{12}\pi_{34},\ \pi_{13}\pi_{24},\ \pi_{14}\pi_{23} \}
> $$
>
> 经过一点计算可以证明，$$K$$ 对复合和取逆封闭，因此构成 $$A_{4}$$ 的子群。我们称 $$K$$ 为克莱因群。此外如果取 $$\pi_{123} \in A_{4}$$，我们还可以算出：
>
> $$
> \begin{aligned}
> \pi_{123}K = & \{\pi_{123},\pi_{134},\pi_{142},\pi_{243}\} = K \pi_{123} \\
> \pi_{123}^{2}K = & \{\pi_{132},\pi_{143},\pi_{124},\pi_{234}\} = K \pi_{123}^{2} \\
> \end{aligned}
> $$
>
> 因此有 $$A_{4} = K \cup \pi_{123}K \cup \pi_{123}^{2}K$$. 类似引理2.0可以证明，$$K$$ 是 $$A_{4}$$ 的正规子群。
>
> **例**(2)：对于 $$5$$ 元置换群 $$S_{5}$$，我们不加证明地指出下面两件事：
>
> - $$S_{5}$$ 的正规子群只有三个：$$\{\operatorname{id}\},A_{5},S_{5}$$，其中交错群 $$A_{5}$$ 是保持 $$\sqrt{\Delta}$$ 不变的置换构成的子群。
> - $$A_{5}$$ 的正规子群只有两个：$$\{\operatorname{id}\},A_{5}$$.
>
> 粗略来看，我们可以靠讨论 $$S_{5},A_{5}$$ 的所有子集来证明上面的结果，但这样的证明会相当冗长。另一种证明办法需要对置换群 $$S_{n}$$ 作更深入的讨论，在此我们不做过多介绍。

### 定理1.0的证明

我们现在来证明定理1.0。下面的证明实际上受到拉格朗日预解式的启发。

取引理1.0给出的正整数 $$m$$，并记 $$\varepsilon= e^{2\pi i/m}$$ 为 $$m$$ 次本原单位根。我们取一个置换 $$\tau_{0} \in S_{n}$$ 使得 $$\tau_{0}\cdot g_{1} = \varepsilon g_{1}$$. 那么有

$$
\tau_{0}^{k} \cdot g_{1} = \varepsilon^{k}g_{1}
$$

特别的，有$$\tau_{0}^{m}\cdot g_{1} = \varepsilon^{m} g_{1} = g_{1}$$，也就是 $$g_{1}$$ 在 $$\tau_{0}^{m}$$ 的作用下不变。因此根据 $$G_{1}$$ 的定义可知，$$\tau_{0}^{m}$$ 落在 $$G_{1}$$ 中。

下面考虑任意一个在 $$G_{1}$$ 作用下不变的多项式 $$f$$. 我们构造如下的一组拉格朗日预解式：

$$
\begin{aligned}
 L_{0} & = f + \tau_{0}\cdot f + \tau_{0}^{2}\cdot f + \cdots + \tau_{0}^{m-1}\cdot f \\
 L_{1} & = f + \varepsilon \bigl(\tau_{0} \cdot f\bigr) + \varepsilon^{2} \bigl(\tau_{0}^{2} \cdot f\bigr) + \cdots + \varepsilon^{m-1}\bigl(\tau_{0}^{m-1}\cdot f\bigr) \\
 L_{2} & = f + \varepsilon^{2} \bigl(\tau_{0} \cdot f\bigr) + \varepsilon^{4} \bigl(\tau_{0}^{2} \cdot f\bigr) + \cdots + \varepsilon^{2(m-1)}\bigl(\tau_{0}^{m-1}\cdot f\bigr) \\
 & \vdots \\
 L_{k} & = f + \varepsilon^{k} \bigl(\tau_{0} \cdot f\bigr) + \varepsilon^{2k} \bigl(\tau_{0}^{2} \cdot f\bigr) + \cdots + \varepsilon^{(m-1)k}\bigl(\tau_{0}^{m-1}\cdot f\bigr) \\
 & \vdots \\
 L_{m-1} & = f + \varepsilon^{m-1} \bigl(\tau_{0} \cdot f\bigr) + \varepsilon^{2(m-1)} \bigl(\tau_{0}^{2} \cdot f\bigr) + \cdots + \varepsilon^{(m-1)^{2}}\bigl(\tau_{0}^{m-1}\cdot f\bigr) \\
\end{aligned}
$$

我们将先证明，$$g_{1}^{k}\cdot L_{k}$$ 在 $$S_{n}$$ 的作用下不变，这样 $$L_{k}$$ 都可以靠系数 $$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1}$$ 做四则运算得到。然后我们使用拉格朗日预解式 $$L_{0},L_{1},\dots,L_{m-1}$$ 表示出 $$f$$，这样就证明了定理1.0.

我们先验证，拉格朗日预解式 $$L_{0},L_{1},\dots,L_{m-1}$$ 在 $$G_{1}$$ 的作用下不变。对任意的 $$\rho \in G_{1}$$，有

$$
\begin{aligned}
 \rho\cdot L_{k} & = \rho \cdot \left(\sum_{j=0}^{m-1}\varepsilon^{jk}\left(\tau_{0}^{j}\cdot f\right)\right) \\
 & = \sum_{j=0}^{m-1}\varepsilon^{jk}\left(\bigl(\rho\tau_{0}^{j}\bigr)\cdot f\right)
\end{aligned}
$$

注意这里的 $$\tau_{0}$$ 恰好为引理2.0中的 $$\tau_{0}$$，所以我们有

$$
\rho \tau_{0}^{j} \in G_{1} \tau_{0}^{j} = \tau_{0}^{j} G_{1}
$$

因此我们可以把 $$\rho \tau_{0}^{j}$$ 重写为 $$\tau_{0}^{j}\rho_{j}$$（$$\rho_{j}\in G_{1}$$）的形式，这样上面的等式变为

$$
\begin{aligned}
 \rho\cdot L_{k}
 & = \sum_{j=0}^{m-1}\varepsilon^{jk}\left(\bigl(\tau_{0}^{j}\rho_{j}\bigr)\cdot f\right) \\
 & = \sum_{j=0}^{m-1}\varepsilon^{jk}\left(\tau_{0}^{j}\cdot(\rho_{j}\cdot f)\right) \\
 & = \sum_{j=0}^{m-1}\varepsilon^{jk}\left(\tau_{0}^{j}\cdot f\right) = L_{k} \\
\end{aligned}
$$

我们再考虑 $$\tau_{0}$$ 在 $$L_{k}$$ 上的作用。注意到 $$\tau_{0}^{m}\in G_{1}$$，所以 $$\tau_{0}^{m}\cdot f = f$$，进而有：

$$
\begin{aligned}
 \tau_{0}\cdot L_{k} & = \tau_{0}\cdot\left(f + \varepsilon^{k} \bigl(\tau_{0} \cdot f\bigr) + \varepsilon^{2k} \bigl(\tau_{0}^{2} \cdot f\bigr) + \cdots + \varepsilon^{(m-1)k}\bigl(\tau_{0}^{m-1}\cdot f\bigr)\right) \\
 & = \tau_{0}\cdot f + \varepsilon^{k} \bigl(\tau_{0}^{2} \cdot f\bigr) + \varepsilon^{2k} \bigl(\tau_{0}^{3} \cdot f\bigr) + \cdots + \varepsilon^{(m-1)k}\bigl(\tau_{0}^{m}\cdot f\bigr) \\
 & = \varepsilon^{-k}f +\tau_{0} \cdot f + \varepsilon^{k} \bigl(\tau_{0}^{2} \cdot f\bigr) + \cdots + \varepsilon^{(m-2)k}\bigl(\tau_{0}^{m-1}\cdot f\bigr) \\
 & = \frac{1}{\varepsilon^{k}} L_{k}, \qquad \forall 0\leqslant k < m. \\
\end{aligned}
$$

因此可以算出：

$$
\tau_{0}\cdot \left(g_{1}^{k}L_{k}\right) = \left(\tau_{0}\cdot g_{1}\right)^{k}\left(\tau_{0}\cdot L_{k}\right) = \varepsilon^{k}\cdot \frac{1}{\varepsilon^{k}} g_{1}^{k}L_{k} = g_{1}^{k}L_{k}
$$

也就是 $$g_{1}^{k}L_{k}$$ 在 $$\tau_{0}$$ 的作用下不变。我们可以归纳地证明，它在 $$\tau_{0}^{j}$$ 作用下也不变。

这时候对任意的置换 $$\tau \in S_{n}$$，根据引理2.0，我们可以假设 $$\tau = \tau_{0}^{j}\rho$$，其中 $$\rho \in G_{1}$$. 那么有

$$
\tau\cdot \left(g_{1}^{k}L_{k}\right) = \tau_{0}^{j}\cdot \left(\rho \cdot \left(g_{1}^{k}L_{k}\right)\right) = \tau_{0}^{j}\cdot \left(g_{1}^{k}L_{k}\right) = g_{1}^{k}L_{k}.
$$

其中第二个等号是因为 $$g_{1},L_{k}$$ 在 $$\rho \in G_{1}$$ 的作用下不变。这样我们就说明了，$$g_{1}^{k}L_{k}$$ 在 $$S_{n}$$ 的作用下不变，因此可以靠 $$\sigma_{1},\dots,\sigma_{n}$$ 做四则运算得到。那 $$L_{0},L_{1},\dots,L_{m-1}$$ 可以靠 $$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1}$$ 做四则运算得到。更进一步，$$L_{0},L_{1},\dots,L_{m-1}$$ 的任意多项式都可以由 $$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1}$$ 做四则运算得到。

然后我们考虑特殊的多项式：$$\frac{1}{m}\sum_{k=0}^{m-1}L_{k}$$，可以算出

$$
\begin{aligned}
 \frac{1}{m} \sum_{k=0}^{m-1}L_{k} & = \frac{1}{m}\sum_{k=0}^{m-1}\sum_{j=0}^{m-1}\varepsilon^{jk}\left(\bigl(\tau_{0}^{j}\rho_{j}\bigr)\cdot f\right) \\
 & = \frac{1}{m}\sum_{j=0}^{m-1}\sum_{k=0}^{m-1}\varepsilon^{jk}\left(\bigl(\tau_{0}^{j}\rho_{j}\bigr)\cdot f\right) \\
 & = \frac{1}{m}\sum_{j=0}^{m-1}\left(\sum_{k=0}^{m-1}\varepsilon^{jk}\right)\cdot\left(\bigl(\tau_{0}^{j}\rho_{j}\bigr)\cdot f\right) \\
\end{aligned}
$$

根据利用等比数列求和公式可以证明

$$
\sum_{k=0}^{m-1}\varepsilon^{jk} =
\begin{cases}
 m, & \text{if }j=0;\\
 0, & \text{if }0< j < m. \\
\end{cases}
$$

代入上一个等式得到

$$
\frac{1}{m} \sum_{k=0}^{m-1}L_{k} = \frac{1}{m}\left(m\cdot f\right) = f.
$$

这样，$$f=\frac{1}{m}\sum_{k=0}^{m-1}L_{k}$$ 可以靠$$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1}$$ 做四则运算得到。至此我们证明了定理1.0.

### 第二个问题的回答

我们现在考虑第二个问题。事实上，我们前面的引理2.0已经给出了 $$g_{1}$$ 存在的必要条件：让我们重新叙述一下引理2.0：

> **引理2.0**：如果 $$g_{1}\neq 0$$ 满足：$$g_{1}^{m'}$$ 在 $$S_{n}$$ 的作用下不变，那么存在 $$S_{n}$$ 的正规子群 $$G_{1}$$（它由 $$S_{n}$$ 中那些保持 $$g_{1}$$ 不变的置换构成），满足：存在某个 $$\tau_{0} \in S_{n}$$，使得集合
>
> $$
> G_{1},\tau_{0}G_{1},\tau_{0}^{2}G_{1},\dots,\tau_{0}^{m}G_{1}
> $$
>
> 两两不交，且并集为 $$S_{n}$$.

我们这一小节说明，引理2.0给出的也是充分条件。也就是：

> **定理2.0**：存在多项式 $$g_{1}$$ 使得 $$g_{1}$$ 在 $$S_{n}$$ 的作用下改变，但 $$g_{1}^{m'}$$ 在 $$S_{n}$$ 的作用下不变的充分必要条件为：存在 $$S_{n}$$ 的一个正规子群 $$G_{1}\neq S_{n}$$ 和 $$S_{n}$$ 中一个置换 $$\tau_{0}$$，满足：集合
>
> $$
> G_{1},\tau_{0}G_{1},\tau_{0}^{2}G_{1},\dots,\tau_{0}^{m-1}G_{1}
> $$
>
> 两两不交，且并集为 $$S_{n}$$.

我们的证明办法还是利用拉格朗日预解式。记 $$\varepsilon = e^{2\pi i/m}$$ 为 $$m$$ 次本原单位根。因为 $$G_{1} \neq S_{n}$$，我们可以选一个在 $$G_{1}$$ 作用下不变，但在 $$S_{n}$$ 作用下改变的多项式 $$f$$，然后考虑拉格朗日预解式

$$
L_{k} = \sum_{j=0}^{m-1}\varepsilon^{jk}\left(\tau_{0}^{j}\cdot f\right)
$$

多项式 $$L_{0},L_{1},\dots,L_{m-1}$$ 中的某个一定在 $$S_{n}$$ 的作用下改变。若不然，则 $$f=\frac{1}{m}\sum_{k=0}^{m-1}L_{k}$$ 一定在 $$S_{n}$$ 的作用下不变，这与 $$f$$ 的选取矛盾了。我们设 $$L_{k}$$ 在 $$S_{n}$$ 的作用下改变。

和前面类似可以证明：$$L_{k}$$ 在 $$G_{1}$$ 的作用下不变，且

$$
\tau_{0}\cdot L_{k} = \frac{1}{\varepsilon^{k}}L_{k}.
$$

进而有

$$
\tau_{0}\cdot L_{k}^{m} = \left(\tau_{0}\cdot L_{k}\right)^{m} = \frac{1}{\varepsilon^{mk}}L_{k}^{m} = L_{k}^{m}
$$

所以 $$L_{k}^{m}$$ 在 $$G_{1}$$ 和 $$\tau_{0}$$ 的作用下都不变。所以对任意的置换 $$\tau \in S_{n}$$，由 $$S_{n}=G_{1}\cup\tau_{0}G_{1}\cup\cdots\cup\tau_{0}^{m-1}G_{1}$$，我们可以设 $$\tau = \tau_{0}^{l}\rho$$，其中$$\rho \in G_{1}$$. 这样有

$$
\tau\cdot L_{k}^{m} = \tau_{0}^{l}\cdot \left(\rho\cdot L_{k}^{m}\right) = \tau_{0}^{l}\cdot L_{k}^{m} = L_{k}^{m}.
$$

这说明 $$L_{k}^{m}$$ 在 $$S_{n}$$ 中任意置换下不变，因此我们取 $$g_{1}=L_{k}$$，就证明了定理2.0.

### 一般情况

我们目前只在特殊情况下回答了前面的两个问题，一般情况的回答和前面是类似的，只需要把前面的 $$S_{n},G_{1}$$ 分别替换为下面的 $$G_{k},G_{k+1}$$.

对第一个问题，我们记那些保持 $$g_{1},g_{2},\dots,g_{k}$$ 的不变的置换构成的群为 $$G_{k}$$，那么有

> **定理1.1**：设多项式 $$g_{k+1}$$ 满足 $$g_{k+1}^{m'}$$ 在 $$G_{k}$$ 的作用下不变；又设群 $$G_{k+1}$$ 由那些保持 $$g_{1},\dots,g_{k+1}$$ 不变的置换构成。那么对任意多项式 $$f$$，只要 $$f$$ 在 $$G_{k+1}$$ 的作用下不变，它就一定能靠系数$$\sigma_{1},\dots,\sigma_{n}$$ 和 $$g_{1},\dots,g_{k+1}$$ 作四则运算得到。

这一定理的证明依赖于一下两个引理，它们分别推广了引理1.0和引理2.0：

> **引理1.1**：如果 $$g_{k+1}^{m'}$$ 在 $$G_{k}$$ 的作用下不变，那么存在某个正整数 $$m$$，使得对任意的 $$\tau \in G_{k}$$，$$\tau$$ 作用在 $$g_{k+1}$$ 的效果相当于 $$g_{k+1}$$ 乘上某个 $$m$$ 次单位根，即
>
> $$
> \tau\cdot g_{k+1} = \epsilon \cdot g_{k+1}, \quad \epsilon \in \mathbb{C},\epsilon^{m} = 1
> $$
>
> 且对每个 $$m$$ 次单位根 $$\epsilon$$，都存在某个置换 $$\tau_{\epsilon} \in G_{k}$$ 使得
>
> $$
> \tau_{\epsilon} \cdot g_{k+1} = \epsilon \cdot g_{k+1}.
> $$
>
> 换言之，如果记 $$\varepsilon=e^{2\pi i/m} \in \mathbb{C}$$ 为 $$m$$ 次本原单位根，那么对 $$\tau \in G_{k}$$，$$\tau \cdot g_{k+1}$$ 的所有可能取值为
>
> $$
> g_{k+1},\varepsilon g_{k+1},\varepsilon^{2}g_{k+1},\dots,\varepsilon^{m-1}g_{k+1}.
> $$
>
> **引理2.1**：如果 $$g_{k+1}\neq 0$$ 满足：$$g_{k+1}^{m'}$$ 在 $$G_{k}$$ 的作用下不变，那么存在 $$G_{k}$$ 的正规子群 $$G_{k+1}$$（它由 $$G_{k}$$ 中那些保持 $$g_{k+1}$$ 不变的置换构成），满足：存在某个 $$\tau_{0} \in G_{k}$$，使得集合
>
> $$
> G_{k+1},\tau_{0}G_{k+1},\tau_{0}^{2}G_{k+1},\dots,\tau_{0}^{m}G_{k+1}
> $$
>
> 两两不交，且并集为 $$G_{k}$$.

对第二个问题，我们的回答也是类似的：

> **定理2.1**：存在多项式 $$g_{k+1}$$ 使得 $$g_{k+1}$$ 在 $$G_{k}$$ 的作用下改变，但 $$g_{k+1}^{m'}$$ 在 $$G_{k}$$ 的作用下不变的充分必要条件为：存在 $$G_{k}$$ 的一个正规子群 $$G_{k+1}\neq G_{k}$$ 和 $$G_{k}$$ 中一个置换 $$\tau_{0}$$，满足：集合
>
> $$
> G_{k+1},\tau_{0}G_{k+1},\tau_{0}^{2}G_{k+1},\dots,\tau_{0}^{m}G_{k+1}
> $$
>
> 两两不交，且并集为 $$G_{k}$$.

上面所有定理和引理的证明都和前面完全类似，只需要把前面证明中的 $$S_{n},G_{1}$$ 分别替换为 $$G_{k},G_{k+1}$$，就能得到这一小节的定理和引理的证明。我们将这部分的工作留给感兴趣的读者。

### 存在求根公式的充分条件

至此，我们几乎给出了所有我们需要的理论。现在让我们稍作总结。

按照我们解方程的思路，我们首先从群 $$G_{0}=S_{n}$$ 出发，利用定理2.1来判断我们能否找出某个可求值的多项式 $$g_{1}$$. 在 $$g_{1}$$ 存在时，它会给出某个特殊子群 $$G_{1}$$. 然后定理1.1告诉我们，那些在 $$G_{1}$$ 的作用下不变的多项式都是可求值的。然后我们再次使用定理2.1，寻找某个可求值的多项式 $$g_{2}$$，接着 $$g_{2}$$ 会定义 $$G_{1}$$ 的某个特殊子群 $$G_{2}$$. 如此循环往复，我们可以得到一列有包含关系的群：

$$
S_{n} = G_{0} \supsetneq G_{1} \supsetneq G_{2} \supsetneq G_{3} \supsetneq \cdots
$$

当我们停下时，只会有两种情况：

- 使用定理2.1作判断时，始终得到肯定的结果，所以某个群 $$G_{N}=\{\operatorname{id}\}$$. 这时候再次使用定理1.1，我们知道根 $$r_{1},r_{2},\dots,r_{n}$$ 都可求值，因此我们可以得到方程的求根公式。
- 使用定理2.1时，我们在某一步得到否定的结果，这时我们停在了某个子群 $$G_{N} \neq \{\operatorname{id}\}$$ 上。那我们的办法无法得到求根公式。

上面的讨论可以总结为下面的定理：

> **定理3.0**：对$$n$$ 次方程，**按照我们开头提出的思路**可以找到求根公式的充分必要条件是：存在一列群
>
> $$
> \{\operatorname{id}\}=G_{N} \subseteq G_{N-1}\subseteq \cdots \subseteq G_{2} \subseteq G_{1} \subseteq G_{0} = S_{n}
> $$
>
> 它们满足：对任意的 $$0\leqslant k < N$$，$$G_{k+1}$$ 是 $$G_{k}$$ 的正规子群，且存在 $$G_{k}$$ 中某个置换 $$\tau$$，使得
>
> $$
> G_{k+1},\tau G_{k+1},\tau^{2}G_{k+1},\dots,\tau^{m-1}G_{k+1}
> $$
>
> 的并集为 $$G_{k}$$.

使用上面的结果，我们可以证明四次方程一定有求根公式。因为根据前面的讨论，$$4$$元置换群 $$S_{4}$$ 有一个正规子群 $$A_{4}$$，而 $$A_{4}$$ 又有正规子群

$$
K = \{\operatorname{id},\ \pi_{12}\pi_{34},\ \pi_{13}\pi_{24},\ \pi_{14}\pi_{23}\}.
$$

其中 $$\pi_{ij}$$ 表示对换。我们还可以找出 $$K$$ 的正规子群（可以验证，$$K$$ 中任何两个置换 $$\tau,\tau'$$ 满足 $$\tau\tau'=\tau'\tau$$，进而可以证明 $$K$$ 的任何子群都是正规子群）：

$$
Z_{2} = \{\operatorname{id},\pi_{12}\pi_{34}\}
$$

于是我们得到了一列群：

$$
\{\operatorname{id}\} \subseteq Z_{2} \subseteq K \subseteq A_{4} \subseteq S_{4}
$$

并且还有：

$$
\begin{aligned}
 S_{4} & = A_{4}\cup \pi_{12}A_{4} \\
 A_{4} & = K \cup \pi_{123}K \cup \pi_{123}^{2}K \\
 K & = Z_{2} \cup (\pi_{13}\pi_{24})Z_{2} \\
 Z_{2} & = \{\operatorname{id}\} \cup (\pi_{12}\pi_{34})\{\operatorname{id}\}
\end{aligned}
$$

因此四次方程一定有求根公式。定理1.1,定理2.1的证明过程还提示了我们该如何得到求根公式：

1. 首先，我们可以认为判别式 $$\delta = \sqrt{\Delta}$$ 的值是已知的。
2. 我们找一个多项式 $$g_{1}$$，它在 $$K$$ 的作用下不变，但在 $$A_{4}$$ 的作用下改变，如 $$g_{1} = r_{1}r_{2} + r_{3}r_{4}$$.  然后我们可以用拉格朗日预解式求出它的值。事实上，我们还有一种求解的办法：直接考虑3次方程

$$
 \bigl(x-g_{1}\bigr)\bigl(x-\pi_{123}\cdot g_{1}\bigr)\bigl(x-\pi_{123}^{2}\cdot g_{1}\bigr)=0
 $$

   它展开之后得到的三次方程的系数可以由原本方程的系数 $$\sigma_{1},\sigma_{2},\sigma_{3},\sigma_{4}$$ 表示：

$$
 x^{3} - \sigma_{2} x^{2} + (\sigma_{1}\sigma_{3}-4\sigma_{4})x + (\sigma_{1}\sigma_{4}-4\sigma_{2}\sigma_{4} +\sigma_{3}^{2})
 $$

   这样利用三次方程的求根公式就能算出 $$g_{1}$$(我们前面求解三次方程时也用了拉格朗日预解式，所以两个办法是等价的)。此外，我们还算出了 $$\pi_{123}g_{1}$$ 和 $$\pi_{123}^{2}g_{1}$$.
3. 我们找一个多项式，它在 $$Z_{2}$$的作用下不变，但在 $$K$$ 的作用下改变，如取 $$r_{1}r_{2}$$. 然后我们又可以用拉格朗日多项式求出它的值，不过另一个更快的办法是：我们能直接看出，它是方程

$$
 \begin{aligned}
 0 & = x^{2}-(r_{1}r_{2}+r_{3}r_{4})x + \sigma_{4} \\
 & = (x-r_{1}r_{2})(x-r_{3}r_{4})
 \end{aligned}
 $$

   的解，所以直接使用二次方程求根公式就能算出 $$r_{1}r_{2}$$. 定理1.1告诉我们，$$r_{1}+r_{2}$$可以由 $$r_{1}r_{2},r_{1}r_{2}+r_{3}r_{4},\delta$$ 和方程的系数表示。不过我们也可以用另一种办法把它求出来，因为它是方程

$$
 \begin{aligned}
 0 & = (x-r_{1}-r_{2})(x-r_{3}-r_{4}) \\
 & = x^{2} -\sigma_{1} x + \pi_{123}\cdot g_{1} + \pi_{123}^{2}\cdot g_{1}
 \end{aligned}
 $$

   的解。
4. 最后，$$r_{1},r_{2}$$ 可以直接靠解方程

$$
 0=(x-r_{1})(x-r_{2}) = x^{2} -(r_{1}+r_{2})x+r_{1}r_{2}
 $$

   得到。

## 证明无求根公式

我们前面的定理3.0几乎距离证明方程无求根公式已经很接近了，唯一的不足是：我们想要证明的是，对一些方程，无论使用何种办法都无法得到求根公式；而我们只证明了，在我们提出的办法下，一些方程无法得到求根公式。

> **例**：五次方程是没有办法用我们的方法求解的，因为在我们试图寻找一列群
>
> $$
> S_{5} \supsetneq G_{1} \supsetneq G_{2} \supsetneq \cdots
> $$
>
> 时，为了使得 $$G_{1}$$ 是 $$S_{5}$$ 的正规子群且
>
> $$
> S_{5} = G_{1} \cup \tau G_{1} \cup \cdots \cup \tau^{m}G_{1}
> $$
>
> 我们只能取 $$G_{1} = A_{5}$$. 而 $$A_{5}$$ 的不同于自身的正规子群只有 $$\{\operatorname{id}\}$$，因此我们只能取 $$G_{2} = \{\operatorname{id}\}$$. 但这时很容易验证 $$G_{1} = A_{5}$$ 无法写成
>
> $$
> G_{2} \cup \tau G_{2} \cup\cdots\cup \tau^{m}G_{2}
> $$
>
> 的形式，所以满足定理3.0要求的一列子群不可能存在，进而按照我们的办法，五次方程无法给出求根公式。

定理3.0中的不足是可以克服的，也就是可以证明：

> **定理3.1**：一般的 $$n$$ 次方程可以找到求根公式的充分必要条件是：存在一列群
>
> $$
> \{\operatorname{id}\}=G_{N} \subseteq G_{N-1}\subseteq \cdots \subseteq G_{2} \subseteq G_{1} \subseteq G_{0} = S_{n}
> $$
>
> 它们满足：对任意的 $$0\leqslant k < N$$，$$G_{k+1}$$ 是 $$G_{k}$$ 的正规子群，且存在 $$G_{k}$$ 中某个置换 $$\tau$$，使得
>
> $$
> G_{k+1},\tau G_{k+1},\tau^{2}G_{k+1},\dots,\tau^{m-1}G_{k+1}
> $$
>
> 的并集为 $$G_{k}$$.

但我们不会给出这一定理的证明，只会给出一个看似合理的说明，实际上严格的证明需要靠域和域扩张的语言来叙述，并且会涉及到完整的伽罗瓦理论。

我们将试图让读者相信：如果有人用别的办法能给出方程的求根公式，那用我们的办法同样也能给出求根公式。

一般来说，方程的根式解会包含多个根式，比如：

$$
r_{1} = \sqrt[5]{A^{2}} +\sqrt[5]{A^{3}} + \sqrt{B+\sqrt[4]{C}+ \sqrt[5]{D}}
$$

其中 $$A,B,C,D$$ 可以靠方程的系数作四则运算得到。上面等式的左边是关于 $$r_{1},\dots,r_{n}$$ 的多项式，而右边是一些根式的和，因此最可能的情况是，右边的每一个根式都可以写成 $$r_{1},r_{2},\dots,r_{n}$$ 的多项式。这样我们的求根公式会告诉我们：我们需要先算出一些多项式的值（如再上面的表达式里，我们需要先算出 $$\sqrt[5]{A},\sqrt[4]{C},\sqrt[5]{D}$$ 的值），这正好对应我们思路的第一步，即寻找 $$g_{1}$$ 使得 $$g_{1}^{m}$$ 是对称多项式；之后我们需要对这些已知值的多项式作四则运算（如上面的例子里，我们要算出 $$B+\sqrt[4]{C}+ \sqrt[5]{D}$$），然后再开根号得到更多的多项式的值，这相当于寻找后续的多项式 $$g_{2},g_{3},\dots$$.

因此，只要我们有了一个求根公式，那最可能的情况是：求根公式的表达式会告诉我们，该如何用我们的办法解出方程。这样我们可以相信，定理3.0给出的条件就是一个方程有求根公式的充分必要条件。

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
