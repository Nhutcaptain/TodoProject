import React, { ReactNode } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import TitleConponent from './TitleConponent';
import RowComponent from './RowComponent';
import globalStyle from '../styles/gobalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface Props {
    value: string;
    onChange: (val: string) => void;
    placeHolder?: string;
    title?: string;
    affix?: ReactNode;
    prefix?: ReactNode;
    allowClear?: boolean;
    multible?: boolean,
    numberOfLine?: number;
}

const InputComponent = (props: Props) => {

    const {value, onChange, placeHolder, title, affix, prefix, allowClear, multible, numberOfLine} = props;

    return (
        <View style={{marginBottom: 16}}> 
            {title && <TitleConponent text={title}></TitleConponent>}
            <RowComponent styles={[globalStyle.inputContainer, 
                    {marginTop: title ? 8 : 0, 
                    minHeight: multible && numberOfLine ? 32 * numberOfLine : 32, 
                    paddingVertical: 14, 
                    paddingHorizontal: 10}]}>
                {prefix && prefix}
                <View style={{flex: 1, paddingLeft: prefix ? 8 : 0}}>
                    <TextInput 
                        style={[globalStyle.text,{margin: 0,padding: 0,paddingVertical: 6, flex: 1, textAlignVertical: multible ? 'top' : 'center'}]}
                        placeholder={placeHolder ?? ''} 
                        value={value} 
                        onChangeText={val => onChange(val)}
                        placeholderTextColor={'#676767'}
                        multiline={multible}
                        numberOfLines={numberOfLine}
                    ></TextInput>
                </View>
                {affix && affix}
                {allowClear && value &&  (
                    <TouchableOpacity onPress={() => onChange('')}>
                        <AntDesign name='close' size={20} color={'white'}></AntDesign>
                    </TouchableOpacity>
                )}
            </RowComponent>
        </View>
    );
}

const styles = StyleSheet.create({})

export default InputComponent;
