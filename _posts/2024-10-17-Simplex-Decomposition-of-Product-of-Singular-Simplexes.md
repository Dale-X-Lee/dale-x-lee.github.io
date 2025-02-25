---
layout: post
title: Simplex Decomposition of Product of Singular Simplexes(In Chinese)
date: 2024-10-17 23:57:16
description: Construct a concrete simplex decomposition of product of singular simplexes with an intuitive proof.
tags:
categories: sample-posts
toc:
  beginning: true
---
## 1.引入

在同调论里，一个很自然的问题是，对于两个拓扑空间$X,Y$，它们的乘积$X\times Y$的奇异同调群如何用各自的奇异同调群表示。

这一问题相当基本，答案看起来也相当明显：我们希望有

$$
H_*(X\times Y) \cong H_*(X)\otimes H_*(Y).
$$

不过在试图计算的时候，得到上面的关系会相当麻烦。一个主要的原因是，两个奇异单形的乘积不再是奇异单形。

为了让我们的计算能够进行下去，一个办法就是对两个奇异单形$\sigma, \tau$的乘积$\sigma \times \tau$作单形剖分。依据Gelfand的*Methods of Homoligical Algebra*，我们这里提供一个剖分的办法（但不会给出证明）。

## 2.一些记号

我们在这一节里介绍之后使用的符号。

* $e_{i-1}$：$\mathbb{R}^n(n\geq i)$中的基向量，也就是第$i$个分量为$1$，余下分量为$0$的向量。因为在每个向量末尾添上$0$，可以将$\mathbb{R}^n$自然地嵌入到$\mathbb{R}^{n+1}$，所以我们后面认为$e_i$落在一个维数充分大的向量空间里。
* $\Delta^q$：$q$维标准单形，即

$$
\{ \sum_{i=0}^q x_i e_i \mid 0\leqslant x_i \leqslant 1, \sum_{i}x_i =1 \}
$$

* $\sigma\colon \Delta^p \rightarrow X$：这是$X$中的一个奇异单形，有时我们会用上标来表示$\sigma$的维数，即$\sigma^p$表明$\sigma$是一个$p$维单形。
* $[v_0,v_1, \dots, v_q], v_i \in V$：表示线性空间$V$中的奇异单形：

$$
\begin{aligned}
\Delta^q & \longrightarrow V \\
\sum_{i=0}^q x_ie_i & \longmapsto \sum_{i=0}^q x_i v_i
\end{aligned}
$$

* $[n]$：表示集合$\{0,1,2,\dots, n\}$.

## 3.奇异单形的乘积的单形剖分

我们接下来描述两个奇异单形$\sigma: \Delta^p \rightarrow X,\tau: \Delta^q \rightarrow Y$的乘积：

$$
\sigma \times \tau \colon \Delta^p \times \Delta^q \longrightarrow X \times Y
$$

的单形剖分：

$$
m(\sigma, \tau) \in S_{p+q}(X\times Y)
$$

### 表格里的路径

我们将集合$[p]\times [q]$看作一个$p$列、$q$行的表格的顶点，每个顶点的横坐标的取值范围为$0,1,\dots, p$，纵坐标的取值范围为$0,1,\dots, q$. 并且表格左下角的顶点为$(0,0)$，右上角的顶点为$(p,q)$.

$$
\begin{array}{|l|l|l|l|l|l|}
\hline
\  & \  & \  & \cdots & \ & \  \\
\hline
\  & \  & \  & \cdots & \ & \  \\
\hline
\  & \  & \  & \cdots & \ & \  \\
\hline
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots\\
\hline
\  & \  & \  & \cdots & \ & \  \\

\hline
\end{array}
$$

我们从$(0,0)$出发，每次向上或者向右走一格，一直走到顶点$(p,q)$，就会得到这个表格中的路径。严格来说，表格里的路径是一个映射：

$$
\begin{aligned}
\gamma\colon [p+q] & \longrightarrow [p]\times [q]. \\
i & \longmapsto \bigl(x(i),y(i)\bigr)
\end{aligned}
$$

满足：

$$
\begin{gathered}
\gamma(0)=(0,0), \ \gamma(p+q)=(p,q)\\
\gamma(i)-\gamma(i-1) \in \{(0,1), (1,0)\}, \forall 1\leqslant i \leqslant p+q.\\
\end{gathered}
$$

我们将位于$\gamma$下方的方格的个数记为$\operatorname{ind}\gamma$，将$(-1)^{\operatorname{ind}\gamma}$称为$\gamma$的符号，记为$\operatorname{sgn}\gamma$. 如果将$\gamma$视为映射的话，有

$$
\operatorname{sgn}\gamma = (-1)^{\frac{q(q-1)}{2} + \sum_{i=1}^{p+q-1}y(i)}
$$

### 单纯形剖分

借助表格里的道路，我们可以定义两个奇异单形的乘积的单形剖分：

