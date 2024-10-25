    {/* <View style={styles.searchContainer}>
          <TextInput placeholderTextColor="#A5A5A5" placeholder="Rechercher un article" style={styles.searchInput} />
          <Ionicons name="search-outline" size={24} color="gray" style={styles.searchIcon} />
        </View> */}

        {/* <View style={styles.categorySearchItems}>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Tous voir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Nouveauté</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Homme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Femme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Animaux</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Outils</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Maison</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Electronique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Enfant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Maternité</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categorySearchItem}>
            <Text style={styles.categorySearchItemText}>Enfant</Text>
          </TouchableOpacity>
        </View> */}
        
        
        
        
        
import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg from '@/components/svg/svg';
import SearchItems from '@/components/itemsSearch/searchItems';

export default function HomeScreen() {
  // Données fictives pour le flux d'actualités
  const newsData = [
    { 
      id: '1', 
      title: 'Figurine goku', 
      price: '400€', 
      image : require('../assets/images/achat/goku.png')
    },
    { 
      id: '2', 
      title: 'Livre', 
      price: '20€', 
      image : require('../assets/images/achat/livre.png')
      },
 
  ];

  const categories = [
    { id: '1', 
      title: 'Homme', 
      image: require('../assets/images/categories/homme/homme.jpg') 
    },
    { id: '2', 
      title: 'Femme',
      image: require('../assets/images/categories/femme/femme.jpg')},
    { id: '3', 
      title: 'Robes',
      image: require('../assets/images/categories/robe/robe.jpg')},
    { id: '4', 
      title: 'Bijoux',
      image: require('../assets/images/categories/bijoux/bijou.png')},
    { id: '5', 
      title: 'Pull',
      image: require('../assets/images/categories/pull/pull.jpg')},
    { id: '6', 
      title: 'T-shirt',
      image: require('../assets/images/categories/t-shirt/t-shirt.jpg')},
    { id: '7', 
      title: 'Beauté',
      image: require('../assets/images/categories/beaute/beaute.jpg')},
    { id: '8', 
      title: 'Bébé',
      image: require('../assets/images/categories/bebe/bebe.jpg')},
    { id: '9', 
      title: 'Chaussure',
      image: require('../assets/images/categories/chaussure/chaussure.png')},
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../assets/images/logo/EcoVente.png')} style={styles.logo} />
          <Svg />
        </View>

        {/* Search Bar */}


   <View style={styles.categoriesContainer}>
<SearchItems />





    

        {/* Categories */}
     
          {categories.map((category) => (
        <View key={category.id} style={styles.categoryItem}>
          <Image source={category.image} style={styles.categoryImage} />
          <Text>{category.title}</Text>
        </View>
          ))}
        </View>

        {/* Sell Button */}
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.sellButtonText}>Vendez dès maintenant</Text>
        </TouchableOpacity>

        {/* Flux */}
        <Text style={styles.newsTitle}>Flux d'actualités</Text>
        <FlatList
          data={newsData}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => (
        <View style={styles.newsItem}>
          <Image source={item.image} style={styles.newsImage} />
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
        </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    marginVertical: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    width: 100,
    height: 50,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },

  categorySearchItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    color: '#FF5A00',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  categorySearchItemText: {
    color: '#A5A5A5',
    paddingHorizontal: 7,
  },
  
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#FF5A00',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    marginBottom: 20,
    margin: -5, 
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 20,
    width: '30%',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  sellButton: {
    backgroundColor: '#FF5A00',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .8,
    shadowRadius: 2,
    elevation: 5,
  },
  sellButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsTitle: {
    fontWeight: 'bold',
    marginVertical: 30,
  },
  newsItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  newsImage: {
    width: 100,
    height: 100,
    backgroundColor: '#FF5A00',
    marginBottom: 10,
  },
});
