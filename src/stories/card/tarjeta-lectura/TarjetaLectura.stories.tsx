import type { Meta, StoryObj } from '@storybook/react';
import { TarjetaLectura } from '../../../../lib/cards';

const meta: Meta<typeof TarjetaLectura> = {
    title: 'Tarjetas/Tarjeta lectura/TarjetaLectura',
    component: TarjetaLectura,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Tarjeta: Story = {};
