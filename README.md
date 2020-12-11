# learn

1.React - Doc - Main concepts

1) JSX, render, props & state, lifecycle, events, lists(key), form, composition(props.children)

2) lifting state up: in rate folder, 依据例子写了汇率换算, 两个input框同步, Messgae和CurrencyInput没有自己的state, 只传入需要显示的值, LiftStateUp保存数据, 初始化state, 处理事件.
- LiftStateUp
  - Message
  - CuttencyInput

hierarchy(层次结构):
- App
  - OneInput
  - Content
    - Bed
  - CreateForm

3) OneInput: 内部含有两个input, 相互独立, 点击button, 内部显示(state), 也传值给App(state: content), 还可以传给Content(props), 还可以传给Bed(props)

4) Content:  
    1. button - temper: conditional render 
    2. ul: 展示state内array
    3. ul - Bed: 无state, 显示App内的house, 添加OneInput输入内容, delete button删除一个li

5) CreateForm: 自己的state, this.setState({ [name]:value })更新, form onSubmit={this.handleSubmit}

2.Thinking:
1) Break the UI into a component: draw boxes and give names 
    - a component only do one thing
2) Build a static version: no interactivity, dont't need state(for interactivity), components only have render() methods
    - build top-down or bottom-up
    - one-way data flow(单向数据流)
3) Minimal set of mutable state: think all data and figure out which one is state
    - can't passed in as props
    - change over time
    - can't be computed from anything
4) Where state live: component renders based on state, a common owner component(pass other components as props)
5) Add inverse data flow: update the state
    - callback will call setState()