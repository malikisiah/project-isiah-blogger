import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Index() {
  return (
    <View className="flex-1 bg-zinc-900">
      <View className="mt-32">
        <Text className="text-white text-2xl font-bold text-center">
          New Article
        </Text>
        <View className="mt-6 space-y-5 p-1 mx-2">
          <TextInput mode="outlined" label={"Title"} />
          <TextInput
            mode="outlined"
            multiline={true}
            numberOfLines={3}
            label={"Description"}
          />
          <Pressable className="mx-auto items-center border border-gray-400 rounded-md w-full p-2 align-middle ">
            <View className="flex-row gap-2 items-center">
              <Text className="text-gray-300 text-lg">Upload Content</Text>
              <AntDesign name="addfile" size={23} color="#d1d5db" />
            </View>
          </Pressable>
        </View>
        <View className="mt-12">
          <Pressable className="mt-12 flex-row gap-1 items-center rounded-md bg-cyan-600 px-3 py-2 shadow-sm  mx-auto">
            <AntDesign name="check" size={24} color={"white"} />
            <Text className="text-white text-sm">Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
