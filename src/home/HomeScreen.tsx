import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import CardComponent from '../components/CardComponent';
import TitleConponent from '../components/TitleConponent';
import globalStyle from '../styles/gobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Category, Notification, Edit, Edit2 } from 'iconsax-react-native';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponents/SpaceComponent';
import CircularComponent from '../components/CircularComponent';
import CardImageComponent from '../components/CardImageComponent';
import ProgressBarComponent from '../components/ProgressBarComponent';
import AvatarGroup from '../components/AvatarGroup';

const HomeScreen = ({navigation} : any) => {
    return (
        <View style={{flex: 1}}>
            <Container>
              
                <SectionComponent>
                <RowComponent justify='space-between'>
                    <Category color='#fff' />
                    <Notification color='#fff' />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <TextComponent text='Hi, Lý Huỳnh' />
                <TextComponent text='Đi cửa tiếp đi mầy' />
            </SectionComponent>
            <SectionComponent>
                <RowComponent onPress={() => navigation.navigate('SearchScreen')} styles={[globalStyle.inputContainer]}>
                    <TextComponent text='Search'></TextComponent>
                    <Icon name='search' size={18} color={'#fff'}></Icon>

                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <CardComponent>
                    <RowComponent>
                        <View style={{ flex: 1, }}>
                            <TitleConponent text='Complete Tasks'></TitleConponent>
                            <TextComponent text='Test'></TextComponent>
                            <SpaceComponent height={10}></SpaceComponent>
                            <RowComponent justify='flex-start'>
                                <TagComponent text='Daily tasks'></TagComponent>
                            </RowComponent>
                        </View>
                        <View>
                            <CircularComponent value={80}></CircularComponent>
                        </View>
                    </RowComponent>
                </CardComponent>
            </SectionComponent>
            <SectionComponent>
                <RowComponent>
                    <View style={{flex: 1}}>
                        <CardImageComponent imageSource={require('../../assets/images/leftcard.jpg')}>
                            <TouchableOpacity style={globalStyle.editTopIcon}>
                                <Edit2 size={20} color='#fff' />
                            </TouchableOpacity>
                            <TitleConponent text='UX Design'></TitleConponent>
                            <TextComponent text='Xây dựng giao diện người dùng và hoàn thành công việc khác trong ngày'></TextComponent>
                            <View style={{marginVertical: 28}}>
                                <AvatarGroup></AvatarGroup>
                                <ProgressBarComponent percent='70%'></ProgressBarComponent>
                                
                            </View>
                            
                                <TextComponent text='Ngay het hang'></TextComponent>
                           
                        </CardImageComponent>
                    </View>
                    <SpaceComponent width={10}></SpaceComponent>
                    <View style={{flex: 1}}>
                        <CardImageComponent imageSource={require('../../assets/images/righttopcard.jpg')}>
                            <TouchableOpacity style={globalStyle.editTopIcon}>
                                <Edit2 size={20} color='#fff' />
                            </TouchableOpacity>
                            <TitleConponent text='Công việc phụ'></TitleConponent>
                            <View style={{marginVertical: 15}}>
                                <AvatarGroup></AvatarGroup>
                                <ProgressBarComponent percent='40%'></ProgressBarComponent>
                                
                            </View>
                        </CardImageComponent>
                        <SpaceComponent height={16}></SpaceComponent>
                        <CardImageComponent imageSource={require('../../assets/images/rightbottomcard.jpg')}>
                        <TouchableOpacity style={globalStyle.editTopIcon}>
                                <Edit2 size={20} color='#fff' />
                            </TouchableOpacity>
                            <TitleConponent text='Cập nhật công việc'></TitleConponent>
                            <TextComponent text='Hoàn thành UI, cập nhật tiến độ công việc'></TextComponent>
                        </CardImageComponent>
                    </View>
                </RowComponent>
            </SectionComponent>
            <SpaceComponent height={26}></SpaceComponent>
            <SectionComponent>
                <TitleConponent text='Công việc sắp đến' size={25}></TitleConponent>
                <CardComponent styles={{marginVertical: 10}}>
                    <RowComponent>
                        <CircularComponent value={40} />
                        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
                            <TextComponent text='Tiêu đề task'></TextComponent>
                        </View>
                    </RowComponent>
                </CardComponent>
            </SectionComponent>
                
        </Container>
            <View style={{position: 'absolute', bottom: 0, right: 0, padding: 20}}
            >
                <TouchableOpacity style={[globalStyle.row, {backgroundColor: '#96C9F4', padding: 10, borderRadius: 20}]}
                    
                    onPress={() => navigation.navigate('AddNewTask')}
                >
                    <TextComponent text='Add task' flex={0}></TextComponent>
                </TouchableOpacity>
            </View>
        </View>

    );
}



export default HomeScreen;
