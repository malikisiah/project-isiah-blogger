import { Text, View, Pressable, StyleSheet } from "react-native";
import { trpc } from "../components/providers";
export default function Index() {
  const getPosts = trpc.getArticles.useMutation({
    onSuccess: (res) => console.log(res),
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable style={styles.button} onPress={() => getPosts.mutate()}>
        <Text style={styles.text}>Clicky!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
