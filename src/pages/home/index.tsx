import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '@/routes/index';

export const HomeScreen = () => {
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'ScanCode'>>();

  const onGoListPage = () => {
    Navigation.navigate('ScanCode');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.center}>
          <Text>home page</Text>
          <Button title="go scan code page" onPress={onGoListPage}></Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  center: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
