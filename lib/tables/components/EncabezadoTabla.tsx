import BusquedaInput from "./Buscador";

import logo from '../assets/logo.png';

interface Encabezado {
    title: string;
    subtitle: string;
    data: Array<Record<string, any>>;
    setSearchTerm: (term: string) => void;
    extraInput?: React.ReactNode;
}

const EncabezadoTabla: React.FC<Encabezado> = ({
    title,
    subtitle,
    data,
    setSearchTerm,
    extraInput
}) => {
    return (
        <div className="unp-row">
            <div className="title-container">
                <div className="logo-subtitle-container">
                    <div className="red-section"></div>
                    <img className="img-logo" src={logo} alt="logo" />
                </div>
                <div className="subtitle-container">
                    <span className="title">{title}</span>
                    <span className="subtitle">{subtitle}</span>
                </div>
            </div>

            <div className="inputs-container">
                {data.length > 0 && (
                    <BusquedaInput onSearch={setSearchTerm} />
                )}
                <div>{extraInput}</div>
            </div>

        </div>
    );
};

export { EncabezadoTabla };