import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { CommodityCard } from '../components/CommodityCard';

export function InventoryScreen() {
  const [commodities, setCommodities] = useState([
    {
      id: '1',
      name: 'Beras Pandan Wangi Super',
      category: 'Pangan Pokok',
      price: 16500,
      stock: 2500,
      unit: 'Kg'
    },
    {
      id: '2',
      name: 'Cabai Rawit Merah',
      category: 'Bumbu',
      price: 45000,
      stock: 150,
      unit: 'Kg'
    },
    {
      id: '3',
      name: 'Jagung Manis Madu',
      category: 'Pangan Pokok',
      price: 8500,
      stock: 1200,
      unit: 'Kg'
    }
  ]);

  const handleAdjust = (id, name) => {
    Alert.alert('Update Stok', `Stok ${name} disinkronkan dengan basis data MongoDB.`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Inventaris Hasil Kebun</Text>
      <Text style={styles.subtitle}>Sinkronisasi katalog komoditas langsung dari lahan pertanian</Text>

      {commodities.map((item) => (
        <CommodityCard
          key={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
          stock={item.stock}
          unit={item.unit}
          onQuickAdjust={() => handleAdjust(item.id, item.name)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 16,
  },
});
