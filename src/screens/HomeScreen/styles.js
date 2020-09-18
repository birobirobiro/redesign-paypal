import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
    backgroundColor: "#FFF"
  },
  header: {
    height: 64,
    flexDirection: "row",
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 16,
  },
  balance: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  balanceTitle: {
    fontSize: 14,
    color: "#FF9076",
  },
  balanceValue: {
    marginTop: 8,
    fontSize: 28,
    color: "#092071",
  },
  balanceCard: {
    marginTop: 16,
    backgroundColor: "#FF9076",
    padding: 24,
    borderRadius: 8,
  },
  balanceCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceCardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 38,
    alignItems: "flex-end",
  },
  balanceCardInfo: {},
  balanceCardInfoTitle: {
    fontSize: 18,
    color: "#FFF",
  },
  balanceCardInfoTitleFeatured: {
    fontSize: 24,
  },
  balanceCardInfoDescription: {
    fontSize: 12,
    color: "#FFF",
    marginTop: 8,
  },
  activity: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  activityInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  activityTitle: {
    color: "#1A2F7B",
    fontSize: 18,
  },
  activityHistory: {
    fontSize: 14,
    color: "#1A2F7B",
  },
  scrollContainer: {
    paddingHorizontal: 24,
  },
  section: {
    marginTop: 14,
  },
  lastSection: {
    marginBottom: 12,
  },
  activitySectionTitle: {
    fontSize: 16,
    color: "#1A2F7B",
    marginBottom: 7,
  },
  activitySectionCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 5,
    borderRadius: 16,
    backgroundColor: "#FFF",
  },
  activitySectionCardIconContainer: {
    backgroundColor: "#FF9076",
    padding: 10,
    borderRadius: 21,
  },
  activitySectionCardInfoContainer: {
    marginLeft: 8,
    flex: 1,
  },
  activitySectionCardTitle: {
    fontSize: 18,
    color: "#1A2F7B",
  },
  activitySectionCardDescription: {
    fontSize: 14,
    color: "#A0A0A0",
  },
  activitySectionCardValue: {
    fontSize: 18,
    color: "#5CBC71",
  },
});

export default styles;
