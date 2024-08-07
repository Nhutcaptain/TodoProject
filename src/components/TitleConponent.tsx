import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextComponent from './TextComponent';
interface Props {
    text: string,
    font?: string,
    size?: number,
    color?: string,
    fontSize?: string,
}
const TitleConponent = (props: Props) => {
    const { text, font, size, color } = props;
    return (
        <TextComponent text={text} fontwieght={'bold'} color={color} size={size ?? 20}></TextComponent>
    );
}

const styles = StyleSheet.create({})

export default TitleConponent;
