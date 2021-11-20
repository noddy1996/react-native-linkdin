import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import AvatarImage from 'Components/AvatarImage';
import { appColors } from '../../utils/appColors';
import Label from 'Components/Label';
import CustomButton from 'Components/CustomButton';
export default function CenterCard() {
    return (
        <View style={styles.cont}>
            <View style={{  top:scale(-25)}}>
                <AvatarImage  style={{borderWidth:scale(2), borderColor:appColors.white}} size={scale(75)}/>
            </View>
            <View style={{paddingVertical:scale(10)}}>
                <Label text="Prueba premium para ver empleos con más Posibilidades de ser aceptado" style={{color:appColors.white}} /> 
                <CustomButton label="Pruébalo gratis por 1 mes" style={{marginTop:scale(20)}} /> 
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
cont:{paddingHorizontal:scale(30), backgroundColor:appColors.darkSecondry, justifyContent:'center', alignItems:'center', borderRadius:scale(15)}
})