import type { Meta, StoryObj } from '@storybook/react';
import { SeccionTarjetaLectura } from '../../../../lib/cards';

const meta: Meta<typeof SeccionTarjetaLectura> = {
    title: 'Tarjeta/SeccionTarjetaLectura',
    component: SeccionTarjetaLectura,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Seccion: Story = {};
