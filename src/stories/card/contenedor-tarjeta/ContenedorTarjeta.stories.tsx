import type { Meta, StoryObj } from '@storybook/react';
import { ContenedorTarjeta } from '../../../../lib/cards';

const meta: Meta<typeof ContenedorTarjeta> = {
    title: 'Tarjeta/ContenedorTarjeta',
    component: ContenedorTarjeta,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Contenedor: Story = {};
