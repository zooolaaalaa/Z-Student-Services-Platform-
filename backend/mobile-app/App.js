import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* الهيدر */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎓 XEAB Platform</Text>
        <Text style={styles.headerSubtitle}>منصة الخدمات التعليمية الشاملة</Text>
      </View>

      {/* الخدمات */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>الخدمات المتاحة</Text>
        
        <View style={styles.servicesGrid}>
          <View style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>📚</Text>
            <Text style={styles.serviceName}>بحوث وتقارير</Text>
          </View>
          
          <View style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>✏️</Text>
            <Text style={styles.serviceName}>حل واجبات</Text>
          </View>
          
          <View style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>💻</Text>
            <Text style={styles.serviceName}>برمجة</Text>
          </View>
          
          <View style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>📊</Text>
            <Text style={styles.serviceName}>عروض تقديمية</Text>
          </View>
        </View>
      </View>

      {/* أزرار التسجيل */}
      <View style={styles.authSection}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>تسجيل الدخول</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.buttonText}>إنشاء حساب جديد</Text>
        </TouchableOpacity>
      </View>

      {/* معلومات الاتصال */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>للتواصل معنا:</Text>
        <Text style={styles.contactInfo}>📧 eabplatform@gmail.com</Text>
        <Text style={styles.contactInfo}>📱 +967784948116</Text>
        <Text style={styles.contactInfo}>📱 +967733071578</Text>
        <Text style={styles.contactInfo}>✈️ @EAB_Platform</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#667eea',
    padding: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '48%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  authSection: {
    padding: 20,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#667eea',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#4caf50',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactSection: {
    backgroundColor: '#2d3748',
    padding: 25,
    margin: 20,
    borderRadius: 15,
  },
  contactTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  contactInfo: {
    color: '#e2e8f0',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
});
