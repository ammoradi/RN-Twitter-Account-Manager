import { createStackNavigator } from 'react-navigation';
import {
    ActivityIndicator,
} from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import AppRouterConfigs from './utils/AppRouteConfigs'

import configureStore from './store/store';
const { persistor, store } = configureStore();

const Router = createStackNavigator(AppRouterConfigs.routes, AppRouterConfigs.configs);

const onBeforeLift = () => {
    // take some action before the gate lifts
}

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}>
                    <Router />
                </PersistGate>
            </Provider>
        );
    }
}

export default Root
