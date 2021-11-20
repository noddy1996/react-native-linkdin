import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import AvatarImage from '../../components/AvatarImage'
import Label from '../../components/Label'
import { appColors } from '../../utils/appColors'

export default function UserCard() {
    return (
        <View>
            <View style={styles.bg} />
            <View style={styles.container}>

                <AvatarImage size={scale(70)} style={styles.avatar} />
                <Label text={"Amusoftech"} style={styles.userName} />
                <Label text={"UI/UX DESIGNER & DEV IN AMUSOFTECH"} style={styles.desc} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        top:scale(-50)

    },
    userName: {
        fontSize: scale(20),
        marginTop: scale(10),
        fontFamily: "FontsFree-Net-Konnect3"
    },
    desc: {
        fontSize: scale(12),
        color: appColors.lightGray,
        marginTop: scale(5)
    },
    bg: {
        backgroundColor: appColors.seagreen,
        height: scale(100),
        width: "100%",
        borderRadius: scale(10)
    },
    avatar: {
        borderWidth: scale(4),
        borderColor: appColors.white
    },
})
