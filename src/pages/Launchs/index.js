import React, { useState } from 'react';
import startOfYear from 'date-fns/startOfYear';
import endOfYear from 'date-fns/endOfYear';
import * as Calendar from 'expo-calendar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';

import api from '../../services/api';

import { Container, Button, ButtonText, CalendarButton, CalendarButtonText } from './styles';

export default function Launchs() {
  const [calendars, setCalendars] = useState([]);

  async function handleListCalendars() {
    const { status } = await Permissions.askAsync(Permissions.CALENDAR);

    if (status !== 'granted')
      return;

    const calendars = await Calendar.getCalendarsAsync();

    setCalendars(calendars);
  }

  async function handleSelectCalendar(calendarId) {
    const startDate = startOfYear(new Date());
    const endDate = endOfYear(new Date());
    const events = await Calendar.getEventsAsync([calendarId], startDate, endDate);

    const response = await api.post('calendar', {
      events,
    })

    Alert.alert('Sucesso!', `${response.data.length} eventos cadastrados!`);
  }

  return (
    <Container>
      <Button onPress={handleListCalendars}>
        <ButtonText>Importar calendário</ButtonText>
      </Button>

      { calendars.map(calendar => 
        <CalendarButton onPress={() => handleSelectCalendar(calendar.id)} key={calendar.id}>
          <CalendarButtonText>{calendar.title}</CalendarButtonText>
        </CalendarButton>
      )}
    </Container>
  );
}

Launchs.navigationOptions = {
  tabBarLabel: 'Lançamentos',
  tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="rocket" size={24} color={tintColor} />
};