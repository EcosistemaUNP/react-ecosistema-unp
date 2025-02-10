import React from 'react'
import { Paginador } from '../../lib/ui'
import { FaPerson } from 'react-icons/fa6'

const TabPaginador: React.FC = () => {

    const form = [
        {
            label: 'Uno',
            icon: FaPerson,
            content: <>Contenido de la página uno</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Dos',
            icon: FaPerson,
            content: <>Contenido de la página dos</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Tres',
            icon: FaPerson,
            content: <>Contenido de la página tres</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Cuatro',
            icon: FaPerson,
            content: <>Contenido de la página cuatro</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Cinco',
            icon: FaPerson,
            content: <>Contenido de la página cinco</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Seis',
            icon: FaPerson,
            content: <>Contenido de la página seis</>
            // handleNextClick: (e: any) => void;
        },
        {
            label: 'Siete',
            icon: FaPerson,
            content: <>Contenido de la página siete</>
            // handleNextClick: (e: any) => void;
        }
    ]
    return (
        <Paginador
            stepContent={form}
            onSubmit={() => console.log('Enviado!!!')}
        />
    )
}

export { TabPaginador }