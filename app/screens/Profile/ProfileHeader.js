import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomInput from '../../components/CustomInput'
import { appColors } from '../../utils/appColors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { scale } from 'react-native-size-matters'
export default function ProfileHeader() {
    return (
        <View style={styles.container}>
                <MaterialIcons name={"arrow-back-ios"} color={appColors.Text} size={scale(25)}/>
            <CustomInput 
            placeholder={"amusoftech"}
             noShadow
              containerStyle={styles.inputContainer}
              />
                <Entypo name={"dots-three-horizontal"} color={appColors.Text} size={scale(25)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:scale(10),
    },
    inputContainer:{
        backgroundColor:appColors.bgLight,
        flex:1,
        marginHorizontal:scale(10)
    },
})
