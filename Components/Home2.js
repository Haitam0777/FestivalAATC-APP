import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity, FlatList } from 'react-native'
import Carousel from '../Components/Carousel'
import { dummyData } from '../data/data'
import data from "../data/filmdata"
import FilmItem from './FilmItem'

class Home2 extends React.Component {
    constructor() {
        super();
        this.state={
            n : 0 ,
        }
    }

    change(a){
        this.setState({n : a})
        this.render()
    }
  render() {
    return (
    this.state.n == 0 ?
      <View style={styles.main_container}>
        <View style={styles.main_container1}>
            <TouchableOpacity style={styles.but1press} onPress={() =>this.change(0)}>
                <Text>Journal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but2} onPress={() =>this.change(1)}>
                <Text>Films</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but3} onPress={() =>this.change(2)}>
                <Text>Juré</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.main_container2}>
            <Carousel data = {dummyData}/>  
        </View>
        <View style={styles.main_container3}>
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
        />
        </View>        
      </View>
    :this.state.n == 1 ?
    <View style={styles.main_container}>
        <View style={styles.main_container1}>
            <TouchableOpacity style={styles.but1} onPress={() =>this.change(0)}>
                <Text>Journal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but2press} onPress={() =>this.change(1)}>
                <Text>Films</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but3} onPress={() =>this.change(2)}>
                <Text>Juré</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.main_container2}>
            <Text>film</Text>
        </View>
    </View>
    :this.state.n == 2 ?
    <View style={styles.main_container}>
        <View style={styles.main_container1}>
            <TouchableOpacity style={styles.but1} onPress={() =>this.change(0)}>
                <Text>Journal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but2} onPress={() =>this.change(1)}>
                <Text>Films</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but3press} onPress={() =>this.change(2)}>
                <Text>Juré</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.main_container2}>
            <Text>juree</Text>
        </View>
    </View>
    :null
    )
  }
}

const styles = StyleSheet.create({
main_container: {
    flex: 1 ,

},
main_container1: {
    flex: 0.5,
    flexDirection:'row',
    justifyContent: 'center'
},
 main_container2: {
      flex: 3
},
main_container3: {
    flex: 3
},
but1 :{
    alignItems: "center",
    width: 100,
    height: 51,
    borderRadius : 20,
    borderWidth : 2,
    margin :5,
},
but1press :{
    alignItems: "center",
    backgroundColor : "#FBB216",
    width: 100,
    height: 51,
    borderRadius : 20,
    borderWidth : 2,
    margin :5,
},  
but2 :{
    alignItems: "center",
    width: 100,
    height: 51,
    borderRadius : 20,
    borderWidth : 2,
    margin :5,
},
but2press :{
    alignItems: "center",
    backgroundColor : "#FBB216",
    width: 100,
    height: 51,
    borderRadius : 20,
    borderWidth : 2,
    margin :5,
},
but3 :{
    alignItems: "center",
    width: 100,
    height: 51,
    borderRadius : 20,
    borderWidth : 2,
    margin :5,
},
but3press :{
    alignItems: "center",
    backgroundColor : "#FBB216",
    width: 100,
    height: 51,
    borderRadius : 20,
    borderWidth : 2,
    margin :5,
},
})

export default Home2