import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/Lists/ListItemSeparator";
import ListItemDeleteAction from "../components/Lists/ListItemDeleteAction";
import ListItem from "../components/Lists/ListItem";

const initialMessages = [
  {
    id: 1,
    titile: "T1",
    descritpion: "D1",
    image: require("../assets/1.jpeg"),
  },
  {
    id: 2,
    titile: "T2",
    descritpion: "D2",
    image: require("../assets/1.jpeg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.titile}
            subtitle={item.descritpion}
            image={item.image}
            onPress={() => console.log("Message Clicked", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              titile: "T2",
              descritpion: "D2",
              image: require("../assets/1.jpeg"),
            },
          ]);
        }}
      />
      <View>
        <ListItemSeparator />
      </View>
    </Screen>
  );
}

export default MessagesScreen;
