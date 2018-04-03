/**
* @name NoMatch
* @describe 路由没有匹配上的临时页面
* @author Baldwin/niceboybao@gmail.com
* @data 2018-04-03, 11:26:58
* @version 1.0.0
* 
*/
import React from "react";
import {RouteComponentProps} from 'react-router-dom';

export interface NoMatchProps extends RouteComponentProps<any> {}

export interface NoMatchState {}

export class NoMatch extends React.Component<NoMatchProps, NoMatchState> {

    // 触发视图的重新渲染
    render() {
        console.log("====== NoMatch render ======");
        return (
            <h3>Page not found for {location.pathname}</h3>
        );
    }
}
