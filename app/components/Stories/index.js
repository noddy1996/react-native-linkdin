import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
import Label from '../Label';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
export default function index() {
  const imageDecider = (index) => {
    switch (index) {
      case 0:
        return require('../../assets/images/user-1.png');
      case 1:
        return require('../../assets/images/user-2.png');
      case 2:
        return require('../../assets/images/user-3.png');
      case 3:
        return require('../../assets/images/user-4.png');

      default:
        return require('../../assets/images/user-1.png');
    }
  };

  const StoryCard = ({item, index}) => {
    return (
      <View style={styles.cardC}>
        <View>
          <Image
            style={{height: scale(70), width: scale(70)}}
            source={imageDecider(index)}
          />
        </View>
        <View style={{paddingVertical:scale(10)}}>
          <Label
            text="Amusoftech"
            style={{fontSize: scale(11), color: appColors.Text}}
          />
        </View>
      </View>
    );
  };

  const AddStory = () => {
    return (
      <View style={styles.addStoryC}>
        <View style={styles.addStory}>
          <MaterialIcons
            name="add"
            size={scale(50)}
            color={appColors.secondry}
          />
        </View>
        <View style={{paddingVertical:scale(10)}}>
          <Label
            text="Amusoftech"
            style={{fontSize: scale(11), color: appColors.Text}}
          />
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return <StoryCard item={item} index={index} />;
  };
  return (
    <View style={{paddingVertical: scale(10), flexDirection: 'row'}}>
      <AddStory />
      <FlatList
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{padding: scale(5)}} />}
        horizontal
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  addStory: {
    borderWidth: scale(1),
    height: scale(70),
    width: scale(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(15),
    borderColor: appColors.secondry,
    
  },
  cardC: {justifyContent: 'center', alignItems: 'center'},
  addStoryC: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
});
