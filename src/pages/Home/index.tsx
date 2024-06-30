import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../../routes/app.routes';
import { StyleSheet, View, Image, Text, ImageBackground, Touchable, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleNavigateToPoints() {
    navigation.navigate('points');
  }

  return (
    <ImageBackground 
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.content}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
        <Text style={styles.subtitle}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#FFF" size={24} />
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#322153',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 32,
    maxWidth: 260,
    marginTop: 64,
  },
  subtitle: {
    color: '#6C6C80',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    marginTop: 16,
  },
  footer: {

  },
  button: {
    backgroundColor: '#34CB79',
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',

    overflow: 'hidden',
  },
  buttonIcon: {
    backgroundColor: '#2FB86E',
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  }
});