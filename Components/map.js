import React, { Component } from 'react';
import {View, Image,StyleSheet,Text,TouchableOpacity,Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const api = "AIzaSyDcbU8THb2E8VE3BLSJb_pF6fFHWxmz4lY" 

class Map2 extends Component {
    constructor() {
        super();
        const LATITUD_DELTA = 0.0922
        const window = Dimensions.get('window');
        const { width, height }  = window
        const LONGITUDE_DELTA = LATITUD_DELTA + (width / height)
        this.state = {
          show: 0,
          latDelta : LATITUD_DELTA,
          logDelta : LONGITUDE_DELTA,
          region:{
            latitude: 	31.63416,
            longitude: -7.99994,
            latDelta : LATITUD_DELTA,
            logDelta : LONGITUDE_DELTA
          }
        }
    }
    _locate =(n) =>{
        if(n==0){
            this.setState({
                show: 1,
            });
        }else{
            this.setState({show: 2});
        }
      }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.main1}>
                    <TouchableOpacity style={styles.con1} onPress={() =>this._locate(0)}>
                        <View style={styles.Subcon1}>
                        <Image
                        style={styles.tinyLogo}                 
                         source={require('../assets/inst.png')}
                         resizeMode='contain'
                        />
                        </View>
                        <View style={styles.Subcon2}>
                            <View style={styles.c1}>
                                <Text style={styles.title}>Institut Français de Marrakech</Text>
                            </View>
                            <View style={styles.c2}>
                            <Text style={styles.description}>
                                L’Institut français du Maroc 
                                accompagne la production de projets innovants dans les domaines artistique, numérique ou universitaire.
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.con2} onPress={() =>this._locate(1)}>
                    <View style={styles.Subcon1}>
                    <Image
                        style={styles.tinyLogo}                 
                         source={require('../assets/ta9a.jpg')}
                         resizeMode='contain'
                        />
                    </View>
                        <View style={styles.Subcon2}>
                            <View style={styles.c1}><Text style={styles.title}>Centre Culturel Dawdiate Marrakech</Text></View>
                            <View style={styles.c2}>
                                <Text style={styles.description}>
                                Comme son nom l'indique « maison de la culture » est un espace ouvert de rencontre et de rayonnement culturels dans la ville de Marrakech.
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.main2}>
                    <MapView style={styles.map} initialRegion={{
                    latitude: 	31.63416,
                    longitude: -7.99994,
                    latitudeDelta: this.state.latDelta,
                    longitudeDelta: this.state.latDelta,
                    }}
                    >
                    { this.state.show == 1?
                    <Marker
                    description="institut"
                    coordinate = {{latitude: 	31.641786236714985,longitude: 	-8.025659884408855,}}
                    />
                    :this.state.show == 2?
                    <Marker
                    description="ta9afa"
                    coordinate = {{latitude: 	31.64592907248945,longitude: 	-7.9933246039726695,}}
                    />
                    :null
                    }
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main : {
        flex: 1,
    },
    main1 : {
        flex: 0.5,
        backgroundColor: '#908787'
    },
    main2 : {
        flex: 1,
        backgroundColor : 'blue'
    },
    con1 : {
        flex: 1,
        backgroundColor : '#0192d5',
        margin : 2,
        flexDirection : 'row'
    },
    con2 : {
        flex: 1,
        backgroundColor : '#fff',
        margin : 2,
        flexDirection : 'row'
    },
    Subcon1:{
        flex: 0.4,
    },
    Subcon2:{
        flex: 1,
        backgroundColor: '#E0D3D3'
    },
    c1:{
        textAlign : "center",
        flex: 0.5,
        backgroundColor: '#E0D3D3'
    },
    c2:{
        flex: 1,
    },
    tinyLogo: {
        width: 103,
        height: 103,
      },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    title :{
        fontSize :17,
        fontFamily :"sans-serif-condensed",
        fontWeight :"bold",
        paddingLeft:5
    },
    description :{
        fontStyle: 'italic',
    color: '#666666',
    paddingLeft:10,

    }
})

export default Map2;
