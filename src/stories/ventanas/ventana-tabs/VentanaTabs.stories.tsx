import type { Meta, StoryObj } from '@storybook/react';

import { AuthProvider } from '../../../../lib/utils';
import { VentanaTabs } from '../../../../lib/shared/ventana-tabs/VentanaTabs';
import { TabVentana } from '../../../../lib/shared/tab-ventana/TabVentana';
import { FaFile, FaFolder } from 'react-icons/fa6';

const meta: Meta<typeof VentanaTabs> = {
    title: 'Ventanas/VentanaTabs',
    component: VentanaTabs,
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
    argTypes: {
        extraInput: {
            description: 'Botones adicionales (Opcional, máximo 5)'
        }
    },
    // tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
    decorators: [
        () => (
            <VentanaTabs>
                <TabVentana eventKey="idTabUno" title={'Pestaña uno'}>
                    <div>
                        Contenido de la pestaña uno...
                    </div>
                </TabVentana>
                <TabVentana eventKey="idTabDos" title={'Pestaña dos'}>
                    <div>
                        Contenido de la pestaña dos...
                    </div>
                </TabVentana>
            </VentanaTabs>
        )
    ],
};

export const Botones: Story = {
    decorators: [
        () => {
            const buttons = [
                { icon: FaFile, action: () => alert('Acción dos!') },
                { icon: FaFolder, action: () => alert('Acción uno!') }
            ];

            return (
                <VentanaTabs extraInput={buttons}>
                    <TabVentana eventKey="idTabUno" title={'Pestaña uno'}>
                        <div>
                            Contenido de la pestaña uno...
                        </div>
                    </TabVentana>
                    <TabVentana eventKey="idTabDos" title={'Pestaña dos'}>
                        <div>
                            Contenido de la pestaña dos...
                        </div>
                    </TabVentana>
                </VentanaTabs>
            )
        }
    ]
};
