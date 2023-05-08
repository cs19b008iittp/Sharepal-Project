import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CameraScreen from './CameraScreen';
import RidingGear from './RidingGear';
import TrekkingGear from './TrekkingGear';
import WinterWear from './WinterWear';
const HomeScreen = () => {

  const navigation = useNavigation();

  const handleFlashCardClick = (categoryName) => {
    navigation.navigate(categoryName);
  }

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
      <View style={styles.content}>
        <View style={styles.background}>
          <View style={styles.yellowCircleLeft} />
          <View style={styles.yellowCircleRight} />
          <Image style={styles.trekImageLeft} source={require('./assets/treck.png')} />
          <Image style={styles.trekImageRight} source={require('./assets/treck2.png')} />
          <Text style={styles.backgroundText}>Your search for the best{'\n'} rental in Bangalore ends{'\n'} here!</Text>
          <TouchableOpacity style={styles.getStartedButton}>
            <Text style={styles.getStartedButtonText}>Get Started !!</Text>
          </TouchableOpacity>
        </View>
        {/* <Image style={styles.image} source={require('./assets/background-image.png')} /> */}
      </View>
      <View style = {styles.parentcontainer}>
      <View style={styles.whiteCard}>
  <View style={{flex: 1, justifyContent: 'center'}}>
    <Text style={styles.whiteCardText}>What would you like to rent?</Text>
  </View>
  <View style={styles.flashCardContainer}>
    <TouchableOpacity style={styles.flashCard}  onPress={() => handleFlashCardClick('CameraScreen')} >
    <Image style={styles.flashCardImage} source={require('./assets/action-camera.png')}  />
  
      <Text style={styles.flashCardText}>Camera</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.flashCard} onPress={() => handleFlashCardClick('RidingGear')}>
    <Image style={styles.flashCardImage} source={require('./assets/riding-gear.png')}  />
      <Text style={styles.flashCardText}>Riding Gear</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.flashCard}  onPress={() => handleFlashCardClick('TrekkingGear')}>
    <Image style={styles.flashCardImage} source={require('./assets/trekking-gear.png')} />
      <Text style={styles.flashCardText}>Trekking Gear</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.flashCard} onPress={() => handleFlashCardClick('WinterWear')}>
    <Image style={styles.flashCardImage} source={require('./assets/winter-wear.png')}/>
      <Text style={styles.flashCardText}>Winter Wear</Text>
    </TouchableOpacity>
  </View>
</View>
</View>
<View style={styles.centerText}>
    <Text style={styles.centerTitle}>Trekking Gear</Text>
  </View>
<View style={styles.squareFlashcardContainer}>
      <TouchableOpacity style={styles.squareFlashcard}>
        <Image style={styles.squareFlashcardImage} source={require('./assets/70Lbackpack.png')} />
        <View style={styles.squareFlashcardIcon}>
    <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
    <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
  </View>
        <Text style={styles.squareFlashcardTitle}>70L Backpack</Text>
        <Text style={styles.squareFlashcardDesc}>Carrying comfort,Easy acess;The...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.squareFlashcard}>
        <Image style={styles.squareFlashcardImage} source={require('./assets/HeadTorch.png')} />
        <View style={styles.squareFlashcardIcon}>
    <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
    <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
  </View>
        <Text style={styles.squareFlashcardTitle}>HeadTorch</Text>
        <Text style={styles.squareFlashcardDesc}> Wide beam; Adjustable head band</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.squareFlashcard}>
        <Image style={styles.squareFlashcardImage} source={require('./assets/50l-backpack.png')} />
        <View style={styles.squareFlashcardIcon}>
    <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
    <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
  </View>
        <Text style={styles.squareFlashcardTitle}>Backpack Raincover</Text>
        <Text style={styles.squareFlashcardDesc}>lightweight;Compact design;...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.squareFlashcard}>
        <Image style={styles.squareFlashcardImage} source={require('./assets/snow-shoes.png')} />
        <View style={styles.squareFlashcardIcon}>
    <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
    <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
  </View>
        <Text style={styles.squareFlashcardTitle}>SH520 Snow Shoes</Text>
        <Text style={styles.squareFlashcardDesc}>Snowproof; Full-Ankle;Cross-...</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.centerText}>
    <Text style={styles.centerTitle}>Cameras</Text>
  </View>
  <View style={styles.squareFlashcardContainer}>
    
      <TouchableOpacity style={styles.squareFlashcard}>
        <Image style={styles.squareFlashcardImage} source={require('./assets/insta-360-x3.png')} />
        <View style={styles.squareFlashcardIcon}>
    <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
    <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
  </View>
        <Text style={styles.squareFlashcardTitle}>Insta360 X3 Action Camera</Text>
        <Text style={styles.squareFlashcardDesc}> 360 Audio,Waterproof upto 10m,...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.squareFlashcard}>
        <Image style={styles.squareFlashcardImage} source={require('./assets/gopro-mounts.png')} />
        <View style={styles.squareFlashcardIcon}>
    <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
    <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
  </View>
        <Text style={styles.squareFlashcardTitle}>Handle Bar Mount</Text>
        <Text style={styles.squareFlashcardDesc}>Works with GoPro 5,6,7,8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.squareFlashcard}>
        <Image style={styles.squareFlashcardImage} source={require('./assets/Go-pro-hero-max.png')} />
        <View style={styles.squareFlashcardIcon}>
    <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
    <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
  </View>
        <Text style={styles.squareFlashcardTitle}>GoPro Hero MAX</Text>
        <Text style={styles.squareFlashcardDesc}>SuperPhoto w/HDR, HyperSmooth...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.squareFlashcard}>
        <Image style={styles.squareFlashcardImage} source={require('./assets/Battery-charger.png')} />
        <View style={styles.squareFlashcardIcon}>
    <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
    <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
  </View>
        <Text style={styles.squareFlashcardTitle}>Battery Charger for GoPro</Text>
        <Text style={styles.squareFlashcardDesc}>Charges 2 batteres together in 2hrs.</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.centerText}>
    <Text style={styles.centerTitle}>Riding Gear</Text>
  </View>
  <View style={styles.squareFlashcardContainer}>
    
    <TouchableOpacity style={styles.squareFlashcard}>
      <Image style={styles.squareFlashcardImage} source={require('./assets/saddle-bag.png')} />
      <View style={styles.squareFlashcardIcon}>
  <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
  <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
