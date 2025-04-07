import { View, Text, Button, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [pin, setPin] = useState<string>('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {/* Logo */}
      <Image 
        source={require('@/assets/images/logo.png')} 
        style={{ width: 300, height: 100, marginBottom: 20 }} 
      />
      
      {/* Tagline */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 100, marginBottom: 10, alignSelf: 'flex-start' }}>
        Final step to
      </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 100, marginBottom: 10, alignSelf: 'flex-start'  }}>
        Financial
      </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 100, marginBottom: 10, alignSelf: 'flex-start'  }}>
        Freedom
      </Text>


      {/* PIN Input */}
      <TextInput
        placeholder="Enter PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        keyboardType="numeric"
        style={{
          width: 200,
          padding: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          textAlign: 'center',
          marginBottom: 20
        }}
      />

      {/* Login Button */}
      <Button title="Login" onPress={() => router.push('/(tabs)/home')} />
    </View>
  );
}
