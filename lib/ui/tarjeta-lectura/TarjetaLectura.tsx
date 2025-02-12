import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { IconType } from "react-icons";

import './TarjetaLectura.css'
import { Logo } from "../logo/Logo";
import { SeccionTarjetaLectura } from "./seccion-tarjeta-lectura/SeccionTarjetaLectura";

interface StepContent {
  label: string;
  icon: IconType;
  content: React.ReactElement | React.ReactElement[];
}

type TarjetaLecturaProps = ({
  title: string;
  subtitle: string;
  headerContent: React.ReactNode;
  stepContent: StepContent[];
  children?: never;
} | {
  title: string;
  subtitle: string;
  headerContent: React.ReactNode;
  stepContent?: never;
  children: React.ReactNode;
})

const TarjetaLectura: React.FC<TarjetaLecturaProps> = ({ title, subtitle, headerContent, stepContent, children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const paginadorRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (paginadorRef.current) {
      paginadorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [currentStep]);

  return (
    <>
      <form className="form_qy">
        {/* Encabezado de la tarjeta */}
        <div className='main_title_container_qy'>
          <div className='subtitle_container_qy'>
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
          </div>
          <div className='logo_container_qy'>
            <Logo type="entidad" variant="unidad" color="rojo" height="80px" />
          </div>
        </div>

        <div className="section_header_container_qy">
          {headerContent}
        </div>

        {/* Si hay paginador */}
        {stepContent ? (
          <>
            <SeccionTarjetaLectura title="Secciones">
              <ul ref={paginadorRef} id="paginador-tarjeta-lectura">
                {stepContent.map((step, index) => (
                  <li
                    key={index}
                    className={index <= currentStep ? "active" : ""}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className={`step ${index <= currentStep ? "active" : ""}`}>
                      <step.icon />
                    </div>
                    <strong>{step.label}</strong>
                  </li>
                ))}
              </ul>
            </SeccionTarjetaLectura>

            {/* Contenido de la página */}
            <div>
              {stepContent[currentStep].content}
            </div>
          </>
        ) : children && (
          <>
            {/* Contenido de la página */}
            <div>
              {children}
            </div>
          </>
        )}

      </form>

      {/* Sección de botones cuando tiene paginador */}
      {stepContent && (
        <>
          {/* Sección con botones */}
          <div className="paginador-buttons" style={{ display: 'flex', justifyContent: 'end' }}>
            {currentStep > 0 && (
              <Button
                variant="unp_secondary"
                onClick={() => setCurrentStep(currentStep - 1)}
                style={{
                  marginRight: '1rem'
                }}
              >
                Anterior
              </Button>
            )}
            {currentStep < stepContent.length - 1 && (
              <Button
                variant="unp_primary"
                style={{ justifySelf: 'end' }}
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Siguiente
              </Button>
            )}
            {/* {currentStep === stepContent.length - 1 && (
              <Button
                type="submit"
                variant="unp_send"
                onClick={onSubmit}
              >
                Enviar
              </Button>
            )} */}
          </div>
        </>
      )}
    </>
  );
};

export { TarjetaLectura };
