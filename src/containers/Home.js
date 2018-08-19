import React from 'react';
import { ScrollView, Text } from 'react-native';

class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ScrollView>
                <Text>{JSON.stringify(this.props.navigation.state.params.info, undefined, 4)}</Text>
            </ScrollView>
        )
    }

}

export default Home;

