import React, { ReactNode } from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, View } from 'react-native';
import globalStyle from '../styles/gobalStyles';
interface Props {
    children: ReactNode,
    color?: string,
    imageSource?: ImageSourcePropType,
}

const CardImageComponent = (props: Props) => {
    const {children, color, imageSource} = props;
    return (
        <ImageBackground 
        imageStyle={{borderRadius: 12}}
            source={imageSource}
            style={globalStyle.card}>
               <View style={{
                padding: 12,
                borderRadius: 12,
                flex: 1,
               }}>
               {children}
               </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({})

export default CardImageComponent;
