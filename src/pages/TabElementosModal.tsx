import React, { useState } from 'react'
import { CustomModal, ItemsModal } from '../../lib/ui'
import { TarjetaInfo } from '../../lib/cards';

import { FaClipboardUser, FaPhone, FaUser, FaUsers } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';

const TabElementosModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const sections = [
        { label: "Uno", icon: FaPhone, route: "/", closed: true },
        { label: "Dos", icon: FaClipboardUser, route: "/", closed: false, handleDownload: () => console.log('Descargando...') },
        { label: "Tres", icon: FaUsers, route: "/" },
        { label: "Cuatro", icon: FaPhone, route: "/", closed: false },
        { label: "Cinco", icon: FaClipboardUser, route: "/", handleDownload: () => console.log('Descargando...') },
    ];

    return (
        <>
            <Button variant='unp_primary' onClick={() => setShowModal(true)}>Abrir Modal</Button>
            <CustomModal
                show={showModal}
                title="Formulario de solciitud de inscripción"
                onHide={() => setShowModal(false)}
                closeModalOut={true}
            >
                Contenido del modal
            </CustomModal>
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