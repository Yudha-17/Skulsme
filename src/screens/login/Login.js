import React, {useState} from 'react';
import {
  Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import axios from 'axios';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Gap from '../../components/Gap';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {colorInputBlack, colorLabel, colorTheme} from '../../styles/Colors';
import {API_BASE_URL, APP_NAME, APP_VERSION} from '../../config';
import {ASSet, showError, showInfo, showSuccess} from '../../utils';

const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const login = async () => {
    // navigation.replace('Splash1');
    setIsLoading(true);

    const form = {
      email: userName,
      password,
    };

    await axios.post(`${API_BASE_URL}users?per_page=20`)
        .then((response) => {
          if (response && response.status === 200) {
            if (response.data.token) {
              ASSet('token', response.data.token);
              navigation.replace('HomeScreen');
            }
          }
        })
        .catch((error) => {
          console.log('Error : ', error);
          Alert.alert('Login gagal', 'Username / Password Salah.!');
          showError('Password Salah');
        })
        .finally(() => {
          setIsLoading(false);
        });
  };

  return (
    <ScrollView style={styles.scroll}>
      <SafeAreaView style={styles.container}>
        <Gap height={80} />
        <Image
          source={require('../../assets/images/usu.png')}
          style={styles.image}
        />
        <Gap height={5} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>
            {APP_NAME}
            {' '}
          </Text>
          <FAIcon name="copyright" size={15} />
        </View>
        <Gap height={70} />
        <Input
          label="Username"
          icon="user"
          value={userName}
          onChangeText={(value) => {
            setUserName(value);
          }}
        />
        <Gap height={20} />
        <Input
          label="Password"
          icon="lock"
          secureTextEntry
          value={password}
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
        <Gap height={20} />
        <Button
          title="LOGIN"
          isLoading={isLoading}
          onPress={login}
        />
        <Gap height={15} />
        <View style={styles.option}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('RegistrationScreen');
          }}
          >
            <Text style={styles.label}>Belum punya Akun?</Text>
          </TouchableOpacity>
          <Gap width={15} />
          <TouchableOpacity onPress={() => {
            Alert.alert('Informasi Login',
                'Untuk informasi lebih lanjut, hubungi kami');
          }}
          >
            <Text style={styles.label}>Butuh bantuan login?</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <Text>
        Versi
          {' '}
          {APP_VERSION}
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colorTheme,
  },
  container: {
    alignItems: 'center',
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
    marginVertical: 15,
  },
  label: {
    fontSize: 13,
    color: colorInputBlack,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Montserrat-Medium',
  },
});
