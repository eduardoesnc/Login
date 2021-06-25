import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {auth} from './firebase';


export default function App() {
  
  
  const [email,setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState ('');
  
  useEffect(()=>{
    auth.onAuthStateChanged(function(val){
      if(val != null){
        setUser(val.email);
      }
    })
  },[])
  
  const login = () => {
    auth.signInWithEmailAndPassword(email, senha)
      .then(function(val){
        setEmail(val.email);

    }).catch(function(error){
      alert(error.message);
    })
  }

  const logout = () => {
    auth.signOut()
    
    setUser('');
  }
  
  if(!user){
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        
          <Image style={{width: 200, height: 100, margin: 20}} source={require('./assets/icon.png')}/>
  
          <TextInput placeholder="Email" style={styles.textInput} onChangeText={text => setEmail(text)}/>
          <TextInput secureTextEntry={true} placeholder="Senha" style={styles.textInput} onChangeText={text => setSenha(text)}/>
        
          <TouchableOpacity style={styles.btnCadastro} onPress={()=>login()}>
            <Text style={{color: 'black', textAlign: 'center'}}>Logar</Text>
          </TouchableOpacity>
          
          
        
      </View>
    );
  } else{
    return(
    <View style={styles.container}>
      <Text>Logado com {user}</Text>
      <TouchableOpacity style={styles.btnCadastro} onPress={()=>logout()}>
            <Text style={{color: 'black', textAlign: 'center'}}>LogOut</Text>
      </TouchableOpacity>
    </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#dbdbdb',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 20,
    justifyContent: 'center',
  },
});
