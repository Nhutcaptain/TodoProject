import React from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
    size?: 'small' | 'normal' | 'lagre',
    color?: string,
    percent: DimensionValue,
}

const ProgressBarComponent = (props: Props) => {
    const {size, color, percent} = props;
    return (
        <View>
            <View style={{
                height: 8,
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: 100,
                marginBottom: 10,
            }}>
            <View style={{
                backgroundColor: color ?? '#80C4E9',
                width: percent,
                height: 8,
                borderRadius: 100,
            }}>

            </View>
            </View>
            <RowComponent styles={{justifyContent: 'space-between'}}>
                <TextComponent text='Tiến độ'></TextComponent>
                <TextComponent text={`${percent}`} flex={0} fontwieght={'bold'}></TextComponent>
            </RowComponent>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProgressBarComponent;
