import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

class MainGoalView extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedOption: ''
    }
  }

  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Goal" />
        
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>What is your main goal?</Text>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Lose Weight</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Get Healthier</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Build Muscle/Gain Weight</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={() => this.props.navigation.navigate('WeeklyActivityView')} text="Save"/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectBox: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 20,
  },
  title: {
    fontSize: 14,
    // color: "#BDBDBD",
  },
  subTitle: {
    fontSize: 10,
    // color: "#BDBDBD",
  },
});

export default MainGoalView;
