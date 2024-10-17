import { Modal, View, Text, Pressable } from "react-native";

export default function ElementModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={open}>
      <View className="h-1/4 w-full bg-gray-400 absolute bottom-[0] corner">
        <Pressable onPress={() => setOpen(false)}>
          <Text className="text-white">Close Modal</Text>
        </Pressable>
      </View>
    </Modal>
  );
}
