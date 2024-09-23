import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {

  const [counter, setCounter] = useState(0);


  function addition() {
    setCounter(counter + 1);
  }

  function subtraction() {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  }

  function reset() {
      setCounter(0);
    }

    
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 80 }}>{counter}</Text>

      <Button
        onPress={addition}
        title="Plus"
      />

      <Button
        onPress={subtraction}
        title="Minus"
      />

      <View style={{ flex: 0.95 }}></View>

      {counter > 0 &&
        <Button
          onPress={reset}
          title="Reset"
        />
      }

    </View>
  );
}
