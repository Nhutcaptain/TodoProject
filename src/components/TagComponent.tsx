import React from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import TextComponent from './TextComponent';
import globalStyle from '../styles/gobalStyles';
interface Props {
    text: string,
    color?: string,
    tagStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    onPress?: () => void
}
const TagComponent = (props: Props) => {
    const { text, color, tagStyle, textStyle, onPress } = props;
    return (
        <TouchableOpacity style={[ globalStyle.tag,tagStyle]}>
            <TextComponent text={text}></TextComponent>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default TagComponent;
