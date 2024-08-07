import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import globalStyle from '../styles/gobalStyles';
import RowComponent from './RowComponent';
import { ArrowLeft2 } from 'iconsax-react-native';
import TextComponent from './TextComponent';
import { useNavigation } from '@react-navigation/native';

interface Props {
    title?: string,
    back?: boolean,
    rightBell?: ReactNode,
    children: ReactNode
}

const Container = (props: Props) => {

    const { title, back, rightBell, children } = props;
    const navigation: any = useNavigation();

    return (

        <View style={globalStyle.container}>
            <RowComponent styles={{
                paddingBottom: 16,
            }}>
                {back && (<TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft2 color='#fff'/>
                </TouchableOpacity>)}

                <View style={{flex: 1, zIndex: -1, alignItems: 'center'}}>
                    {title && (
                        <TextComponent text={title}
                            flex={0}
                            size={16}
                            styles={{textAlign: 'center', marginLeft: back ? -24 : 0}}                        
                        ></TextComponent>
                    )}
                </View>
            </RowComponent>
            <ScrollView style={{flex: 1}}>{children}</ScrollView>
        </View>
    );
}



export default Container;
