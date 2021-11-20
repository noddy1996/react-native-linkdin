import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import PostCardFooter from './PostCardFooter'
import PostCardHeader from './PostCardHeader'

export default function PostCard({children}) {
    return (
        <View style={styles.container}>
            <PostCardHeader/>
            {children}
            <PostCardFooter/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:scale(15),
        borderBottomWidth:scale(1),
        borderBottomColor:appColors.dividerColor
    }
})
