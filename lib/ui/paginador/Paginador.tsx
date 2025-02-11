import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { IconType } from "react-icons";

import './Paginador.css'

interface StepContent {
  label: string;
  icon: IconType;
  content: React.ReactElement | React.ReactElement[];
  handleNextClick?: (...args: any[]) => any;
}

interface PaginadorProps {
  stepContent: StepContent[];
  onSubmit?: (...args: any[]) => any; // Falta definir el tipado
}

const Paginador: React.FC<PaginadorProps> = ({ stepContent, onSubmit }) => {

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      {/* Tarjeta con el páginador */}
      <Card className="border-0 paginador-card">
        <ul id="progressbar">
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
      </Card>

      {/* Contenido de la página */}
      <div className="paginador-content">
        {stepContent[currentStep].content}
      </div>

      {/* Sección con botones */}
      <div className="paginador-buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {currentStep > 0 && (
          <Button
            variant="unp_secondary"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Anterior
          </Button>
        )}
        {currentStep < stepContent.length - 1 && (
          <Button
            variant="unp_primary"
            style={{ justifySelf: 'end' }}
            onClick={() => {
              stepContent[currentStep].handleNextClick && stepContent[currentStep].handleNextClick();
              setCurrentStep(currentStep + 1);
            }}
          >
            Siguiente
          </Button>
        )}
        {currentStep === stepContent.length - 1 && (
          <Button
            type="submit"
            variant="success"
            onClick={onSubmit}
          >
            Enviar
          </Button>
        )}
      </div>
    </>
  );
};

export { Paginador };
