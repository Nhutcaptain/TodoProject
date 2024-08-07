import React, { Children, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import globalStyle from '../styles/gobalStyles';
interface Props {
    children: ReactNode,
}
const SectionComponent = (props: Props) => {
    const { children } = props;
    return (
        <View style={globalStyle.section}>
            {children}
        </View>
    );
}
export default SectionComponent;
