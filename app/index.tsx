import { Text, View } from "react-native";
import { trpc } from "@/trpc/react";
export default function Index() {
  const { data: blogPosts } = trpc.api.getPosts.useQuery();
  console.log(blogPosts);
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
