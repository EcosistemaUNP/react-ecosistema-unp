import React from 'react'
import { Encabezado, Logo, Subtitulo } from '../../lib/ui'
import { FaBars, FaHouse } from 'react-icons/fa6'
import { Button } from 'react-bootstrap'
import { IconoTabla } from '../../lib/tables'

const TabElementosUi: React.FC = () => {
    return (
        <>
            <Encabezado titulo='Título' subtitulo='Subtítulo' />
            <Subtitulo icon={FaHouse} subtitulo={'Subtítulo aquí...'} />
            <Encabezado subtitulo={'Subtítulo'} />

            <Subtitulo icon={FaHouse} subtitulo={'Logos'} />
            <Logo type='entidad' variant='unp' color='rojo' />
            <Logo type='entidad' variant='unp' color='gris' />
            <Logo type='entidad' variant='unp' color='blanco' />
            <br /><br />
            <Logo type='entidad' variant='unidad' color='rojo' />
            <Logo type='entidad' variant='unidad' color='gris' />
            <Logo type='entidad' variant='unidad' color='blanco' />
            <br /><br />
            <Logo type='ministerio' variant='interior' color='rojo' />
            <Logo type='ministerio' variant='interior' color='gris' />
            <Logo type='ministerio' variant='interior' color='blanco' />
            <br /><br />
            <Logo type='ecosistema' variant='escudo' color='azul' />
            <Logo type='ecosistema' variant='escudo' color='azul_sin_fondo' />
            <Logo type='ecosistema' variant='escudo' color='blanco' />
            <Logo type='ecosistema' variant='escudo' color='blanco_sin_fondo' />
            <br /><br />
            <Logo type='ecosistema' variant='letras' color='azul' height='50px' />
            <Logo type='ecosistema' variant='letras' color='blanco' height='50px' />

            <Subtitulo icon={FaBars} subtitulo={'Iconos tabla'} />
            <IconoTabla tipoSolicitud='Individual' />
            <IconoTabla tipoSolicitud='Individual' porGestionar={true} />
            <br /><br />
            <IconoTabla tipoSolicitud='Colectivo' />
            <IconoTabla tipoSolicitud='Colectivo' porGestionar={true} />
            <br /><br />
            <IconoTabla tipoSolicitud='Emergencia' />
            <IconoTabla tipoSolicitud='Emergencia' porGestionar={true} />
            <br /><br />
            <IconoTabla tipoSolicitud='Jurídico' />
            <IconoTabla tipoSolicitud='Jurídico' porGestionar={true} />
            <br /><br />
            <IconoTabla tipoSolicitud='Reasignación' />
            <IconoTabla tipoSolicitud='Reasignación' porGestionar={true} />

            <Subtitulo icon={FaBars} subtitulo={'Botones'} />
            <Button variant='unp_primary'>Primario</Button>
            <br /><br />
            <Button variant='unp_secondary'>Secundario</Button>
            <br /><br />
            <Button variant='unp_tertiary'>Terciario</Button>
            <br /><br />
            <Button variant='unp_send'>Enviar</Button>
        </>
    )
}

export { TabElementosUi }