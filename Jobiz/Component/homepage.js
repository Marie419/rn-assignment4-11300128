import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.hpcontainer}>
      <View style={styles.notch}>
        <Text style={styles.time}>9:41</Text>
          <Icon name="signal-cellular-3" size={16} style={styles.icon} /> 
          <Icon name="wifi" size={16} style={styles.icon} /> 
          <Icon name="battery" size={16} style={styles.icon} /> 
      </View>
        <View style={styles.EA}>
          <View style={styles.ericgmail}>
            <Text style={styles.firstTxt}>Mawkish</Text>
            <Text style={styles.email}>mawkish12@smb.com</Text>
          </View>
          <View style={styles.profileContainer}>
            <Image style={styles.profilePic} source={require('../assets/profile.jpeg')}/>
            <View style={styles.redot}/>
          </View>
        </View>

        <View style={styles.searchFilter}>
          <View style={styles.searchContainer}>
            <Image
              style={styles.searchIcon}
              source={require("../assets/searchicon.png")}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a job position "
              placeholderTextColor="#808080"
              onChangeText={(text) => {}}
            />
          </View>
          <TouchableOpacity style={styles.filterButton} onPress={() => {}}>
            <Image
              style={styles.filterIcon}
              source={require("../assets/filter.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.jobsAll}>
          <Text style={styles.featured}>Featured Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.see}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.facegoopleContainer}>
          <ImageBackground 
            source={require('../assets/fbbg.jpeg')} 
            style={styles.facebookContainer}
          >
            <View style={styles.td}>
              <View style={styles.top}>
                <Image style={styles.facebook} source={require("../assets/facebook.jpeg")}/>
                <View style={styles.face}>
                  <Text style={styles.se}>Software Engineer</Text>
                  <Text style={styles.smallFace}>Facebook</Text>
                </View>
              </View>
              <View style={styles.down}>
                <Text style={styles.dollar}>$180,000</Text>
                <Text style={styles.dollar}>Accra, Ghana</Text>
              </View>
            </View>
          </ImageBackground>

          <ImageBackground 
            source={require('../assets/googlebg.jpg')} 
            style={styles.facebookContainer}
          >
            <View style={styles.td}>
              <View style={styles.top}>
                <Image style={styles.facebook} source={require("../assets/google.jpeg")}/>
                <View style={styles.face}>
                  <Text style={styles.se}>Software Engineer</Text>
                  <Text style={styles.smallFace}>Facebook</Text>
                </View>
              </View>
              <View style={styles.down}>
                <Text style={styles.dollar}>$160,000</Text>
                <Text style={styles.dollar}>Accra, Ghana</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

      
      
      
      
      
      
      
      
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  notch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '700',
    fontSize: 16,
    marginRight: 290,
  },
  icon: {
    marginLeft: 5,
  },
  hpcontainer: {
    flex: 1,
    padding: 18,
  },
  EA: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 115,
  },
  ericgmail: {
    flexDirection: 'column',
    gap: 5,
  },
  firstTxt: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 24,
    color: '#95969D',
  },
  profileContainer: {
    position: 'relative',
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  redot: {
    position: 'absolute',
    top: 5,
    right: 6,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'red',
    borderWidth: 2.5,
    borderColor: 'white',
  },
  searchFilter: {
    flexDirection: "row",
    marginTop: 50,
    gap: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 12,
    height: 55,
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: "#000000",
  },
  filterButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  jobsAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  featured: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0D0D26',
  },
  see: {
    fontSize: 16,
    color: '#95969D',
  },
  facegoopleContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
  facebookContainer: {
    width: 300,
    height: 200,
    padding: 15,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  td: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 15,
    marginTop: 10,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  face: {
    marginLeft: 10,
    gap: 5,
  },
  se: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  smallFace: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  down: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  facebook: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  dollar: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600'
  },
});
