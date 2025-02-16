import React from 'react'
import { VentanaLienzo } from '../../lib/shared'
import { TabElementosModal } from './TabElementosModal'
import { TabPaginador } from './TabPaginador'
import { FaUser } from 'react-icons/fa'
import { ContenedorVentana } from '../../lib/ui'

const Ventana: React.FC = () => {

    const breadcrumbItems = [
        { label: "Inicio", link: "/" },
        { label: "Página 1", link: "/" },
        { label: "Subpágina 1" }
    ];

    const iconos = [
        { icon: FaUser, action: () => console.log('goodbye!!') },
        { icon: FaUser, action: () => console.log('adios!!') },
        { icon: FaUser, action: () => console.log('auf wiedersehen!!') },
        { icon: FaUser, action: () => console.log('adieu!!') },
    ];

    return (
        <VentanaLienzo items={breadcrumbItems} extraInput={iconos}>
            <ContenedorVentana>
                <TabElementosModal />
                <TabPaginador />
            </ContenedorVentana>
        </VentanaLienzo>
    )
}

export { Ventana }