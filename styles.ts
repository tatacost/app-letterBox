import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#445565',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  butonnBusca: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 20,
  },
  lupa: {
    color: '#fff',
    fontSize: 20,
  },
  menus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  grid: {
    padding: 8,
  },
  card: {
    flex: 1,
    margin: 4,
    aspectRatio: 2 / 3,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#333',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

});



