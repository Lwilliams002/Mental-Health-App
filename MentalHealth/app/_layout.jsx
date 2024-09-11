import {Text, View } from 'react-native';
import React from "react";
import {Slot, Stack} from "expo-router";
import App from "./index";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options = {{headerShown: false}} />
        </Stack>
    )
}
export default RootLayout

