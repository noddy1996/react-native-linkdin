import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { appColors, shadow } from '../../utils/appColors'
import { scale } from 'react-native-size-matters'

export default function CustomInput({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    InputStyle,
    IconRight,
    IconLeft,
    containerStyle,
    noShadow
}) {
    return (
        <View style={[styles.container,containerStyle]}>
            {IconLeft && <IconLeft/>}
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                style={[styles.input, InputStyle, noShadow? {}:{...shadow} ]}
            />
            {IconRight && <IconRight/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: scale(20),
        margin:scale(5),
        height: scale(40),
        alignItems: "center",
        backgroundColor: appColors.white,
        borderRadius:scale(10),
        
    },
    input: {
        flex: 1,
        fontSize: scale(14)
    }
})
