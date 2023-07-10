import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [input, setInput] = useState(0); // 계산기에 입력한 값
  const [currentOperator, setCurrentOperator] = useState(null); // 현재 선택된 연산자
  const [result, setResult] = useState(null); // 연산 결과 값
  const [tempInput, setTempInput] = useState(null); // = 클릭 시 직전 입력한 값
  const [tempOperator, setTempOperator] = useState(null); // = 클릭 시 직접 입력한 연산자

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
