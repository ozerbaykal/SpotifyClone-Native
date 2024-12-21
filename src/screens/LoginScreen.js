import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialICons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons//AntDesign";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#040306', '#131624']} style={{ flex: 1 }}>
            <SafeAreaView>
                <Entypo
                    name="spotify"
                    color="white"
                    size={80}
                    style={{ textAlign: 'center' }}
                />

                <Text style={styles.loginTitle}>Millions of Songs Free on Spotify</Text>
                <View height={80} />

                <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Main")}>
                    <Text>Sign In With Spotify</Text>
                </Pressable>
                <Pressable style={styles.button} >
                    <MaterialICons name="phone-android" color="white" size={25} />
                    <Text style={styles.buttonText}>Continue with phone number</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <AntDesign name="google" color="white" size={25} />
                    <Text style={styles.buttonText}>Continue with google</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Entypo
                        name="facebook"
                        color="white"
                        size={25}

                    />

                    <Text style={styles.buttonText}>Continue with Facebook</Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    loginTitle: {
        color: 'white',
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 40,
    },
    loginButton: {

        backgroundColor: "#1AD35E",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 25
    },
    button: {
        backgroundColor: "#131624",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderColor: "#C0C0C0",
        borderWidth: 0.8,
        marginVertical: 10,
        borderRadius: 25,
        alignItems: "center",
        flexDirection: "row",






    },
    buttonText: {
        color: "white",
        fontSize: 16,
        marginHorizontal: 10



    },

});
