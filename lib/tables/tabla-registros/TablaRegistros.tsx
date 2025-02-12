import React, { useState, useEffect, ReactNode } from "react";

import Lottie from "lottie-react";

import { Tabla } from "./tabla/Tabla.js";
import { CustomModal } from "./modal/Modal.js";
import { EncabezadoTabla } from "./encabezado/EncabezadoTabla.js";

import noData from "../../assets/animations/noData.json";
import noInfo from "../../assets/animations/noInfo.json";
import isLoadingAnimation from "../../assets/animations/isLoading.json";

import './encabezado/EncabezadoTabla.css';
import "./tabla/Tabla.css";

interface Column {
  key: string;
  label: string;
  hasModal?: boolean;
  renderComponent?: (row: Record<string, any>) => React.ReactNode;
}

interface TableProps {
  title: string;
  subtitle: string;
  columns: Column[];
  data: Array<Record<string, any>>;
  totalDias?: number;
  renderModalContent?: (row: any, column: any, onHide: () => void) => ReactNode;
  renderAlertContent?: (row: any, column: any, onHide?: () => void) => ReactNode;
  extraInput?: React.ReactNode;
  dateColumnKey?: string;
  isShared?: boolean;
  isLoading?: boolean;
  closeModalOut?: boolean;
}

const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const TablaRegistros: React.FC<TableProps> = ({
  columns,
  data,
  renderModalContent,
  renderAlertContent,
  totalDias,
  title,
  extraInput,
  subtitle,
  dateColumnKey,
  isShared = false,
  isLoading,
  closeModalOut = true
}) => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [modalData, setModalData] = useState<{
    row: Record<string, any>;
    column: any;
  } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [visibleData, setVisibleData] = useState<number>(23); // Revisar número
  const [hasMoreData, setHasMoreData] = useState<boolean>(data.length > 23); // Revisar número
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const currentYear = getCurrentYear();

  useEffect(() => {
    setShowMessage(data.length < 1);
    setVisibleData(25); // Cantidad total de datos visibles
    setHasMoreData(data.length > 25);
  }, [searchTerm, data.length]);

  const filteredData = data
    .slice()
    .sort((a, b) =>
      dateColumnKey
        ? new Date(b[dateColumnKey]).getTime() -
        new Date(a[dateColumnKey]).getTime()
        : 0
    )
    .filter((row) =>
      columns.some((column) =>
        normalizeText(String(row[column.key])).includes(
          normalizeText(searchTerm)
        )
      )
    );

  const handleCellClick = (column: any, row: Record<string, any>) => {
    if (column.hasModal && renderModalContent) {
      if (renderAlertContent && (row.estadoRegistro === 'por_gestionar' && isShared)) {
        const actionResult = renderAlertContent(row, column);
        console.log('Estado por gestionar');
        
        if (actionResult === null) return;
      } else if (row.estadoRegistro === 'en_gestion' || !isShared) {
        setModalData({ row, column });
        setShowModal(true);
      }
    }
  };

  return (
    <>
      <EncabezadoTabla
        title={title}
        subtitle={subtitle}
        data={data}
        setSearchTerm={setSearchTerm}
        extraInput={extraInput}
      />

      {isLoading ? (
        <div className="animation-container">
          <div style={{ width: 500, height: 125 }}>
            <Lottie animationData={isLoadingAnimation} loop={true} />
          </div>
          <span className="lottie">
            Actualizando y cargando registros, por favor espere...
          </span>
        </div>
      ) : showMessage ? (
        <div className="animation-container">
          <div style={{ width: 150, height: 150 }}>
            <Lottie animationData={noData} loop={true} />
          </div>
          <span className="lottie">
            No existen registros pendientes por tramitar
          </span>
        </div>
      ) : searchTerm && filteredData.length === 0 ? (
        <div className="animation-container">
          <div style={{ width: 150, height: 150 }}>
            <Lottie animationData={noInfo} loop={true} />
          </div>
          <span className="lottie">
            No se encontró registro con el criterio de búsqueda definido
          </span>
        </div>
      ) : (
        <>
          <Tabla
            columns={columns}
            filteredData={filteredData}
            tableData={filteredData}
            hasMoreData={hasMoreData}
            setHasMoreData={setHasMoreData}
            setVisibleData={setVisibleData}
            visibleData={visibleData}
            searchTerm={searchTerm}
            handleCellClick={handleCellClick}
            totalDias={totalDias}
            isShared={isShared}
          />
          <div className="d-flex justify-content-between">
            <div className="data-unp">
              {currentYear} • Unidad Nacional de Protección — UNP
            </div>
            <div className="data-count">
              Mostrando {Math.min(visibleData, filteredData.length)} de{" "}
              {filteredData.length} elementos
            </div>
          </div>
        </>
      )}

      {modalData && renderModalContent && (
        <CustomModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={`${modalData.column.label}`}
          closeModalOut={closeModalOut}
        >
          {renderModalContent(modalData.row, modalData.column, () =>
            setShowModal(false)
          )}
        </CustomModal>
      )}
    </>
  );
};

export { TablaRegistros };