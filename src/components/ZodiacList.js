import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ZodiacCard from './ZodiacCard';
import { zodiacData } from '../data/zodiacData';

const ZodiacList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ZodiacCard 
      item={item}
      onPress={() => navigation.navigate('Detail', { zodiac: item })}
    />
  );

  return (
    <FlatList
      data={zodiacData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
});

export default ZodiacList;