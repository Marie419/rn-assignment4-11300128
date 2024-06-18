import React,{useState} from "react";
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


    export default function LoginPage({navigation}) {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
    
      const validUsername = 'Mawkish';
      const validEmail = 'mawkish12@smb.com';
    
      const handleLogin = () => {
        if (username === validUsername && email === validEmail) {
          navigation.navigate('Home');
        } else {
          alert('Incorrect Username or Email');
        }
      }
    
      return (
         <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
              
              <View style={styles.notch}>
                <Text style={styles.time}>9:41</Text>
                <Icon name="signal-cellular-3" size={16} style={styles.icon} /> 
                <Icon name="wifi" size={16} style={styles.icon} /> 
                <Icon name="battery" size={16} style={styles.icon} /> 
              </View>
    
              <View style={styles.profile}>
                <View style={styles.text}>
                  <Text style={styles.txt}>Jobizz</Text>
                  <Text style={styles.welcome}>Welcome Back 👋</Text>
                  <Text style={styles.apply}>Let’s log in. Apply to jobs!</Text>
                </View>
                <View style={styles.field}>
                  <View style={styles.name}>
                    <TextInput 
                      placeholder='Name'
                      style={styles.nameText}
                      onChangeText={(text) => setUsername(text)}
                    />
                  </View>
                  <View style={styles.name}>
                    <TextInput 
                      placeholder='Email'
                      style={styles.nameText}
                      onChangeText={(text) => setEmail(text)}
                    />
                  </View>
                  <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.separatorContainer}>
                  <View style={styles.line} />
                  <Text style={styles.continueText}>Or continue with</Text>
                  <View style={styles.line} />
                </View>
    
                <View style={styles.logoContainer}>
                  <TouchableOpacity>
                    <Image style={styles.logo} source={require('../assets/apple.jpeg')} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                   <Image style={styles.logo} source={require('../assets/google.jpeg')}/> 
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={styles.logo} source={require('../assets/facebook.jpeg')}/>
                  </TouchableOpacity>
                </View>
    
               
                  <View style={styles.register}>
                  <Text style={styles.registerTxt}>Don't have an account?  
                  <TouchableOpacity><Text style={styles.registerTxts}> Register</Text></TouchableOpacity>
                  </Text>
                </View>
    
              </View>
    
              <StatusBar style="auto" />
            </View>
          </SafeAreaView>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
      },
      container: {
        flex: 1,
        padding: 30,
      },
      notch: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      time: {
        fontWeight: '700',
        fontSize: 16,
        marginRight: 270,
      },
      icon: {
        marginLeft: 5, 
      },
      profile: {
        flex: 1,
        top: 75,
        flexDirection: 'column',
      },
      text: {
        gap: 15,
      },
      txt: {
        color: '#356899',
        fontSize: 28,
        fontWeight: 'bold',
      },
      welcome: {
        fontSize: 34,
        fontWeight: '600',
      },
      apply: {
        fontSize: 20,
        color: '#AFB0B6',
      },
      field: {
        marginTop: 40,
        gap: 20,
      },
      name: {
        borderWidth: 1,
        borderColor: '#AFB0B6',
        borderRadius: 15,
        padding: 5,
        height: 60,
        justifyContent: 'center',
      },
      nameText: {
        fontSize: 18,
        marginLeft: 15,
      },
      loginButton: {
        marginTop: 20,
        backgroundColor: '#356899',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: '#AFB0B6',
      },
      continueText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#AFB0B6',
      },
      logoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
      },
      logo: {
        width: 50,
        height: 40,
        borderRadius: 20,
      },
      register: {
        marginTop: 50,
      },
      registerTxt: {
        textAlign: 'center',
        color: '#BDBEC2',
        fontSize: 16,
      },
      registerTxts: {
        color: '#356899',
      },
    });
    
