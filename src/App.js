import React, { Component } from 'react';
import {
    Alert,
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'
import Auth0 from 'react-native-auth0'
import Credentials from './utils/auth0-credentials'
const auth0 = new Auth0(Credentials)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { accessToken: null };
    }

    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile',
                audience: 'https://' + Credentials.domain + '/userinfo'
            })
            .then(credentials => {
                Alert.alert(
                    'Success',
                    'AccessToken: ' + credentials.accessToken,
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false }
                );
                this.setState({ accessToken: credentials.accessToken });
            })
            .catch(error => console.log(error));
    };

    _onLogout = () => {
        if (Platform.OS === 'android') {
            this.setState({ accessToken: null });
        } else {
            auth0.webAuth
                .clearSession({})
                .then(success => {
                    this.setState({ accessToken: null });
                })
                .catch(error => console.log(error));
        }
    };

    render() {
        let loggedIn = this.state.accessToken === null ? false : true;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Auth0Sample - Login</Text>
                <Text>
                    You are {loggedIn ? '' : 'not '}logged in.
                </Text>
                <Button
                    onPress={loggedIn ? this._onLogout : this._onLogin}
                    title={loggedIn ? 'Log Out' : 'Log In'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default App
