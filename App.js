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
import Svg,{ G, Path, Line, Text, Circle, Defs, LinearGradient, Stop} from 'react-native-svg'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    middleX = 200;
    middleY = 200;
    firstAngleX = 200;
    firstAngleY = 80;

    render() {
        return (
            <View style={styles.container}>
                <Svg width={400} height={400}>

                    <Defs>
                        <LinearGradient id="grad_first" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor="#F56C2E" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#FAB84A" stopOpacity="1" />
                        </LinearGradient>

                        <LinearGradient id="grad_second" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor="#FAB84A" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#50DE72" stopOpacity="1" />
                        </LinearGradient>

                        <LinearGradient id="grad_third" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor="#50DE72" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#41E9F8" stopOpacity="1" />
                        </LinearGradient>

                        <LinearGradient id="grad_fourth" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor="#41E9F8" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#B45D95" stopOpacity="1" />
                        </LinearGradient>

                        <LinearGradient id="grad_fifth" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="100%" stopColor="#B45D95" stopOpacity="1" />
                            <Stop offset="0%" stopColor="#F43651" stopOpacity="1" />
                        </LinearGradient>

                        <LinearGradient id="grad_sixth" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="100%" stopColor="#F43651" stopOpacity="1" />
                            <Stop offset="0%" stopColor="#F56C2E" stopOpacity="1" />
                        </LinearGradient>



                        <LinearGradient id="grad_first_opacity" x1="0%" y1="0%" x2="75%" y2="75%">
                            <Stop offset="0%" stopColor="#F56C2E" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#F56C2E" stopOpacity="0" />
                        </LinearGradient>

                        <LinearGradient id="grad_second_opacity" x1="0%" y1="0%" x2="75%" y2="75%">
                            <Stop offset="0%" stopColor="#FAB84A" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#FAB84A" stopOpacity="0" />
                        </LinearGradient>

                        <LinearGradient id="grad_third_opacity" x1="0%" y1="0%" x2="65%" y2="65%">
                            <Stop offset="0%" stopColor="#50DE72" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#50DE72" stopOpacity="0" />
                        </LinearGradient>

                        <LinearGradient id="grad_fourth_opacity" x1="50%" y1="50%" x2="0%" y2="0%">
                            <Stop offset="0%" stopColor="#41E9F8" stopOpacity="1" />
                            <Stop offset="60%" stopColor="#41E9F8" stopOpacity="0" />
                        </LinearGradient>

                        <LinearGradient id="grad_fifth_opacity" x1="50%" y1="50%" x2="0%" y2="0%">
                            <Stop offset="0%" stopColor="#B45D95" stopOpacity="1" />
                            <Stop offset="60%" stopColor="#B45D95" stopOpacity="0" />
                        </LinearGradient>

                        <LinearGradient id="grad_sixth_opacity" x1="100%" y1="100%" x2="0%" y2="0%">
                            <Stop offset="0%" stopColor="#F43651" stopOpacity="1" />
                            <Stop offset="65%" stopColor="#F43651" stopOpacity="0" />
                        </LinearGradient>

                    </Defs>

                    <G>
                        <G x={200} y={70}>
                            <Circle
                                cx="2"
                                cy="2"
                                r="2"
                                fill="#F56C2E"
                            />
                            <Text y={-10} textAnchor="middle">  React Native  </Text>
                        </G>

                        <Line
                            x1="201"
                            y1="80"
                            x2="98"
                            y2="142"
                            stroke="url(#grad_first)"
                            strokeWidth="1"
                        />

                        <Line
                            x1="201"
                            y1="80"
                            x2="201"
                            y2="200"
                            stroke="url(#grad_first_opacity)"
                            strokeWidth="1"
                        />


                        <G x={90} y={140}>
                            <Circle
                                cx="2"
                                cy="2"
                                r="2"
                                fill="#FAB84A"
                            />
                            <Text y={5} textAnchor="end">  Java  </Text>
                        </G>

                        <Line
                            x1="98"
                            y1="142"
                            x2="98"
                            y2="263"
                            stroke="url(#grad_second)"
                            strokeWidth="1"
                        />

                        <Line
                            x1="98"
                            y1="142"
                            x2="201"
                            y2="200"
                            stroke="url(#grad_second_opacity)"
                            strokeWidth="1"
                        />

                        <G x={149.5} y={171}>
                            <Circle
                                cx="2"
                                cy="2"
                                r="2"
                                fill="#FAB84A"
                            />
                        </G>

                        <G x={90} y={260}>
                            <Circle
                                cx="2"
                                cy="2"
                                r="2"
                                fill="#50DE72"
                            />
                            <Text y={5} textAnchor="end">  Javascript  </Text>
                        </G>

                        <Line
                            x1="98"
                            y1="263"
                            x2="201"
                            y2="320"
                            stroke="url(#grad_third)"
                            strokeWidth="1"
                        />

                        <Line
                            x1="98"
                            y1="263"
                            x2="201"
                            y2="200"
                            stroke="url(#grad_third_opacity)"
                            strokeWidth="1"
                        />

                        <G x={310} y={260}>
                            <Circle
                                cx="2"
                                cy="2"
                                r="2"
                                fill="#B45D95"
                            />
                            <Text y={5} textAnchor="start">    Golang  </Text>
                        </G>

                        <Line
                            x1="201"
                            y1="320"
                            x2="305"
                            y2="263"
                            stroke="url(#grad_fourth)"
                            strokeWidth="1"
                        />

                        <Line
                            x1="201"
                            y1="320"
                            x2="201"
                            y2="200"
                            stroke="url(#grad_fourth_opacity)"
                            strokeWidth="1"
                        />

                        <G x={310} y={140}>
                            <Circle
                                cx="2"
                                cy="2"
                                r="2"
                                fill="#F43651"
                            />
                            <Text y={5} textAnchor="start">    React  </Text>
                        </G>

                        <Line
                            x1="305"
                            y1="263"
                            x2="305"
                            y2="142"
                            stroke="url(#grad_fifth)"
                            strokeWidth="1"
                        />

                        <Line
                            x2="201"
                            y2="200"
                            x1="305"
                            y1="263"
                            stroke="url(#grad_fifth_opacity)"
                            strokeWidth="1"
                        />

                        <G x={200} y={325}>
                            <Circle
                                cx="2"
                                cy="2"
                                r="2"
                                fill="#41E9F8"
                            />
                            <Text y={20} textAnchor="middle">  Python  </Text>
                        </G>

                        <Line
                            x1="305"
                            y1="142"
                            x2="201"
                            y2="80"
                            stroke="url(#grad_sixth)"
                            strokeWidth="1"
                        />

                        <Line
                            x2="201"
                            y2="200"
                            x1="305"
                            y1="142"
                            stroke="url(#grad_sixth_opacity)"
                            strokeWidth="1"
                        />


                    </G>
                </Svg>
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
