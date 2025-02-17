import type { Meta, StoryObj } from '@storybook/react';
import { ContenedorVentana } from '../../../../lib/ui';

const meta: Meta<typeof ContenedorVentana> = {
    title: 'UI/ContenedorVentana',
    component: ContenedorVentana,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const EncabezadoPagina: Story = {};
