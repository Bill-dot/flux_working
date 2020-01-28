import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux'

const BlueScreen=()=>
{
    return(
        <View style={styles.container}>
            <Text style={styles.main} onPress={()=>Actions.yellow()}>
                BlueScreen
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
        , alignItems:'center',
        backgroundColor:'#0000cc'
    },
    main:{
        color:'white',
        fontSize: 20
    }
})

export default BlueScreen