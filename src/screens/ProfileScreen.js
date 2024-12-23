import { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProfileContext } from '../context/ProfileContext';
import LinearGradient from 'react-native-linear-gradient';
import PlaylistCard from '../components/PlaylistCard';
import round from "lodash/round"


const ProfileScreen = () => {
    const { loading, error, profileData } = useContext(ProfileContext);

    const { name, image_url, followers_count, public_playlists } = profileData;

    const formatFollowers = (count) => {
        if (count >= 1000000) {
            return `${round(count / 1000000, 1)}M`
        }
        if (count >= 1000) {
            return `${round(count / 1000, 1)}K`
        }


    }

    return (
        <LinearGradient colors={['#040306', '#131624']} style={{ flex: 1 }}>
            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ padding: 15 }}>
                    <View style={styles.ProfileContainer}>



                        <Image source={{ uri: image_url }} style={styles.profileImage} />

                        <View>
                            <Text style={styles.profileName}>{name}</Text>
                            <Text style={styles.profileFollewers}>{formatFollowers(followers_count)}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.sectionTitle}>Your Playlist</Text>
                <View style={styles.playlistContainer}>
                    {
                        public_playlists?.map((playList, index) => (

                            <PlaylistCard playList={playList} key={index} formatFollowers={formatFollowers} />


                        ))
                    }

                </View>

            </ScrollView>
        </LinearGradient>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    ProfileContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10


    },
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
        fontWeight: "500",
        marginHorizontal: 10


    },
    playlistContainer: {

    }
});
