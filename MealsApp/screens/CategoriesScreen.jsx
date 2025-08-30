import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const numColumns = 2;
  const renderCategoryItem = (itemData) => {
    const presshandler = () => {
      navigation.navigate("MealsOverview");
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={presshandler}
      />
    );
  };
  
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={numColumns}
    />
  );
};

export default CategoriesScreen;
