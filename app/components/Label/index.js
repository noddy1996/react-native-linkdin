import React from 'react'
import { Platform, PlatformColor, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'

export default function Label({text,style}) {
    return (
    <Text style={[styles.label, Platform.OS ==="android" ? styles.fontFam : {},style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:scale(14),
        color:appColors.Text,
        
    },
    fontFam: {
        fontFamily:"FontsFree-Net-Konnect2"
    }
})
