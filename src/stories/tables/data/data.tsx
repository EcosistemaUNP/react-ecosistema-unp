import { useState } from "react";
import { ContenidoModal } from "../../../../lib/ui";
import { FaBoxArchive, FaClockRotateLeft } from "react-icons/fa6";
import { Button } from "react-bootstrap";

export const columns1 = [
    {
        key: 'tipoRuta',
        label: 'Solicitud',
        // renderComponent: (rowData: any) => (
        //   <IconTooltip
        //     solicitud={rowData.tipoRuta}
        //     estado={rowData.estadoRegistro}
        //   />
        // )
    },
    { key: 'numeroRegistro', label: 'Registro', hasModal: true },
    { key: 'diasHabiles', label: 'Días hábiles' },
    { key: 'nombres', label: 'Nombre(s) y apellido(s)', hasModal: true },
    { key: 'nuip', label: 'NUIP' },
    { key: 'contacto', label: 'Contacto' },
    { key: 'ubicacion', label: 'Ubicación', hasModal: true }
];

export const renderModalContent1 = (row: Record<string, any>, column: any, onHide?: () => void) => {
    switch (column.key) {
        case "numeroRegistro":
            return (
                <>Contenido del modal. Registro {row.numeroRegistro}</>
            );
        case "nombres":
            return (<>{row.nombres}</>);
        case "ubicacion":
            return (<>{row.ubicacion}</>);
        default:
            return <p>No hay información adicional disponible.</p>;
    }
}

export const renderModalContent2 = (row: Record<string, any>, column: any, onHide?: () => void) => {
    const [showUno, setShowUno] = useState(false);
    const [showDos, setShowDos] = useState(false);
    const [showTres, setShowTres] = useState(false);

    const [isShowing, setIsShowing] = useState(false);

    const buttons = [
        {
            title: 'Contenido uno',
            icon: FaBoxArchive,
            onShow: () => { setShowDos(true); setIsShowing(true); }
        },
        {
            title: 'Contenido dos',
            icon: FaClockRotateLeft,
            onShow: () => { setShowUno(true); setIsShowing(true); }
        }
    ];
    
    switch (column.key) {
        case "numeroRegistro":
            return (
                <>
                    <ContenidoModal
                        title={row.numeroRegistro}
                        buttons={buttons}
                        isShowing={isShowing}
                        setIsShowing={setIsShowing}
                    >
                        {showUno ? (
                            <>Contenido uno</>
                        ) : showDos ? (
                            <>Contenido dos</>
                        ) : showTres ? (
                            <>Contenido tres</>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button onClick={onHide}>Cerrar</Button>
                                <Button onClick={() => { setShowTres(true); setIsShowing(true) }}>Contenido tres</Button>
                            </div>
                        )}
                    </ContenidoModal>
                </>
            );
        default:
            return <p>No hay información adicional disponible.</p>;
    }
};

export const data1 = [
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1020,
        "numeroRadicado": "EXT25-00145799",
        "diasHabiles": 24,
        "nombres": "Carmen Rodríguez Castillo",
        "nuip": "CC 85274197",
        "contacto": "338 012 3456",
        "ubicacion": "Bolívar, Cartagena"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1005,
        "numeroRadicado": "EXT25-00101342",
        "diasHabiles": 17,
        "nombres": "Daniela Castro",
        "nuip": "CC 112233445",
        "contacto": "323 567 8901",
        "ubicacion": "Quindío, Armenia"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1012,
        "numeroRadicado": "EXT25-00139012",
        "diasHabiles": 11,
        "nombres": "Ana María Pérez López",
        "nuip": "CC 55667788",
        "contacto": "330 234 5678",
        "ubicacion": "Arauca, Arauca"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 998,
        "numeroRadicado": "EXT25-00129876",
        "diasHabiles": 7,
        "nombres": "Luis Ramírez Díaz",
        "nuip": "TI 876543210",
        "contacto": "312 890 1234",
        "ubicacion": "Meta, Villavicencio"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1000,
        "numeroRadicado": "EXT25-00110321",
        "diasHabiles": 1,
        "nombres": "Marta Fernández González",
        "nuip": "CC 850314795",
        "contacto": "314 012 3456",
        "ubicacion": "Tolima, Ibagué"
    }
];

