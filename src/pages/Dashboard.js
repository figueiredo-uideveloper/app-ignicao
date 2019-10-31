import React from 'react';
import MapView, { Marker, } from 'react-native-maps';
import { StyleSheet, Image } from 'react-native';

// import { Container } from './styles';

export default function Dashboard({ navigation }) {
  function handleUserClick() {
    navigation.navigate('Profile', { name: 'Goffi' });
  }

  return (
    <MapView 
      showsUserLocation
      initialRegion={{
        latitude: -7.1466036,
        longitude: -34.9516375,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      }}
      style={StyleSheet.absoluteFillObject}
    >
      <Marker onPress={handleUserClick} title="Gabriel Goffi" description="Never fucking stop!" coordinate={{ latitude: -7.1466036, longitude: -34.9516375 }}>
        <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://pbs.twimg.com/profile_images/778771552712163328/dPVjJD03_400x400.jpg' }} />
      </Marker>
    </MapView>
  );
}

Dashboard.navigationOptions = {
  header: null,
}