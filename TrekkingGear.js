import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import {  SafeAreaView } from 'react-native';



const TrekkingGear= () => {

    const handleButtonPress = () => {
      // Handle button press here
      console.log('Hurry Up');
    };
  
  // Define a custom component for the flashcards
  const Flashcard = ({ title, image, stockCount }) => (

    <View style={styles.flashcard}>
     <View style={styles.contentWrapper}>
     <View style={styles.blueSection}></View>
    
      <Image style={styles.flashcardImage} source={image} />
     
      <View style={styles.flashcardDetails}>
        <Text style={styles.flashcardTitle}>{title}</Text>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>{stockCount} left in stock</Text>
          </TouchableOpacity>
      </View>
      </View>
    </View>
  );

  // Data for the flashcards
  const flashcardData = [
    {
      id: '1',
      title: 'Trekking Shoes',
      image: require('./assets/trekking-shoes.png'),
      stockCount: 5,
    },
    {
      id: '2',
      title: 'Trekking Tent',
      image: require('./assets/trekking-jackets.png'),
      stockCount: 10,
    },
    {
      id: '3',
      title: 'Sleeping Bag',
      image: require('./assets/trek-accessories.png'),
      stockCount: 3,
    },
    {
      id: '4',
      title: 'Backpack',
      image: require('./assets/backpacks.png'),
      stockCount: 7,
    },
  ];


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./assets/sharepal_logo.png')} />
           
            <View style={styles.locationDropdown}>
              <Text style={styles.locationText}>Bangalore</Text>
              <Image style={styles.dropdownIcon} source={require('./assets/dropdown-logo.png')} />
              
            </View>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.searchContainer}>
              <View style={styles.searchBox}>
                <Image style={styles.selectIcon} source={require('./assets/9dots-logo.png')} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search for products"
                  placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.searchButton}>
                  <Image style={styles.searchIcon} source={require('./assets/search-logo.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartButton}>
              <Image style={styles.cartIcon} source={require('./assets/white-cart.png')} />
              <Text style={styles.cartText}>My Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.infoBox}>
      <View style={styles.info}>
      <Image style={styles.infologo} source={require('./assets/myquality.png')} />
      <Text>       </Text>
        <Text style={styles.infoText}>Excellent Quality Products</Text>
        
      </View>
      <View style={styles.infoDivider}></View>
      <View style={styles.info}>
      <Image style={styles.infologo} source={require('./assets/giftbox.png')} />
      <Text>       </Text>
        <Text style={styles.infoText}>Delivery Date & Return Date is FREE!!</Text>
    
      </View>
      <View style={styles.infoDivider}></View>
      <View style={styles.info}>
      <Image style={styles.infologo} source={require('./assets/delivery.png')} />
      <Text>       </Text>
        <Text style={styles.infoText}>Pay on Delivery</Text>
    
      </View>
    </View>


    <View style={styles.titleContainer} >
    <Text style={styles.mytitles}>Treeking Gear on Rent</Text>
    </View>
    {'\n'}
      {/* Flashcards */}
      <SafeAreaView style={styles.mycontainer}>
    
      
   

        <View style={styles.flashcardsContainer}>
          {/* First Row */}
          <View style={styles.flashcardsRow}>
            {flashcardData.slice(0, 3).map((item) => (
              <Flashcard
                key={item.id}
                title={item.title}
                image={item.image}
                stockCount={item.stockCount}
              />
            ))}
          </View>
          {/* Second Row */}
          <View style={styles.flashcardsRow}>
            {flashcardData.slice(3, 4).map((item) => (
              <Flashcard
                key={item.id}
                title={item.title}
                image={item.image}
                stockCount={item.stockCount}
              />
            ))}
          </View>
        </View>
    </SafeAreaView>

   

      <View style={styles.letcontainer}>
        <Text style={styles.mytitle}>Trekking gear on rent in Bangalore</Text>
        <Text style={styles.mydescription}>Are you excited to be going for a trek but shocked to know the expensive trekking gear you will need to buy? Well, fret not! Because at SharePal you can rent all the trekking equipment for a fraction of its purchase{'\n'} cost.{'\n\n'}
  
        You may be a beginner, or an amateur trekker, buying trekking gear like trekking shoes, backpacks, trekking jackets, trek accessories can cost you up to Rs 20,000. Not to mention the maintenance cost of washing {'\n'}and cleaning this gear after every trek. Compare it with renting, where you can rent all the trekking gear for less than Rs 3000 for a week’s trip. And the best part, cleaning & maintenance is on us.
{'\n\n'}
  
SharePal offers the best solution to your trekking needs. Be it a short trip or a long trip, our flexible rental plans are affordable and provide the best value for money. All the gear we rent is in excellent condition {'\n'}which is cleaned & disinfected after every use. We also offer doorstep delivery & pick-up.{'\n\n'}
So prepare for your trek and leave all your worries behind. We have got you covered!{'\n\n'}
  
<Text style={styles.mytitle}>Rent trekking gear in Bangalore</Text>{'\n\n'}

You can rent trekking gear at SharePal easily. We have all the trekking gear available on rent, from trekking shoes to trekking jackets to backpacks. All you need to do is add the products as per your need, choose{'\n'} your rental duration, and checkout. We provide doorstep delivery & pick-up service across bangalore.{'\n\n'}
<Text style = {styles.bluetext}>Trekking shoes on rent in bangalore: </Text>
 While trekking in the mountains, trekking shoes are your best friend. You can rent Decathlon Trek 100 trekking shoes in Bangalore for both men and women starting from{'\n'} Rs 119/Day.{'\n\n'}
 <Text style = {styles.bluetext}>Trekking Jackets on rent in bangalore:</Text>
 Next to the trekking shoes, another essential gear you need during trekking is a trekking jacket to keep you warm & dry all the time. You can rent a warm & waterproof{'\n'} trekking jacket in Bangalore starting at Rs 79/Day. Trekking jackets on rent are available for both men and women.{'\n\n'}
 <Text style = {styles.bluetext}>Backpacks on rent in bangalore: </Text>
 Another must-have essential is to carry a trekking backpack with good support. As per the duration of your trek, we have a range of sizes available. From 30L to 70L. Backpacks that we rent are unisex, but we recommend women to carry 50L as their main backpack{'\n'} and men to carry 60L. You can also take a 30L backpack for your submit day.{'\n\n'}

Trek accessories on rent in bangalore: Other than trekking shoes, backpack & jackets, there are some must-have trek accessories like trekking poles, warm & waterproof gloves, head torch, rain poncho that one {'\n'}should carry. You can rent these accessories starting from Rs 99/Trip.{'\n\n'}</Text>
  
      </View>
      <View style={styles.ourcontainer}>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>SharePal</Text>
          <Text style={styles.sectionText}>About us</Text>
          <Text style={styles.sectionText}>Why SharePal?</Text>
          <Text style={styles.sectionText}>Careers</Text>
          <Text style={styles.sectionText}>Blogs</Text>
          <Text style={styles.sectionText}>Sitemaps</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>Information</Text>
          <Text style={styles.sectionText}>How it works?</Text>
          <Text style={styles.sectionText}>FAQs</Text>
          <Text style={styles.sectionText}>Verification</Text>
          <Text style={styles.sectionText}>Refund Process</Text>
          <Text style={styles.sectionText}>Cancellation Policy</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>Policies</Text>
          <Text style={styles.sectionText}>Rental Terms & Condition</Text>
          <Text style={styles.sectionText}>Shipping policy</Text>
          <Text style={styles.sectionText}>Damage Policy</Text>
          <Text style={styles.sectionText}>Terms of Use</Text>
          <Text style={styles.sectionText}>Privacy Policy</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>Need Help?</Text>
         
          <Text style={styles.sectionText}>+91 76192 20543</Text>
          {'\n\n'}
          <Text style={styles.sectionText}>care@sharepal.in</Text>
          
        </View>
      </View>
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
    },
    letcontainer: {
      backgroundColor: '#f1f1f1',
      padding: 40,
      marginTop: 'auto',
    },
    infoBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D5EEFA',
      paddingVertical: 30,
      marginRight: 25,
      marginLeft: 25,
      borderRadius: 10,
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoText: {
      color: '#414141',
      fontWeight: 'bold',
      marginRight: 10,
      fontSize: 18,
    },
    infoDivider: {
      height: '100%',
      width: 1,
      backgroundColor: '#414141',
      marginHorizontal: 30,
    },
    infologo: {
      height: 70,
      width: 50,
    },
    
    ourcontainer: {
      backgroundColor: '#333333',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 50,
      paddingHorizontal: 30,
    },
    column: {
      flex: 1,
      marginHorizontal: 5,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 5,
    },
    sectionText: {
      fontSize: 14,
      color: '#FFFFFF',
    },
    mycontainer: {
      backgroundColor: '#f1f1f1',
      padding: 40,
      marginTop: 'auto',
    },
    mytitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      right: 50,
    },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    mytitles: {
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 20,
      textAlign: 'center',
    },
    mydescription: {
      fontSize: 15,
    },
    bluetext:{
      fontSize : 15,
      color: 'blue',
    },
    logoImage: {
      position: 'absolute',
      top: 40,
      left: 40,
      width: 70,
      height: 70,
    },
   
    // rectangularFlashcardDescription: {
    //   textAlign: 'center',
    //   marginBottom: 10,
    //   fontSize: 18,
    //   fontFamily: 'Comfortaa',
    //   color: '#666666',
    // },
    
    
    
    centerText: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
      textAlign:'center',
    },
    centerTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign:'center',
    },
  
    
     
    
    
    parentcontainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
      backgroundColor: '#F5F5F5',
    },
    
   
       
    
    
   
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 10,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    logo: {
      width: 150,
      height: 45,
    },
    locationDropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      padding: 5,
      marginHorizontal: 10,
      position: 'relative',
    },
    locationText: {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#333',
      marginRight: 5,
    },
    dropdownIcon: {
      width: 14,
      height: 14,
      marginLeft: 5,
    },
    dropdownContent: {
      position: 'absolute',
      top: 35,
      left: 0,
      backgroundColor: '#f5f5f5',
      width: '100%',
      borderRadius: 20,
      padding: 10,
      zIndex: 1,
      elevation: 2,
    },
    dropdownOption: {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#333',
      marginVertical: 10,
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', // center items horizontally
      flex: 1,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', // center items horizontally
      paddingHorizontal: 10,
      flex: 1,
    },
    searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      padding: 5,
      flex: 1,
    },
    selectIcon: {
      width: 15,
      height: 15,
      marginHorizontal: 10,
    },
    searchInput: {
      flex: 1,
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#333',
      padding: 5,
    },
    searchButton: {
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      padding: 5,
      marginLeft: 10,
    },
    searchIcon: {
      width: 30,
      height: 30,
    },
    loginButton: {
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginLeft: 10,
    },
    loginText: {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#333',
    },
    cartButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0000ff',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginLeft: 10,
    },
    cartIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    cartText: {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#fff',
    },
    background: {
      position: 'relative',
      paddingHorizontal: 20,
      paddingVertical: 30,
      backgroundColor: '#f5f5f5',
      overflow: 'hidden'
    },
    backgroundText: {
      fontFamily: 'Arial',
      fontSize: 35,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 70,
      marginBottom: 30,
      textAlign: 'center',
    },
    getStartedButton: {
      backgroundColor: '#0000ff',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 60,
      alignSelf: 'center',
    },
    getStartedButtonText: {
      fontFamily: 'Arial',
      fontSize: 30,
      color: '#fff',
    },
  
    image: {
      width: '100%',
      height: 300,
      marginTop: 20,
      resizeMode: 'cover',
    },
   
  
    trekkingGearContainer: {
      backgroundColor: '#D5EEFA',
      alignItems: 'center',
      paddingVertical: 8,
    },
    trekkingGearText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    flashcard: {
      width: '60%',
  margin: 8,
  flex: 1,
  borderRadius: 8,
  backgroundColor: '#fff',
  overflow: 'hidden',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 3,
  position: 'relative',
      
    },
   
    flashcardImage: {
      width: 170,
      height: 150,
      resizeMode: 'cover',
      marginLeft: 170,
      marginTop: 30,
    },
    flashcardDetails: {
      padding: 8,
    },
    flashcardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    flashcardStockCount: {
      color: '#888',
    },
   
    mycontainer: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    flashcardsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      paddingHorizontal: 16,
      marginTop: 16,
    },
    flashcardsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    // flashcardsContainer: {
    //   flex: 1,
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-between',
    //   marginTop: 16,
    // },
    blueSection: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '35%',
      backgroundColor: '#e8f011',
      borderRadius: 8,
    },
    contentWrapper: {
      position: 'relative',
      zIndex: 1,
    },
    button: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 20,
      padding: 5,
      height: 20,
      width : 110,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "black",
    },
  
  });
export default TrekkingGear;
