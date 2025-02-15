import type { Meta, StoryObj } from '@storybook/react';

import { CustomModal } from '../../../lib/tables/tabla-registros/modal/Modal';

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
      return (
        <Story
          args={{
            show: true,
            title: "Título de la columna",
            children: (
              <>Hola!</>
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