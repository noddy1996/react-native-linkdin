import React from 'react'
import { ScrollView, StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import CustomHeader from '../CustomHeader/CustomHeader'


export default function Container({children,isScrollable,hideHeader}) {
    return (
        <SafeAreaView style={styles.container}>
           {!hideHeader&& <CustomHeader/>}
            {
                isScrollable? <ScrollView>
                    <View style={styles.innerView}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={styles.innerView}>{children}</View>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appColors.white
    },
    innerView:{
        flex:1,
        paddingHorizontal:scale(20)
    }
})
