import React from 'react';
import { View, StyleSheet, Platform, SCREEN_HEIGHT, Text, Animated, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListView, ImageBackground, Tile, Title, Divider, Caption, TouchableOpacity } from '@shoutem/ui';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const { width } = Dimensions.get('window');
import PlannerCard from '../components/PlannerCard';

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
 
const images = {
  background: require('../assets/images/homeStats.png'), // Put your own image here
};
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
        <View><Text style={{color: '#fff'}}>Monday April 19</Text></View>
        <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
          <Icon name="arrow-right" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )

  renderDailyPlanner = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10}}>
          <Text>Food</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RecipeFilterModal')}><Text style={{color: '#00C871'}}>+ Add Food</Text></TouchableOpacity>
        </View>
        <PlannerCard />
      </View>
    )
  }

  render() {
    const calories = (
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BodyStatsModal')}>
          <AnimatedCircularProgress
            size={175}
            width={10}
            fill={60}
            tintColor="#fff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#feb551">
              {
                (fill) => (
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                        { 1601 }
                      </Text>
                      <Text style={{color: 'white'}}>
                        cals left
                    </Text>
                  </View> 
                )
              }
          </AnimatedCircularProgress>
        </TouchableOpacity>
        <View style={{ marginTop: 30, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', width: width-40  }}>
          <View>
            <Text style={styles.macrosText}>Protein</Text>
            <Text style={{color: 'white'}}>127/250g</Text>
            <View style={styles.bar}>
              <View style={{height: 4, backgroundColor: '#fff', width: 30}}/>
              <View style={{height: 4, backgroundColor: '#fff', opacity: 0.2, width: 50}}/>
            </View>   
          </View>
          
          <View>
            <Text style={styles.macrosText}>Fat</Text>
            <Text style={{color: 'white'}}>127/250g</Text>
            <View style={styles.bar}>
              <View style={{height: 4, backgroundColor: '#fff', width: 20}}/>
              <View style={{height: 4, backgroundColor: '#fff', opacity: 0.2, width: 70}}/>
            </View>   
          </View>

          <View>
            <Text style={styles.macrosText}>Carbs</Text>
            <Text style={{color: 'white'}}>127/250g</Text>
            <View style={styles.bar}>
              <View style={{height: 4, backgroundColor: '#fff', width: 40}}/>
              <View style={{height: 4, backgroundColor: '#fff', opacity: 0.2, width: 50}}/>
            </View>   
          </View>          
        </View>
        
      </View>
      
    );

    return (
      <View style={{ flex: 1 }}>
        <ReactNativeParallaxHeader
          alwaysShowTitle={false}
          alwaysShowNavBar={true}
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={350}
          extraScrollHeight={20}
          navbarColor="#fa600d"
          title={calories}
          titleStyle={styles.titleStyle}
          backgroundImage={images.background}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderDailyPlanner}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  boldText: {
    fontWeight: 'bold'
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  box: {
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.00,
    elevation: 24,
  },
  macrosText: {
    color: 'white',
    fontWeight: 'bold'
  }
});