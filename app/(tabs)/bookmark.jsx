import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="h-full px-4 my-6 bg-primary">
      <Text className="text-2xl text-white font-psemibold">Bookmark</Text>
    </SafeAreaView>
  );
};

export default Bookmark;
