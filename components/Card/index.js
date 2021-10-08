import React  from "react";
import { Text, View, Image } from 'react-native';
import styles from "./style";

const Card = (props) => {
    let poke = props.item;
    let types = poke.type.map(type => <Text key={type}>{'\t* ' + type}</Text>)
 return (
    
    <View style = {styles.container}>
        <Image style={styles.pic} source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + poke.id + '.png'}}/>
        <Text>{poke.name}</Text>
        {types}
    </View>
 )   
};

export default Card;