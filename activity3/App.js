import React, {useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, StatusBar, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Morning Routine',
    id: 'Morning Routine',
  },
  {
    title: 'stretching',
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
    id: 'Evening Routine',
  },
  {
    title: 'eat dinner',
    id: 'Evening Rooutine',
  },
  {
    title: 'wash dishes',
    id: 'Evening Routine',
  },
  {
    title: 'take a shower',
    id: 'Evening Routine',
  },
  
];

const COLORS = [ '#F2C3CE', '#E8C3F2', '#E96CB5', '#F2C3EA', '#CC6CE7', '#D6C3F2', '#AE0D6B'];

const Item = ({title, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item, index}) => {
    const backgroundColor = COLORS[index % COLORS.length];
    const textColor = '#000000';

    return (
      <Item
        title={item.title}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default App;