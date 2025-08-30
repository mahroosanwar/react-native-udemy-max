import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "@/data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={(itemData) => {
          return (
            <View>
              <Text>{itemData.item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
