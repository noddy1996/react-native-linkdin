import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import AvatarImage from '../AvatarImage'
import Label from '../Label'
import Entypo from 'react-native-vector-icons/Entypo'

export default function PostCardHeader() {
    return (
        <View style={styles.container}>
            <AvatarImage size={scale(35)}/>
            <View style={styles.nameView}>
                <Label text={"Maruticio Lopez"} style={styles.name}/>
                <Label text={"any descrition write here"} style={styles.desc}/>
            </View>
            <Pressable>
                <Entypo name={"dots-three-vertical"} color={appColors.gray} size={scale(16)}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    },
    nameView:{
    marginLeft:scale(5),
    flex:1,
    },
    name:{
        fontSize:scale(16)
    },
    desc:{
        fontSize:scale(12),
        color:appColors.lightGray
    }
})
