import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function GoalInput(props) {
  const [goal, setGoal] = useState("");
  const [modalState, setModalState] = useState(false);

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.addGoalHandler(goal);
    setGoal("");
    toggleModalState();
  };

  const toggleModalState = () => {
    setModalState((oldState) => !oldState);
  };

  const onCancel = () => {
    toggleModalState();
    setGoal("");
  };
  return (
    <View>
      <Modal visible={modalState} animationType="slide">
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
            value={goal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color="#5e0acc"
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={onCancel} color="tomato" />
            </View>
          </View>
        </View>
      </Modal>
      {!modalState && (
        <View style={{ marginBottom: 10 }}>
          <Button
            onPress={toggleModalState}
            title="Add New Goal"
            color="#8633f2"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4119ae",
    paddingHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#eee1ff",
    borderRadius: 5,
    backgroundColor: "#eee1ff",
    width: "100%",
    padding: 5,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
