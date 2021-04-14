import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Series from "./components/Series";

const App = () => {
  const [series, setSeries] = useState();
  const [seriesItems, setSeriesItems] = useState([]);

  const handleAddNewSeries = () => {
    setSeriesItems([...seriesItems, series]);
    setSeries(null);
  };

  const removeSeries = (index) => {
    let itemsCopy = [...seriesItems];
    itemsCopy.splice(index, 1);
    setSeriesItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/whitehouse.jpg")}
        style={styles.image}
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My Top Series</Text>

          <View style={styles.items}>
            {/* Holds each series from the list */}
            {seriesItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => removeSeries(index)}
                >
                  <Series text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Write a series */}
        <View style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={"Enter favorite series"}
            value={series}
            onChangeText={(text) => setSeries(text)}
          />

          <TouchableOpacity onPress={() => handleAddNewSeries()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8edd8",
  },
  image: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#f0ae1f",
    borderWidth: 2,
    width: 250,
    fontSize: 16,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#f0ae1f",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
  },
});

export default App;
