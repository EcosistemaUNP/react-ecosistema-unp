import React from "react";
import { Table } from "react-bootstrap";
import { FaGripLines } from "react-icons/fa6";

import '../styles/Tabla.css'

interface Column {
  key: string;
  label: string;
  hasModal?: boolean;
  renderComponent?: (row: Record<string, any>) => React.ReactNode;
}

interface TablaProps {
  columns: Column[];
  filteredData: Array<Record<string, any>>;
  tableData: Array<Record<string, any>>;
  hasMoreData: boolean;
  setHasMoreData: (bool: boolean) => void;
  setVisibleData: any;
  visibleData: number;
  searchTerm: string;
  handleCellClick: (column: any, row: Record<string, any>) => void;
  totalDias?: number;
  isShared: boolean;
}

const Tabla: React.FC<TablaProps> = ({
  columns,
  filteredData,
  tableData,
  hasMoreData,
  setHasMoreData,
  visibleData,
  setVisibleData,
  handleCellClick,
  totalDias,
  isShared,
}) => {

  const getBackgroundAndTextColor = (diasHabiles: number) => {
    if (totalDias) {
      const porcentaje = (diasHabiles / totalDias) * 100;
      if (porcentaje <= 25)
        return { backgroundColor: "#3AB34A", color: "#FFFFFF" };
      if (porcentaje <= 50)
        return { backgroundColor: "#F8EB10", color: "#000000" };
      if (porcentaje <= 75)
        return { backgroundColor: "#F79122", color: "#000000" };
      return { backgroundColor: "#E91720", color: "#FFFFFF" };
    }
    return { backgroundColor: "transparent", color: "inherit" };
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 50 && hasMoreData) {
      setVisibleData((prev: any) => {
        const newVisibleData = prev + 5;
        if (newVisibleData >= filteredData.length) {
          setHasMoreData(false);
        }
        return Math.min(newVisibleData, filteredData.length);
      });
    }
  };

  return (
    <div className="table_container">
      <div className="table-scroll" onScroll={handleScroll}>
        <Table striped hover>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="table-header-unp">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>

            {tableData.slice(0, visibleData).map((row, rowIndex) => (

              <React.Fragment key={rowIndex}>
                <tr>
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      onClick={() => handleCellClick(column, row)}
                      style={{
                        cursor: column.hasModal ? "pointer" : "default",
                      }}
                      className={column.hasModal ? "cell-with-modal" : ""}
                    >
                      {column.key === "diasHabiles" ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              padding: "8px",
                              borderRadius: "100px",
                              width: "40px",
                              backgroundColor: getBackgroundAndTextColor(
                                row.diasHabiles
                              ).backgroundColor,
                              color: getBackgroundAndTextColor(
                                row.diasHabiles
                              ).color,
                            }}
                          >
                            <span>{row.diasHabiles}</span>
                          </div>
                        </div>
                      ) : column.renderComponent ? (
                        column.renderComponent(row)
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
                {isShared && row.estadoRegistro === "en_gestion" && !filteredData.some(r => r.estadoRegistro === "en_gestion" && filteredData.indexOf(r) > rowIndex) && (
                  <tr>
                    <td colSpan={columns.length} className="text-center" style={{ padding: '0 2rem 0 2rem' }}>
                      <div style={{
                        minHeight: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: '600',
                        color: '#303D50'
                      }}>
                        <FaGripLines style={{ color: '#a1a1a1' }} />
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>

            ))}

            {hasMoreData && (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  Cargando más datos...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export { Tabla };