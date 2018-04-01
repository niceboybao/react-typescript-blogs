/**
* @name HomeContents
* @describe 博客内容组件
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
import {contentList} from './actions';

// properties directed pass in throw react tag
interface HomeContentsOwnProps {
    type?: string;  //组件状态
}

//properties from redux store
interface HomeContentsDispatchProps {
    requestContentList?: Function;
}

//diapatch function from redux store
interface HomeContentsStateProps {
    listData?: any; //主页列表数据
}
//component own properties
interface HomeContentsState {

}

@(connect<HomeContentsStateProps, HomeContentsOwnProps & HomeContentsDispatchProps, HomeContentsState>(
    (state: any) => (
        {
            listData: state.homeContentsReducer.listData
        }
    ),
    (dispatch: any) => ({
        //获取主页列表数据
        requestContentList: () => {
            dispatch(contentList());
        }
    })
) as any)

export default class HomeContents extends React.Component<HomeContentsOwnProps & HomeContentsDispatchProps & HomeContentsStateProps, HomeContentsState> {
    constructor(Props: HomeContentsOwnProps & HomeContentsDispatchProps & HomeContentsStateProps) {
        super(Props);
        console.log("constructor HomeContents");
    }

    //HomeContents 组件生命周期
    // 设置默认的props，也可以用dufaultProps设置组件的默认属性。
    //    getDefaultProps() {
    //        console.log("HomeContents getDefaultProps");
    //    }
    // 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props。
    //    getInitialState() {
    //        console.log("HomeContents getInitialState");
    //    }
    // Team1组件初始化时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state

    componentWillMount() {
        console.log("HomeContents componentWillMount");
    }

    // 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次
    // 在这个周期钩子里面处理接口请求
    componentDidMount() {
        console.log("HomeContents componentDidMount");
        //获取主页列表数据
        this.props.requestContentList();
    }

    // 组件初始化时不调用，组件接受新的props时调用。
    componentWillReceiveProps(nextProps: any) {
        console.log("HomeContents componentWillReceiveProps");
    }

    /*
     * react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，
     * 如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
     * 节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。
     */
    //组件接受新的state或者props时调用
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log("HomeContents shouldComponentUpdate");
        return true;
    }

    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdate(nextProps: any, nextState: any) {
        console.log("HomeContents componentWillUpdate");
    }

    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    componentDidUpdate() {
        console.log("HomeContents componentDidUpdate");
    }

    // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    componentWillUnmount() {
        console.log("HomeContents componentWillUnmount");
    }

    // 组件渲染
    render() {
        console.log("HomeContents render");
        const {listData} = this.props;

        return (
            <div className={style.content}>
                {
                    typeof listData.articleText !== 'undefined'
                    && listData.articleText
                }
            </div>

        );
    }
}