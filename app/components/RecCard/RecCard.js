import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { starterIntro } from '../../utils/MockData'
import Label from '../Label'
import RecHeader from './RecHeader'

export default function RecCard({}) {
    return (
        <View style={styles.container}>
            <RecHeader/>
            <Label text={starterIntro[0]} style={styles.desc}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:scale(20)
    },
    desc:{
        marginLeft:scale(50),
        fontSize:scale(12),
        marginTop:scale(10)
    }
})
