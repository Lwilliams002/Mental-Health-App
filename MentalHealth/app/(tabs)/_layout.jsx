import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Tabs, Redirect} from "expo-router";
import Home from "./home";

const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                    }}
                    component={Home}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout;