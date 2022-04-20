import { StyleSheet, Text, View, Pressable } from "react-native";
export default function GoalItem(props) {
  const RippleConfig = {
    color: "#210644",
    foreground: true,
  };

  return (
    <View style={styles.item}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.text)}
        android_ripple={RippleConfig}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  text: {
    color: "white",
    padding: 8,
  },
});