</View>
      <Text style={styles.squareFlashcardTitle}>Saddle Bag (Sports)</Text>
      <Text style={styles.squareFlashcardDesc}>Designed for bikes with upswept...</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.squareFlashcard}>
      <Image style={styles.squareFlashcardImage} source={require('./assets/riding-backpack.png')} />
      <View style={styles.squareFlashcardIcon}>
  <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
  <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
</View>
      <Text style={styles.squareFlashcardTitle}>Riding Backpack</Text>
      <Text style={styles.squareFlashcardDesc}>Capacity 30L: Ideal for solo riding</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.squareFlashcard}>
      <Image style={styles.squareFlashcardImage} source={require('./assets/knee-guards.png')} />
      <View style={styles.squareFlashcardIcon}>
  <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
  <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
</View>
      <Text style={styles.squareFlashcardTitle}>Knee Guards</Text>
      <Text style={styles.squareFlashcardDesc}>Ergonomically designed: Knee & sh...</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.squareFlashcard}>
      <Image style={styles.squareFlashcardImage} source={require('./assets/tank-bag.png')} />
      <View style={styles.squareFlashcardIcon}>
  <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
  <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
</View>
      <Text style={styles.squareFlashcardTitle}>Tank Bag(Sports)</Text>
      <Text style={styles.squareFlashcardDesc}>Capacity up to 30L; Ideal for sports...</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.centerText}>
    <Text style={styles.centerTitle}>Winter Wear</Text>
  </View>
  <View style={styles.squareFlashcardContainer}>
    
    <TouchableOpacity style={styles.squareFlashcard}>
      <Image style={styles.squareFlashcardImage} source={require('./assets/fleece-jacket.png')} />
      <View style={styles.squareFlashcardIcon}>
  <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
  <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
</View>
      <Text style={styles.squareFlashcardTitle}>Fleece Jacket</Text>
      <Text style={styles.squareFlashcardDesc}>Warm(5 C); Lightweight; Compact...</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.squareFlashcard}>
      <Image style={styles.squareFlashcardImage} source={require('./assets/trekking-gloves.png')} />
      <View style={styles.squareFlashcardIcon}>
  <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
  <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
</View>
      <Text style={styles.squareFlashcardTitle}>Snow Gloves</Text>
      <Text style={styles.squareFlashcardDesc}>Warm(-10 C): Water-repellent... </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.squareFlashcard}>
      <Image style={styles.squareFlashcardImage} source={require('./assets/trek-100-trekking-shoes.png')} />
      <View style={styles.squareFlashcardIcon}>
  <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
  <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
</View>
      <Text style={styles.squareFlashcardTitle}>Men's Waterproof shoes</Text>
      <Text style={styles.squareFlashcardDesc}>Fully Waterproof: High Ankle; Firm...</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.squareFlashcard}>
      <Image style={styles.squareFlashcardImage} source={require('./assets/womens-trekking-pants.png')} />
      <View style={styles.squareFlashcardIcon}>
  <Image style={styles.likeIcon} source={require('./assets/like-icon.png')} />
  <Image style={styles.shareIcon} source={require('./assets/share-icon.png')} />
