import React from "react";
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function HomePage() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.hpcontainer}>
          
          
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
            <ScrollView horizontal style={styles.categoryScrollBox} showsHorizontalScrollIndicator={false}>
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
                source={require('../assets/googlebg.jpg')} style={styles.facebookContainer}>
                <View style={styles.td}>
                  <View style={styles.top}>
                    <Image style={styles.facebook} source={require("../assets/google.jpeg")}/>
                    <View style={styles.face}>
                      <Text style={styles.se}>Software Engineer</Text>
                      <Text style={styles.smallFace}>Google</Text>
                    </View>
                  </View>
                  <View style={styles.down}>
                    <Text style={styles.dollar}>$160,000</Text>
                    <Text style={styles.dollar}>Accra, Ghana</Text>
                  </View>
                </View>
              </ImageBackground>

              <ImageBackground 
                source={require('../assets/applebg.jpg')} style={styles.facebookContainer}>
                <View style={styles.td}>
                  <View style={styles.top}>
                    <Image style={styles.facebook} source={require("../assets/apple.jpeg")}/>
                    <View style={styles.face}>
                      <Text style={styles.se}>Software Engineer</Text>
                      <Text style={styles.smallFace}>Apple</Text>
                    </View>
                  </View>
                  <View style={styles.down}>
                    <Text style={styles.dollar}>$140,000</Text>
                    <Text style={styles.dollar}>Dallas, Texas</Text>
                  </View>
                </View>
              </ImageBackground>
            
              <ImageBackground 
                source={require('../assets/amazonbg.jpg')} style={styles.facebookContainer}>
                <View style={styles.td}>
                  <View style={styles.top}>
                    <Image style={styles.facebook} source={require("../assets/amazon.png")}/>
                    <View style={styles.face}>
                      <Text style={styles.se}>Software Engineer</Text>
                      <Text style={styles.smallFace}>Amazon</Text>
                    </View>
                  </View>
                  <View style={styles.down}>
                    <Text style={styles.dollar}>$180,000</Text>
                    <Text style={styles.dollar}>Accra, Ghana</Text>
                  </View>
                </View>
              </ImageBackground>            
            
              <ImageBackground 
                source={require('../assets/microsoftbg.jpg')} style={styles.facebookContainer}>
                <View style={styles.td}>
                  <View style={styles.top}>
                    <Image style={styles.facebook} source={require("../assets/microsoft.jpg")}/>
                    <View style={styles.face}>
                      <Text style={styles.se}>Software Engineer</Text>
                      <Text style={styles.smallFace}>Microsoft</Text>
                    </View>
                  </View>
                  <View style={styles.down}>
                    <Text style={styles.dollar}>$160,000</Text>
                    <Text style={styles.dollar}>Accra, Ghana</Text>
                  </View>
                </View>
              </ImageBackground>

              <ImageBackground 
                source={require('../assets/netflixbg.jpeg')} style={styles.facebookContainer}>
                <View style={styles.td}>
                  <View style={styles.top}>
                    <Image style={styles.facebook} source={require("../assets/netflix.png")}/>
                    <View style={styles.face}>
                      <Text style={styles.se}>Software Engineer</Text>
                      <Text style={styles.smallFace}>Netflix</Text>
                    </View>
                  </View>
                  <View style={styles.down}>
                    <Text style={styles.dollar}>$150,000</Text>
                    <Text style={styles.dollar}>Accra, Ghana</Text>
                  </View>
                </View>
              </ImageBackground>

              <ImageBackground 
                source={require('../assets/twitterbg.jpeg')} style={styles.facebookContainer}>
                <View style={styles.td}>
                  <View style={styles.top}>
                    <Image style={styles.facebook} source={require("../assets/amalitech.png")}/>
                    <View style={styles.face}>
                      <Text style={styles.se}>UI/UX Developer</Text>
                      <Text style={styles.smallFace}>Twitter</Text>
                    </View>
                  </View>
                  <View style={styles.down}>
                    <Text style={styles.dollar}>$130,000</Text>
                    <Text style={styles.dollar}>Accra, Ghana</Text>
                  </View>
                </View>
              </ImageBackground>

              <ImageBackground 
                source={require('../assets/teslabg.jpg')} style={styles.facebookContainer}>
                <View style={styles.td}>
                  <View style={styles.top}>
                    <Image style={styles.facebook} source={require("../assets/tesla.jpg")}/>
                    <View style={styles.face}>
                      <Text style={styles.se}>Software Engineer</Text>
                      <Text style={styles.smallFace}>Teslae</Text>
                    </View>
                  </View>
                  <View style={styles.down}>
                    <Text style={styles.dollar}>$200,000</Text>
                    <Text style={styles.dollar}>Accra, Ghana</Text>
                  </View>
                </View>
              </ImageBackground>
            </ScrollView>
          </View>
          <View style={styles.jobsAll}>
            <Text style={styles.featured}>Popular Jobs</Text>
            <TouchableOpacity>
              <Text style={styles.see}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.verticallistContainer}>
            
            <View style={styles.popularjobs}>
              <Image style={styles.BBF} source={require("../assets/burgerking.png")}/>
              <View style={styles.executvieContainer}><Text style={styles.jr}>Jr Executive</Text><Text style={styles.burgerAngels}>Burger King</Text></View>
              <View style={styles.stateContainer}><Text style={styles.Byear}>$96,000/y</Text><Text style={styles.burgerAngels}>Los Angels, US</Text></View>
            </View>

            <View style={styles.popularjobs}>
              <Image style={styles.BBF} source={require("../assets/beats.png")}/>
              <View style={styles.executvieContainer}><Text style={styles.jr}>Product Manager</Text><Text style={styles.burgerAngels}>Beats</Text></View>
              <View style={styles.stateContainer}><Text style={styles.year}>$84,000/y</Text><Text style={styles.burgerAngels}>Florida, US</Text></View>
            </View>

            <View style={styles.popularjobs}>
              <Image style={styles.BBF} source={require("../assets/facebook.jpeg")}/>
              <View style={styles.executvieContainer}><Text style={styles.jr}>Product Manager</Text><Text style={styles.burgerAngels}>Facebook</Text></View>
              <View style={styles.stateContainer}><Text style={styles.year}>$86,000/y</Text><Text style={styles.burgerAngels}>Florida, US</Text></View>
            </View>

            <View style={styles.popularjobs}>
              <Image style={styles.BBF} source={require("../assets/linkedin.png")}/>
              <View style={styles.executvieContainer}><Text style={styles.jr}>Jr Executive</Text><Text style={styles.burgerAngels}>Linkedin</Text></View>
              <View style={styles.stateContainer}><Text style={styles.Byear}>$80,000/y</Text><Text style={styles.burgerAngels}>Berlin, Germany</Text></View>
            </View>

            <View style={styles.popularjobs}>
              <Image style={styles.BBF} source={require("../assets/adobe.png")}/>
              <View style={styles.executvieContainer}><Text style={styles.jr}>Product Manager</Text><Text style={styles.burgerAngels}>Adobe</Text></View>
              <View style={styles.stateContainer}><Text style={styles.year}>$96,000/y</Text><Text style={styles.burgerAngels}>Florida, US</Text></View>
            </View>

            <View style={styles.popularjobs}>
              <Image style={styles.BBF} source={require("../assets/uber.png")}/>
              <View style={styles.executvieContainer}><Text style={styles.jr}>UI/UX Designer</Text><Text style={styles.burgerAngels}>Uber</Text></View>
              <View style={styles.stateContainer}><Text style={styles.Byear}>$96,000/y</Text><Text style={styles.burgerAngels}>Los Angels, US</Text></View>
            </View>

            <View style={styles.popularjobs}>
              <Image style={styles.BBF} source={require("../assets/paypal.png")}/>
              <View style={styles.executvieContainer}><Text style={styles.jr}>Business Analyst</Text><Text style={styles.burgerAngels}>Burger King</Text></View>
              <View style={styles.stateContainer}><Text style={styles.Byear}>$96,000/y</Text><Text style={styles.burgerAngels}>Los Angels, US</Text></View>
            </View>

            <View style={styles.popularjobs}>
              <Image style={styles.BBF} source={require("../assets/pinterest.png")}/>
              <View style={styles.executvieContainer}><Text style={styles.jr}>Resource Person</Text><Text style={styles.burgerAngels}>Burger King</Text></View>
              <View style={styles.stateContainer}><Text style={styles.Byear}>$50,000/y</Text><Text style={styles.burgerAngels}>Carlifonia, US</Text></View>
            </View>

          </View>
        
        
        
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hpcontainer: {
    flex: 1,
    padding: 30,
  },
  EA: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 100,
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
    marginTop: 50,
    gap: 200
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
    marginHorizontal: -10, 
  },
  facebookContainer: {
    width: 300,
    height: 200,
    padding: 15,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    marginHorizontal: 10, 
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
    color: '#fff',
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
  verticallistContainer: {
    flexDirection: 'column',
    marginTop: 30,
    gap: 15,
  },
  popularjobs: {
    flexDirection: 'row',
    borderRadius: 20,
    gap: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  BBF: {
    height: 50,
    width: 50,
    marginTop: 5,
    borderRadius: 40,
  },
  executvieContainer: {
    gap: 15,
    marginTop: 10,
  },
  stateContainer: {
    marginLeft: 70,
    marginTop: 10,
    gap: 15
  },
  jr: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  burgerAngels: {
    fontSize: 14,
    color: '#95969D'
  },
  Byear: { 
    marginLeft: 25,

  },
  
});
