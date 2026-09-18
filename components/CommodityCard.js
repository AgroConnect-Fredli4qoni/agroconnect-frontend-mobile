import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function CommodityCard({ name, category, price, stock, unit, onQuickAdjust }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Text style={styles.price}>Rp {price.toLocaleString('id-ID')} / {unit}</Text>
      <View style={styles.footerRow}>
        <Text style={styles.stock}>Stok Kebun: {stock} {unit}</Text>
        <TouchableOpacity style={styles.adjustBtn} onPress={onQuickAdjust}>
          <Text style={styles.adjustBtnText}>Update Stok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#059669',
    marginVertical: 4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 8,
  },
  stock: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '600',
  },
  adjustBtn: {
    backgroundColor: '#059669',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  adjustBtnText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
});
