import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PurchaseCoinsCard = ({points, price}) => {
  console.log(points);
  return (
    <TouchableOpacity>
      <View style={styles.containerStyle}>
        <View style={styles.pointsViewStyle}>
          <Image
            style={styles.coinImageStyle}
            source={require('../../../assets/images/coin.png')}
          />
          <Text style={styles.pointsTextStyle}>{points}</Text>
        </View>
        <Text style={styles.priceTextStyle}>{price} INR</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'teal',
    margin: wp('3'),
    borderRadius: wp('2'),
    height: hp('4.6'),
  },
  pointsViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: wp('3'),
  },
  coinImageStyle: {
    height: hp('3'),
    width: wp('6'),
    marginTop: hp('1'),
  },
  pointsTextStyle: {
    color: 'white',
    marginTop: hp('1.3'),
    marginLeft: wp('1.5'),
  },
  priceTextStyle: {
    color: 'white',
    marginTop: hp('1.3'),
    marginRight: wp('3'),
  },
});

export default PurchaseCoinsCard;
