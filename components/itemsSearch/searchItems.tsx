import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const itemsSearch = () => {

return (
  <View>
    <View style={styles.searchContainer}>
      <TextInput placeholderTextColor="#A5A5A5" placeholder="Rechercher un article" style={styles.searchInput} />
      <Ionicons name="search-outline" size={24} color="gray" style={styles.searchIcon} />
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categorySearchItems}>
      {['Tous voir', 'Nouveauté', 'Homme', 'Femme', 'Animaux', 'Outils', 'Maison', 'Electronique', 'Enfant', 'Maternité'].map((category, index) => (
        <TouchableOpacity key={index} style={styles.categorySearchItem}>
          <Text style={styles.categorySearchItemText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 20,
  marginVertical: 20,
  backgroundColor: '#F5F5F5',
  borderRadius: 10,
},
searchInput: {
  flex: 1,
  padding: 10,
  fontSize: 16,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#FF5A00',
},
searchIcon: {
  padding: 10,
},
categorySearchItems: {
  flexDirection: 'row',
  // marginHorizontal: 20,
  marginBottom: 20,
},
categorySearchItem: {
  borderRadius: 10,
  paddingRight: 7,
},
categorySearchItemText: {
  fontSize: 12,
  paddingBottom: 10,
},
});

export default itemsSearch;