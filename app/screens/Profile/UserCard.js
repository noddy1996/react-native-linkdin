import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import AvatarImage from '../../components/AvatarImage'
import Label from '../../components/Label'

export default function UserCard() {
    return (
        <View style={styles.container}>
           <AvatarImage/>
           <Label text={"Amusoftech"} style={styles.userName}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",

    },
    userName:{
        fontSize:scale(20),
        marginTop:scale(10),
        fontFamily:"FontsFree-Net-Konnect3"
    }
})
