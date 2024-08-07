import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

interface Props {
    color?: string,
    value: number,
    maxValue?: number,
    radius?: number,
}

const CircularComponent = (props: Props) => {
    const {color, value, maxValue, radius} = props;
    return (
        <CircularProgress 
            value={value} 
           valueSuffix={'%'}
           progressValueColor='#fff'
            activeStrokeColor={color ?? '#B3E2A7'} 
            inActiveStrokeColor='#686D76'
           radius={radius ?? 45}
            ></CircularProgress>
            

    );
}

const styles = StyleSheet.create({})

export default CircularComponent;
