import ElementModal from "@/components/ElementModal";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, View } from "react-native";

export default function Tab() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View className="flex items-center min-h-screen bg-zinc-900">
        <View className="mt-16">
          <Pressable onPress={() => setOpen(true)}>
            <AntDesign name="pluscircle" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      <ElementModal open={open} setOpen={setOpen} />
    </>
  );
}
