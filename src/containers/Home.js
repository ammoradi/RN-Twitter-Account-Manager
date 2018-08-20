import React from 'react';
import { connect } from 'react-redux'
import { setToken, setProfile } from './../store/actions/actions'
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';
import Logger from './../components/Logger'
import GlobalStyles from './../styles/globalStyles'
import Variables from './../styles/variables'

class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.backgroundImage} resizeMode='cover'
                           source={{uri: this.props.profile.profile_banner_url}}/>
                    <Image style={{...GlobalStyles.box.center.absolute, width: 50, height: 50}}
                           source={{uri: this.props.profile.profile_image_url_https}}/>
                </View>
                <Text style={Object.assign({}, GlobalStyles.text.center, styles.name)}>
                    {this.props.profile.name}
                </Text>
                <Text style={Object.assign({}, GlobalStyles.text.center, styles.userName)}>
                    @{this.props.profile.screen_name}
                </Text>
                <Logger text={this.props.token} />
                <Logger text={this.props.profile} />
            </ScrollView>
        )
    }

}

/**
 * STYLES
 */
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignSelf: 'stretch',
        position: 'relative'
    },
    backgroundImage: {
        height: 110
    },
    profileImage: {
        position: 'absolute',
        left: ''
    },
    name: {
        color: Variables.colors.global.black,
        fontWeight: 'bold',
        fontSize: 15
    },
    userName: {
        fontSize: 12
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
