import type { Meta, StoryObj } from '@storybook/react';
import { SeccionTarjeta, Tarjeta } from '../../../../lib/cards';
import { Subtitulo } from '../../../../lib/ui';
import { FaUser, FaUsers } from 'react-icons/fa6';
import { Col, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

const meta: Meta<typeof SeccionTarjeta> = {
    title: 'Tarjetas/Tarjeta/SeccionTarjeta',
    component: SeccionTarjeta,
    decorators: [
        () => (
            <Tarjeta title='Título'>
                <SeccionTarjeta>
                    <Subtitulo icon={FaUser} subtitle='Subtítulo' />
                    <p>
                        Sed aliquet pretium risus, vitae bibendum odio malesuada eget. Fusce blandit urna laoreet dolor pharetra volutpat. Sed sagittis eget massa eu faucibus. Sed finibus metus mollis consectetur vulputate. Maecenas et mauris euismod massa pretium pretium eget vitae nisi. In hac habitasse platea dictumst. Praesent commodo sagittis lectus, id tincidunt est aliquam eget. Nam a feugiat dolor. Duis augue sapien, tincidunt ac tortor quis, cursus fringilla felis. In accumsan dignissim felis ut tincidunt. Vivamus semper, risus eget venenatis tempus, nisi nulla convallis ligula, quis tristique urna dui et ligula.
                    </p>
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
                </SeccionTarjeta>
                <SeccionTarjeta>
                    <Subtitulo icon={FaUsers} subtitle='Subtítulo' />
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
                    <p>
                        Fusce et cursus dolor. Sed id tellus ac nibh porta malesuada ut quis diam. Integer placerat leo nisi, non facilisis diam gravida nec. Integer eleifend nisl ex, vel laoreet nunc molestie ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut pharetra commodo nulla id bibendum. Integer auctor, leo vel placerat tristique, massa massa pharetra sapien, nec facilisis nibh velit sed elit.
                    </p>
                </SeccionTarjeta>
            </Tarjeta>
        )
    ],
    argTypes: {
        isGray: {
            description: 'Cambia el fondo de la tarjeta a gris'
        },
        isLast: {
            description: 'Si la última sección es gris debe aplicarse'
        },
        hasPaddingTop: {
            description: 'Control para el padding superior del contenido de la tarjeta'
        }
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

export const ComponenteSecciónTarjeta: Story = {};
