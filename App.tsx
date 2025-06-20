import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles';

const FILMS = [
  { id: 1, image: require('./assets/liloStitch.png') },
  { id: 2, image: require('./assets/Mickey17.png') },
  { id: 3, image: require('./assets/interestellar.png') },
  { id: 4, image: require('./assets/materialist.png') },
  { id: 5, image: require('./assets/sinners.png') },
  { id: 6, image: require('./assets/darkNight.png') },
  { id: 7, image: require('./assets/homemComH.png') },
  { id: 8, image: require('./assets/inception.png') },
  { id: 9, image: require('./assets/RitaLee.png') },
  { id: 10, image: require('./assets/UltimaGota.png') },
  { id: 11, image: require('./assets/kpopHunters.png') },
  { id: 12, image: require('./assets/untilDawn.png') },
];






export default function App() {
  return (

    <View >
      <View style={styles.Header}>
        <Text style={styles.title}>Popular</Text>
        <TouchableOpacity style={styles.butonnBusca} >
          <Text style={styles.lupa}>🔎</Text>
        </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity style={styles.menus}>
          <Text style={styles.text}>FILMS</Text>
          <Text style={styles.text}>REVIEWS</Text>
          <Text style={styles.text}>LISTS</Text>
          <Text style={styles.text}>JOURNAL</Text>
        </TouchableOpacity>
      </View >

      <FlatList
        data={FILMS}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}

      />




    </View >

  );
}

