import type { Meta, StoryObj } from '@storybook/react';
import { TarjetaInfo } from '../../../../lib/cards';
import { FaDatabase } from 'react-icons/fa6';

const meta: Meta<typeof TarjetaInfo> = {
    title: 'Tarjetas/TarjetaInfo',
    component: TarjetaInfo,
    argTypes: {
        icon: {
            description: 'Icono del label'
        },
        show: {
            description: 'Controla la visibilidad de la tarjeta (por defecto está oculta, opcional)'
        }
    },
    args: {
        icon: FaDatabase,
        label: 'Datos',
        children:
            <>
                Integer tristique eros non quam euismod volutpat. Nulla eleifend ultricies eros a sollicitudin. Donec quis magna elit. Phasellus ac odio imperdiet, lobortis nisl a, laoreet nisl. Suspendisse vel ante non mi cursus laoreet. Quisque dictum dapibus enim fermentum egestas. Etiam sed libero massa. Proin posuere ex efficitur, luctus urna vitae, porta tortor. Morbi porta bibendum ante sed efficitur. Nullam non elementum urna. Vivamus auctor lacus ex, eget lacinia tortor commodo non.
            </>
    },
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponenteTarjetaInfo: Story = {};
