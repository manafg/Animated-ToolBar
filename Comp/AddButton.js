import React from 'react';
import { View, text, StyleSheet, TouchableHighlight,TouchableWithoutFeedback, Animated } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons'


export default class AddButton extends React.Component {
    constructor(props) {
        super(props);
        this.buttonSize=(1);
        this.mode=new Animated.Value(0)
    } 

    
    handlePress = () => {
        this.buttonSize = new Animated.Value(1);
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 200
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1,
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0
            })
        ]).start()
    }
    render() {
        const sizeStyle = {
            transform: [{ scale: this.buttonSize }]
        }

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0dg", "45dg"]
        })

        const thermometerX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -100]
        })
        const thermometerY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        })
        const clockX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -24]
        })
        const clockY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -150]
        })
        const pulseX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 50]
        })
        const pulseY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        })
        return (
            <View style={{ position: 'absolute', alignItems: "center" }}>
                <Animated.View style={{ position: 'absolute', left: thermometerX, top: thermometerY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="thermometer" size={24} color="#fff" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', left: clockX, top: clockY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="clock" size={24} color="#fff" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', left: pulseX, top: pulseY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="activity" size={24} color="#fff" />
                    </View>
                </Animated.View>
                <View style={[styles.button, sizeStyle]}>
                    <TouchableWithoutFeedback onPress={this.handlePress}>
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                            <FontAwesome5 name="plus" size={24} color="#fff" />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7f58ff",
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        position: "absolute",
        top: -60,
        shadowColor: "#7f58ff",
        shadowRadius: 5,
        shadowOffset: { height: 5 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    secondaryButton: {
        position: 'absolute',
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#7f58ff"
    }
})