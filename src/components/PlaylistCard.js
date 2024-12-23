import { Image, StyleSheet, Text, View } from 'react-native'
import round from "lodash/round"

const PlaylistCard = ({ playList, formatFollowers }) => {





    return (
        <View style={styles.playListContainer}>
            <View>
                <Image source={{ uri: "https://picsum.photos/200/300" }} style={styles.playListImage} />

            </View>

            <View style={styles.playlistTextContainer}>
                <Text style={styles.playListName}>{playList.name}</Text>
                <Text style={styles.playListFollowersCount}> {formatFollowers(playList.followers_count)}</Text>

            </View>

        </View>
    )
}

export default PlaylistCard

const styles = StyleSheet.create({
    playListContainer: {
        marginTop: 20,
        padding: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "cener"



    },
    playListImage: {
        width: 50,
        height: 50,
        borderRadius: 10

    },
    playListName: {
        color: "white",
        fontSize: 18


    },
    playListFollowersCount: {
        color: "gray",
        fontSize: 15

    },
    playlistTextContainer: {

        width: 350,
        height: 50,
        gap: 5,
        opacity: 0.8



    }

})