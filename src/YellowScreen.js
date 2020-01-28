import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const YellowScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.main}>
                YellowScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        , alignItems: 'center',
        backgroundColor: 'yellow'
    },
    main: {
        color: 'white',
        fontSize: 20
    }
})

export default YellowScreen