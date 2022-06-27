import React, { Component } from 'react';
import { View, Text } from 'react-native';
 import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoiaG5hc2lyemFkZTMxMCIsImEiOiJjbDR3dTF3eW4xamJsM2RsYWljZm04cjh1In0.GxHsCmsO_kYeD1LNo6pxLA');
const App = () => {
  return (
    <MapboxGL.MapView style={{ flex:1 }}>

    </MapboxGL.MapView>
  );
}
export default App;