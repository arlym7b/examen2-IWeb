import React from 'react';
import ImagenPromocional from '../../components/ImagenPromocial/ImagenPromocional';
import Valores from '../../components/Valores/Valores';

const Main = () => {
  const [cargando, setCargando] = useState(true);
    const [lineas, setLineas] = useState(null);
    const [paradas, setParadas] = useState(null);

    const getValores = async() => {
        const lin = await axios.get("http://localhost:5001/lineas");
        setLineas(lin.data);
        const par = await axios.get("http://localhost:5001/paradas");
        setLineas(par.data);
        setCargando(false);
    } 

    useEffect(() => {
        getValores()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cargando]);

 
    if(cargando){
      return <CircularProgress />;
    }
    
    return (
      <Container maxWidth="xl" sx={{mb: 3}}>
          {/*<BarraFiltros/>*/}
          <Mapa lineas={lin} paradas={par} />
          <ListaTarjetas locations={viviendas} text="Reservar"/>
          
      </Container>
    )
}

export default Main