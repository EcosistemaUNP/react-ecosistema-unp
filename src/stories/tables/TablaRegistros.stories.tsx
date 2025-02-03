import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router';

import { AuthProvider } from '../../../lib/utils';
import { VentanaLienzo } from '../../../lib/shared';
import { TablaRegistros } from '../../../lib/tables';
import { columns1, data1, data2, renderModalContent1 } from './data/data';

const meta: Meta<typeof TablaRegistros> = {
  title: 'Tablas/Tabla registros',
  component: TablaRegistros,
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

export const Tabla: Story = {
  decorators: [
    (Story) => (
      <AuthProvider>
        <BrowserRouter>
          <VentanaLienzo>
            <Story />
          </VentanaLienzo>
        </BrowserRouter>
      </AuthProvider>
    )
  ],
  args: {
    title: 'Título de la tabla',
    subtitle: 'Subtítulo de la tabla',
    columns: columns1,
    data: data1,
    totalDias: 25,
    renderModalContent: renderModalContent1
  }
};

export const Loading: Story = {
  decorators: [
    (Story) => (
      <AuthProvider>
        <BrowserRouter>
          <VentanaLienzo>
            <Story />
          </VentanaLienzo>
        </BrowserRouter>
      </AuthProvider>
    )
  ],
  args: {
    title: 'Título de la tabla',
    subtitle: 'Subtítulo de la tabla',
    columns: [],
    data: [],
    isLoading: true,
  }
};

export const Shared: Story = {
  args: {
    title: 'Título de la tabla',
    subtitle: 'Subtítulo de la tabla',
    columns: columns1,
    data: data2,
    totalDias: 25,
    isShared: true,
    renderModalContent: renderModalContent1
  }
};
