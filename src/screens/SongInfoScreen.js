import { useNavigation } from '@react-navigation/native';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const SongInfoScreen = ({ route }) => {
    const navigation = useNavigation();

    const { album } = route.params || {};

    //gelen veileri alalım

    const { coverArt, name, artist } = album;

    return (
        <LinearGradient colors={['#040206', '#131624']} style={{ flex: 1 }}>
            <Text>SongInfoScreen</Text>

            <ScrollView style={styles.scrollView}>
                <View style={styles.paddingView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={26} color="white" />
                    </TouchableOpacity>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.coverImage}
                            source={{
                                uri: coverArt,
                            }}
                        />
                    </View>
                    <Text style={styles.albumName}>{name}</Text>

                    <View style={styles.artistView}>
                        <Text style={styles.artistText}>{artist}</Text>
                    </View>
                </View>
                <Pressable style={styles.controlView}>
                    <Pressable style={styles.downloadButton}>
                        <AntDesign name="arrowdown" size={24} color="white" />
                    </Pressable>

                    <View style={styles.playButtonView}>
                        <MaterialCommunityIcons
                            name="cross-bolnisi"
                            size={24}
                            color="#1DB954"
                        />

                        <Pressable style={styles.playButton}>
                            <Entypo name="controller-play" size={24} color="white" />
                        </Pressable>
                    </View>
                </Pressable>

                <View>
                    <View style={styles.infoWiew}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Album {name} </Text>
                            <Text style={styles.infoText}>Artist {artist} </Text>
                        </View>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 50,
    },
    paddingView: {
        padding: 10,
    },
    coverImage: {
        width: 200,
        height: 200,
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    albumName: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20,
        marginHorizontal: 15,
    },
    artistView: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    artistText: {
        color: 'gray',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10,
    },
    controlView: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    downloadButton: {
        backgroundColor: '#1DB954',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    playButtonView: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    playButton: {
        backgroundColor: '#1DB954',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    infoWiew: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 10,
    },
    infoContainer: {
        gap: 5,
    },
    infoText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});