export const data2 = [
    // --- En gestión (orden: días hábiles descendente) ---
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1021,
        "numeroRadicado": "EXT25-00150000",
        "diasHabiles": 30,
        "nombres": "Carolina Mendoza Rojas",
        "nuip": "CC 963852741",
        "contacto": "317 654 3210",
        "ubicacion": "Valle del Cauca, Cali",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1020,
        "numeroRadicado": "EXT25-00145799",
        "diasHabiles": 24,
        "nombres": "Carmen Rodríguez Castillo",
        "nuip": "CC 85274197",
        "contacto": "338 012 3456",
        "ubicacion": "Bolívar, Cartagena",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1022,
        "numeroRadicado": "EXT25-00151001",
        "diasHabiles": 22,
        "nombres": "Juliana Torres Méndez",
        "nuip": "TI 159357486",
        "contacto": "320 147 2580",
        "ubicacion": "Santander, Bucaramanga",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1005,
        "numeroRadicado": "EXT25-00101342",
        "diasHabiles": 17,
        "nombres": "Daniela Castro",
        "nuip": "CC 112233445",
        "contacto": "323 567 8901",
        "ubicacion": "Quindío, Armenia",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1023,
        "numeroRadicado": "EXT25-00152002",
        "diasHabiles": 16,
        "nombres": "Andrés Gómez Pineda",
        "nuip": "CC 753159846",
        "contacto": "315 987 6543",
        "ubicacion": "Cundinamarca, Girardot",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1012,
        "numeroRadicado": "EXT25-00139012",
        "diasHabiles": 11,
        "nombres": "Ana María Pérez López",
        "nuip": "CC 55667788",
        "contacto": "330 234 5678",
        "ubicacion": "Arauca, Arauca",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1024,
        "numeroRadicado": "EXT25-00153003",
        "diasHabiles": 9,
        "nombres": "Ricardo Vargas Soto",
        "nuip": "CC 258369147",
        "contacto": "318 369 2580",
        "ubicacion": "Nariño, Pasto",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1025,
        "numeroRadicado": "EXT25-00154004",
        "diasHabiles": 5,
        "nombres": "Sofía Herrera Jiménez",
        "nuip": "TI 951753824",
        "contacto": "314 753 1590",
        "ubicacion": "Caldas, Manizales",
        "estadoRegistro": "en_gestion"
    },

    // --- Por gestionar (orden: días hábiles descendente) ---
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1026,
        "numeroRadicado": "EXT25-00155005",
        "diasHabiles": 19,
        "nombres": "Felipe Castro Ríos",
        "nuip": "CC 147258369",
        "contacto": "316 852 9630",
        "ubicacion": "Huila, Neiva",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1027,
        "numeroRadicado": "EXT25-00156006",
        "diasHabiles": 14,
        "nombres": "Valentina Rojas Ortiz",
        "nuip": "CC 321654987",
        "contacto": "311 456 7890",
        "ubicacion": "Cesar, Valledupar",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1028,
        "numeroRadicado": "EXT25-00157007",
        "diasHabiles": 12,
        "nombres": "David Morales Pérez",
        "nuip": "TI 654123987",
        "contacto": "319 654 1230",
        "ubicacion": "Córdoba, Montería",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1029,
        "numeroRadicado": "EXT25-00158008",
        "diasHabiles": 8,
        "nombres": "Camila Sánchez Díaz",
        "nuip": "CC 789456123",
        "contacto": "313 951 7530",
        "ubicacion": "Boyacá, Tunja",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 998,
        "numeroRadicado": "EXT25-00129876",
        "diasHabiles": 7,
        "nombres": "Luis Ramírez Díaz",
        "nuip": "TI 876543210",
        "contacto": "312 890 1234",
        "ubicacion": "Meta, Villavicencio",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1030,
        "numeroRadicado": "EXT25-00159009",
        "diasHabiles": 3,
        "nombres": "María González Vargas",
        "nuip": "CC 369258147",
        "contacto": "317 357 1590",
        "ubicacion": "La Guajira, Riohacha",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1000,
        "numeroRadicado": "EXT25-00110321",
        "diasHabiles": 1,
        "nombres": "Marta Fernández González",
        "nuip": "CC 850314795",
        "contacto": "314 012 3456",
        "ubicacion": "Tolima, Ibagué",
        "estadoRegistro": "por_gestionar"
    }
];