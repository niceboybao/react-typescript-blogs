import {createAction, handleActions, Action} from 'redux-actions';

// 最外层constants 统一命名
import {RN_HomeContents} from '../../constants';
//组件的 constants
import {
    //获取接口数据
    CONTENTLISTSUCCESS,
    CONTENTLISTERROR,
    CONTENTLISTFAILD
} from './constants';

export const name = RN_HomeContents;

export const homeContentsReducer = handleActions({

    [CONTENTLISTSUCCESS]: (state, action: Action<any>) => {
        return Object.assign({}, state, {
            listData: action.payload
        });
    },
    [CONTENTLISTERROR]: (state, action: Action<any>) => {
        return Object.assign({}, state, {

        });
    },
    [CONTENTLISTFAILD]: (state, action: Action<any>) => {
        return Object.assign({}, state, {

        });
    }
},
    {
        listData: {}
    }
);
