import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import createSdk from '@descope/core-js-sdk';

const PROJECT_ID = '<project-id>';
const EMAIL = '<email>';

const sdk = createSdk({ projectId: PROJECT_ID });

const login = async () => {
  console.log('@@@ sign in start', );
  const res = await sdk.otp.signUpOrIn.email(EMAIL);
  if (!res.ok) {
    console.log('@@@ sign in error', res.code, res.error);
    return;
  }
  console.log('@@@ Start sign in, see one time code in email', );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lorem Ipsum</Text>
      <Button title="Press to login" onPress={login}/>
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
  },
});
