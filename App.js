import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';

import Card from "./components/Card";
import {pokes} from "./data/rest.js";

export default function App() {
    const [data, setData] = useState(undefined);

    pokes(100).then(res => {
      setData(res);
    }
    );

    if(!data){
      return (
        <View style={styles.container}>
          <Text>Cargando datos</Text>
          </View>
      )
    }else{
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={Card}
            keyExtractor={item => item.id}
            numColumns = {4}
            style = {{with: '100%', flex: 1}}

          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70
  },
});
