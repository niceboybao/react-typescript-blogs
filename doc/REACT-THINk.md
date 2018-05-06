# 做了一年的react自己的感悟和总结

## 目录

- [做react项目需要掌握什么](#做react项目需要掌握什么)
- [react](#react)
- [redux](#redux)
- [react-router](#react-router)
- [redux-saga](#redux-saga)
- [reselect](#reselect)
- [ES6](#ES6)
- [webpack](#webpack)
- [Sass or Less](#Sass-or-Less)

react确实是一个神奇而优雅的框架。在从事react项目之前，一直是在做angular的，angular是一个全面和庞大的框架，在起初设计的时候什么都有，复杂程度也很高，所以用angular做项目基本上不需要其他的辅助库来配合。但是react项目真的是不一样了，要是只会一个react的话，很难开发出需求的。因为react就只负责UI的渲染。

## 做react项目需要掌握什么

[react](https://github.com/facebook/react) 功能单一用于UI渲染，[redux](https://github.com/reactjs/redux) 用来管理数据，[react-router](https://github.com/ReactTraining/react-router) 用来管理路由，[webpack](https://doc.webpack-china.org/concepts/loaders/#-loader) 用来配置工程，[ES6](http://es6.ruanyifeng.com/) 让代码更加优雅，[redux-saga](https://github.com/redux-saga/redux-saga) 用来处理异步请求，[reselect](https://github.com/reactjs/reselect) 缓存机制用来减少state改变带来的渲染压力,还有一些为了交互衍生出来的中间件 [react-redux](https://github.com/reactjs/react-redux)、[react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)、[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) ，预处理器[Sass](https://www.w3cplus.com/sassguide/syntax.html)或[Less](https://www.w3cschool.cn/less/) 尽量也掌握下。

## react

> 前面有说过react只负责ui的渲染

### 从V-dom出发

react最难能可贵的就是虚拟dom的思想，这里有个贴切的比喻：把dom和JavaScript想象为各自的2个岛屿，中间有桥梁相连，但是桥上设有收费站，JavaScript去访问dom岛屿的次数越多，费用就越高。这就是一个js操作dom的过程，也许我们经常听到或者看到说尽量少的去操作dom，很耗性能。但是[DOM 操作成本到底高在哪儿？](http://mp.weixin.qq.com/s/MdnUDH3FwQ5Yv3LeHI3PMQ),这边小总结下：

从输入url到页面加载好是一个很漫长的过程，我们就从html的解析开始说起。①解析HTML，开始构建DOM树；②解析CSS，生成CSS规则树；③合并DOM树和CSS规则树，生成render树；④布局render树（Layout/reflow），这时候负责元素尺寸大小，位置的计算，属于js中回流过程；⑤绘制render树（paint），绘制页面像素，属于重绘的过程；⑥浏览器会将各层的信息发送给GPU(图像处理器)，GPU将各层合成（composite），显示在屏幕上。这是初始化渲染的过程，通过js操作DOM后，会引起 [回流](http://www.css88.com/archives/4996) 和重绘，回流的成本很高，一个节点的回流会导致兄弟节点和子节点的回流，这样就一直在消耗GPU资源，所以才有了成本高的说法。

我们从操作dom的成本开始引入react，它创造了虚拟dom并且将它们储存起来，每当状态发生变化的时候就会创造新的虚拟节点和以前的进行对比，让变化的部分进行渲染。整个过程没有对dom进行获取和操作，只有等真正render时，才会去操作真实dom，从而引发页面的渲染。

#### V-dom的缺点

ReactJS 使用虚拟 DOM 机制，让前端开发者为每个组件提供一个 render 函数。render 函数把 props 和 state 转换成 ReactJS 的虚拟 DOM，然后 ReactJS 框架根据render 返回的虚拟 DOM 创建相同结构的真实 DOM。

每当 state 更改时，ReactJS 框架重新调用 render 函数，获取新的虚拟 DOM 。然后，框架会比较上次生成的虚拟 DOM 和新的虚拟 DOM 有哪些差异，进而把差异应用到真实 DOM 上。

这样做有两大缺点：

```javascript
//每次 state 更改，render 函数都要生成完整的虚拟 DOM，哪怕 state 改动很小，
//render函数也会完整计算一遍。如果 render 函数很复杂，这个过程就会白白浪费很多计算资源。

//ReactJS 框架比较虚拟 DOM 差异的过程，既慢又容易出错。比如，你想要在某个 <ul> 列表的顶部插入一项 <li> ，
//那么 ReactJS 框架会误以为你修改了 <ul> 的每一项 <li>，然后在尾部插入了一个 <li>。
```

这是因为 ReactJS 收到的新旧两个虚拟 DOM 之间相互独立，ReactJS 并不知道数据源发生了什么操作，只能根据新旧两个虚拟 DOM 来猜测需要执行的操作。自动的猜测算法既不准又慢，必须要前端开发者手动提供 key 属性、shouldComponentUpdate 方法、componentDidUpdate 方法或者 componentWillUpdate 等方法才能帮助 ReactJS 框架猜对。

### diff算法

react的diff算法用在什么地方呢？当组件更新的时候，react会创建一个新的虚拟dom树并且会和之前储存的dom树进行比较，这个比较的过程就用到了diff算法，所以组件初始化的时候是用不到的。react提出了一种假设，相同的节点具有类似的结构，而不同的节点具有不同的结构。在这种假设之上进行逐层的比较，如果发现对应的节点是不同的，那就直接删除旧的节点以及它所包含的所有子节点然后替换成新的节点。如果是相同的节点，则只进行属性的更改。

对于列表的diff算法稍有不同，因为列表通常具有相同的结构，在对列表节点进行删除，插入，排序的时候，单个节点的整体操作远比一个个对比一个个替换要好得多，所以在创建列表的时候需要设置key值，这样react才能分清谁是谁。当然不写key值也可以，但这样通常会报出警告，通知我们加上key值以提高react的性能。

![](https://user-gold-cdn.xitu.io/2018/4/9/162aa85c10ccfb27?w=736&h=409&f=png&s=22848)

需要了解清楚，看源码

### 单项数据流

![](https://user-gold-cdn.xitu.io/2018/4/8/162a45bcff4b3d76?w=817&h=564&f=png&s=95196)

### 组件化

组件就是拥有独立功能的视图模块,React的最大好处在于：功能组件化，遵守前端可维护的原则。

### 组件生命周期

![](https://user-gold-cdn.xitu.io/2018/4/8/162a409d944bae90?w=2803&h=2945&f=png&s=70837)

#### 组件初始化会触发的5个钩子函数

**1.getDefaultProps()**

> 设置默认的props，也可以用defaultProps设置组件的默认属性。

getDefaultProps相当于ES6中的 static defaultProps = {}

**2.getInitialState()**

> 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props。

getInitialState相当于ES6 class中constructor的 this.state = {}

> 钩子函数1 2 只有用React.createClass方法创造的组件类才会发生作用，并且React.createClass已经被Fb官方废弃，所以这里不细讲了。

**3.componentWillMount()**

> 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。

**4.render()**

> react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。

render() 应该是一个纯函数，完全根据state和props来决定返回结果，而不产生副作用，所以render中调用setState是错的，因为纯函数不应该引起状态的改变

**5.componentDidMount()**

> 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次。

did的前缀表示进入状态之后调用，比如componentDidMount，组件一般初始化都会在这里进行数据请求。

> [为什么请求数据要在这个钩子函数里面调用?](https://segmentfault.com/q/1010000008133309)

我的总结详见[react中遇到的一些问题的解答](https://niceboybao.github.io/2018/04/11/react/questions/)

#### 组件交互更新时触发的5个钩子函数

**6.componentWillReceiveProps(nextProps)**

> 组件初始化时不调用，组件接受新的props时调用。

开发过程中一般是在这个钩子函数里面改变`state`,此方法中改变state不会二次渲染而是进行state合并。

**7.shouldComponentUpdate(nextProps, nextState)**

> react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。

**8.componentWillUpdate(nextProps, nextState)**

> 组件初始化时不调用，只有在组件将要更新时才调用。

千万不要在这个函数中调用this.setState()方法，会造成循环调用。

**9.render()**

> 同上render()，创建虚拟dom，进行diff算法，更新dom树都在此进行。

**10.componentDidUpdate()**

> 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。

在componentDidUpdate后才能获取更新后的`this.state`。如果想获取组件默认的props，并且赋值给State ,就可以在这里修改，达到UI上的效果。

#### 组件卸载时调用

**10.componentWillUnmount()**

> 组件将要卸载时调用，一些事件监听和定时器需要在此时清除,还有此组件store上面的值也可以对应的清楚。

componentWillUnmount执行重置所有相关参数。在该方法中调用setState不会触发render，因为所有的更新队列，更新状态都被重置为null。

```javascript
//数据清楚需要写在reducer里面
this.props.clearPointData();

[CLEAR_POINT_DATA]: (state, action: Action<any>) => {
    return Object.assign({}, state, {
        selectedReadingList: {},
        knowledgePoint: {},
    });
}
```

以上可以看出来react总共有10个周期函数（render重复一次），这个10个函数可以满足我们所有对组件操作的需求，利用的好可以提高开发效率和组件性能。

## redux

### react-redux

## react-router

要了解下router的机制

### react-router-redux

保持路由与应用状态（state）同步。使用redux管理应用状态(state)，使用router管理路由，两个库不能协同工作，react-router-redux库可以协调这两个库。

### react-router-dom

## redux-saga

## reselect

在React中最昂贵的操作就是渲染回路.当组件检测到输入的变化,渲染回路就会被触发(译注：这里的意思的组件的action会改变redux的state,变回最终又回到组件了).

当我们初次开始React程序的时候,我们不会担心渲染回路的花销问题.但是当我们的UI变得复杂的时候,我们需要考虑这一点.React提供了一些工具让我们能劫持渲染回路,如果渲染看上去不必要,我们就可以使用工具来阻止重渲染的发生.为了这么做,我们要敲入componentShouldUpdate生命周期事件,返回一个布尔值,通知组件是否应该进行更新.这是以PureRenderMixin作为基础,它比较输入的props和state和先前的props和state,如果两者相等就返回false.

不幸的是,仅此而已.

Reselect用来记忆selectors的库.我们定义的selectors是作为函数获取Redux state的某一部分.使用记忆能力,我们可以组织不必要的衍生数据的重渲染和计算过程,由此加速了我们的app.

Reselect这个中间件要解决的问题是:`在组件交互操作的时候,state发生变化的时候如何减少渲染的压力.在Reselect中间中使用了缓存机制`

"selector"是一个简单的Redux库

- Selector可以计算衍生的数据,可以让Redux做到存储尽可能少的state。
- Selector比较高效,只有在某个参数发生变化的时候才发生计算过程.
- Selector是可以组合的,他们可以作为输入,传递到其他的selector.

**参考**

-[使用Reselect改进React和Redux程序性能](http://baijiahao.baidu.com/s?id=1561953979797569&wfr=spider&for=pc)

## ES6

## webpack

[参考webpack官网](https://doc.webpack-china.org/concepts/loaders/#-loader)

## Sass or Less

随着前端的不断发展，网站的页面复杂度也在不断提升，原生 CSS 已经让开发者力不从心，预处理器赋予我们的 "超能力"。[浅谈 CSS 预处理器：为什么要使用预处理器？](https://mp.weixin.qq.com/s?__biz=MzIyMjE0ODQ0OQ==&mid=2651552806&idx=1&sn=7c88a87aa57ca2e14c82df7bb806a378)

### Sass

[参考Sass语法](https://www.w3cplus.com/sassguide/syntax.html)

### Less

[参考Less语法](https://www.w3cschool.cn/less/)
