import React from "react";
import { IconType } from "react-icons";

interface StepContent {
  label: string;
  icon: IconType;
  content: React.ReactElement | React.ReactElement[];
  handleNextClick: (e: any) => void; // Falta definir el tipado
}

interface PaginadorProps {
  stepContent: StepContent[];
  handleSend: (e: any) => void; // Falta definir el tipado
}

const Paginador: React.FC<PaginadorProps> = ({ stepContent, handleSend }) => {

  const displayedSteps = stepContent.slice(0, stepContent.length);

  return (
    <ul id="progressbar">
      {stepContent.map((step, index) => (
        <li
        key={index}
        className={index + 1 <= currentStep ? "active" : ""}
        onClick={() => onStepClick(index + 1)}
      >
        <div className={`step ${index + 1 <= currentStep ? "active" : ""}`}>
          {step.icon}
        </div>
        <strong>{step.label}</strong>
      </li>
      ))}
      {displayedSteps.map((step, index) => (
        <li
          key={index}
          className={index + 1 <= currentStep ? "active" : ""}
          onClick={() => onStepClick(index + 1)}
        >
          <div className={`step ${index + 1 <= currentStep ? "active" : ""}`}>
            {step.icon}
          </div>
          <strong>{step.label}</strong>
        </li>
      ))}
    </ul>
  );
};

export { Paginador };
