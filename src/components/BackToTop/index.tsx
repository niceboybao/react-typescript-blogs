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
//import style from './style.scss';
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
    percent?: number, //滚动条百分比
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
        this.state = {
            percent: 0,
        }
    }

    //BackToTop 组件生命周期
    componentWillMount() {
        console.log("BackToTop componentWillMount");
    }

    // 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次
    // 在这个周期钩子里面处理接口请求
    componentDidMount() {
        const TARGET_HEIGHT = 1800//document.getElementById("home_right").offsetHeight;
        const SCREEN_HEIGHT = document.documentElement.clientHeight;
        const FOOT_HEIGHT = 120;
        const ALL_HEIGHT = TARGET_HEIGHT + FOOT_HEIGHT - SCREEN_HEIGHT;
        let scrollTop = document.documentElement.scrollTop;

        //全局滚动条
        window.onscroll = () => {
            scrollTop = document.documentElement.scrollTop;
            let percent = Math.round((scrollTop / ALL_HEIGHT) * 100);

            this.setState({
                percent: percent
            });

        }
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
        //消除全局滚动条方法
        window.onscroll = null;
    }

    // 触发视图的重新渲染
    render() {
        console.log("====== BackToTop render ======");
        const {percent} = this.state;
        const backTopProps = {
            visibilityHeight: 200,
            //            target: () => this.refs.homeRight,
        };
        return (
            <BackTop {...backTopProps}>
                <div className="ant-back-top-inner">{percent}%</div>
            </BackTop>

        );
    }
}