import React from 'react'
import {View, Text , StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'

const GreySheet =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.main} >
                GreyScreen
            </Text>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#BFBFBF'
    },
    main:{
        fontSize:20,
        color:'black'
    }
})

export default GreySheet