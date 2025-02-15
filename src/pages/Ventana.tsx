import React from 'react'
import { VentanaLienzo } from '../../lib/shared'
import { TabElementosModal } from './TabElementosModal'
import { TabPaginador } from './TabPaginador'

const Ventana: React.FC = () => {

    const breadcrumbItems = [
      { label: "Inicio", link: "/" },
      { label: "Página 1", link: "/" },
      { label: "Subpágina 1" }
    ];

    return (
        <VentanaLienzo items={breadcrumbItems} extraInput={'Hola!'}>
            <TabElementosModal />
            <TabPaginador />
        </VentanaLienzo>
    )
}

export { Ventana }