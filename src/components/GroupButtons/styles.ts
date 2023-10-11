import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#08070F",
    flexGrow: 1,
    rowGap: 18,
    //flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 28,
    maxHeight: 428,
  },
  row: {
    gap: 14,
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
})