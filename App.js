/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import RadarChart from './RadarChart'
type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <RadarChart
                    firstValue={{name: 'React Native', color: '#F56C2E', percentage: 100}}
                    secondValue={{name: 'Java', color: '#FAB84A', percentage: 80}}
                    thirdValue={{name: 'Javascript', color: '#50DE72', percentage: 50}}
                    fourthValue={{name: 'Python', color: '#41E9F8', percentage: 10}}
                    fifthValue={{name: 'Golang', color: '#B45D95', percentage: 90}}
                    sixthValue={{name: 'React', color: '#F43651', percentage: 30}}
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
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
