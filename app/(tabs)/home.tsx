import { Image, StyleSheet, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Home() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Dashboard</ThemedText>
        <HelloWave />
      </ThemedView>

      <ScrollView contentContainerStyle={styles.dashboardContainer}>
        
        {/* Section 1: Overview */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Overview</ThemedText>
          <ThemedView style={styles.card}>
            <ThemedText type="defaultSemiBold">Total Users: 1,250</ThemedText>
            <ThemedText type="default">Active: 1,050 | Inactive: 200</ThemedText>
          </ThemedView>
          <ThemedView style={styles.card}>
            <ThemedText type="defaultSemiBold">Revenue: $75,000</ThemedText>
            <ThemedText type="default">Monthly Growth: +5.2%</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Section 2: Recent Activity */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Recent Activity</ThemedText>
          <ThemedView style={styles.card}>
            <ThemedText type="defaultSemiBold">New Signups: 320</ThemedText>
            <ThemedText type="default">Last 24 Hours</ThemedText>
          </ThemedView>
          <ThemedView style={styles.card}>
            <ThemedText type="defaultSemiBold">Transactions: 1,540</ThemedText>
            <ThemedText type="default">Last 7 Days</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Section 3: Performance */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Performance</ThemedText>
          <ThemedView style={styles.card}>
            <ThemedText type="defaultSemiBold">User Engagement: 82%</ThemedText>
            <ThemedText type="default">Average Session: 5m 30s</ThemedText>
          </ThemedView>
          <ThemedView style={styles.card}>
            <ThemedText type="defaultSemiBold">Server Uptime: 99.98%</ThemedText>
            <ThemedText type="default">Last 30 Days</ThemedText>
          </ThemedView>
        </ThemedView>

      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
  },
  dashboardContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
