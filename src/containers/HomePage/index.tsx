/**
* @name HomePage
* @describe HomePage组件
* @author Baldwin/niceboybao@gmail.com
* @data 2018-04-02, 21:26:58
* @version 1.0.0
* 
*/

import React from 'react';
import {connect} from 'react-redux';

//import components
import HomeContents from '../../components/HomeContents';
//import css
import style from './style.scss';

//dispatch actions
import {contentList} from './actions';

// properties directed pass in throw react tag
interface HomePageOwnProps {

}

//properties from redux store
interface HomePageDispatchProps {
    requestContentList?: Function;
}

//diapatch function from redux store
interface HomePageStateProps {
    listData?: any; //主页列表数据
}
//component own properties
interface HomePageState {
    homePage?: boolean,
}

@(connect<HomePageStateProps, HomePageOwnProps & HomePageDispatchProps, HomePageState>(
    (state: any) => (
        {
            listData: state.homePageReducer.listData
        }
    ),
    (dispatch: any) => ({
        //获取主页列表数据
        requestContentList: () => {
            dispatch(contentList());
        }
    })
) as any)

export default class HomePage extends React.Component<HomePageOwnProps & HomePageDispatchProps & HomePageStateProps, HomePageState> {
    constructor(Props: HomePageOwnProps & HomePageDispatchProps & HomePageStateProps) {
        super(Props);
        console.log("constructor HomePage");
        
        this.state = {
            homePage: true,
        };
    }

    //HomePage 组件生命周期

    // Team1组件初始化时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
    componentWillMount() {
        console.log("HomePage componentWillMount");
        //在这个钩子函数里面setState不会触发render
    }

    // 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次
    // 在这个周期钩子里面处理接口请求
    componentDidMount() {
        console.log("HomePage componentDidMount");

        //获取主页列表数据
        this.props.requestContentList();

    }

    // 组件初始化时不调用，组件接受新的props时调用。
    componentWillReceiveProps(nextProps: any) {
        debugger;
        console.log("HomePage componentWillReceiveProps");
    }

    /*
     * react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，
     * 如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
     * 节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。
     */
    //组件接受新的state或者props时调用
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log("HomePage shouldComponentUpdate");
        return true;
    }

    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdate(nextProps: any, nextState: any) {
        console.log("HomePage componentWillUpdate");
    }

    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    componentDidUpdate() {
        console.log("HomePage componentDidUpdate");
    }

    // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    componentWillUnmount() {
        console.log("HomePage componentWillUnmount");
    }

    // 触发视图的重新渲染
    render() {
        console.log("====== HomePage render ======");
        const {listData} = this.props;

        return (
            <div className={style['home-page']}>
                {
                    typeof listData.articleText !== 'undefined'
                    && listData.articleText
                }
            </div>

        );
    }
}