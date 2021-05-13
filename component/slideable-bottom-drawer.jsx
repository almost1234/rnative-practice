import React, {useState} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Text,
  Button
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('screen');
const SlideableBottomDrawer = () => {
  const [alignment] = useState(new Animated.Value(0))

  const alignmentInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 2.4 + 10, 20],
  });

  const scrollUp = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const scrollDown = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  const alignmentHeight = {
    bottom: alignmentInterpolate,
  };

  const gestureHandler = (e) => {
    console.log('clikc');
    if (e.nativeEvent.contentOffset.y > 0) scrollUp();
  };
  return (
    <View>
      <Animated.View style={[styles.container, alignmentHeight]}>
          <Button title="asd"onPress={() => {console.log("asdasd")}}>asdasd</Button>
        <ScrollView
          style={styles.grabber}
          onScroll={(e) => {
            console.log('sadjkh');
          }}
        />
        <Text>asjkhgd</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height/ 2,
    width: width / 1.05,
    marginHorizontal: 10,
  },
  grabber: {
    width: 100,
    borderTopWidth: 30,
    borderTopColor: 'black',
  },
});

export default SlideableBottomDrawer
