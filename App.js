import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { zodiacData } from './src/data/zodiacData';
import ZodiacCard from './src/components/ZodiacCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Signos del Zodiaco</Text>
      </View>
      <FlatList
        data={zodiacData}
        renderItem={({ item }) => <ZodiacCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  list: {
    paddingVertical: 10,
  },
});

export default App;