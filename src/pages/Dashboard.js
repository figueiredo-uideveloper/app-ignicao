import React, { useState, useEffect } from 'react';
import MapView, { Marker, } from 'react-native-maps';
import { StyleSheet, Image } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import api from '../services/api';

function Dashboard({ navigation, isFocused }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      async function loadUsers() {
        const response = await api.get('users');
  
        setUsers(response.data);
      }

      console.log('Teste');
  
      loadUsers();
    }
  }, [isFocused]);

  function handleUserClick(user) {
    navigation.navigate('Profile', { user });
  }

  return (
    <MapView 
      showsUserLocation
      initialRegion={{
        latitude: -15.7388168,
        longitude: -47.8985612,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      }}
      style={StyleSheet.absoluteFillObject}
    >
      {users.map(user => (
        <Marker key={user._id} onPress={() => handleUserClick(user)} coordinate={{ latitude: user.latitude, longitude: user.longitude }}>
          <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: user.avatar }} />
        </Marker>
      ))}
    </MapView>
  );
}

Dashboard.navigationOptions = {
  header: null,
}

export default withNavigationFocus(Dashboard);