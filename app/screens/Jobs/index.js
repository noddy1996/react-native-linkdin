import React from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import Container from 'Components/Container';
import Tag from 'Components/Tags';
import CustomInput from 'Components/CustomInput';
import {scale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { appColors } from '../../utils/appColors';

import CenterCard from './CenterCard';
import RecCard from '../../components/RecCard/RecCard';
export default function index() {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <CustomInput
          placeholder="Buscar empleos"
          
          IconLeft={() => (
            <View style={{paddingRight:scale(10)}}>
              <MaterialIcons name="search" size={scale(22)}  color={appColors.gray} /> 
            </View>
          )}
          noShadow
          containerStyle={{flex: 0.96,backgroundColor:appColors.bgLight}}
        />
        <Pressable style={{ alignItems: 'center', justifyContent:'center',backgroundColor:appColors.bgLight, padding:scale(10), borderRadius:scale(12)}}>
                <MaterialIcons name="filter-alt" size={scale(22)} color={appColors.secondry}  />
        </Pressable>
        
      </View>

      <View style={{paddingVertical: scale(20)}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={['Empleos', 'Personas', 'Remoto', 'Empresa']}
          ItemSeparatorComponent={() => <View style={{padding: scale(5)}} />}
          renderItem={({item, index}) => <Tag key={index} label={item} />}
        />
      </View>
      <RecCard/>
      <CenterCard />
      <RecCard/>
    </Container>
  );
}
