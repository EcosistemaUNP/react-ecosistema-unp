import type { Meta, StoryObj } from '@storybook/react';
import { Subtitulo } from '../../../../lib/ui';

const meta: Meta<typeof Subtitulo> = {
    title: 'UI/Subtitutlo',
    component: Subtitulo,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Subtitulos: Story = {};
