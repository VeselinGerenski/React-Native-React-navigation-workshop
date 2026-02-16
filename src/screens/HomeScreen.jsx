import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}) {

  return (
    <ScrollView >
    <Text onPress={() => navigation.navigate("Stack")}>Click to Open the stack screen</Text>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
