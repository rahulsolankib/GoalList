import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  // const [goal, setGoal] = useState(""); //won't come here! question I have to ask is ' Whether the purpose of
  // // this page is to setGoal Input? No right, its to add goal
  const [courseGoals, setCourseGoals] = useState([]);

  const deleteGoalHandler = (goalValue) => {
    setCourseGoals((courseGoalsCopy) =>
      courseGoalsCopy.filter((item) => item.text !== goalValue)
    );
  };
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((courseGoalsCopy) => [
      ...courseGoalsCopy,
      { text: enteredGoalText, key: enteredGoalText },
    ]);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput addGoalHandler={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  buttonStyles: {
    color: "red",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 10,
    padding: 2,
    paddingLeft: 10,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