</View>
      <Text style={styles.squareFlashcardTitle}>Women Snow Hiking Pant -...</Text>
      <Text style={styles.squareFlashcardDesc}> Fleece-lining, Quick-dry;...</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.whySharePal}>
    <Text style={styles.whySharePalTitle}>Why SharePal?</Text>
    <View style={styles.flashcardContainer}>
      <View style={styles.rectangularFlashcard}>
        <Image style={styles.rectangularFlashcardImage} source={require('./assets/quality.png')} />
        <Text style={styles.rectangularFlashcardText}>Quality Products</Text>
        <Text style={styles.rectangularFlashcardDescription}>Every product you rent is fully functional & in excellent condition.</Text>
   
      </View>
      <View style={styles.rectangularFlashcard}>
        <Image style={styles.rectangularFlashcardImage} source={require('./assets/simple-pricing.png')} />
        <Text style={styles.rectangularFlashcardText}>Simple Pricing</Text>
        <Text style={styles.rectangularFlashcardDescription}>Daily, weekly & monthly rental plans. Rent longer, Pay lesser</Text>
      </View>
      <View style={styles.rectangularFlashcard}>
        <Image style={styles.rectangularFlashcardImage} source={require('./assets/quick-hastlefree.png')} />
        <Text style={styles.rectangularFlashcardText}>Quick & Hassle-free</Text>
        <Text style={styles.rectangularFlashcardDescription}>Simply order online & relax. Enjoy doorstep delivery & pick-up.</Text>
      </View>
      <View style={styles.rectangularFlashcard}>
        <Image style={styles.rectangularFlashcardImage} source={require('./assets/pay-on-delivery.png')} />
        <Text style={styles.rectangularFlashcardText}>Pay on Delivery</Text>
        <Text style={styles.rectangularFlashcardDescription}>Just pay 10% advance & reserve. Pay the balance upon delivery.</Text>
      </View>
      <View style={styles.rectangularFlashcard}>
        <Image style={styles.rectangularFlashcardImage} source={require('./assets/customer-friendly.png')} />
        <Text style={styles.rectangularFlashcardText}>Customer Friendly</Text>
        <Text style={styles.rectangularFlashcardDescription}>Friendly & customer-centric team to help every step of the way.</Text>
      </View>
      <View style={styles.rectangularFlashcard}>
        <Image style={styles.rectangularFlashcardImage} source={require('./assets/safe-sanitized.png')} />
        <Text style={styles.rectangularFlashcardText}>Safe & Sanitised</Text>
        <Text style={styles.rectangularFlashcardDescription}>Enjoy a safe & pleasant renting experience, always.</Text>
      </View>
    </View>
  </View>
  <View style={styles.customerText}>
    <Text style={styles.customerTitle}>More than 50k Happy Customers!</Text>
  </View>
  <View style={styles.squareFlashcardContainer}>
      <TouchableOpacity style={styles.happyFlashcard}>
      <Image style={styles.logoImage} source={require('./assets/profile1.png')} />
        
      <Text style={styles.happyTitle}>Afrana , Bangalore</Text>
      <Text style={styles.happyTitle2}>Gaming Console</Text>
        <Text style={styles.happyFlashcardTitle}>Great renting experience</Text>
        <Image style={styles.fiveStarImage} source={require('./assets/fivestar.png')} />
        <Text style={styles.happyFlashcardDesc}>Have used their services twice now. They never {'\n'}disappoint. Quick responses, polite, transparent,{'\n'} hassle free, great products as well. Rented{'\n'} trekking gear and PS4. Thanks Sharepal! Cheers {'\n'}to you guys!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.happyFlashcard}>
      <Image style={styles.logoImage} source={require('./assets/profile2.png')} />
      <Text style={styles.happyTitle}>Kanthikiran , Bangalore</Text>
      <Text style={styles.happyTitle2}>Riding Gear</Text>
        <Text style={styles.happyFlashcardTitle}>Quality products</Text>
        <Image style={styles.fiveStarImage} source={require('./assets/fivestar.png')} />
        <Text style={styles.happyFlashcardDesc}>It’s an amazing service, starting from the quality of{'\n'} the gear provided to the pickup and drop at {'\n'}doorstep facility. The staff is extremely helpful and {'\n'}supportive. The jacket was freshly washed and {'\n'}the shoes provided were brand new. The refund{'\n'} for the deposit was also processed immediately.{'\n'} We had no clue that this kind of service existed in{'\n'} India, SharePal.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.happyFlashcard}>
      <Image style={styles.logoImage} source={require('./assets/profile3.png')} />
      <Text style={styles.happyTitle}>Afrana , Bangalore</Text>
      <Text style={styles.happyTitle2}>Gaming Console</Text>
        <Text style={styles.happyFlashcardTitle}>Gaming Console</Text>
        <Image style={styles.fiveStarImage} source={require('./assets/fivestar.png')} />
        <Text style={styles.happyFlashcardDesc}>I am a regular customer and order ps4 It’s very{'\n'} affordable and booking an order is super easy and {'\n'}user friendly website and polite staff.</Text>
      </TouchableOpacity>
      
    </View>
    <View style={styles.mycontainer}>
      <Text style={styles.mytitle}>Welcome to Sharepal Bangalore</Text>
      <Text style={styles.mydescription}>Bengaluru, the silicon valley of India is also a start-up hub. SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.{'\n\n'}

