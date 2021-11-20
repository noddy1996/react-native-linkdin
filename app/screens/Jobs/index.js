import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Container from 'Components/Container';
import Tag from 'Components/Tags';
import {scale} from 'react-native-size-matters';
export default function index() {
  return (
    <Container>
         

      <View style={{paddingVertical:scale(20)}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={['Empleos', 'Personas', 'Remoto',"Empresa"]}
        ItemSeparatorComponent={() => <View style={{padding: scale(5)}} />}
        renderItem={({item, index}) => <Tag key={index} label={item} />}
      />
      </View>
    </Container>
  );
}