$$
m(\sigma^{p}, \tau^{q}) = \sum_{\gamma \in \mathscr{P}(p,q)} \operatorname{sgn}\gamma \cdot (\sigma \times \tau)\circ [(e_{x(0)},e_{y(0)}), (e_{x(1)},e_{y(1)}), \dots, (e_{x(p+q)},e_{y(p+q)})]
$$

其中$\mathscr{P}(p,q)$表示$p$列$q$行表格中的所有道路构成的集合。我们在这里不会严格证明这是一个单纯形剖分，只会给出一个直观的解释。

比如我们来看道路：

$$
\gamma_0:(0,0)\to (1,0)\to (2,0) \to \cdots \to (p,0) \to (p,1)\to \cdots \to (p,q)
$$

这个道路给出的$p+q$维单形有$p+q-1$个面落在柱体$\Delta^p \times \Delta^q$的边界上，只有一个不在柱体的表面：

$$
[(e_0,e_0),(e_1,e_0),\dots, (e_{p-1},e_{0}), (e_{p},e_1),(e_{p},e_2),\dots, (e_p,e_q)]
$$

这个面实际上对应着$\gamma_0$在$(p,0)$处的唯一一个“拐角”。为了消去这个面，我们将这个拐角“翻折”一下，得到新的路径$\gamma_1$：

$$
\begin{array}{cccc|}
&&& \uparrow \\
& (p-1,1) & & (p,1) \\
&&& \uparrow \\
\rightarrow & (p-1,0) & \rightarrow & (p,0)\\
\hline
\end{array}
\leadsto
\begin{array}{cccc|}
&&& \uparrow \\
& (p-1,1) & \rightarrow & (p,1) \\
& \uparrow &&\\
\rightarrow & (p-1,0) && (p,0)\\
\hline
\end{array}
$$

为了让这个面的系数变为$0$，我们还需要给$\gamma_1$乘上一个负号（这时$\gamma_1$前的符号正好是$\operatorname{sgn}\gamma_1$）。

但$\gamma_1$又会给出两个不在柱体边界上的面，这两个面正好对应$\gamma_1$在$(p-1,0)$和$(p,1)$处的两个拐角，所以为了消去这两个面，我们要将$\gamma_1$的两个“拐角”分别“翻折”，得到两条道路$\gamma_2, \gamma_3$. 这时$\gamma_2,\gamma_3$前的符号会与$\gamma_1$的符号相反，所以它们的符号恰好也是$\operatorname{sgn}\gamma_2$和$\operatorname{sgn}\gamma_3$.

因为$\gamma_2,\gamma_3$也会有“拐角”，为了消去它们的拐角，我们需要再减去三条路径（这里有个微妙的地方是：有一条路径会同时抵消掉两个面，所以这条路径对应的系数仍然是$\pm 1$）。如此反复，我们就可以得到这一小节开头的单形剖分$m(\sigma, \tau)$.

## 4.性质与推论

对奇异单形的乘积有了单形剖分$m$之后，我们很容易将$m$延拓到奇异链的乘积上，得到：

$$
m\colon S_p(X)\otimes S_q(Y) \longrightarrow S_{p+q}(X\times Y)
$$

我们进一步给出单形剖分$m$的性质。

首先很容易想到的是，两个标准单形$\Delta^p, \Delta^q$的乘积的边界是

$$
(\partial \Delta^p)\times \Delta^q + (-1)^p \Delta^p \times (\partial\Delta^q)
$$

而从上一节最后的论述可以看出来，单形剖分不改变乘积的边界，所以$m(\sigma^{p},\tau^{q})$的边界也是柱体$\Delta^p\times\Delta^q$的边界，也就是有：

$$
\partial m(\sigma^p \otimes \tau^q) = m\bigl((\partial \sigma^p) \otimes \tau^q\bigr) + (-1)^{p}m\bigl(\sigma^p\otimes(\partial \tau^q)\bigr)
$$

我们定义$S_*(X),S_*(Y)$的乘积复形为

$$
\left(S_*(X)\otimes S_*(Y)\right)_{r} = \bigoplus_{p+q=r}S_p(X) \otimes S_q(Y)
$$

其上的边缘算子为

$$
\partial^{\otimes}\colon \sigma^p \otimes \tau^q \longmapsto (\partial \sigma^p) \otimes \tau^q + (-1)^{p}\sigma^p\otimes(\partial \tau^q)
$$

另外很容易注意到的是，$m$是自然的，也就是，如果将$S_*(\cdot)\otimes S_*(\cdot)$与$S_*(\cdot \times \cdot)$视作两个函子，那么$m$实际上给出了它们之间的一个自然变换。

那么这时候我们就知道：

> **命题**：我们定义的单形剖分
>
> $$
> m: S_*(X)\otimes S_*(Y) \rightarrow S_*(X\times Y)
> $$
>
> 是链映射，进而其诱导了同态：
>
> $$
> m_*\colon H_r(S_*(X)\otimes S_*(Y)) \longrightarrow H_r(X \times Y).
> $$

如果使用一些同调代数的技术（比如谱序列），可以算出：

