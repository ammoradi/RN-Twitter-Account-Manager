import React from 'react';
import { connect } from 'react-redux'
import { setToken, setProfile } from './../store/actions/actions'
import { View, StyleSheet } from 'react-native';
import Button from './../components/Button'
import Logger from './../components/Logger'
import { twitter } from 'react-native-simple-auth';

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

    componentDidMount () {
        if (this.props.token) {
            this.props.navigation.navigate('Home')
        }
    }

    onPress () {
        twitter(Credentials).then((info) => {
            this.props.setToken(info.credentials)
            this.props.setProfile(info.user)
            this.props.navigation.navigate('Home')
            console.log(info)
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <View style={styles.view}>
                {!this.props.token &&
                <Button
                    type={'login'}
                    onPress={() => {this.onPress()}}
                    text={Words.login[this.lang]}
                />
                }
            </View>
        )
    }
}

/**
 * STYLES
 */
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

/**
 * READ FROM REDUX
 */
const mapStateToProps = state => {
    return {
        token: state.token,
        profile: state.profile,
    }
}

/**
 * WRITE TO REDUX
 */
const mapDispatchToProps = dispatch => {
    return {
        setToken: token => {
            dispatch(setToken(token))
        },
        setProfile: profile => {
            dispatch(setProfile(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
