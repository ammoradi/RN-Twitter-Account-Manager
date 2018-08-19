/**
 * @desc will produce a custom button component
 * @example
 *      <Button type={'login'} text={...} style={button:{...}, text:{...}} onPress={...} />
 */

import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Variables from './../styles/variables'

class Button extends Component{
    constructor (props) {

        super(props)

        if (props.style) {
            this.style = {
                button: props.style.button || style.button,
                text: props.style.text || style.text,
            }
        } else {
            this.style = {
                button: style.button,
                text: style.text,
            }
        }
    }

    renderButton () {
        switch (this.props.type) {
            case 'login' : {
                return (
                    <TouchableOpacity style={this.style.button} onPress={() => this.props.onPress()}>
                        <Text style={this.style.text}>{ this.props.text }</Text>
                    </TouchableOpacity>
                )
            }
        }
    }

    render () {
        return this.renderButton()
    }
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Variables.colors.twitter.primaryColor
    },
    text: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        fontSize: 18,
        color: Variables.colors.global.white
    },
});

export default Button
