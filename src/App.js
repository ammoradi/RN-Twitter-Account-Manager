import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import AppRouterConfigs from './utils/AppRouteConfigs'
import Reducer from './store/reducers/reducers'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const Router = createStackNavigator(AppRouterConfigs.routes, AppRouterConfigs.configs);

// const appReducer = persistCombineReducers(
//     {
//         key: 'primary',
//         storage
//     },
//     {
//         nav: Red
//     });

const store = createStore(Reducer);

// persistStore(
//     store,
//     null,
//     () => {
//         store.getState() // if you want to get restoredState
//     }
// )

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default Root
