import type { Meta, StoryObj } from '@storybook/react';
import { NuevoElemento } from '../../../../lib/cards';

const meta: Meta<typeof NuevoElemento> = {
    title: 'Tarjeta/NuevoElemento',
    component: NuevoElemento,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const TarjetaNuevoElemento: Story = {};
