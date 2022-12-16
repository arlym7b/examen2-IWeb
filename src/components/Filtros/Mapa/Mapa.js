import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import L from 'leaflet';
import TarjetaAnuncio from '../../TarjetaAnuncio/TarjetaAnuncio';

function lineaIcon() {
  return L.icon({
    iconUrl: require("../../../images/linea.png"),
    iconSize: [50, 50],
  });
};

function paradaIcon() {
  return L.icon({
    iconUrl: require("../../../images/parada.png"),
    iconSize: [30, 40],
  });
};


const Mapa = ({lineas, paradas}) => {
  return (
    <Box sx={{m: "20px", border:3, borderColor: "#BF40BF"}}>
      <MapContainer  style={{ width: "100%", height: "55vh"}} center={[36.72184282369917,  -4.418403224132213]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lineas.map((linea, idx) => 
          <Marker key={`linea-${idx}`} position={[linea.lat, linea.lon]} icon={lineaIcon()}>
          <Popup>
            <TarjetaAnuncio vivienda={vivienda} textoBoton="Reservar"/>
          </Popup>
        </Marker>
        )}
        {paradas.map((parada, idx) => 
          <Marker key={`parada-${idx}`} position={[parada.lat, parada.lon]} icon={paradaIcon()}>
          <Popup>
            Pollo pollo pollo frito
          </Popup>
        </Marker>
        )}
      </MapContainer>
    </Box>
  )
}

export default Mapa
