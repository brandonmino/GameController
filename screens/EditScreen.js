import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './StylesScreen'
import { MonoText } from '../components/StyledText';

export default class EditScreen extends React.Component {
  render() { 
    return (
      <View style={styles.homeContainer}>
        <ScrollView style={styles.homeContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.optionsContainer}>
            <Text style={styles.homeTitle}>Pick a Profile to Edit</Text>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Use')} style={styles.homeLink}>
              <View
                style={styles.homeOptions}>
                <MonoText>Controller List</MonoText>
              </View>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};
