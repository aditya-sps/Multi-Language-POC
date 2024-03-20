import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {MyContext} from '../App';
import {SafeAreaView} from 'react-native-safe-area-context';

const Dashboard = () => {
  const {setShowModal} = useContext(MyContext);
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{height: 200}}
          borderRadius={5}
          resizeMode={'stretch'}
        />
        <Text style={{marginTop: 10}}>{t('image_desc')}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: 'black',
          paddingVertical: 10,
          alignItems: 'center',
          borderRadius: 6,
          marginBottom: 5,
        }}>
        <Text style={{color: 'white'}}>{t('Go_Back')}</Text>
      </TouchableOpacity>
      <Button title={t('Change_Language')} onPress={() => setShowModal(true)} />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
