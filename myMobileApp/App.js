import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { TextInput } from 'react-native-web'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>My first App!!!Started!!!!Learning React-Native?</Text>
        <Text style={styles.text}>Program started :)!!!</Text>
        <Text style={styles.text}>Congratulation!!!!!!</Text>
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },
  text: {
    color: '#3c3c1f',
    fontSize: 30,
  },
  textBox: {
    borderWidth: 2,
    borderColor: '#2200fe',
    padding: 30,
    borderRadius: 20,
  }
});
