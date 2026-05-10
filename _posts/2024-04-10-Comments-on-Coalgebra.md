---
layout: post
title: Comments on Coalgebra
date: 2024-04-10 19:12:41
description: Provide some motivations and examples for the coalgebra.
tags:
  
categories: Notes
toc:
  sidebar: left
---

在看李群的上同调的时候看到过一些Hopf代数的东西。之前一直没有理解余代数是个什么东西——箭头反向固然可行，但箭头反向的意义又在哪呢？最近听了一个有关量子群的讲座，有了些新的想法。这篇评论试图给出一些例子，以解释Hopf代数和余代数的来源。

鉴于作者水平有限，文中一些术语的翻译或许与主流数学用语不同。作者会在术语第一次出现且不确定翻译时，附上相应的英文或链接。

## 空间上的函数

数学里面的很多主题都会关心一个空间上的函数。比如线性代数里关心一个线性空间上的线性函数（对偶空间，对吧）；拓扑中关心一个空间上的连续函数（或许有读者会想起某个[用函数分割闭集的定理](https://en.wikipedia.org/wiki/Urysohn%27s_lemma)）；代数几何最开始也是讨论代数集上的多项式函数。

一个被作者认为来源于代数几何的想法是：相较于研究空间，更重要的是研究空间上的函数。还是以代数几何为例，初等代数几何里研究的代数集就完全靠函数确定——它们是若干个多项式的公共零点。所以理论上，只要把多项式函数研究清楚了，代数集的性质也就弄清楚了。代数几何里面[仿射概形](https://en.wikipedia.org/wiki/Scheme_(mathematics)#Definition)的概念也许走得更远。仿射概形被看作是某个交换环的全体[素理想](https://en.wikipedia.org/wiki/Prime_ideal)构成的集合，这时候空间的拓扑靠理想的包含关系定义，仿射概形之间的映射靠对应环的环同态定义。这时候的情况更接近于先有了函数，再定义空间。另一个不那么准确的例子可能是[微分形式](https://en.wikipedia.org/wiki/Differential_form)。微分形式是靠对函数作外微分得到的，而无论谁在介绍微分形式时，都会提到[De Rham上同调](https://en.wikipedia.org/wiki/De_Rham_cohomology)——它是一个拓扑不变量，反映了集合的拓扑信息。

在这样一个想法的启发下，就会产生这样的问题：能不能抛开空间，只研究空间上的函数。代数几何里概形的例子或许告诉我们这是可行的。我们看一下如果只研究函数，会发生什么。

后面我们会继续使用大量不严谨的语言。读者可以直接将后文中的“空间”、“函数”、“映射”分别替换为“平面上的区域”、“光滑函数”、“光滑映射”，或替换为“拓扑空间”、“连续函数”、“连续映射”。

## 交换代数结构、拉回

我们步子迈小一点，先来看看将一个空间映到实数的函数是怎样的。

对于两个函数$$f_{1}, f_{2}: X \rightarrow \mathbb{R}$$，我们有自然的加法

$$
(f_{1} + f_{2})(x) = f_{1}(x) + f_{2}(x)
$$

也有自然的、交换的乘法

$$
(f_{1}\cdot f_{2})(x) = f_{1}(x) f_{2}(x)
$$

这使得空间上的全体函数成为一个交换环。更进一步，注意到我们还能定义数乘

$$
(\lambda \cdot f)(x) = \lambda\cdot f(x)
$$

所以一个空间上的函数实际上是一个（含[幺元](https://en.wikipedia.org/wiki/Identity_element)的）交换代数（一个能作乘法的线性空间被叫做[代数](https://en.wikipedia.org/wiki/Algebra_over_a_field#Definition)），这使我们从研究函数的性质转到了研究交换代数的性质。为了方便，对于一个空间$$X$$，将$$X$$上的全体函数构成的空间记为$$\mathcal{F}(X)$$. 这里$$\mathcal{F}$$取函数“function”的首字母，使用圆体仅仅是为了好看。

我们可以看一个例子：如果将空间限定在仿射空间，函数限定在多项式函数，这时候两个仿射空间$$X, Y$$的乘积$$X \times Y$$上面的全体多项式函数构成的环$$\mathcal{F}(X \times Y)$$会与$$\mathcal{F}(X) \otimes \mathcal{F}(Y)$$同构：

$$
\begin{aligned}
 \mathcal{F}(X) \otimes \mathcal{F}(Y) \simeq \mathcal{F}(X \times Y) \\
 p_{1}(x)\otimes p_{2}(y) \leftrightarrow p_{1}(x)p_{2}(y)
\end{aligned}
$$

这个同构对[代数簇](https://en.wikipedia.org/wiki/Algebraic_variety)和代数簇上的多项式函数也是成立的，但对一般的空间并不成立，不过我们在一些时候有类似的性质，比如代数拓扑中的[Künneth定理](https://en.wikipedia.org/wiki/K%C3%BCnneth_theorem)。

我们还关心空间之间的映射，对一个空间之间的映射$$\varphi: X \rightarrow Y$$，由它定义了交换代数之间的同态

$$
\begin{aligned}
 \varphi^{*}: \mathcal{F}(Y) & \longrightarrow \mathcal{F}(X) \\
 f & \longmapsto f\circ \varphi.\\
\end{aligned}
$$

我们在这里把同态$$\varphi^{*}$$叫做由映射$$\phi$$定义的“拉回”。拉回并不是一个陌生的东西，一个例子是，如果空间$$X$$是空间$$Y$$的子空间，那么“将$$Y$$上的函数限制在$$X$$上”这一操作相当于用嵌入$$\iota: X \rightarrow Y$$将$$Y$$上的函数拉回到$$X$$上。

映射的拉回的定义告诉我们，空间之间的映射可以用交换代数之间的同态来描述。这里一个需要注意的地方是，映射$$\varphi$$和$$\varphi^{*}$$的“方向”相反，前者是从$$X$$到$$Y$$，后者是从$$Y$$到$$X$$. 这一方向的变化会是解释余代数中箭头反向的关键。

## 将运算表示为映射

这里稍微停一下，说说如何把代数中乘法和单位元看作映射。或许一些读者不太习惯这种看法，所以给出一种说法，以解释为什么要这么看。

我们都相信，数学是靠集合和映射构建起来的，这种信念导出了两件事：一件是，集合和映射是最基本的东西，如果我们想要关于一个东西的更本质看法，可以从集合和映射的角度去思考；另一件是，理论上，数学里的所有东西都可以用集合和映射来描述。

所以我们会这样描述一个（实数域上）含幺元$$1$$的交换代数：它是一个集合$$A$$，上面有两个映射

$$
\begin{matrix}
 \mu: & A \otimes A &\longrightarrow & A \\
 & (x, y) & \longmapsto & x\cdot y \\
 \eta: & \mathbb{R} & \longrightarrow & A \\
 & \lambda & \longmapsto & \lambda \cdot 1
\end{matrix}
$$

我们把$$\mu$$叫做乘法，把$$\eta$$叫做一个单位(unit)。这时候，代数的乘法结合律和单位元的性质$$1\cdot x= x\cdot1 = x$$可以用上面的两个函数写出来

> $$
> \text{结合律：}\mu \circ (\mathrm{id}_{A} \otimes \mu) = \mu \circ (\mu \otimes \mathrm{id}_{A})
> $$
>
> $$
> \text{单位性质：} \mu \circ (\eta \otimes \mathrm{id}_{A}) = \mu \circ (\mathrm{id}_{A} \otimes \eta) = \mathrm{id}_{A}
> $$
>
> 这里$$\mathrm{id}_{X}$$表示一个集合$$X$$上的[恒同映射](https://en.wikipedia.org/wiki/Identity_function)。

上面的两个式子可以写成下面的两个交换图表：

<div>
    {% include figure.liquid loading="eager" path="../assets/img/posts/2024-04-10-Comments-on-Coalgebra/Associa.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

<div>
    {% include figure.liquid loading="eager" path="../assets/img/posts/2024-04-10-Comments-on-Coalgebra/Unit.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

## 从带有运算的空间到余代数、双代数(bialgebra)

到此为止，我们只涉及到了交换代数，下面我们将将要解释余代数的结构从何而来，这里出现带有运算的空间。

在数学中会出现带有乘法运算的空间。比如说，所有$$n \times n$$的实系数矩阵构成的矩阵代数$$M_{n}(\mathbb{R})$$。这个集合是一个线性空间（线性空间也算空间，对吧），因为它和$$\mathbb{R^{n \times n}}$$同构，所以我们还可以赋予它拓扑，使它成为一个[拓扑空间](https://en.wikipedia.org/wiki/Topological_space)。在这个空间上，我们还有一个乘法：矩阵乘法。

另一个例子是一般线性群$$GL_{n}(\mathbb{R})$$，也就是那些可逆矩阵构成的空间。它是矩阵代数$$M_{n}(\mathbb{R})$$的子集，因此也是一个拓扑空间，且它上面有矩阵乘法。此外，特殊线性群中的元素正好是$$M_{n}(\mathbb{R})\times \mathbb{R}$$上多项式函数

$$
(M, t) \longmapsto t\cdot \det(M) - 1
$$

的零点，这使得它成为一个代数集。

还有一大类带有运算的空间是[李群](https://en.wikipedia.org/wiki/Lie_group#)。它们是带有群结构的微分流形，使得乘法和取逆都是光滑映射。刚刚出现的空间$$GL_{n}(\mathbb{R})$$就是一个李群的例子。

我们来看带有运算意味着什么。我们以$$M_{n}(\mathbb{R})$$和上面的多项式函数为例。空间$$M_{n}(\mathbb{R})$$上的乘法运算和数乘运算可以用两个空间之间的映射来描述

$$
m: M_{n}(\mathbb{R})\times M_{n}(\mathbb{R}) \rightarrow M_{n}(\mathbb{R})
$$

$$
e: \{1\} \rightarrow M_{n}(\mathbb{R})
$$

这里$$m$$对应着矩阵的乘法，$$e$$将单位1映到单位矩阵$$I_{n}$$，所以数乘由$$\lambda\cdot M = \lambda e(1) M$$给出。

因为我们关心的是空间上的函数，所以这两个映射实际上诱导了交换代数之间的映射：

> $$
> \nu := m^{*}: \mathcal{F}(M_{n}(\mathbb{R})) \rightarrow \mathcal{F}(M_{n}(\mathbb{R})) \otimes \mathcal{F}(M_{n}(\mathbb{R}))
> $$
>
> $$
> \varepsilon:= e^{*}: \mathcal{F}(M_{n}(\mathbb{R})) \rightarrow \mathcal{F}(\{1\}) = \mathbb{R}
> $$

原本的$$m, e$$满足结合律和单位性质，但因为取拉回的时候，映射的方向会反向，所以这里的$$\nu, \varepsilon$$实际上满足[余代数的公理](https://en.wikipedia.org/wiki/Coalgebra#Formal_definition)。

所以我们知道了这样一件事：矩阵代数$$M_{n}(\mathbb{R})$$上的全体多项式函数$$\mathcal{F}(M_{n}(\mathbb{R}))$$不仅是个交换代数，也是一个余代数。更进一步，注意到根据拉回的定义，映射$$\nu = m^{*}$$和映射$$\varepsilon = e^{*}$$是代数之间的同态，也就是说，$$\nu$$、$$\varepsilon$$和多项式函数环$$\mathcal{F}(M_{n}(\mathbb{R}))$$上的乘法$$\mu$$、数乘$$\eta$$会满足[双代数的公理](https://en.wikipedia.org/wiki/Bialgebra#Formal_definition)。因此，矩阵代数上的多项式环$$\mathcal{F}(M_{n}(\mathbb{R}))$$实际上是一个双代数。

一般来看，我们可以做出这样的总结：在一个带有运算和单位的空间上，所有函数构成的集合会是一个双代数。

## 取逆与Hopf代数

[Hopf代数](https://en.wikipedia.org/wiki/Hopf_algebra)和双代数相比，只是多了一个对极映射(antipode)$$S$$. 当我们将取逆这一运算搬到空间上的函数时，就会得到一个对极。比如我们可以考虑作为代数簇的一般线性群$$GL_{n}(\mathbb{R})$$上的多项式函数。

因为一般线性群$$GL_{n}(\mathbb{R})$$上有乘法运算（我们仍用映射$$m$$来表示），且拥有单位元（我们仍用映射$$e$$来表示），所以一般线性群上的多项式函数环$$\mathcal{F}(GL_{n}(\mathbb{R}))$$仍然构成一个双代数，上面的余乘法(coproduct)是$$\nu = m^{*}$$，余单位(counit)是$$\varepsilon = e^{*}$$.

一个结论是，这是一个Hopf代数。我们来看看这上面的对极如何构造

一般线性群$$GL_{n}(\mathbb{R})$$的每个元素都有逆元，这样定义了一个映射：

$$
\begin{aligned}
 s: GL_{n}(\mathbb{R}) & \longrightarrow GL_{n}(\mathbb{R})\\
 g & \longmapsto g^{-1}
\end{aligned}
$$

这时候，映射$$s$$的拉回给出了多项式环上的同态$$S = s^{*}$$. 我们来说明$$S$$正好是我们想要的对极。

我们用映射

> $$
> \mu: \mathcal{F}(GL_{n}(\mathbb{R})) \otimes \mathcal{F}(GL_{n}(\mathbb{R})) \rightarrow \mathcal{F}(GL_{n}(\mathbb{R}))
> $$
>
> $$
> \eta: \mathbb{R} \rightarrow \mathcal{F}(GL_{n}(\mathbb{R}))
> $$

分别表示多项式环$$\mathcal{F}(GL_{n}(\mathbb{R}))$$上的乘法和单位。并用$$\mathrm{id}$$表示$$\mathcal{F}(GL_{n}(\mathbb{R}))$$上的恒同映射。根据[Hopf代数的定义](https://en.wikipedia.org/wiki/Hopf_algebra#Formal_definition)，我们只需要得到下面的关系：

> $$
> \mu \circ (S \otimes \mathrm{id}) \circ \nu = \mu \circ (\mathrm{id} \otimes S) \circ \nu = \eta \circ \varepsilon
> $$

我们会说明，上面的等式实际上是由等式

$$
x^{-1}x = xx^{-1} = 1
$$

拉回之后得到的。

在上面的等式里，同态$$\nu, \varepsilon, S, \mathrm{id}$$都可以表示成某个空间映射的拉回，但$$\mu, \eta$$不行。因此我们需要将多项式函数上的运算$$\mu, \eta$$表示成某个空间映射的拉回。

我们直接来看一般的情况。对于一个空间$$X$$，取所谓的“对角线映射”：

$$
\begin{aligned}
 \Delta: X &\longrightarrow X \times X \\
 x & \longmapsto (x, x) \\
\end{aligned}
$$

以及平凡映射$$o: X \rightarrow \{1\}$$，这时候我们可以考虑$$\Delta, o$$的拉回$$\Delta^{*}, o^{*}$$是什么。

先来看映射$$\Delta$$的拉回，它将一个定义在空间$$X \times X$$上的函数$$h(x_{1}, x_{2})$$变成在空间$$X$$上的函数$$h\circ \Delta(x) = h(x, x)$$. 特别的，如果我们把$$h$$取成$$f(x_{1})g(x_{2})$$的形式，就有：

$$
\Delta^{*}(f(x_{1})g(x_{2})) = f(x)g(x)
$$

这正好是我们想要的乘法。不过严格来说还有一个小问题，根据拉回的定义，同态$$\Delta^{*}$$是定义在$$\mathcal{F}(X\times X)$$上的：

$$
\Delta^{*}: \mathcal{F}(X\times X) \longrightarrow \mathcal{F}(X)
$$

这和我们的乘法运算不太一样，我们记得乘法是定义在代数$$\mathcal{F}(X)\otimes \mathcal{F}(X)$$上的。不过问题不大，因为$$\mathcal{F}(X)\otimes \mathcal{F}(X)$$可以看作$$\mathcal{F}(X\times X)$$的“子代数”：

$$
\begin{matrix}
 \mathcal{F}(X) & \otimes & \mathcal{F}(X) & \longrightarrow
 \mathcal{F}(X \times X) \\
 f & \otimes & g & \longmapsto f(x_{1})g(x_{2})
\end{matrix}
$$

所以我们只需用这个映射调整一下定义域，就可以得到我们想要的乘法。为了便于理解，我们还是将函数环$$\mathcal{F}(X)$$上的乘法$$\mu$$看作对角线映射的拉回$$\Delta^{*}$$.

再来看平凡映射的拉回

$$
o^{*}: \mathbb{R} = \mathcal{F}(\{1\}) \longrightarrow \mathcal{F}(X)
$$

根据拉回的定义，同态$$o^{*}$$将一个实数$$\lambda$$映到常值函数$$\lambda$$，这正好就是单位$$\eta$$的定义。所以有$$\eta = o^{*}$$.

这时候我们来看等式$$x^{-1}x = xx^{-1} = 1$$，这个等式用$$m, e, s, \mathrm{id}_{X}, \Delta, o$$可以表示为

> $$
> m\circ(s\otimes \mathrm{id}_{X}) \circ \Delta = m\circ(\mathrm{id}_{X}\otimes s) \circ \Delta = e\circ o
> $$

这个式子在取拉回之后就说明，$$(\mathcal{F}(X), \mu, \eta, \nu, \varepsilon, S)$$构成一个Hopf代数。

## 李群的上同调——另一个例子

我们来看另一个例子，即李群的[上同调](https://en.wikipedia.org/wiki/Cohomology)。这个例子可以让我们对空间到函数的想法有更深的理解。

我们引入一些[范畴](https://en.wikipedia.org/wiki/Category_theory)的语言。当我们考虑空间和空间之间的映射的时候，我们实际上在想说的是一个范畴：{空间；空间之间的映射}。比如说，拓扑学主要考虑的范畴是{全体拓扑空间；连续映射}，代数几何里会考虑范畴{代数簇；多项式映射}，李群的理论主要考虑的范畴是{李群；李群同态}。

我们这里取定一个环$$R$$，并把由$$R$$上代数和代数同态构成的范畴记为$$R\text{-}\mathbf{Alg}$$，如果读者对抽象的环$$R$$感到不适的话，可以默认$$R$$就是实数。我们后面提到“函数”，都是指取值在$$R$$中的函数。

在$$R$$交换的时候，我们前面进行的第一步讨论实际上将每一个空间关联到了一个$$R$$-代数$$\mathcal{F}(X)$$上，并且将每个空间之间的映射$$f: X \rightarrow Y$$关联到了一个$$R$$-代数同态$$f^{*}$$. 在范畴中来看，这样的操作相当于找到了一个反变函子$$\mathcal{F}: \{\text{空间}, \text{映射}\} \rightarrow R\text{-}\mathbf{Alg}$$. 注意到之后进行的讨论几乎都只依赖于函子$$\mathcal{F}$$的反变性质，所以从带运算的空间构造双代数甚至于Hopf代数的办法很可能可以适用于其他的反变函子。

比如我们考虑以$$R$$为系数的奇异上同调函子：

$$
H^{*}: \mathbf{Top} \rightarrow R\text{-}\mathbf{Alg}
$$

这个函子将拓扑空间$$X$$关联到它的$$R$$系数[奇异上同调](https://en.wikipedia.org/wiki/Cohomology#Singular_cohomology)$$H^{*}(X; R)$$.

我们假定空间具有运算，比如说，我们缩小考虑的范围，只考虑由李群和李群同态构成的范畴。 

这时候，根据Künneth定理，我们知道，对任何两个李群$$X, Y$$，有

$$
H^{*}(X \otimes Y) \simeq H^{*}(X) \otimes H^{*}(Y)
$$

这个形式的等式在我们证明$$\mathcal{F}(M_{n}(\mathbb{R}))$$是双代数的时候也使用过。所以类似前面的论证，我们可以知道对一个李群$$X$$，它的奇异上同调$$H^{*}(X)$$是一个$$R$$上的双代数。

类似前面的步骤，取$$S = s^{*}$$，这里映射$$s: X \rightarrow X$$是取逆$$s(x) = x^{-1}$$. 我们希望能和前面一样证明$$S$$是双代数$$H^{*}(X)$$上的对极。

注意到上同调环$$H^{*}(X)$$上的乘法和数乘是靠下面的两列同态定义的的：
>
> $$
> H^{*}(X) \otimes H^{*}(X) \simeq H^{*}(X \times X) \xrightarrow{\Delta^{*}} H^{*}(X)
> $$
>
> $$
> R \simeq H^{*}(\{1\}) \xrightarrow{o^{*}} H^{*}(X)
> $$
>
这里$$\Delta, o$$分别表示对角线映射和平凡映射。这意味着上同调的乘法和数乘是由空间的映射$$\Delta$$和$$o$$作用$$H^{*}$$之后得到的。这样的话，仍然考虑等式

$$
x^{-1}x = xx^{-1} = 1
$$

也就是等式
>
> $$
> m\circ(s\otimes \mathrm{id}_{X}) \circ \Delta = m\circ(\mathrm{id}_{X}\otimes s) \circ \Delta = e\circ o
> $$
>
这里$$m: X \times X \rightarrow X$$是$$X$$上的乘法，$$e$$是将$$\{1\}$$映到$$X$$的单位元$$1$$的映射。在它的两边作用$$H^{*}$$就可以知道，前面定义的$$S$$的确是一个对极。

这样我们就说明了李群的奇异上同调一定是一个Hopf代数。
