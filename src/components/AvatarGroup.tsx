import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AvatarGroup = () => {

    const uidsLength = 10;

    const imgUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRNoF2-f8Ygt-vKjRdyLl1m8K5yT7u8pQY5Okw0m9ErulwXvUXnkJqB5rMPWOZh6CtPw&usqp=CAU`;

    const imageStyle = {
        width: 33,
        height: 33,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    }

    return (
       <RowComponent styles={{justifyContent: 'flex-start', marginBottom: 5}}>
        {Array.from({length : uidsLength }).map((item, index) => index < 3 && 
            <Image source={{uri: imgUrl}} key={`img${index}`} 
                style={[imageStyle, {marginLeft: index > 0 ? -10 : 0,}]}></Image>
            
            )}
            {uidsLength > 3 && 
                <View style={[imageStyle, {backgroundColor: 'coral', justifyContent: 'center', alignItems:'center', marginLeft: -10}]}>
                <TextComponent flex={0}
                    size={13}
                     text={`+${uidsLength - 3 > 9 ? '9..' : uidsLength - 3}`}></TextComponent>
            </View>
            }
            
       </RowComponent>
    );
}

const styles = StyleSheet.create({})

export default AvatarGroup;
