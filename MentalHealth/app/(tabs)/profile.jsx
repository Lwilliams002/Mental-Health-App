import { StyleSheet, Text, View, Image } from 'react-native';
import React from "react";

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.miniProfile}>
                    <View>
                        <Image source={require('./image 7.png')} style={styles.image} />
                    </View>

                    <View style={styles.rightSide}>
                        <Text style={styles.nameText}>Toby the Lizard</Text>
                        <View style={styles.infoContainer}>
                            <View style={styles.infoRow}>
                                <Text style={styles.label}>Human</Text>
                                <Text style={styles.value}>Username</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <Text style={styles.label}>Age</Text>
                                <Text style={styles.value}>Toby Age</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View>
                    <Text style={styles.levelText}>Level</Text>
                </View>
                <View>
                    <Text style={styles.optionText}>Option</Text>
                </View>
            </View>
        </View>

    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa',

    },
    profile: {
        padding: 20,
    },

    miniProfile: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 40, // Make the image circular
        marginRight: 20,
    },
    rightSide: {
        flex: 1,
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#666',
        paddingHorizontal: 8,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        backgroundColor: '#f0f0f0',
    },
    levelText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    optionText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
});