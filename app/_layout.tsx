import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarStyle: { backgroundColor: '#FF5A00' },
            tabBarShowLabel: false, 
            }}>

            <Tabs.Screen
            name="Magasin"
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                <Ionicons 
                    name="storefront-outline" 
                    color='#ffffff' 
                    size={size}
                    style={styles.icons} 
                />
                ),
            }}
            />

            <Tabs.Screen
            name="Inscription"
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                <Ionicons 
                    name="search-outline" 
                    color='#ffffff' 
                    size={size}
                    style={styles.icons} 
                />
                ),
            }}
            />

            <Tabs.Screen
            name="Connexion"
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                <Ionicons 
                    name="person-outline" 
                    color='#ffffff' 
                    size={size}
                    style={styles.icons} 
                />
                ),
            }}
            />

            <Tabs.Screen
            name="Accueil"
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                <Ionicons 
                    name="home-outline" 
                    color='#ffffff' 
                    size={size}
                    style={styles.icons} 
                />
                ),
            }}
            />

            <Tabs.Screen
            name="index"
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                <Ionicons 
                    name="refresh-outline" 
                    color='#ffffff' 
                    size={size}
                    style={styles.icons} 
                />
                ),
            }}
            />
                        
        </Tabs>
    );
}

const styles = StyleSheet.create({
    icons: {
        color: '#ffffff',
        fontSize : 30,
        paddingVertical: 20,
    },
});