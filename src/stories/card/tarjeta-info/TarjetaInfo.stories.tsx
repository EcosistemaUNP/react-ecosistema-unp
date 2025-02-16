import type { Meta, StoryObj } from '@storybook/react';
import { TarjetaInfo } from '../../../../lib/cards';

const meta: Meta<typeof TarjetaInfo> = {
    title: 'Tarjeta/TarjetaInfo',
    component: TarjetaInfo,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const EncabezadoPagina: Story = {};
