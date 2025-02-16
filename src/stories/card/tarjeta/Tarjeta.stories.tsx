import type { Meta, StoryObj } from '@storybook/react';
import { Tarjeta } from '../../../../lib/cards';

const meta: Meta<typeof Tarjeta> = {
    title: 'Tarjeta/Tarjeta',
    component: Tarjeta,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const TarjetaComponent: Story = {};