Sharepal is a leading rental platform with a pan India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Bangalore.{'\n\n'}

Sharepal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety{'\n'} measures.{'\n\n'}

Our services cover all of Bangalore, some of which are Koramangala, Indiranagar, Marathahalli, Whitefield, Rajajinagar, HSR Layout, BTM Layout, Electronic City, Jayanagar, Aecs Layout, Kundalahalli, K R Puram,{'\n'} Richmond Town, Mahadevapura, Hebbagodi, Ayyappa Nagar, J P Nagar, and even faraway places like Yeshwantpur and Yelahanka.{'\n'}
We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Bangalore.Sharepal makes it easier for you to rent from us. All you need to do is choose {'\n'}the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.{'\n\n'}

Our services cover all of Bangalore, some of which are Koramangala, Indiranagar, Marathahalli, Whitefield, Rajajinagar, HSR Layout, BTM Layout, Electronic City, Jayanagar, Aecs Layout, Kundalahalli, K R Puram,{'\n'} Richmond Town, Mahadevapura, Hebbagodi, Ayyappa Nagar, J P Nagar, and even faraway places like Yeshwantpur and Yelahanka.</Text>

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
  mydescription: {
    fontSize: 15,
  },
  logoImage: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 70,
    height: 70,
  },
  happyTitle: {
    fontSize: 20,
    fontFamily: 'Roboto Serif',
    
  },
  happyTitle2: {
    fontSize: 18 ,
    fontFamily: 'Roboto Serif',
    
  },
  fiveStarImage: {
    width: 200,
    height: 60,
    left: 10,
    marginBottom: 5,
  },
  
  whySharePal: {
    marginTop: 40,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  whySharePalTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // rectangularFlashcardDescription: {
  //   textAlign: 'center',
  //   marginBottom: 10,
  //   fontSize: 18,
  //   fontFamily: 'Comfortaa',
  //   color: '#666666',
  // },
  flashcardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginLeft: 65,
  },
  rectangularFlashcard: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    justifyContent: 'center',
    height: 150,
    width: '48%',
    marginVertical: 3,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 7,
    // flexDirection: 'row',
    
  },
  rectangularFlashcardImage: {
    height: 80,
    width: 80,
    marginRight: 20,
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: [{translateY: -40}],
  },
  rectangularFlashcardText: {
    marginTop: 40,
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  rectangularFlashcardDescription: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 18,
    fontFamily: 'Comfortaa',
    color: '#666666',
  },
  
  
  squareFlashcardIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'column',
  },
  likeIcon: {
    marginRight: 10,
    width: 20, // add width
    height: 20, // add height
  },
  shareIcon: {
    width: 20, // add width
    height: 20, // add height
  },
  
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
  customerText: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlign:'center',
  },
  customerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center',
  },
  squareFlashcardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  squareFlashcard: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 7,
  },
  squareFlashcardImage: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },
  squareFlashcardTitle: {
    
    fontSize: 18,
    marginBottom: 5,
  },
  squareFlashcardDesc: {
    textAlign: 'center',
  },
  happyFlashcardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  happyFlashcard: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 60,
    paddingVertical: 60,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 7,
    elevation: 7,
  },
  happyFlashcardImage: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },
  happyFlashcardTitle: {
    
  fontSize: 20,
  marginBottom: 20,
  fontWeight: 'bold',
  },
  happyFlashcardDesc: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Comfortaa',
  },
  flashCardImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  flashCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  parentcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
   
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  whiteCardText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  flashCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  flashCard: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 7,
  },
  
  
  trekImageLeft: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: -200,
  },
  trekImageRight: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: -200,
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
  yellowCircleLeft: {
    position: 'absolute',
    bottom: -150,
    left: -100,
    width: 500,
    height: 400,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    backgroundColor: '#e8f011',
   
  },
  yellowCircleRight: {
    position: 'absolute',
    bottom: -150,
    right: -100,
    width: 500,
    height: 400,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    backgroundColor: '#e8f011',
    overflow: 'hidden',
  },




});
export default HomeScreen;