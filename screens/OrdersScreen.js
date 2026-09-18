import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export function OrdersScreen() {
  const sampleOrders = [
    {
      code: 'ORD-2026-0001',
      buyer: 'Rina Permata',
      total: 165000,
      status: 'PAID',
      item: 'Beras Pandan Wangi Super (10 Kg)',
      date: '19 Sep 2026'
    },
    {
      code: 'ORD-2026-6995',
      buyer: 'Mitra Pasar Induk',
      total: 1050000,
      status: 'PENDING',
      item: 'Cabai Keriting Organik (25 Kg)',
      date: '19 Sep 2026'
    }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Pesanan Masuk (Kelompok Tani)</Text>
      <Text style={styles.subtitle}>Daftar transaksi pesanan hasil bumi dari pembeli</Text>

      {sampleOrders.map((order) => (
        <View key={order.code} style={styles.orderCard}>
          <View style={styles.orderHead}>
            <Text style={styles.orderCode}>{order.code}</Text>
            <View style={[styles.statusBadge, order.status === 'PAID' ? styles.paid : styles.pending]}>
              <Text style={styles.statusText}>{order.status}</Text>
            </View>
          </View>
          <Text style={styles.buyer}>Pembeli: {order.buyer}</Text>
          <Text style={styles.item}>{order.item}</Text>
          <View style={styles.orderFoot}>
            <Text style={styles.date}>{order.date}</Text>
            <Text style={styles.total}>Rp {order.total.toLocaleString('id-ID')}</Text>
          </View>
        </View>
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
  orderCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  orderHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  orderCode: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0f172a',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  paid: {
    backgroundColor: '#ecfdf5',
  },
  pending: {
    backgroundColor: '#fef3c7',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#059669',
  },
  buyer: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '600',
    marginBottom: 2,
  },
  item: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
  },
  orderFoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 8,
  },
  date: {
    fontSize: 12,
    color: '#94a3b8',
  },
  total: {
    fontSize: 15,
    fontWeight: '800',
    color: '#059669',
  },
});
