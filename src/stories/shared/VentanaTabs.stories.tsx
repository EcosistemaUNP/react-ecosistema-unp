import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../../../lib/utils';
import { VentanaTabs } from '../../../lib/shared/ventana-tabs/VentanaTabs';
import { TabVentana } from '../../../lib/shared/ventana-tabs/TabVentana';

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
    render: () => (
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
    ),
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const TabsWindow: Story = {};
