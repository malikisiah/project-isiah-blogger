import ElementModal from "@/components/ElementModal";
import { useState } from "react";
import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
} from "react-native-keyboard-controller";

export default function Tab() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <KeyboardAwareScrollView
        bottomOffset={0}
        extraKeyboardSpace={0}
        contentContainerStyle={styles.container}
      >
        <TextInput placeholder="Type a message..." />
      </KeyboardAwareScrollView>
      <View className="-bottom-[49]">
        <KeyboardToolbar
          opacity="FF"
          doneText="Clear"
          showArrows={false}
          content={
            <View className="flex-row gap-2 justify-center">
              <Pressable onPress={() => setOpen(true)}>
                <Text>Open Modal</Text>
              </Pressable>
            </View>
          }
        />
      </View>
      <ElementModal open={open} setOpen={setOpen} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end", // Ensures elements grow and align properly
  },
  listStyle: {
    padding: 16,
    gap: 16,
  },
  textInput: {
    width: "auto",
    flexGrow: 1,
    flexShrink: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d8d8d8",
    backgroundColor: "#fff",
    padding: 8,
    marginBottom: 8,
  },
  toolbar: {
    padding: 0,
    margin: 0, // Ensures no extra space
  },
});
