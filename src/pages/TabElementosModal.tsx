import React from 'react'
import { ItemsModal } from '../../lib/ui'
import { TarjetaInfo } from '../../lib/cards';

import { FaClipboardUser, FaPhone, FaUser, FaUsers } from 'react-icons/fa6';

const TabElementosModal: React.FC = () => {
    const sections = [
        { label: "Uno", icon: FaPhone, route: "/", closed: true },
        { label: "Dos", icon: FaClipboardUser, route: "/", closed: false, handleDownload: () => console.log('Descargando...') },
        { label: "Tres", icon: FaUsers, route: "/" },
        { label: "Cuatro", icon: FaPhone, route: "/", closed: false },
        { label: "Cinco", icon: FaClipboardUser, route: "/", handleDownload: () => console.log('Descargando...') },
    ];

    return (
        <>
            <ItemsModal sections={sections} />
            <br />
            <TarjetaInfo icon={FaUser} label='Label'>
            Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
            </TarjetaInfo>

            <TarjetaInfo icon={FaUser} label='Label'>
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
                Hola!
                <br />
            </TarjetaInfo>
        </>
    )
}

export { TabElementosModal }