import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name= "profile"
                options={{
                    headerShown: true, // Show header only on Profile screen
                    headerBackTitleVisible: false,
                    headerTitle: '',
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        backgroundColor: 'white',
                    },
                }}
            />
            {/* Other screens */}
        </Stack>
    );
}