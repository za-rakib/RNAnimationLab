import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const Explore = () => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [numberHistory, setNumberHistory] = useState([]);
  const [availableNumbers, setAvailableNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const generateRandomNumber = () => {
    if (availableNumbers.length === 0) {
      setCurrentNumber("All numbers used!");
      return;
    }

    // Get random index from available numbers
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const newNumber = availableNumbers[randomIndex];

    // Remove the used number from available numbers
    const updatedNumbers = availableNumbers.filter(
      (_, index) => index !== randomIndex
    );
    setAvailableNumbers(updatedNumbers);

    // Update current number and history
    setCurrentNumber(newNumber);
    setNumberHistory([newNumber, ...numberHistory]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.box}>
        <Text style={styles.boxText}>
          {currentNumber
            ? typeof currentNumber === "number"
              ? `Current Roll: ${currentNumber}`
              : currentNumber
            : "Click Spin to Start!"}
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            availableNumbers.length === 0 && styles.buttonDisabled,
          ]}
          onPress={generateRandomNumber}
          disabled={availableNumbers.length === 0}
        >
          <Text style={styles.buttonText}>
            {availableNumbers.length > 0 ? "Spin" : "No More Numbers"}
          </Text>
        </TouchableOpacity>

        {numberHistory.length > 0 && (
          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Numbers Generated:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.historyList}>
                {numberHistory.map((number, index) => (
                  <View key={index} style={styles.historyItem}>
                    <Text style={styles.historyText}>{number}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        )}

        <View style={styles.remainingContainer}>
          <Text style={styles.remainingText}>
            Remaining Numbers: {availableNumbers.join(", ")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a7ea4",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    maxHeight: "80%",
  },
  boxText: {
    fontSize: 24,
    color: "#0a7ea4",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: "#cccccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  historyContainer: {
    width: "100%",
    marginTop: 10,
  },
  historyTitle: {
    fontSize: 18,
    color: "#0a7ea4",
    fontWeight: "bold",
    marginBottom: 10,
  },
  historyList: {
    flexDirection: "row",
  },
  historyItem: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    minWidth: 40,
    alignItems: "center",
  },
  historyText: {
    fontSize: 16,
    color: "#333",
  },
  remainingContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    width: "100%",
  },
  remainingText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
