import React from 'react'
import { VentanaLienzo } from '../../lib/shared'
import { TabElementosUi } from './TabElementosUi'

const Ventana: React.FC = () => {

    return (
        <VentanaLienzo>
            <TabElementosUi />
        </VentanaLienzo>
    )
}

export { Ventana }