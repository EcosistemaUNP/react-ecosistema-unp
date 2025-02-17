import type { Meta, StoryObj } from '@storybook/react';
import { ContenedorTarjeta, Tarjeta } from '../../../../lib/cards';
import { Subtitulo } from '../../../../lib/ui';
import { FaCalendar } from 'react-icons/fa6';
import { Col, FormCheck, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

const meta: Meta<typeof ContenedorTarjeta> = {
    title: 'Tarjetas/Tarjeta/ContenedorTarjeta',
    component: ContenedorTarjeta,
    args: {
        children:
            <>
                <div style={{ display: 'flex', gap: '1rem' }} className='mb-3'>
                    <span>¿Usted corrió este fin de semana?</span>
                    <FormGroup controlId="nacionalidad">
                        <FormCheck
                            type="switch"
                            id="check"
                            name="check"
                        />
                    </FormGroup>
                </div>

                <FormGroup as={Col} md="6" controlId="validationCustomUsername">
                    <FormLabel>Input</FormLabel>
                    <FormControl type="text" />
                </FormGroup>
            </>
    },
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponenteContenedorTarjeta: Story = {};

export const Ejemplo: Story = {
    decorators: [
        (Story) => (
            <Tarjeta title='Título'>
                <Subtitulo icon={FaCalendar} subtitle='Subtítulo' />
                <Row className="mb-3">
                    <FormGroup as={Col} md="4" controlId="validationCustom01">
                        <FormLabel>Input</FormLabel>
                        <FormControl type="text" />
                    </FormGroup>
                    <FormGroup as={Col} md="4" controlId="validationCustom02">
                        <FormLabel>Input</FormLabel>
                        <FormControl type="text" />
                    </FormGroup>
                    <FormGroup as={Col} md="4" controlId="validationCustomUsername">
                        <FormLabel>Input</FormLabel>
                        <FormControl type="text" />
                    </FormGroup>
                </Row>
                <Story />
            </Tarjeta>
        )
    ],
};
