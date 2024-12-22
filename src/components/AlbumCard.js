import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AlbumCard = ({ album }) => {
    return (
        <TouchableOpacity>
            <View style={styles.albumContainer}>
                <Image
                    source={{
                        uri: album.coverArt,


                    }}
                    style={styles.albumImage}
                />
                <Text numberOfLines={1} style={styles.albumName}>{album.name}</Text>
                <Text numberOfLines={1} style={styles.albumName}>{album.year}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AlbumCard

const styles = StyleSheet.create({
    albumContainer: {
        margin: 10,
        width: 150,
        justifyContent: "center",
        alignItems: "center"


    },
    albumImage: {
        width: 150,
        height: 150,
        marginBottom: 5,
    },
    albumName: {
        color: "white",
        fontSize: 14,
        fontWeight: "500"

    }
})