import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostCardFooter from './PostCardFooter'
import PostCardHeader from './PostCardHeader'

export default function PostCard() {
    return (
        <View>
            <PostCardHeader/>
            <PostCardFooter/>
        </View>
    )
}

const styles = StyleSheet.create({})
