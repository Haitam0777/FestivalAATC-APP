import React from 'react'
import { StyleSheet, View,Image,TouchableOpacity, Text } from 'react-native'


class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  _getStart =() =>{
    this.props.navigation.navigate('Dash')
  }
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.Text}>FESTIVAL INTERNATIONAL {"\n"} DU TRES COURT {"\n"} METRAGE</Text>
        <Image source={require('../img/logo.png')} 
        style={{ width: 295, height: 295 , alignItems: "center",marginLeft: 'auto',
        marginRight: 'auto',marginVertical:'10%'}}/>
        <Text style={styles.Text2}>4EME EDITION</Text>
        <TouchableOpacity style={styles.button} onPress={() => this._getStart()}>
        <Text style={styles.Text3}>GET STARTED</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    width: '100%',
    height : '100%',
    backgroundColor: '#908787',
  },
  Text :{
    alignItems: "center",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop : '30%',
    fontWeight : "bold",
    fontSize : 25,
    color: 'white',
    textAlign: "center",

  },
  Text2 :{
    fontWeight : "bold",
    alignItems: "center",
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize : 25,
    color: '#603813',
    justifyContent : 'space-around',
    marginBottom : 50,
    marginTop : 20,
  },
  Text3 :{
      fontSize : 25,
      color: 'black',
      alignItems: 'center',
      paddingTop : 5,
  },
  button :{
    alignItems: "center",
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor : "#FBB216",
    width: 295,
    height: 51,
    borderRadius : 20,
    borderWidth : 2,
  }
})

export default Home