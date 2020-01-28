import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'

const ScarletScreen =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.main} onPress={()=>Actions.grey()}>
                ScarletScreen
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff0000'
    },
    main:{
        fontSize:20,
        color:'white'
    }
})

export default ScarletScreen