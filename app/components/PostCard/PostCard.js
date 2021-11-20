import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import PostCardFooter from './PostCardFooter'
import PostCardHeader from './PostCardHeader'

export default function PostCard({children}) {
    return (
        <View style={{marginVertical:scale(10)}}>
            <PostCardHeader/>
            {children}
            <PostCardFooter/>
        </View>
    )
}

const styles = StyleSheet.create({})
