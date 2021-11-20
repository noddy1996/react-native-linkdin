import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import AntDesign from 'react-native-vector-icons/Feather'

export default function FabIcon() {
    return (
        <View style={styles.container}>
           <AntDesign name={"edit-3"} color={appColors.white} size={scale(20)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(50),
        width:scale(50),
        borderRadius:scale(25),
        backgroundColor:appColors.primary,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:scale(20),
        right:scale(15)
    }
})
