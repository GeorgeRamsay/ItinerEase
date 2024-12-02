import React, {Component} from 'react';
import {View, Text} from 'react-native'
import { TextInput, Button } from 'react-native-web';
import DateTimePicker from '@react-native-community/datetimepicker';


export default class AddTicket extends Component
{
    render()
    {
        return(
            <View>
                <TextInput
                    placeholder={"Title"}
                />
                
                <Button
                    title={"Save Ticket Information"}
                />
            </View>
        );
    }
}