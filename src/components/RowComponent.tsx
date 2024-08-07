import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import globalStyle from '../styles/gobalStyles';
import { TextUnderline } from 'iconsax-react-native';

interface Props {
    children: ReactNode,
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined,
    styles?: StyleProp<ViewStyle>,
    onPress?: () => void,
}

const RowComponent = (props: Props) => {
    const { children, justify, styles, onPress } = props;
    const localStyles = [
        globalStyle.row,
        {
            justifyContent: justify ?? 'center',
        },
        styles
    ]
    return onPress ? (<TouchableOpacity onPress={onPress ? () => onPress() : undefined} style={localStyles}>
        {children}
    </TouchableOpacity>) : (
        <View style={localStyles}>{children}</View>
    );
}


export default RowComponent;
