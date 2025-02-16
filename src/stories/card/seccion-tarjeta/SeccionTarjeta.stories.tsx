import type { Meta, StoryObj } from '@storybook/react';
import { SeccionTarjeta } from '../../../../lib/cards';

const meta: Meta<typeof SeccionTarjeta> = {
    title: 'Tarjeta/SeccionTarjeta',
    component: SeccionTarjeta,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Seccion: Story = {};
