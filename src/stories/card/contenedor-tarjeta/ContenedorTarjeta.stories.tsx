import type { Meta, StoryObj } from '@storybook/react';
import { ContenedorTarjeta, Tarjeta } from '../../../../lib/cards';
import { Subtitulo } from '../../../../lib/ui';
import { FaCalendar } from 'react-icons/fa6';
import { FormCheck, FormGroup } from 'react-bootstrap';
import { useState } from 'react';

const meta: Meta<typeof ContenedorTarjeta> = {
    title: 'Tarjetas/Tarjeta/ContenedorTarjeta',
    component: ContenedorTarjeta,
    args: {
        children:
            <div style={{ display: 'flex', gap: '1rem' }}>
                <span>¿Usted corrió este fin de semana?</span>
                <FormGroup controlId="nacionalidad">
                    <FormCheck
                        type="switch"
                        id="check"
                        name="check"
                    />
                </FormGroup>
            </div>
    },
    argTypes: {
        isGray: {
            description: 'Cambia el fondo de la tarjeta a gris'
        }
    },
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponenteContenedorTarjeta: Story = {};

export const Ejemplo: Story = {
    decorators: [
        () => {
            const [check, setCheck] = useState(true);
            return (
                <Tarjeta title='Título'>
                    <Subtitulo icon={FaCalendar} subtitle='Subtítulo' />
                    <ContenedorTarjeta>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <span>¿Usted corrió este fin de semana?</span>
                            <FormGroup controlId="nacionalidad">
                                <FormCheck
                                    type="switch"
                                    id="check"
                                    name="check"
                                    checked={check}
                                    onChange={(e) => setCheck(e.target.checked)}
                                    label={
                                        <>
                                            {check ? " Sí" : " No"}
                                        </>
                                    }
                                />
                            </FormGroup>
                        </div>
                    </ContenedorTarjeta>
                </Tarjeta>
            );
        }
    ],
};
