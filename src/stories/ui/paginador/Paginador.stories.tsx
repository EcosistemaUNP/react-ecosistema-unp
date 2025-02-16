import type { Meta, StoryObj } from '@storybook/react';
import { Paginador } from '../../../../lib/ui';

const meta: Meta<typeof Paginador> = {
    title: 'UI/Paginador',
    component: Paginador,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const EncabezadoPagina: Story = {};
