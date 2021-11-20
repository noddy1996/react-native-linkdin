import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Container from '../../components/Container'
import ProfileHeader from './ProfileHeader'
import UserCard from './UserCard'

export default function Profile({}) {
    return (
        <Container hideHeader>
            <ProfileHeader/>
            <UserCard/>
        </Container>
    )
}

const styles = StyleSheet.create({})
