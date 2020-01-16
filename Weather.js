import React from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export default function Weather({ temp,condition }) {
    return <View style={styles.container}><Text>{temp}</Text></View>
}


Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Smoke",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Squall"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})