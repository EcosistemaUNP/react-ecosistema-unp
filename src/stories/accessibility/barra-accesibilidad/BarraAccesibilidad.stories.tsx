import type { Meta, StoryObj } from '@storybook/react';

import { BarraAccesibilidad } from '../../../../lib/accessibility';

const meta: Meta<typeof BarraAccesibilidad> = {
    title: 'Accesibilidad/BarraAccesibilidad',
    component: BarraAccesibilidad,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BarraDeAccesibilidad: Story = {};
