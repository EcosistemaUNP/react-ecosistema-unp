import type { Meta, StoryObj } from '@storybook/react';
import { CustomModal } from '../../../lib/tables/components/Modal';
import { TituloModal } from '../../../lib/ui';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FaBoxArchive, FaClockRotateLeft } from 'react-icons/fa6';

const meta: Meta<typeof CustomModal> = {
  title: 'Modal/Modal',
  component: CustomModal,
  // decorators: [
  //     (Story) => (
  //         <AuthProvider>
  //             <BrowserRouter>
  //             <VentanaLienzo>
  //                 <Story />
  //             </VentanaLienzo>
  //             </BrowserRouter>
  //         </AuthProvider>
  //     )
  // ],
  parameters: {
    layout: 'fullscreen',
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  decorators: [
    (Story) => {
      // Estado del modal
      const [showUno, setShowUno] = useState(false);
      const [showDos, setShowDos] = useState(false);
      const [showTres, setShowTres] = useState(false);
      const [isShowing, setIsShowing] = useState(false);

      // Botones del modal
      const buttons = [
        {
          title: "Contenido uno",
          icon: FaBoxArchive,
          onShow: () => {
            setShowDos(true);
            setIsShowing(true);
          },
        },
        {
          title: "Contenido dos",
          icon: FaClockRotateLeft,
          onShow: () => {
            setShowUno(true);
            setIsShowing(true);
          },
        },
      ];

      // Mock de datos para la row (si es necesario)
      const row = {
        numeroRegistro: "1001",
      };

      useEffect(() => {
          if (!isShowing) {
            setShowUno(false);
            setShowDos(false);
            setShowTres(false);
          }
        }, [isShowing])

      return (
        <Story
          args={{
            show: true,
            title: "Título de la columna",
            children: (
              <TituloModal
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
                  <Button
                    onClick={() => {
                      setShowTres(true);
                      setIsShowing(true);
                    }}
                  >
                    Ir a contenido tres
                  </Button>
                )}
              </TituloModal>
            ),
          }}
        />
      );
    },
  ],
  args: {
    // Args básicos (pueden estar vacíos si se pasan desde el decorador)
    show: false,
    title: "",
    children: <></>,
  },
};