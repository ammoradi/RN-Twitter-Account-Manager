import React from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import Button from './../components/Button'
import { twitter } from 'react-native-simple-auth';
import Variables from './../styles/variables'

/**
 * @TODO: create and fill utils/OauthCredentials.js file by below example
 * @example
 * export default {
 *  appId: 'APP_ID_HERE',
 *  appSecret: 'APP_SECRET_HERE',
 *  callback: 'twitteraccountmanager://',
 *  }
 */
import Credentials from './../utils/OauthCredentials'

const Words = {
    login : {
        fa: 'ورود به اکانت توییتر'
    }
}

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.lang = 'fa'
        this.onPress = this.onPress.bind(this)
    }

    onPress () {
        twitter(Credentials).then((info) => {
            this.props.navigation.navigate('Home', { info, title: info.user.screen_name })
            console.log(info)
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <View style={styles.view}>
                <Button
                    type={'login'}
                    onPress={() => {this.onPress()}}
                    text={Words.login[this.lang]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Login;
