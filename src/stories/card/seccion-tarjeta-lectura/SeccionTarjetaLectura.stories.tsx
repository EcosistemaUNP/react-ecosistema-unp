import type { Meta, StoryObj } from '@storybook/react';
import { SeccionTarjetaLectura } from '../../../../lib/cards';

const meta: Meta<typeof SeccionTarjetaLectura> = {
    title: 'Tarjetas/Tarjeta lectura/SeccionTarjetaLectura',
    component: SeccionTarjetaLectura,
    argTypes: {
        title: {
            description: 'Título de la sección'
        },
        hasPaddingTop: {
            description: 'Control para el padding superior del contenido de la tarjeta'
        }
    },
    args: {
        title: 'Título de la sección',
        children:
            <>
                Mauris et tincidunt tortor, in maximus ligula. Fusce tincidunt tortor in arcu viverra laoreet. Quisque aliquam sit amet neque sit amet cursus. Morbi eu mi feugiat, accumsan ex vitae, pellentesque libero. Nullam quis ex ante. Morbi rutrum ac lorem at vestibulum. Suspendisse mi mauris, placerat vel nisl a, fermentum suscipit est. Quisque faucibus libero nunc, non euismod enim molestie in. Sed dui quam, scelerisque vel feugiat sed, sodales sit amet ex. Vivamus vel pharetra sapien. Pellentesque vehicula rutrum mauris, vel tincidunt lacus scelerisque ac.
            </>
    },
    tags: ['!dev'],
    parameters: {
        docs: {
            source: {
                code: 'Mirar documentación'
            }
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const SecciónTarjetaLectura: Story = {};
