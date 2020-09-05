import React from 'react';

import { SafeAreaView, View, Image, Text, ScrollView } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles'

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       <MaterialCommunityIcons name="apps" size={28} color="#092071" />
       <View style={styles.user}>
        <MaterialCommunityIcons name="bell" size={28} color="#092071" />
        <Image source={{ uri: "https://randomuser.me/api/portraits/women/95.jpg" }} style={styles.avatar} />
       </View>
      </View>
      <View style={styles.balance}>
        <Text style={styles.balanceTitle}>
          Available Balance
        </Text>
        <Text style={styles.balanceValue}>
          $ 5.000,00
        </Text>
        <View style={styles.balanceCard}>
          <View style={styles.balanceCardTop}>
            <View style={styles.balanceCardInfo}>
              <Text style={styles.balanceCardInfoTitle}>
                Balance
              </Text>
              <Text style={styles.balanceCardInfoDescription}>
                Today, 08 Sept 2019
              </Text>
            </View>
            <MaterialCommunityIcons name="dots-horizontal" size={28} color="#FFF"/>
          </View>
          <View style={styles.balanceCardBottom}>
            <View style={styles.balanceCardInfo}>
              <Text
                style={[
                  styles.balanceCardInfoTitle,
                  styles.balanceCardInfoTitleFeatured
                ]}
              >
                $55643,200
              </Text>
              <Text style={styles.balanceCardInfoDescription}>
              up by 2% from last month
              </Text>
            </View>
            <MaterialCommunityIcons name="paypal" size={32} color="#FFF" />
          </View>
        </View>
      </View>
      <View style={styles.activity}>
          <View style={styles.activityInfoContainer}>
            <Text style={styles.activityTitle}>Your activity</Text>
            <Text style={styles.activityHistory}>Check History</Text>
          </View>
          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
          <View style={styles.section}>
            <Text style={styles.activitySectionTitle}>TODAY</Text>
            <View style={styles.activitySectionCard}>
              <View style={styles.activitySectionCardIconContainer}>
                <MaterialCommunityIcons name="account" size={32} color="#FFF" />
              </View>
              <View style={styles.activitySectionCardInfoContainer}>
                <Text style={styles.activitySectionCardTitle}>
                  Bank Account
                </Text>
                <Text style={styles.activitySectionCardDescription}>
                  Transfer to bank
                </Text>
              </View>
              <Text style={styles.activitySectionCardValue}>
                $1500
              </Text>
            </View>
            <View style={styles.activitySectionCard}>
              <View style={styles.activitySectionCardIconContainer}>
                <MaterialCommunityIcons name="shopping" size={32} color="#FFF" />
              </View>
              <View style={styles.activitySectionCardInfoContainer}>
                <Text style={styles.activitySectionCardTitle}>
                  Shopping
                </Text>
                <Text style={styles.activitySectionCardDescription}>
                  Nike
                </Text>
              </View>
              <Text style={styles.activitySectionCardValue}>
                -$3670
              </Text>
            </View>
          </View>
          <View style={[styles.section, styles.lastSection]}>
            <Text style={styles.activitySectionTitle}>Yesterday</Text>
            <View style={styles.activitySectionCard}>
              <View style={styles.activitySectionCardIconContainer}>
                <MaterialCommunityIcons name="account" size={32} color="#FFF" />
              </View>
              <View style={styles.activitySectionCardInfoContainer}>
                <Text style={styles.activitySectionCardTitle}>
                  Bank Account
                </Text>
                <Text style={styles.activitySectionCardDescription}>
                  Transfer to bank
                </Text>
              </View>
              <Text style={styles.activitySectionCardValue}>
                $1500
              </Text>
            </View>
            <View style={styles.activitySectionCard}>
              <View style={styles.activitySectionCardIconContainer}>
                <MaterialCommunityIcons name="shopping" size={32} color="#FFF" />
              </View>
              <View style={styles.activitySectionCardInfoContainer}>
                <Text style={styles.activitySectionCardTitle}>
                  Shopping
                </Text>
                <Text style={styles.activitySectionCardDescription}>
                  Nike
                </Text>
              </View>
              <Text style={styles.activitySectionCardValue}>
                -$3670
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;