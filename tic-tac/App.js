import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.board}>

        <View style={styles.row}>
          <Text style={styles.cell}>O</Text>
          <Text style={styles.cell}></Text>
          <Text style={styles.cell}>O</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>X</Text>
          <Text style={styles.cell}>X</Text>
          <Text style={styles.cell}>O</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>X</Text>
          <Text style={styles.cell}></Text>
          <Text style={styles.cell}>O</Text>
        </View>

      </View>  

      <StatusBar style="auto" />

    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  board: {
    width: 320,           // Adjusted to fit 3 cells + borders perfectly
    height: 320,
    backgroundColor: "yellow",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 2,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 40,
    backgroundColor: "green",
    color: "white",
  },
});
