import type { Meta, StoryObj } from '@storybook/react';
import { NuevoElemento, Tarjeta } from '../../../../lib/cards';
import { Button, Col, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Subtitulo } from '../../../../lib/ui';
import { FaBook } from 'react-icons/fa6';

const meta: Meta<typeof NuevoElemento> = {
    title: 'Tarjetas/Tarjeta/NuevoElemento',
    component: NuevoElemento,
    args: {
        children:
            <>
                <Row>
                    <FormGroup as={Col} md="6" controlId="validationCustomUsername">
                        <FormLabel>Input</FormLabel>
                        <FormControl type="text" />
                    </FormGroup>
                    <FormGroup as={Col} md="6" controlId="validationCustomUsername">
                        <FormLabel>Input</FormLabel>
                        <FormControl type="text" />
                    </FormGroup>
                </Row>
            </>
    },
    argTypes: {
        label: {
            description: 'Subtítulo de la tarjeta (Opcional)'
        },
        onClose: {
            description: 'Acción a ejecutar al oprimir la basurita'
        },
        isGray: {
            description: 'Cambia el fondo de la tarjeta a gris'
        }
    },
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponenteNuevoElemento: Story = {};

export const Ejemplo: Story = {
    decorators: [
        (Story) => (
            <Tarjeta title='Título'>
                <Subtitulo 
                icon={FaBook} 
                subtitle='Libro' 
                extraInput={<Button variant='unp_primary'>Agregar</Button>}
                />
                <Story />
            </Tarjeta>
        )
    ],
    args: {
        label: 'Libro 1'
    }
};
