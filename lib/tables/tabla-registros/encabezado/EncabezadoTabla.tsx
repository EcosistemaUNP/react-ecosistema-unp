import { Encabezado } from "../../../ui";
import { BusquedaInput } from "../buscador/Buscador";


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
            <Encabezado titulo={title} subtitulo={subtitle} />

            <div className="inputs-container">
                {data.length > 0 && (
                    <BusquedaInput onSearch={setSearchTerm} />
                )}
                {extraInput &&
                    <div>{extraInput}</div>
                }
            </div>

        </div>
    );
};

export { EncabezadoTabla };