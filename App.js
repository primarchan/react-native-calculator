import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Calculator from "./src/Calculator";

export default function App() {
  const [input, setInput] = useState(0); // 계산기에 입력한 값
  const [currentOperator, setCurrentOperator] = useState(null); // 현재 선택된 연산자
  const [result, setResult] = useState(null); // 연산 결과 값
  const [tempInput, setTempInput] = useState(null); // = 클릭 시 직전 입력한 값
  const [tempOperator, setTempOperator] = useState(null); // = 클릭 시 직접 입력한 연산자

  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
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
