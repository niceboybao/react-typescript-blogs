/**
* @name HomeInformation
* @describe 博客个人信息组件
* @author Baldwin/niceboybao@gmail.com
* @data 2018-3-30, 14:41:58
* @version 1.0.0
* 
*/

import React from 'react';
import {connect} from 'react-redux';

//import css
import style from './style.scss';

//dispatch actions

// properties directed pass in throw react tag
interface HomeInformationOwnProps {

}

//properties from redux store
interface HomeInformationDispatchProps {

}

//diapatch function from redux store
interface HomeInformationStateProps {

}
//component own properties
interface HomeInformationState {

}

@(connect<HomeInformationStateProps, HomeInformationOwnProps & HomeInformationDispatchProps, HomeInformationState>(
    (state: any) => (
        {

        }
    ),
    (dispatch: any) => ({

    })
) as any)

export default class HomeInformation extends React.Component<HomeInformationOwnProps & HomeInformationDispatchProps & HomeInformationStateProps, HomeInformationState> {
    constructor(Props: HomeInformationOwnProps & HomeInformationDispatchProps & HomeInformationStateProps) {
        super(Props);
        console.log("constructor HomeInformation");
    }

    //HomeInformation 组件生命周期
    // 设置默认的props，也可以用dufaultProps设置组件的默认属性。
    //    getDefaultProps() {
    //        console.log("HomeInformation getDefaultProps");
    //    }
    // 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props。
    //    getInitialState() {
    //        console.log("HomeInformation getInitialState");
    //    }
    // Team1组件初始化时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state

    componentWillMount() {
        console.log("HomeInformation componentWillMount");
    }

    // 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次
    // 在这个周期钩子里面处理接口请求
    componentDidMount() {
        console.log("HomeInformation componentDidMount");
    }

    // 组件初始化时不调用，组件接受新的props时调用。
    componentWillReceiveProps(nextProps: any) {
        console.log("HomeInformation componentWillReceiveProps");
    }

    /*
     * react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，
     * 如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
     * 节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。
     */
    //组件接受新的state或者props时调用
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log("HomeInformation shouldComponentUpdate");
        return true;
    }

    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdate(nextProps: any, nextState: any) {
        console.log("HomeInformation componentWillUpdate");
    }

    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    componentDidUpdate() {
        console.log("HomeInformation componentDidUpdate");
    }

    // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    componentWillUnmount() {
        console.log("HomeInformation componentWillUnmount");
    }

    // 触发视图的重新渲染
    render() {
        console.log("====== HomeInformation render ======");

        return (
            <div>
                <div>HomeInformation1</div>
                <div>HomeInformation2</div>
            </div>

        );
    }
}