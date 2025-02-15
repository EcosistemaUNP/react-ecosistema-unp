import { ContenidoModal, IconoTooltip } from "../../../../lib/ui";
import { FaBoxArchive } from "react-icons/fa6";
import { Button } from "react-bootstrap";

export const columns1 = [
    {
        key: 'tipoRuta',
        label: 'Solicitud',
        renderComponent: (rowData: any) => (
            <IconoTooltip recordType={rowData.tipoRuta} />
        )
    },
    { key: 'numeroRegistro', label: 'Registro', hasModal: true },
    { key: 'numeroRadicado', label: 'Radicado' },
    { key: 'diasHabiles', label: 'Días hábiles' },
    { key: 'nombres', label: 'Nombres completos', hasModal: true },
    { key: 'nuip', label: 'NUIP' },
    { key: 'contacto', label: 'Contacto' },
    { key: 'ubicacion', label: 'Ubicación', hasModal: true }
];

export const columns2 = [
    {
        key: 'tipoRuta',
        label: 'Solicitud',
        renderComponent: (rowData: any) => (
            <IconoTooltip recordType={rowData.tipoRuta} taken={rowData.estadoRegistro === 'en_gestion' ? true : false} />
        )
    },
    { key: 'numeroRegistro', label: 'Registro', hasModal: true },
    { key: 'numeroRadicado', label: 'Radicado' },
    { key: 'diasHabiles', label: 'Días hábiles' },
    { key: 'nombres', label: 'Nombres completos', hasModal: true },
    { key: 'nuip', label: 'NUIP' },
    { key: 'contacto', label: 'Contacto' },
    { key: 'ubicacion', label: 'Ubicación', hasModal: true }
];

export const renderModalContent1 = (row: Record<string, any>, column: any, onHide?: () => void) => {
    const modalContent = [
        {
            label: 'Contenido principal',
            content: (setView: (view: number) => void) => {
                return (
                    <>
                        Contenido principal
                        <br /><br />
                        <Button onClick={() => setView(2)} variant='unp_secondary'>Ir al contenido tres</Button>
                    </>
                )
            }

        },
        {
            label: 'Contenido dos',
            icon: FaBoxArchive,
            content: <>Contenido dos</>
        },
        {
            label: 'Contenido tres',
            content: <>Contenido tres</>
        }
    ];

    switch (column.key) {
        case "numeroRegistro":
            return (
                <ContenidoModal
                    title={row.numeroRegistro}
                    modalContent={modalContent}
                />
            );
        case "nombres":
            return (
                <ContenidoModal title={row.numeroRegistro}>
                    <Button onClick={onHide}>Cerrar</Button>
                </ContenidoModal>
            );
        default:
            return (
                <ContenidoModal title={row.numeroRegistro}>
                    No hay información adicional disponible.
                </ContenidoModal>
            );
    }
};

export const renderModalContent2 = (row: Record<string, any>) => {
    return (
        <ContenidoModal title={row.numeroRegistro}>
            Solo puede cerrarse desde el botón de cerrar!
        </ContenidoModal>
    );
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
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1017,
        "numeroRadicado": "EXT25-00145000",
        "diasHabiles": 25,
        "nombres": "Fernanda Gómez",
        "nuip": "PS XD2345678",
        "contacto": "335 789 0123",
        "ubicacion": "Guainía, Inírida",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Emergencia",
        "numeroRegistro": 1013,
        "numeroRadicado": "EXT25-00139876",
        "diasHabiles": 22,
        "nombres": "Lucía Mendoza",
        "nuip": "CC 987123654",
        "contacto": "331 345 6789",
        "ubicacion": "Guaviare, San José del Guaviare",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Colectivo",
        "numeroRegistro": 1006,
        "numeroRadicado": "EXT25-00105467",
        "diasHabiles": 15,
        "nombres": "Felipe Gutiérrez",
        "nuip": "TI 998877665",
        "contacto": "324 678 9012",
        "ubicacion": "Casanare, Yopal",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Jurídico",
        "numeroRegistro": 1014,
        "numeroRadicado": "EXT25-00140124",
        "diasHabiles": 14,
        "nombres": "Oscar Ríos",
        "nuip": "CE 654987321",
        "contacto": "332 456 7890",
        "ubicacion": "Vaupés, Mitú",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Reasignación",
        "numeroRegistro": 1012,
        "numeroRadicado": "EXT25-00139012",
        "diasHabiles": 12,
        "nombres": "Santiago Jiménez",
        "nuip": "PS YT9876543",
        "contacto": "330 234 5678",
        "ubicacion": "Arauca, Arauca",
        "estadoRegistro": "en_gestion"
    },
    {
        "tipoRuta": "Calidad",
        "numeroRegistro": 1004,
        "numeroRadicado": "EXT25-00093456",
        "diasHabiles": 12,
        "nombres": "Gabriel Morales",
        "nuip": "CE 246813579",
        "contacto": "322 456 7890",
        "ubicacion": "Magdalena, Santa Marta",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Individual",
        "numeroRegistro": 1008,
        "numeroRadicado": "EXT25-00125678",
        "diasHabiles": 10,
        "nombres": "Ricardo Peña",
        "nuip": "CC 556677889",
        "contacto": "326 890 1234",
        "ubicacion": "Putumayo, Mocoa",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Jurídico",
        "numeroRegistro": 992,
        "numeroRadicado": "EXT25-00054781",
        "diasHabiles": 10,
        "nombres": "José López",
        "nuip": "TI 612345678",
        "contacto": "315 234 5678",
        "ubicacion": "Cundinamarca, Bogotá",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Colectivo",
        "numeroRegistro": 1019,
        "numeroRadicado": "EXT25-00145678",
        "diasHabiles": 9,
        "nombres": "Valeria Suárez",
        "nuip": "CE 7531598462",
        "contacto": "337 901 2345",
        "ubicacion": "Sucre, Sincelejo",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Emergencia",
        "numeroRegistro": 1018,
        "numeroRadicado": "EXT25-00134567",
        "diasHabiles": 8,
        "nombres": "Julián Torres",
        "nuip": "CC 1597534682",
        "contacto": "336 890 1234",
        "ubicacion": "San Andrés y Providencia, San Andrés",
        "estadoRegistro": "por_gestionar"
    },
    {
        "tipoRuta": "Reasignación",
        "numeroRegistro": 993,
        "numeroRadicado": "EXT25-00071245",
        "diasHabiles": 3,
        "nombres": "Ana Rodríguez Pérez",
        "nuip": "CE 999000123",
        "contacto": "320 345 6789",
        "ubicacion": "Valle del Cauca, Cali",
        "estadoRegistro": "por_gestionar"
    }
];