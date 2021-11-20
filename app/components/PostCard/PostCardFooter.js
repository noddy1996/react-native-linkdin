import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { appColors } from '../../utils/appColors'
import Label from '../Label'
export default function PostCardFooter() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.iconContainer}>
            <EvilIcons name={"like"} color={appColors.gray} size={scale(25)}/>
            <Label text={"like"}/>
            </Pressable>
            <Pressable style={styles.iconContainer}>
            <EvilIcons name={"comment"} color={appColors.gray} size={scale(25)}/>
            <Label text={"comment"}/>
            </Pressable>
            <Pressable style={styles.iconContainer}>
            <EvilIcons name={"share-apple"} color={appColors.gray} size={scale(25)}/>
            <Label text={"Share"}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    },
    iconContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:scale(20),
    }
})
