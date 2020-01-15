import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // View=Div, Text=Span 과 동일하다고 보면 된다.
    // <View style={styles.container}>
    //   <Text style={styles.text}>Study again!</Text>
    // </View>

    <View style={styles.container}>
      <View style={styles.blueView}>
      </View>
      <View style={styles.greenView}>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  //Container: 전체 화면을 그리는 역할을 함.
  container: {
    flex: 1,
    // flex는 기본적으로 복수의 텍스트가 있을 경우, 상하구조이며 비율을 조정함.
    //만약 하기 구성으로 좌우구조로 변경할 수 있음.
    // flexDirection: 'row',

    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 40,
    color: "white"
  
  },
  blueView: {
    flex:1,
    backgroundColor: 'blue',
  },
  greenView: {
    flex:2, //blueView와 greenView와 2:1비율을 갖게 됨.
    backgroundColor: 'green',
  }
});
