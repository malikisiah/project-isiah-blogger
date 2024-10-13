import { Text, View } from "react-native";
import { trpc } from "@/trpc/react";
export default function Index() {
  const { data: blogPosts } = trpc.api.getPosts.useQuery();
  console.log(blogPosts);
  return (
    <View className="flex items-center">
      <Text>Hello World</Text>
    </View>
  );
}
