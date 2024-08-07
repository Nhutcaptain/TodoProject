import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native';
import globalStyle from '../styles/gobalStyles';

interface Props {
    children: ReactNode,
    bgColor?: string,
    styles?: StyleProp<ViewStyle>,
}

const CardComponent = (props: Props) => {
    const { children, bgColor, styles } = props;
    return (
        <View style={[globalStyle.cardStyle, styles]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({})

export default CardComponent;
