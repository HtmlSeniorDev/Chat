import {
    Body,
    CardItem,


    Text,

} from "native-base";
import {Dimensions,  TouchableOpacity, View} from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import {OptimizedFlatList} from "react-native-optimized-flatlist";
const {height, width} = Dimensions.get('window');
export default class CardsWedding extends React.Component {


    Wedding_action = () => {

        if (this.props.zags.length >= 1) {

            return (
                <TouchableOpacity style={{
                    width: '100%',
                    paddingTop: '2%',
                    paddingBottom: '2%',
                    backgroundColor: 'rgba(255,54,36,0.89)'
                }} onPress={() => this.props.Delete_Zags(this.props.zags)}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        flex: 0,
                        backgroundColor: 'rgba(255,53,33,0.89)',
                        fontWeight: 'bold'
                    }}>Вы
                        в браке с
                        пользователем {'\t' + this.props.zagsName} </Text>
                </TouchableOpacity>
            )

        } else if (this.props.zagsRequest.length >= 1) {

            return (<TouchableOpacity style={{
                    width: '100%',
                    paddingTop: '2%',
                    paddingBottom: '2%',
                    backgroundColor: 'rgba(255,1,18,0.88)'
                }} onPress={() => this.props.Accept_Zags_Req(this.props.zagsRequest)}>
                    <Text style={{color: 'white', flex: 0}}>Вам заявка на брак
                        от пользователя <Text
                            style={{fontWeight: 'bold', color: 'white'}}>{'\t' + this.props.zagsRequestName}</Text>
                    </Text>
                </TouchableOpacity>


            )

        } else {

            return (<Text style={{
                color: 'white',
                flex: 0,
                backgroundColor: 'rgba(75,163,226,0.66)',
                width: '100%',
                textAlign: 'center',
                marginTop: '1%',
            }}>Вы не состоите в
                браке </Text>)

        }


    };

    convert_time = (timestamp)=> {


        console.log(typeof(timestamp));
       const times =  new Date(timestamp);
       let year = times.getFullYear().toString();
       let mounth = times.getMonth().toString();
       let day = times.getDate().toString();





        return year +'-' + mounth + '-' + day





    };


    render() {

        const {router} = this.props;


        return (


            <CardItem cardBody
                      style={{marginTop: '0.1%', backgroundColor: 'rgb(46,48,68)',maxWidth:width, flexDirection:'column',
                          flex:1,}}>

                <View
                    style={{height: height / 1.5, width: null, flex: 1}}>

                    <Body style={{alignItems: 'center', backgroundColor: 'rgba(46,93,133,0.51)', flex: 0}}>
                        <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Виртуальный ЗАГС</Text>


                    </Body>
                    <Body style={{alignItems: 'center'}}>

                        {this.Wedding_action()}
                        <Text style={{color: '#ffffff', fontWeight: 'bold', marginTop: 10, fontSize: 20}}>Последнее
                            бракосочетание</Text>
                    </Body>

                    <View style={{flex:3}}>

                        <OptimizedFlatList contentContainerStyle={{ justifyContent: 'center',paddingTop:'2%'}}


                                           data={this.props.wedding_list.slice(0,1)}
                                           extraData={this.props}


                                           renderItem={(({item}) =>


                                                   <View style={{alignSelf:'center',marginBottom:'10%',marginTop:'10%'}}>
                                                       <View style={{flexDirection: 'row'}}>

                                                           <View style={{alignSelf:'center'}}>
                                                               <FastImage
                                                                   source={{uri: item.photo0}}
                                                                   style={{
                                                                       width: 50,
                                                                       height: 50,

                                                                       borderRadius: 8,
                                                                       alignSelf: 'center',

                                                                   }}>
                                                               </FastImage>
                                                               <TouchableOpacity
                                                                   onPress={() => this.props.Profile_screen(item.users[0], item.username0)}>
                                                                   <Text style={{
                                                                       textAlign: 'center',
                                                                       color: 'white',
                                                                       fontWeight: 'bold',
                                                                       maxWidth:'100%'
                                                                   }}>

                                                                       {item.username0}
                                                                   </Text>
                                                               </TouchableOpacity>
                                                           </View>
                                                           <View style={{alignSelf:'center',marginLeft:'7%',marginRight:'7%'}}>
                                                               <FastImage
                                                                   source={{uri: 'weddings_ring'}}
                                                                   style={{
                                                                       width: 25,
                                                                       height: 25,
                                                                       alignSelf:'center'

                                                                   }}>
                                                               </FastImage>
                                                               <Text style={{
                                                                   textAlign: 'center',
                                                                   color: '#4ba3e2',
                                                                   fontSize: 15,

                                                               }}>

                                                                   {this.convert_time(item.date.$date)}
                                                               </Text>
                                                           </View>
                                                           <View style={{alignSelf:'center'}}>
                                                               <FastImage

                                                                   source={{uri: item.photo1}}
                                                                   style={{
                                                                       width: 50,
                                                                       height: 50,

                                                                       borderRadius: 8,
                                                                       alignSelf: 'center',
                                                                   }}>
                                                               </FastImage>
                                                               <TouchableOpacity
                                                                   onPress={() => this.props.Profile_screen(item.users[1], item.username1)}>
                                                                   <Text style={{
                                                                       textAlign: 'center',
                                                                       color: 'white',
                                                                       fontWeight: 'bold',
                                                                       maxWidth:'100%'

                                                                   }}>

                                                                       {item.username1}
                                                                   </Text>
                                                               </TouchableOpacity>
                                                           </View>


                                                       </View>

                                                   </View>
                                               // </Body>

                                               // </CardItem>


                                           )
                                           }


                                           keyExtractor={(item, index) => index.toString()}


                        />

                    </View>




                </View>
                <TouchableOpacity onPress={() => this.props.All_Weddings()}>
                    <Text style={{textAlign: 'center',fontWeight:'bold',color:'white',paddingBottom:'5%',backgroundColor:'rgba(32,71,98,0.92)',paddingTop:'5%',width:width-10,borderColor:'white',borderWidth:2,marginBottom:10,borderRadius:12}}>

                    Все браки...
                </Text>

                </TouchableOpacity>
            </CardItem>


        );
    }
}

//  style={{width: 40, height: 40,}}
//   source={require('../Image/weddingProfile.png')}