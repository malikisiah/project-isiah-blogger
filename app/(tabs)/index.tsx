import { View, ScrollView } from "react-native";
import { trpc } from "@/trpc/react";
import ArticleCard from "@/components/ArticleCard";
export default function Tab() {
  const myPosts = trpc.api.getArticles.useQuery();
  return (
    <>
      <ScrollView className="flex min-h-screen bg-zinc-900 text-white">
        <View className="mt-24 space-y-8">
          {myPosts.data?.map((item, idx) => (
            <View key={idx}>
              <ArticleCard article={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
