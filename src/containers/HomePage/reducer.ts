import {createAction, handleActions, Action} from 'redux-actions';

// 最外层constants 统一命名
import {RN_HomePage} from '../../constants';
//组件的 constants
import {
    //获取接口数据
    CONTENTLISTSUCCESS,
    CONTENTLISTERROR,
    CONTENTLISTFAILD
} from './constants';

export const name = RN_HomePage;

export const homePageReducer = handleActions({

    [CONTENTLISTSUCCESS]: (state, action: Action<any>) => {
        debugger;
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
