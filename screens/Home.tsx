import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import {MyContext} from '../App';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {setShowModal} = useContext(MyContext);
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{flex: 1}}>
        <Text>{t('hi')}</Text>
        <Text style={{marginTop: 10, fontSize: 18}}>{t('welcome')}</Text>
        <Text style={{marginTop: 20, fontSize: 18}}>
          {t('how_are_you_doing')}
        </Text>
        <Text style={{marginTop: 20, fontSize: 18}}>{t('lorem_iqsum')}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard' as never)}
        style={{
          backgroundColor: 'black',
          paddingVertical: 10,
          alignItems: 'center',
          borderRadius: 6,
          marginBottom: 5,
        }}>
        <Text style={{color: 'white'}}>{t('GO_TO_DASHBOARD')}</Text>
      </TouchableOpacity>
      <Button title={t('Change_Language')} onPress={() => setShowModal(true)} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
