import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GreenScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.main}>
            GreenScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        , alignItems: 'center',
        backgroundColor: 'green'
    },
    main: {
        color: 'white',
        fontSize: 20
    }
})

export default GreenScreen