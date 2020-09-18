import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  balanceContainer: {
    backgroundColor: "#FF9076"
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
  balanceInfo: {
    marginLeft: 24,
    marginRight: 24,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderColor: "#FFF"
  },
  balanceTitle: {
    color: "#FFF",
    fontSize: 18,
  },
  balanceDetails: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  balanceDetailsInfo: {},
  balanceDetailsDescription: {
    fontSize: 14,
    color: "#FFF"
  },
  balanceDetailsValue: {
    color: "#FFF",
    fontSize: 24,
    marginTop: 12
  },
  balanceAddContainer: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.09)"
  },
  profitabilityContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  profitabilityIconContainer: {
    padding: 4,
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,0.06)"
  },
  profitabilityDescription:  {
    color: "#FFF",
    fontSize: 14,
    marginLeft: 8
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 42,
  },
  activityCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 5,
    borderRadius: 16,
    backgroundColor: "#FFF",
  },
  activityCardIconContainer: {
    backgroundColor: "#FFF4F1",
    padding: 10,
    borderRadius: 21,
  },
  activityCardInfoContainer: {
    marginLeft: 8,
    flex: 1,
  },
  activityCardTitle: {
    fontSize: 18,
    color: "#1A2F7B",
  },
  activityCardDescription: {
    fontSize: 14,
    color: "#1A2F7B",
  },
  activityCardValue: {
    fontSize: 18,
    color: "#1A2F7B",
  },

  
})

export default styles