import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import Container from '../components/Container';
import TextComponent from '../components/TextComponent';
import { TaskModel } from '../models/TaskModels';
import SectionComponent from '../components/SectionComponent';
import InputComponent from '../components/InputComponent';
import { User } from 'iconsax-react-native';

const initValue: TaskModel = {
    title: '',
    description: '',
    dueDate: '',
    start: '',
    end: '',
    uids: [],
    fileUrls: []
}

const AddNewTask = ({navigation}: any) => {

    const [taskDetail, settaskDetail] = useState<TaskModel>(initValue);

    const handleChangeValue = (id: string, value: string) => {
        const item: any =   {...taskDetail} ;

        item[`${id}`] = value;
        settaskDetail(item);
    }

    const handleAddNewTask = async () => {
        console.log(taskDetail);
    }
    return (
        <Container back title='Add New Tasks'>
            <SectionComponent>
                <InputComponent 
                   
                    value={taskDetail.title}
                    onChange={val => handleChangeValue('title', val)}
                    title='Title'
                    allowClear
                    placeHolder='Title of task'
                ></InputComponent>
                <InputComponent 
                   value={taskDetail.description}
                   onChange={val => handleChangeValue('description', val)}
                   title='Description'
                   allowClear
                   placeHolder='Content'
                   multible
                   numberOfLine={3}
               ></InputComponent>
            </SectionComponent>
            <SectionComponent>
                <Button title='Save' onPress={handleAddNewTask}></Button>
            </SectionComponent>
            
        </Container>
    );
}



export default AddNewTask;
