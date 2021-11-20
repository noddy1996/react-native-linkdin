import React, {useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import { appColors } from '../../utils/appColors';
import Label from 'Components/Label';
export default function index({tabs,inverted, }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log({activeIndex});
  const isActive = (index)=>{
      return activeIndex == index
  }
  const TabCard = ({item,index}) => {
       
    return (
      <Pressable
        onPress={() => onSelect(index)}
        style={[
          {padding: scale(10)},
          isActive(index)
            ? {  borderBottomWidth: scale(2), borderBottomColor:appColors.primary}
            : {},
        ]}>
        <Label text={item}  style={{color: isActive(index) ? appColors.primary : appColors.gray}} /> 
      </Pressable>
    );
  };
  const onSelect = (index) => {
    setActiveIndex(index);
  };
  return (
    <View >
      <FlatList
        horizontal
        inverted={inverted}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: scale(20),
        }}
         data={tabs ? tabs: ["Seguidos", "Explorar"]}
        renderItem={({item, index}) => (
          <TabCard item={item} key={index} index={index} />
        )}
      />
    </View>
  );
}
