import type { Meta, StoryObj } from '@storybook/react';
import { Tarjeta } from '../../../../lib/cards';
import { Col, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Subtitulo } from '../../../../lib/ui';
import { FaUser } from 'react-icons/fa6';

const meta: Meta<typeof Tarjeta> = {
    title: 'Tarjetas/Tarjeta/Tarjeta',
    component: Tarjeta,
    argTypes: {
        title: {
            description: 'Título de la tarjeta'
        },
        header: {
            description: 'Centra el título de la tarjeta'
        },
        method: {
            description: 'Método del formulario. ("get", "post", "put")'
        },
        hasPaddingTop: {
            description: 'Control para el padding superior del contenido de la tarjeta'
        }
    },
    args: {
        title: 'Título de la tarjeta',
        children:
            <>
                <Subtitulo icon={FaUser} subtitle='Subtítulo' />
                <p>
                    Praesent molestie ipsum eros, nec congue dolor blandit nec. Mauris non dapibus ligula. In vestibulum turpis eget eros consectetur molestie. Vestibulum eu mauris justo. Integer sed bibendum turpis, id dignissim purus. Nulla facilisis, magna et dictum sagittis, nibh metus pharetra odio, ac efficitur eros lectus id risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla purus mauris, aliquam ut justo ut, feugiat consectetur ante. Proin at ex varius, mollis metus at, ultrices nunc. Aenean lectus diam, tincidunt ut imperdiet ac, malesuada non nisl. Vivamus sodales sem tortor, non suscipit felis tincidunt eu.
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
            </>,
        hasPaddingTop: false
    },
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponenteTarjeta: Story = {};

export const Header: Story = {
    args: {
        title: 'Título',
        header: true
    }
}