$$
\begin{aligned}
H_r(S_*(X)\otimes S_*(Y)) & \sim \bigoplus_{p+q=r} H_{p}(X; H_q(Y)) \\
& \sim \bigoplus_{p+q=r} H_{q}(Y; H_p(X)) \\
\end{aligned}
$$

> **推论**：我们有自然的同态：
>
> $$
> \begin{gathered}
> \bigoplus_{p+q=r} H_{p}(X; H_q(Y)) \longrightarrow H_r(X \times Y) \\
> \bigoplus_{p+q=r} H_{q}(Y; H_p(X)) \longrightarrow H_r(X \times Y)
> \end{gathered}
> $$

在很多时候，上面的两个同构会给出一个同态，在此我们不讨论这一话题。

## 附录：使用计算机计算低维奇异单形乘积的单形剖分

在给出$\sigma,\tau$的具体维数的时候，可以使用计算机验证我们定义的$m$确为链映射。在此我们给出Python代码。

```Python
def select(n,p):
    '''An assistant function which return all the q-element subsets of [n] in the form: list(0 or 1). This can be further used to describe all the paths needed.'''
    if n<=0 or p<0 or n<p:
        return []
    if p == 0:
        return [[0]*n]
    if n == p:
        return [[1,]*n]
    result = []
    l1 = select(n-1,p-1)
    for i in l1:
        i.append(1)
        result.append(i)
    l2 = select(n-1,p)
    for i in l2:
        i.append(0)
        result.append(i)
    return result

def path_generator(p:tuple,q:tuple)->list:
    '''generate the path needed to describe the simplex decomposition of product of 2 chains.'''
    r = len(p)+len(q)-2
    y = len(q)-1
    proto_path = select(r,len(q)-1)
    all_path = []
    for i in proto_path:
        path = []
        x_axis = 0
        y_axis = 0
        path_index = (-1)**(r*y+y*(y-1)//2)
        path.append((p[x_axis],q[y_axis]))
        for number_of_step in range(1,len(i)+1):
            x_axis += 1-i[number_of_step-1]
            y_axis += i[number_of_step-1]
            path.append((p[x_axis],q[y_axis]))
            path_index *= (-1)**(number_of_step*i[number_of_step-1])
        all_path.append((tuple(path),path_index))
    return all_path


class chain:
    '''class of (integer-coefficient simplicial) chain complexes'''

    def __init__(self, chains:dict =dict()):
        '''chains{simplex: coefficient} is a dictation record the simplexes and its coefficients in the chain.'''
        chains_keys = list(chains.keys())
        for i in chains_keys:
            if chains[i] == 0:
                chains.pop(i) # remove empty elements
        self.cells = chains
        return

    def __repr__(self):
        '''represent a chain as sum of "coefficient*simplex".'''
        if self.cells:
            return ' + '.join([str(self.cells[i])+str(i) for i in sorted(self.cells.keys())])
        else:
            return "0"

    def __add__(self, o):
        '''addition of chains.'''
        sum_chain = dict()
        for i in self.cells:
            sum_chain[i] = self.cells[i]
        assert type(o)==chain
        for j in o.cells:
            if j in sum_chain.keys():
                sum_chain[j]+=o.cells[j]
            else:
                sum_chain[j] = o.cells[j]
        return chain(sum_chain)

    def __sub__(self, o):
        sum_chain = dict()
        for i in self.cells:
            sum_chain[i] = self.cells[i]
        assert type(o)==chain
        for j in o.cells:
            if j in sum_chain.keys():
                sum_chain[j]-=o.cells[j]
            else:
                sum_chain[j] = -o.cells[j]
        return chain(sum_chain)

    def __mul__(self, o):
        '''Return the simplicial decomposition of Cartesian product of 2 chains.'''
        if type(o) == int or type(o) == float:
            for i in self.cells:
                self.cells[i] *= o
            return self
        else:
            d = dict()
            for i in self.cells:
                for j in o.cells:
                    for path in path_generator(i, j):
                        cell = path[0]
                        cell_index = path[1]
                        if cell in d.keys():
                            d[cell] += cell_index * self.cells[i]*o.cells[j]
                        else:
                            d[cell] = cell_index * self.cells[i]*o.cells[j]
            return chain(d)

    def partial(self):
        '''The boundary operator on chain complex.'''
        result = chain()
        for i in self.cells:
            d = dict()
            for j in range(len(i)):
                d[i[:j]+i[j+1:]] = (-1)**j*self.cells[i]
            result = result + chain(d)
        return result

if __name__ == "__main__":
    for p in range(1, 7):
        l = []
        for q in range(1,p+1):
            s1=tuple(i for i in range(p+1))
            s2=tuple(i for i in range(q+1))
            c1 = chain({s1:1})
            c2 = chain({s2:1})
            c3=(c1*c2).partial()
            c4=c1.partial()*c2 + c1*(c2.partial())*(-1)**p
            l.append(c3-c4)
        print(l)
```
