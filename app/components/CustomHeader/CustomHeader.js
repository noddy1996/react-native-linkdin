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
            <AvatarImage size={scale(35)} source={require("../../assets/images/user-round-2.png")}/>
            <CustomInput
            IconLeft={()=>{return(<Ionicons name={"search"} color={appColors.gray} size={scale(20)}/>)}}
            IconRight={()=>{return(<Ionicons name={"list"} color={appColors.gray} size={scale(20)}/>)}}
            containerStyle={styles.input}
            InputStyle={styles.inputStyle}
            placeholder={"serch anything"}
            />
            <Pressable>
                <Ionicons name={"chatbubble-ellipses"} color={appColors.gray} size={scale(25)}/>
                <View style={styles.badge}>
                        <Label text={2}  style={styles.labelText}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:scale(10),
        marginVertical:scale(5)
        // backgroundColor:"red"
    },
    input:{
        flex:1,
        height:scale(35),
        backgroundColor:"#e1e1e1",
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
