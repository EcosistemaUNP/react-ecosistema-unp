import React from 'react'
import { Encabezado, Logo, Subtitulo } from '../../lib/ui'
import { FaBars, FaHouse, FaMap, FaShield } from 'react-icons/fa6'
import { Button } from 'react-bootstrap'
import { IconoTooltip } from '../../lib/ui'
import { BarraAccesibilidad } from '../../lib/accessibility'

const TabElementosUi: React.FC = () => {
    return (
        <>
            <Encabezado title='Título' subtitle='Subtítulo' />
            <Subtitulo icon={FaHouse} subtitle={'Subtítulo aquí...'} />
            <Encabezado subtitle={'Subtítulo'} />

            <Subtitulo
                icon={FaHouse}
                subtitle={'Subtítulo con un elemento al final'}
                extraInput={<Button variant='unp_primary'>Botón</Button>}
            />
            <Subtitulo subtitle={'Subtítulo sin icono'} hasMargin={false} />

            <Subtitulo icon={FaHouse} subtitle={'Logos'} />
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
            <br /><br />
            <Logo type='ecosistema' variant='unp' color='rojo' height='50px' />

            <Subtitulo icon={FaBars} subtitle={'Iconos tabla'} />
            <IconoTooltip recordType='Individual' />
            <IconoTooltip recordType='Individual' taken={false} />
            <br /><br />
            <IconoTooltip recordType='Colectivo' />
            <IconoTooltip recordType='Colectivo' taken={false} />
            <br /><br />
            <IconoTooltip recordType='Emergencia' />
            <IconoTooltip recordType='Emergencia' taken={false} />
            <br /><br />
            <IconoTooltip recordType='Jurídico' />
            <IconoTooltip recordType='Jurídico' taken={false} />
            <br /><br />
            <IconoTooltip recordType='Reasignación' />
            <IconoTooltip recordType='Reasignación' taken={false} />
            <br /><br />
            <IconoTooltip recordType='No encontrado' />
            <IconoTooltip recordType='No encontrado' taken={false} />
            <br /><br />
            <IconoTooltip customIcon={{ icon: FaShield, color: '#e1ff00', tooltipText: 'Custom text & color' }} />
            <IconoTooltip customIcon={{ icon: FaShield, color: '#e1ff00', tooltipText: 'Custom text & color' }} taken={false} />
            <br /><br />
            <IconoTooltip customIcon={{ icon: FaMap, color: '#3b26d9', tooltipText: 'Custom text & color' }} />
            <IconoTooltip customIcon={{ icon: FaMap, color: '#3b26d9', tooltipText: 'Custom text & color' }} taken={false} />

            <Subtitulo icon={FaBars} subtitle={'Botones'} />
            <Button variant='unp_primary'>Primario</Button>
            <br /><br />
            <Button variant='unp_secondary'>Secundario</Button>
            <br /><br />
            <Button variant='unp_tertiary'>Terciario</Button>
            <br /><br />
            <Button variant='unp_send'>Enviar</Button>

            <BarraAccesibilidad />
        </>
    )
}

export { TabElementosUi }