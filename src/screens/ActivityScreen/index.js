import React from "react";

import { View, Image, Text, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

function ActivityScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="apps" size={28} color="#FFF" />
          <View style={styles.user}>
            <MaterialCommunityIcons name="bell" size={28} color="#FFF" />
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/95.jpg" }}
              style={styles.avatar}
            />
          </View>
        </View>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceTitle}>
            {'In & Out'}
          </Text>
          <View style={styles.balanceDetails}>
            <View style={styles.balanceDetailsInfo}>
              <Text style={styles.balanceDetailsDescription}>
                Active total balance
              </Text>
              <Text style={styles.balanceDetailsValue}>
                $4643,200
              </Text>
            </View>
            <RectButton style={styles.balanceAddContainer}>
              <MaterialCommunityIcons
                name="plus"
                size={20}
                color="#fff"
              />
            </RectButton>
          </View>
        </View>
        <View style={styles.profitabilityContainer}>
          <View style={styles.profitabilityIconContainer}>
            <MaterialCommunityIcons
              name="arrow-up"
              size={24}
              color="#fff"
            />
          </View>
          <Text style={styles.profitabilityDescription}>Up by 4% from last month</Text>
        </View>
      </View>
      <View style={styles.activity}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.activityCard}>
            <View style={styles.activityCardIconContainer}>
              <MaterialCommunityIcons
                name="account"
                size={32}
                color="#FF9076"
              />
            </View>
            <View style={styles.activityCardInfoContainer}>
              <Text style={styles.activityCardTitle}>
                Bank Account
              </Text>
              <Text style={styles.activityCardDescription}>
                Transfer to bank
              </Text>
            </View>
            <Text style={styles.activityCardValue}>
              $ 1500
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default ActivityScreen;
