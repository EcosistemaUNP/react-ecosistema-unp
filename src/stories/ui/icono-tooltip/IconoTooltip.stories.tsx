import type { Meta, StoryObj } from '@storybook/react';
import { IconoTooltip } from '../../../../lib/ui';

const meta: Meta<typeof IconoTooltip> = {
    title: 'UI/IconoTooltip',
    component: IconoTooltip,
    args: {
        recordType: 'Individual'
    },
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Icono: Story = {};
