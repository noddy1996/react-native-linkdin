import React from 'react'
import { View, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import Label from 'Components/Label'
import { appColors } from '../../utils/appColors'
 
export default function index({label}) {
    return (
        <View style={{paddingHorizontal:scale(30), backgroundColor:appColors.primaryLight, justifyContent:'center', alignItems:'center', height:scale(30), borderRadius:scale(20)}}> 
            <Label text={label} style={{fontSize:scale(15), fontWeight:'300', color:appColors.primary}} />
        </View>
    )
}
