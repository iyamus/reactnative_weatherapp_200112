import React from 'react';
import Loading from "./Loading";
import { Alert, TouchableNativeFeedbackBase } from "react-native";
import * as Location from "expo-location";
import axios from 'axios';
import Weather from "./Weather";

//Weather API key
const API_KEY = "afff68bddf85b21a1b24ff8a7623b434";

export default class App extends React.Component {
  state = {
    isLoading: true

  }
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp, temp_max, temp_min },
        name,
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp,
      temp_max,
      temp_min,
      name,
      condition: weather[0].main
    });
  };


  getLocation = async () => {
    try {
      // throw Error(); catch 영역으로 강제로 이동시킴.
      //현재 위치 정보 사용 요청하기
      const response = Location.requestPermissionsAsync();
      //전체 결과값 가져오기
      const location = await Location.getCurrentPositionAsync();
      // 지역 관련 객체 정보 추출하기
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // 날씨 정보 가져오는 함수 호출
      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Cannot find where you are.");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, temp_max, temp_min, name, condition } = this.state;
    // const { isLoading, temp, condition } = this.state;

    return isLoading ? (
      <Loading />
      ) : (
      // <Weather temp={Math.round(temp)} condition={condition} />
      <Weather temp={Math.round(temp)} temp_max={Math.round(temp_max)} temp_min={Math.round(temp_min)} name={name} condition={condition} />
      );

  }
}

