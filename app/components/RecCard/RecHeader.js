import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import AvatarImage from '../AvatarImage'
import Label from '../Label'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function RecHeader() {
    return (
        <View style={styles.container}>
            <AvatarImage size={scale(40)} style={{borderRadius:scale(10)}}/>
            <View style={styles.nameView}>
                <Label text={"Maruticio Lopez"} style={styles.name}/>
                <Label text={"any descrition write here"} style={styles.desc}/>
            </View>
            <Pressable>
                <FontAwesome name={"bookmark"} color={appColors.primary} size={scale(16)}/>
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
    marginHorizontal:scale(15),
    flex:1,
    },
    name:{
        fontSize:scale(16),
        fontFamily:"FontsFree-Net-Konnect3"
    },
    desc:{
        fontSize:scale(12),
        color:appColors.lightGray
    }
})
