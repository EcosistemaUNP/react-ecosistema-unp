import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router';

import { AuthProvider } from '../../../lib/utils';
import { VentanaTabs } from '../../../lib/shared/components/VentanaTabs';

const meta: Meta<typeof VentanaTabs> = {
    title: 'Shared/Ventana tabs',
    component: VentanaTabs,
    decorators: [
        (Story) => (
            <AuthProvider>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </AuthProvider>
        )
    ],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        children: <div>Aquí va el contenido del sitio</div>,
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Contenido que se pasa dentro de VentanaLienzo',
        },
    },
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Lienzo: Story = {};
