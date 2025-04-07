import { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Icon } from 'react-native-elements';

export default function ChatBotScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: "Hello! How can I assist you today?", sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage = { id: String(Date.now()), text: inputText, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { id: String(Date.now() + 1), text: "I'm here to help!", sender: 'bot' };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInputText('');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">ChatBot</ThemedText>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.message, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
         
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '75%',
  },
  userMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 20,
  },
});

