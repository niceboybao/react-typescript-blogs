/**
* @name BackToTop
* @describe 返回顶部组件
* @author Baldwin/niceboybao@gmail.com
* @data 2018-3-30, 14:41:58
* @version 1.0.0
* 
*/

import React from 'react';
import {connect} from 'react-redux';
import {BackTop} from 'antd';

//import css
import style from './style.scss';
//dispatch actions
//import {contentList} from './actions';

// properties directed pass in throw react tag
interface BackToTopOwnProps {
}

//properties from redux store
interface BackToTopDispatchProps {
}

//diapatch function from redux store
interface BackToTopStateProps {
}
//component own properties
interface BackToTopState {

}

@(connect<BackToTopStateProps, BackToTopOwnProps & BackToTopDispatchProps, BackToTopState>(
    (state: any) => (
        {

        }
    ),
    (dispatch: any) => ({

    })
) as any)

export default class BackToTop extends React.Component<BackToTopOwnProps & BackToTopDispatchProps & BackToTopStateProps, BackToTopState> {
    constructor(Props: BackToTopOwnProps & BackToTopDispatchProps & BackToTopStateProps) {
        super(Props);
        console.log("constructor BackToTop");
    }

    //BackToTop 组件生命周期

    componentWillMount() {
        console.log("BackToTop componentWillMount");
    }

    // 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次
    // 在这个周期钩子里面处理接口请求
    componentDidMount() {
        console.log("BackToTop componentDidMount");
    }

    // 组件初始化时不调用，组件接受新的props时调用。
    componentWillReceiveProps(nextProps: any) {
        console.log("BackToTop componentWillReceiveProps");
    }

    /*
     * react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，
     * 如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
     * 节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。
     */
    //组件接受新的state或者props时调用
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log("BackToTop shouldComponentUpdate");
        return true;
    }

    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdate(nextProps: any, nextState: any) {
        console.log("BackToTop componentWillUpdate");
    }

    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    componentDidUpdate() {
        console.log("BackToTop componentDidUpdate");
    }

    // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    componentWillUnmount() {
        console.log("BackToTop componentWillUnmount");
    }

    // 组件渲染
    render() {
        console.log("BackToTop render");

        return (
            <BackTop>
                <div className="ant-back-top-inner">UP</div>
            </BackTop>

        );
    }
}