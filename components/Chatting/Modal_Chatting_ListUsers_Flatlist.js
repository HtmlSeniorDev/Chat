import {Dimensions, FlatList, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import {address_photo} from "../../config_connect";
import styles from "../../styles";

const {height, width} = Dimensions.get('window');
const Winsize = Dimensions.get('window');

export class Modal_Chatting_ListUsers_Flatlist extends React.Component {
    _listEmptyComponent = () => {
        return (
            <View>
                <Text style={{textAlign:'center',color:"red",fontSize: 14}}>
                    пусто
                </Text>

            </View>

        )
    };
    check_photo_avatar = (photo) => {


        if (photo!=null) {
            return (
                <FastImage source={{uri: address_photo + photo}} style={styles.imageAvatarProfile}
                />
            )
        }
        else {
            return (
                <FastImage source={{uri: "image_exist"}} style={styles.imageAvatarProfile}
                />
            )
        }
    };
    render() {
        const user_list = this.props.users;
        return (
            <Modal
                transparent={true}
                animationType="fade"
                visible={this.props.isVisibleList}
                onRequestClose={this.props.Change_Visible_List}

            >


                <TouchableOpacity
                    style={{ backgroundColor: 'rgba(22,22,22,0.72)',flex:1}}
                    activeOpacity={1}
                    onPressOut={this.props.Change_Visible_List}
                >
                    <View style={{alignItems:'center',justifyContent:'center',
                    }}>


                        <TouchableWithoutFeedback>


                            <View style={{backgroundColor:'rgba(255,255,255,0.99)',width:width/1.4,marginTop:height/6,borderRadius:4,maxHeight:height/1.5}}>


                                <FlatList
                                    data={user_list}
                                    extraData={this.props}
                                    ListEmptyComponent={this._listEmptyComponent}
                                    renderItem={(({item}) =>
                                            <TouchableOpacity  onPress={()=>this.props.action_nick(item.nic,item.id)}>

                                                <View style={{
                                                    flexDirection:'row',flex:1,
                                                }}>
                                                    {this.check_photo_avatar(item.photo)}

                                                    <View style={{justifyContent:'center',textAlign:'center',padding:10}}>
                                                        <Text style={{
                                                            fontSize: 50 / Winsize.scale,
                                                            color: "#" + ((item.color) >>> 0).toString(16).slice(-6),
                                                            fontWeight: 'bold',
                                                            textAlign: 'center'
                                                        }}>
                                                            {item.nic}

                                                        </Text>
                                                    </View>



                                                </View>

                                            </TouchableOpacity>
                                    )
                                    }
                                    keyExtractor={(item, index) => index.toString()}
                                />

                            </View>


                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>
            </Modal>


        )
    }
}
