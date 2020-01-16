import React from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Don't go out!"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Smoke: {
        iconName: "smoke-free",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Smoke",
        subtitle: "Use mask"
    }
};

export default function Weather({ temp, condition, temp_max, temp_min, name }) {
    return (
        <View style={styles.container}>
            <View style={styles.location}>
                <MaterialIcons
                    size={30}
                    name="my-location"
                    color="black"
                />
                <Text style={styles.subtemp}> {name} </Text>
            </View>
            <View style={styles.weather}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="black"
                />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.subtemp}>Min({temp_min}) ~ Max({temp_max})°</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </View>);
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
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    location: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 10
    },
    weather: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    info: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    temp: {
        fontSize: 32
    },
    subtemp: {
        fontSize: 20
    },
    title: {
        color: "black",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "black",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
})