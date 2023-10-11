import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60
  },
  clean: {
    backgroundColor: "#8873FF",
    borderRadius: 8
  },
  operator: {
    backgroundColor: "#E5E1FF",
    borderRadius: 8
  },
  number: {
    backgroundColor: "#5E50B2",
    borderRadius: 16
  },
  equal: {
    backgroundColor: "#47B380",
    borderRadius: 8
  },
  other: {
    backgroundColor: "rgba(94, 80, 178, 0.50)",
    borderRadius: 16
  },
  value: {
    color: "#E5E1FF",
    fontSize: 32,
    fontFamily: "IBMPlexMono-Bold"
  }
})
