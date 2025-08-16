import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import React, { useState } from "react";
import { Button, FlatList, StatusBar, StyleSheet, View } from "react-native";

export default function App() {
  const [isModalVisible, setIsModaVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startGoalInputHandler = () => {
    setIsModaVisible(true);
  };

  const endGoalInputHandler = () => {
    setIsModaVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endGoalInputHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="auto"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#956ec8"
          onPress={startGoalInputHandler}
        />
        <GoalInput
          visible={isModalVisible}
          setVisible={() => {}}
          onAddGoal={addGoalHandler}
          onCancle={endGoalInputHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  courseGoal={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
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
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
