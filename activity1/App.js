import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Morning Routine',
    id: 'Morning Routine',
  },
  {
    title: 'stretch',
    id: 'Morning Routine',
  },
  {
    title: 'clean up',
    id: 'Morning Routine',
  },
  {
    title: 'take a bath',
    id: 'Morning Routine',
  },
  {
    title: 'eat breakfast',
    id: 'Morning Routine',
  },
  {
    title: 'tooth brush',
    id: 'Morning Routine',
  },
  {
    title: 'wash dishes',
    id: 'Morning Routine',
  },
  {
    title: 'Afternoon Routine ',
    id: 'Afternoon',
  },
  {
    title: 'cook for lunch',
    id: 'Morning Routine',
  },
  {
    title: 'eat lunch',
    id: 'Morning Routine',
  },
  {
    title: 'read books',
    id: 'Morning Routine',
  },
  {
    title: 'self study',
    id: 'Morning Routine',
  },
  {
    title: 'cook for lunch',
    id: 'Work out',
  },
  {
    title: 'Evening Routine',
    id: 'Evening Routine',
  },
  {
    title: 'Check social media',
    id: 'Evening Routine',
  },
  {
    title: 'Evening Routine',
    id: 'Evening Routine',
  },
  {
    title: 'Evening Walk',
    id: 'Evening Rooutine',
  },
  {
    title: 'prepare to cook',
    id: 'Evening Rooutine',
  },
  {
    title: 'eat dinner',
    id: 'Evening Rooutine',
  },
  {
    title: 'wash dishes',
    id: 'Evening Rooutine',
  },
  {
    title: 'watch anime',
    id: 'Evening Rooutine',
  },
  {
    title: 'wash dishes',
    id: 'Evening Rooutine',
  },
  
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;