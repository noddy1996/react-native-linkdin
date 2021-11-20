import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, Image, } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import { } from 'react-native-gesture-handler';
import { features, starterIntro } from '../../utils/MockData';
import { AlertHelper } from '../../utils/AlertHelper';
import { appColors } from '../../utils/appColors'; 
import Label from '../../components/Label';
import Divider from '../../components/Divider';
import Tabs from '../../components/Tabs';

import { scale } from 'react-native-size-matters';
import Container from '../../components/Container';
import Stories from '../../components/Stories';
import PostCard from '../../components/PostCard/PostCard';
import FabIcon from '../../components/FabIcon/FabIcon';
export default function Home() {
  const [isError, setIsError] = useState({})
  const [text, setText] = useState("hello")
  const [isVisible, setIsVisible] = useState(false)
  let error = useSelector(state => state.error)// getting from reducer.
  const dispatch = useDispatch()
  const hasError = (error) => {
    dispatch(setError({ error }))//here we can call a action to set an error in reducer.
  }
  //console.log("error is =>",{isVisible});
  useEffect(() => {
    setIsError(error)
  }, [error])
  const _renderItems = () => {
    return (
      <PostCard>
        
        <View>
          <Label text={starterIntro[0]} style={styles.postDescription} />
          <Image source={require("../../assets/images/card.png")} style={styles.postImage} />
        </View>
      </PostCard>
    )
  }
  return (
    <Container >

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <>
        <Stories />
        <Label text={"Noticias"}  style={{fontSize:scale(22), fontWeight:"800"}} />
        
    <Tabs />
    <Divider  isDark/>
         </>}
        data={[1, 2, 3]}
        renderItem={_renderItems}
        keyExtractor={(item, index) => "key" + index}
      />
      <FabIcon />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  postImage: {
    height: scale(150),
    borderRadius: scale(20),
    marginVertical: scale(15)
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center'
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  postDescription: {
    marginTop: scale(10)
  }
});