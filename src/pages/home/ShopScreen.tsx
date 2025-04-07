import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { usePopupState } from '@/stores/state/PopupState';

const ShopScreen = () => {
  const { setPopTab1Active } = usePopupState();

  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', description: 'This is a description for product 1.' },
    { id: 2, name: 'Product 2', price: '$29.99', description: 'This is a description for product 2.' },
    { id: 3, name: 'Product 3', price: '$39.99', description: 'This is a description for product 3.' },
    { id: 4, name: 'Product 4', price: '$49.99', description: 'This is a description for product 4.' },
    { id: 5, name: 'Product 5', price: '$59.99', description: 'This is a description for product 5.' },
    { id: 6, name: 'Product 6', price: '$69.99', description: 'This is a description for product 6.' },
    { id: 7, name: 'Product 7', price: '$79.99', description: 'This is a description for product 7.' },
    { id: 8, name: 'Product 8', price: '$89.99', description: 'This is a description for product 8.' },
    { id: 9, name: 'Product 9', price: '$99.99', description: 'This is a description for product 9.' },
    { id: 10, name: 'Product 10', price: '$109.99', description: 'This is a description for product 10.' },
  ];

  const handleOpenPopTab = () => {
    setPopTab1Active();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>

      <TouchableOpacity
        style={styles.popTabButton}
        onPress={handleOpenPopTab}
      >
        <Text style={styles.buttonText}>Open Pop Tab</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {products.map(product => (
          <View key={product.id} style={styles.productCard}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  popTabButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  buyButton: {
    backgroundColor: '#34C759',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
})