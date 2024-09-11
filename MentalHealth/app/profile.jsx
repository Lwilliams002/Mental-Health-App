import {StyleSheet, Text, View } from 'react-native';
import React from "react";
import {Slot, Stack} from "expo-router";
import App from "./index";

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}
export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
