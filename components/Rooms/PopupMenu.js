import React from 'react';
import {View,TouchableOpacity,UIManager,findNodeHandle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const ICON_SIZE = 25;

class PopupMenu extends React.Component {
    handleShowPopupError = () => {
        // show error herekj
    };

    handleMenuPress = () => {
        const { actions, onPress } = this.props;

        UIManager.showPopupMenu(
            findNodeHandle(this.refs.menu),
            actions,
            this.handleShowPopupError,
            onPress,
        );
    };

    render() {
        return (
            <View>

                <TouchableOpacity onPress={this.handleMenuPress} style={{paddingRight:'6%',marginLeft:'6%'}}>
                    <Icon
                        name="md-more"
                        size={ICON_SIZE}
                        color='white'
                        ref="menu"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

PopupMenu.propTypes = {
    actions: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default PopupMenu;