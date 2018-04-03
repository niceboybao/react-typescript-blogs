import {createAction} from 'redux-actions';

//import constants
import {
    //获取接口数据
    CONTENTLIST,
    CONTENTLISTSUCCESS,
    CONTENTLISTERROR,
    CONTENTLISTFAILD
} from './constants';

//获取主页列表数据
export const contentList = createAction(CONTENTLIST);
export const contentListSuccess = createAction(CONTENTLISTSUCCESS);

export const contentListError = createAction(CONTENTLISTERROR);

export const contentListFaild = createAction(CONTENTLISTFAILD);