import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';

class MainGoalView extends React.Component {
  state = {
    mainGoal: ''
  }
  

  onSelectLose = () => this.setState({mainGoal: 'lose'})
  onSelectMaintain = () => this.setState({mainGoal: 'maintain'})
  onSelectGain = () => this.setState({mainGoal: 'gain'})

  onSave = () => {
    axios.put('http://localhost:3000/users/5ccb5e96a7c8fa829ba6de92', {
      goal: this.state.mainGoal
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    // this.props.navigation.navigate('WeeklyActivityView')
  }

  render () {
    const { mainGoal } = this.state;

    return (
      <View style={{flex: 1}}>
        <NavBar headerTitle="Goal" progress={60} />
        
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>What is your main goal?</Text>
          </View>

          <View style={{flex: 1}}>
            <SelectBox title="Get Lean or Lose Weight" onPress={this.onSelectLose} isSelected={mainGoal === 'lose'}/>
            <SelectBox title="Get Healthier/Recomposition" onPress={this.onSelectMaintain} isSelected={mainGoal === 'maintain'}/>
            <SelectBox title="Build Muscle or Gain Weight" onPress={this.onSelectGain} isSelected={mainGoal === 'gain'}/>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={this.onSave} text="Save"/>
          </View>
        </View>
      </View>
    )
  }
}

export default MainGoalView;
