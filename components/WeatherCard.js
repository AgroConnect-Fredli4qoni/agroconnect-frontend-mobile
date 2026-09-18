import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function WeatherCard({ region, temp, condition, humidity, actionLabel }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.region}>{region}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{actionLabel}</Text>
        </View>
      </View>
      <View style={styles.tempRow}>
        <Text style={styles.temp}>{temp}°C</Text>
        <Text style={styles.condition}>{condition}</Text>
      </View>
      <Text style={styles.humidity}>Kelembaban Relatif: {humidity}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  region: {
    fontSize: 14,
    fontWeight: '700',
    color: '#059669',
  },
  badge: {
    backgroundColor: '#ecfdf5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  tempRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
    marginVertical: 4,
  },
  temp: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0f172a',
  },
  condition: {
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
  },
  humidity: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
});
