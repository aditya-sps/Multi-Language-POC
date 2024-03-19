import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppText from '../components/AppText';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginTop: 200, alignItems: 'center'}}>
        <AppText text="Hii" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
