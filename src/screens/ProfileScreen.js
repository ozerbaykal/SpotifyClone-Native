import { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProfileContext } from '../context/ProfileContext';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
    const { loading, error, profileData } = useContext(ProfileContext);

    const { name, image_url, followers_count, public_playlist } = profileData;


    return (
        <LinearGradient colors={['#040306', '#131624']} style={{ flex: 1 }}>
            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ padding: 15 }}>
                    <View>
                        <Image source={{ uri: image_url }} style={styles.profileImage} />
                    </View>
                    <View>
                        <Text style={styles.profileName}>{name}</Text>
                        <Text style={styles.profileFollewers}>{followers_count}</Text>
                    </View>
                </View>
                <Text style={styles.sectionTitle}>Your Playlist</Text>
            </ScrollView>
        </LinearGradient>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    profileImage: {
        height: 50,
        width: 50,
        resizeMode: "cover"
    },
    profileName: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"

    },
    profileFollewers: {
        color: "gray",
        fontSize: 16,
        fontWeight: "bold"

    },
    sectionTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"


    }
});
