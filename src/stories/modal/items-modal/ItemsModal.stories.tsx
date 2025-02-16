import type { Meta, StoryObj } from '@storybook/react';
import { ItemsModal } from '../../../../lib/ui';

const meta: Meta<typeof ItemsModal> = {
    title: 'Modal/ItemsModal',
    component: ItemsModal,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Items: Story = {};
