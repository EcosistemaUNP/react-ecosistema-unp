import type { Meta, StoryObj } from '@storybook/react';
import { ContenidoModal } from '../../../../lib/ui';

const meta: Meta<typeof ContenidoModal> = {
    title: 'Modal/ContenidoModal',
    component: ContenidoModal,
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Contenido: Story = {};
