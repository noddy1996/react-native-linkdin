import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import AvatarImage from '../AvatarImage'
import CustomInput from '../CustomInput'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { appColors } from '../../utils/appColors'
import Label from '../Label'

export default function CustomHeader({}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
            <AvatarImage size={scale(35)} source={require("../../assets/images/user-round-2.png")}/>
            <View style={{paddingHorizontal:scale(20)}}>
                <Label  text="Noddy Code"  style={{fontWeight:"800", fontSize:scale(18) }}/>    
                <Label  text="Frontend developer" style={{fontWeight:"200", fontSize:scale(12), textTransform: 'uppercase' }} />    
            </View>
            </View>
             
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
            <Pressable>
                <Ionicons name={"search"} color={appColors.gray} size={scale(25)}/> 
            </Pressable>
            <Pressable>
                <Ionicons name={"chatbubble-ellipses"} color={appColors.gray} size={scale(25)}/> 
                <View style={{right:scale(-2), backgroundColor:appColors.red , height:scale(13), width:scale(13), position:'absolute', borderRadius:scale(8)}} />
            </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
        paddingHorizontal:scale(10),
        marginVertical:scale(5)
        // backgroundColor:"red"
    },
    input:{
        flex:1,
        height:scale(35),
        //backgroundColor:"#e1e1e1",
        borderRadius:scale(5),
        paddingHorizontal:scale(10),
        marginHorizontal:scale(10)
    },
    inputStyle:{
        fontSize:scale(12),

    },
    badge:{
        position:"absolute",
        backgroundColor:appColors.red,
        height:scale(13),
        width:scale(13),
        borderRadius:scale(13/2),
        justifyContent:"center",
        alignItems:"center",
        right:scale(-3)
    },
    labelText:{
        color:appColors.white,
        fontSize:scale(10)
    },
})
