import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { WeatherCard } from '../components/WeatherCard';

export function WeatherScreen() {
  const sampleWeathers = [
    {
      region: 'Jawa Barat (Cianjur / Lembang)',
      temp: 26.5,
      condition: 'Cerah Berawan',
      humidity: 72,
      actionLabel: 'Aman Panen'
    },
    {
      region: 'Jawa Tengah (Brebes / Dieng)',
      temp: 28.0,
      condition: 'Cerah',
      humidity: 68,
      actionLabel: 'Ideal Pemupukan'
    },
    {
      region: 'Jawa Timur (Kediri / Malang)',
      temp: 29.2,
      condition: 'Cerah Berawan',
      humidity: 65,
      actionLabel: 'Aman Panen'
    }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Prakiraan Cuaca BMKG</Text>
      <Text style={styles.subtitle}>Panduan iklim operasional sentra pertanian Indonesia</Text>

      {sampleWeathers.map((item) => (
        <WeatherCard
          key={item.region}
          region={item.region}
          temp={item.temp}
          condition={item.condition}
          humidity={item.humidity}
          actionLabel={item.actionLabel}
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
