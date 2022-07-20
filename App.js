import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 20,
          backgroundColor: "red",
        }}
      >
        <Text>Hello world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 15,
    borderColor: "black",
    borderRadius: 10,
    margin: 40,
    flexDirection: "column",
    textTransform: "lowercase",
  },
});
