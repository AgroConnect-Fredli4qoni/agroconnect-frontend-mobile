import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WeatherScreen } from './screens/WeatherScreen';
import { InventoryScreen } from './screens/InventoryScreen';
import { OrdersScreen } from './screens/OrdersScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('weather');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.navbar}>
        <View style={styles.brand}>
          <Text style={styles.brandIcon}>🌱</Text>
          <View>
            <Text style={styles.brandName}>AgroConnect Mobile</Text>
            <Text style={styles.brandSub}>Operasional Petani Lapangan</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'weather' && styles.tabActive]}
          onPress={() => setActiveTab('weather')}
        >
          <Text style={[styles.tabText, activeTab === 'weather' && styles.tabTextActive]}>
            🌤️ Cuaca
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'inventory' && styles.tabActive]}
          onPress={() => setActiveTab('inventory')}
        >
          <Text style={[styles.tabText, activeTab === 'inventory' && styles.tabTextActive]}>
            📦 Inventaris
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'orders' && styles.tabActive]}
          onPress={() => setActiveTab('orders')}
        >
          <Text style={[styles.tabText, activeTab === 'orders' && styles.tabTextActive]}>
            📋 Pesanan
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.screenContainer}>
        {activeTab === 'weather' && <WeatherScreen />}
        {activeTab === 'inventory' && <InventoryScreen />}
        {activeTab === 'orders' && <OrdersScreen />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navbar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  brandIcon: {
    fontSize: 28,
  },
  brandName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#064e3b',
  },
  brandSub: {
    fontSize: 12,
    color: '#64748b',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9',
    padding: 6,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 10,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#64748b',
  },
  tabTextActive: {
    color: '#059669',
  },
  screenContainer: {
    flex: 1,
  },
});
