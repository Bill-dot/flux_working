import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

const BlackScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.main} onPress={()=>Actions.green()}>
                BlackScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        , alignItems: 'center',
        backgroundColor: 'black'
    },
    main: {
        color: 'white',
        fontSize: 20
    }
})

export default BlackScreen