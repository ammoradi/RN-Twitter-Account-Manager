import React from 'react';

import {StackNavigator} from 'react-navigation';
import Home from './containers/Home';
import Login from './containers/Login';

const Router = StackNavigator(
    {
        Login: {screen: Login},
        Home: {screen: Home},
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

export default Router;
