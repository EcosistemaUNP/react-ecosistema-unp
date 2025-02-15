import type { Meta, StoryObj } from '@storybook/react';

import { TabVentana } from '../../../../lib/shared/tab-ventana/TabVentana';

const meta: Meta<typeof TabVentana> = {
    title: 'Ventanas/TabVentana',
    component: TabVentana,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const TabVentanaStory: Story = {};
