import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ courseGoal, onDelete, id }) => {
  // const deleteGoalHandler = () => {
  //   onDelete(id);
  // };

  return (
    <Pressable
      onPress={
        onDelete.bind(this, id)
        // deleteGoalHandler
      }
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{courseGoal}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
