import { StyleSheet, View, ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'#2FB86E'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  }
});