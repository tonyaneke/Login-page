/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [submit, setSubmit] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 150,
        left: 70,
      }}
      style={{
        backgroundColor: 'white',
        flex: 1,
        height: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          Submit your information
        </Text>
        <TextInput
          style={{borderWidth: 1, margin: 10, borderRadius: 10}}
          value={name}
          onChangeText={value => {
            setName(value);
          }}
          placeholder={'Please enter your name'}
        />
        <TextInput
          style={{borderWidth: 1, margin: 10, borderRadius: 10}}
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
          placeholder={'Please enter your email address'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={{borderWidth: 1, margin: 10, borderRadius: 10}}
          value={password}
          onChangeText={value => {
            setPassword(value);
          }}
          secureTextEntry={true}
          placeholder={'Please enter your password'}
        />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={visibility}
            onValueChange={value => {
              setVisibility(value);
            }}
          />
          <Text>Show information</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            margin: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            setSubmit(true);
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
        {visibility && submit && (
          <View>
            <Text style={{fontSize: 20, fontWeight: '500'}}>
              Users infomation
            </Text>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
