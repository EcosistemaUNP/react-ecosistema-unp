import type { Meta, StoryObj } from '@storybook/react';

import { AuthProvider } from '../../../../lib/utils';
import { VentanaLienzo } from '../../../../lib/shared';

import { FaFile, FaFolder } from 'react-icons/fa6';

const meta: Meta<typeof VentanaLienzo> = {
    title: 'Ventanas/VentanaLienzo',
    component: VentanaLienzo,
    decorators: [
        (Story) => (
            <AuthProvider>
                <div style={{ maxHeight: '35rem' }}>
                    <Story />
                </div>
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
        items: {
            description: 'Elementos del breadcrumb (Opcional)'
        },
        extraInput: {
            description: 'Botones adicionales (Opcional, máximo 5)'
        }
    },
    // tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const LienzoEnBlanco: Story = {
    args: {
        children: "Aquí va el contenido del sitio"
    }
};

export const Breadcrumb: Story = {
    args: {
        items: [
            { label: 'Home', link: '/' },
            { label: 'Library', link: '/' },
            { label: 'Data' }
        ]
    }
};

export const Botones: Story = {
    args: {
        extraInput: [
            { icon: FaFile, action: () => alert('Acción dos!') },
            { icon: FaFolder, action: () => alert('Acción uno!') }
        ]
    }
};
