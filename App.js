import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.logoIcon}>🌱</Text>
          <Text style={styles.headerTitle}>AgroConnect Mobile</Text>
          <Text style={styles.subtitle}>Aplikasi Lapangan Petani Modern</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🌤️ Status Cuaca Lapangan</Text>
          <Text style={styles.cardContent}>Terhubung ke BMKG Weather Service (:8083)</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📦 Inventaris Kebun</Text>
          <Text style={styles.cardContent}>Terhubung ke Catalog NoSQL Service (:8081)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scroll: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logoIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#059669',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 6,
  },
  cardContent: {
    fontSize: 13,
    color: '#64748b',
  },
});
