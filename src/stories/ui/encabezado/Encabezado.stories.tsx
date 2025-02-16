import type { Meta, StoryObj } from '@storybook/react';
import { Encabezado } from '../../../../lib/ui';

const meta: Meta<typeof Encabezado> = {
    title: 'UI/Encabezado',
    component: Encabezado,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const EncabezadoPagina: Story = {};
