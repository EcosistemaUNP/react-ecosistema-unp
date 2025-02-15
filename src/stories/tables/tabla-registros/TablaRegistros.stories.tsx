import type { Meta, StoryObj } from '@storybook/react';

import { TablaRegistros } from '../../../../lib/tables';
import { columns1, columns2, data1, data2, renderModalContent1, renderModalContent2 } from '../data/data';
import { Button } from 'react-bootstrap';

const meta: Meta<typeof TablaRegistros> = {
  title: 'Tablas/Tabla registros',
  component: TablaRegistros,
  // parameters: {
  //   layout: 'fullscreen',
  // }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Tabla: Story = {
  args: {
    title: 'Título de la tabla',
    subtitle: 'Subtítulo de la tabla',
    columns: columns1,
    data: data1,
    totalDias: 25,
    renderModalContent: renderModalContent1
  }
};

export const Shared: Story = {
  args: {
    title: 'Título de la tabla',
    subtitle: 'Subtítulo de la tabla',
    columns: columns2,
    data: data2,
    totalDias: 25,
    isShared: true,
    renderModalContent: renderModalContent1,
    alertAction: () => alert('El registro ha sido tomado!')
  }
};

export const Loading: Story = {
  args: {
    title: 'Título de la tabla',
    subtitle: 'Subtítulo de la tabla',
    columns: [],
    data: [],
    isLoading: true,
  }
};

export const CloseModal: Story = {
  args: {
    title: 'Título de la tabla',
    subtitle: 'Subtítulo de la tabla',
    columns: columns1,
    data: data1,
    totalDias: 25,
    renderModalContent: renderModalContent2,
    closeModalOut: false
  }
};

export const ExtraInput: Story = {
  args: {
    title: 'Título de la tabla',
    subtitle: 'Subtítulo de la tabla',
    columns: columns1,
    data: data1,
    totalDias: 25,
    renderModalContent: renderModalContent1,
    extraInput: (<Button variant='unp_primary' onClick={() => alert('Clickeaste el botón!')}>Botón</Button>)
  }
};