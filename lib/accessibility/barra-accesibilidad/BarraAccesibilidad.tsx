import { useState, useEffect } from 'react';

import './BarraAccesibilidad.css';

const BarraAccesibilidad = () => {
  const [isContrast, setIsContrast] = useState(false);
  const [fontSizeDelta, setFontSizeDelta] = useState(0);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const FONT_LIMITS = { MIN: -2, MAX: 5 };

  // Efecto para modo contraste
  useEffect(() => {
    if (isContrast) {
      document.body.classList.add('contrast-govco');
    } else {
      document.body.classList.remove('contrast-govco');
    }
  }, [isContrast]);

  // Efecto para tamaño de fuente
  useEffect(() => {
    document.documentElement.style.fontSize = `${100 + (fontSizeDelta * 10)}%`;
  }, [fontSizeDelta]);

  const handleContrast = () => {
    setIsContrast(!isContrast);
    setActiveButton(prev => prev === 'contrast' ? null : 'contrast');
  };

  const handleFontSize = (operation: 'increase' | 'decrease') => {
    setFontSizeDelta(prev => {
      const newDelta = operation === 'increase' ? prev + 1 : prev - 1;
      
      if (newDelta < FONT_LIMITS.MIN || newDelta > FONT_LIMITS.MAX) return prev;
      
      setActiveButton(operation);
      return newDelta;
    });
  };

  return (
    <div className="">
      <div className="barra-accesibilidad-govco">
        <button
          className={`contrast ${activeButton === 'contrast' ? 'active' : ''}`}
          aria-label="Cambiar contraste"
          onClick={handleContrast}
        >
          <span className="govco-contrast" />
        </button>

        <button
          className={`decrease-font-size ${activeButton === 'decrease' ? 'active' : ''}`}
          aria-label="Disminuir letra"
          onClick={() => handleFontSize('decrease')}
          data-decrease-limit={FONT_LIMITS.MIN}
        >
          <span className="govco-font-minimize" />
        </button>

        <button
          className={`increase-font-size ${activeButton === 'increase' ? 'active' : ''}`}
          aria-label="Aumentar letra"
          onClick={() => handleFontSize('increase')}
          data-increase-limit={FONT_LIMITS.MAX}
        >
          <span className="govco-font-maximize" />
        </button>
      </div>
    </div>
  );
};

export { BarraAccesibilidad };