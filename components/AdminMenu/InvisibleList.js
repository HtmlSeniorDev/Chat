import {FlatList, ImageBackground, Text, TouchableOpacity, View, Dimensions, Alert} from "react-native";
import React from "react";
import request_UNBAN_USER from "../../actions/fetch_unban_user";
import fetch_REQUEST_BANNED_LIST from "../../actions/fetch_banned_list";
import fetch_REQUEST_INVISIBLE_LIST from "../../actions/fetch_invisible_list";
const screenHeight = Math.round(Dimensions.get('window').width);

export default class InvisibleList extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            InvisibleList: this.props.screenProps.invisible_list,


        };


    }


    Unban_window = async (user_id, id_banner, name_admin, id_document, user) => {
        Alert.alert(
            'Разбанить пользователя',
            "Вы уверены,что хотите cнять невидимку пользователя  " + user + "?",
            [

                {
                    text: 'Отмена',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => this.Unbanned_action(user_id, id_banner, name_admin, id_document)


                },
            ],
            {cancelable: false},
        );
    };

    Unbanned_action = async (user_id, id_banner, name_admin, id_document) => {

        Alert.alert("Пользователь успешно разбанен!", "Вы так добры по отношению к людям :)");

        await request_UNBAN_USER(user_id, id_banner, name_admin, id_document);

        const refresh = await  fetch_REQUEST_INVISIBLE_LIST();

        this.setState({InvisibleList: refresh})


    };


    renderSeparator = () => (
        <View
            style={{
                backgroundColor: 'rgba(1,1,1,0.43)',
                height: 1

            }}
        />
    );

    render() {


        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <ImageBackground source={require('../Image/whatsap.png')


                }

                                 style={{width: '100%', height: '100%'}}
                >

                    <View style={{marginLeft:screenHeight/2.5,flex:0}} >
                        <Text style={{fontWeight:'bold'}}>Невидимки</Text>
                    </View>
                    <FlatList  style={{marginTop:'4%'}}


                               ItemSeparatorComponent={this.renderSeparator}
                               data={this.state.InvisibleList}
                               extraData={this.state}


                               renderItem={(({item}) =>

                                       <TouchableOpacity
                                           onPress={() => this.Unban_window(item.user_id, this.props.screenProps.nic, 'NoneRes', '1233',item.nic)}>
                                           <View style={{
                                               flex: 1, flexDirection: 'row',
                                           }}>


                                               <Text style={{
                                                   fontSize: 20,
                                                   flex: 1,
                                                   fontWeight:'bold',
                                                   color: item.color,



                                                   padding: 1,
                                                   borderRadius: 4,


                                               }}>

                                                   {item.nic}

                                               </Text>


                                           </View>
                                       </TouchableOpacity>
                               )
                               }


                               keyExtractor={(item, index) => index.toString()}

                    />
                </ImageBackground>
            </View>
        );
    }
}