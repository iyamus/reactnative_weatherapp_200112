import React from 'react';
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getLocation = async () => {
    try {
      // throw Error(); catch 영역으로 강제로 이동시킴.

      //현재 위치 정보 사용 요청하기
      const response = Location.requestPermissionsAsync();

      //전체 결과값 가져오기
      const location = await Location.getCurrentPositionAsync();
      // 지역 관련 객체 정보 추출하기
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // 정보를 가져올 때는 동작하지 않는 것으로 지정.
      this.setState({ isLoading: false })

    } catch (error) {
      Alert.alert("Cannot find where you are.");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;

  }
}
