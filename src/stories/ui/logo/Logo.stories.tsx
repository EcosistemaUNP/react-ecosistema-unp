import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../../../../lib/ui';

const meta: Meta<typeof Logo> = {
    title: 'UI/Logo',
    component: Logo,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Logos: Story = {};
