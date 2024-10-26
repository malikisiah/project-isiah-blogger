import { useState } from "react";
import { TextInput, Alert, Vibration } from "react-native";
import { Button, Card } from "react-native-paper";
import { trpc } from "@/trpc/react";
import { Article } from "@/database/types";

export default function ArticleCard({ article }: { article: Article }) {
  const updateArticle = trpc.api.updateArticle.useMutation({
    onSuccess: () => {
      Alert.alert("Success!", "Article Updated");
      Vibration.vibrate();
    },
  });
  const [text, setText] = useState({
    title: article.title,
    description: article.description,
  });

  return (
    <Card className="mx-2 p-1">
      <Card.Title title={new Date(article.date).toLocaleDateString()} />
      <Card.Content>
        <TextInput
          onChangeText={(value) =>
            setText((prev) => ({ ...prev, title: value }))
          }
          className="text-white text-xl"
        >
          {text.title}
        </TextInput>

        <TextInput
          onChangeText={(value) =>
            setText((prev) => ({ ...prev, description: value }))
          }
          className="text-white text-sm mt-1"
        >
          {text.description}
        </TextInput>
      </Card.Content>

      <Card.Actions>
        <Button
          onPress={() => {
            updateArticle.mutate({
              id: article.id,
              title: text.title,
              description: text.description,
            });
          }}
          textColor="black"
          className="bg-[#22d3ee]"
        >
          Update
        </Button>
      </Card.Actions>
    </Card>
  );
}
