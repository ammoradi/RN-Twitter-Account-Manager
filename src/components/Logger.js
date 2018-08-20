/**
 * This component is to show an object as a prettified text in app body instead of debugger's console
 * How funny is this?
 */

import React, { Component } from 'react'
import { Text } from 'react-native'

class Logger extends Component{
    render () {
        return (
            <Text>{JSON.stringify(this.props.text, undefined, 4)}</Text>
        )
    }
}

export default Logger
