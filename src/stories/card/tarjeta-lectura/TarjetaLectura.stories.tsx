import type { Meta, StoryObj } from '@storybook/react';
import { ContenedorTarjeta, SeccionTarjetaLectura, TarjetaLectura } from '../../../../lib/cards';
import { Col, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Subtitulo } from '../../../../lib/ui';
import { FaClipboard, FaFaceGrin, FaLocationDot, FaMap, FaPhone, FaUser } from 'react-icons/fa6';

const meta: Meta<typeof TarjetaLectura> = {
    title: 'Tarjetas/Tarjeta lectura/TarjetaLectura',
    component: TarjetaLectura,
    args: {
        title: 'Título de la tarjeta',
        subtitle: 'Subtítulo de la tarjeta',
        headerContent:
            <>
                Contenido del header de la tarjeta
            </>
    },
    tags: ['!dev']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const TarjetaUnaPágina: Story = {
    args: {
        children:
            <SeccionTarjetaLectura title='Título de la sección'>
                Aliquam ac augue mattis augue dignissim blandit. Morbi lacinia enim et erat ornare tristique. Etiam tincidunt orci eget dolor hendrerit, nec ultricies ex pharetra. Mauris venenatis arcu nec vehicula suscipit. Ut venenatis bibendum egestas. Curabitur in viverra leo. Fusce sodales turpis a laoreet dictum. Donec ultrices sed elit id commodo. Suspendisse velit nulla, rhoncus id lacus nec, interdum lobortis leo. Nulla facilisi. Morbi ut accumsan elit, nec ultricies ante. Maecenas enim velit, dictum quis lacus at, fermentum lobortis nulla. Pellentesque scelerisque lectus ac erat pretium tincidunt. Donec imperdiet mollis massa, ac accumsan quam congue vel. Praesent eleifend molestie ullamcorper. Duis ullamcorper bibendum tellus, eget fermentum arcu fermentum ac.
                <Subtitulo icon={FaLocationDot} subtitle='Subtítulo' />
                <Row className="mb-3">
                    <FormGroup as={Col} md="6" controlId="validationCustom01">
                        <FormLabel>Input</FormLabel>
                        <FormControl type="text" />
                    </FormGroup>
                </Row>
                <ContenedorTarjeta>
                    Nam non rhoncus risus. Quisque pulvinar, diam quis ultricies dapibus, mi est porta est, ac viverra turpis nisl sed magna. Vestibulum suscipit vitae nulla ac ornare. Donec sollicitudin sapien a metus accumsan, vel luctus quam semper. Donec in neque sit amet velit vehicula egestas. Vestibulum vitae iaculis justo, ut maximus massa. Duis id hendrerit nunc, sed commodo magna. Proin id nibh non lorem pharetra gravida. Nullam cursus pretium erat, et porttitor mauris hendrerit faucibus.
                </ContenedorTarjeta>
            </SeccionTarjetaLectura>
    }
};

export const TarjetaMúltiplesPáginas: Story = {
    args: {
        stepContent: [
            {
                icon: FaUser,
                label: 'General',
                content:
                    <SeccionTarjetaLectura title='Título de la sección'>
                        <Subtitulo icon={FaClipboard} subtitle='Subtítulo' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue quam viverra enim feugiat placerat. Praesent eu libero et risus interdum aliquam. Duis in leo bibendum, commodo ligula in, blandit justo. In hac habitasse platea dictumst. Proin sit amet nisi quis velit ultricies mattis. Vivamus porttitor enim in cursus fermentum. Aliquam quis ligula libero.
                        </p>
                        <p>
                            Sed eu magna lacus. Praesent ultrices vel nulla ut varius. Pellentesque suscipit ipsum sed molestie pretium. Mauris ac elit a risus sagittis pulvinar. Morbi dapibus accumsan lobortis. Aliquam erat volutpat. Cras a mollis risus. Mauris ac faucibus lorem, non blandit justo.
                        </p>
                    </SeccionTarjetaLectura>
            },
            {
                icon: FaPhone,
                label: 'Contacto',
                content:
                    <>
                        <SeccionTarjetaLectura title='Título de la sección'>
                            <ContenedorTarjeta>
                                Integer suscipit magna felis, at efficitur nulla aliquam vitae. Donec ac felis justo. Mauris ac odio non nunc placerat molestie. Nam ac justo a quam tincidunt tempor nec in tellus. Sed lacinia massa id mauris convallis gravida. In sodales tristique diam, hendrerit suscipit leo aliquet non. Praesent libero lacus, sagittis sed tincidunt vitae, tincidunt ac diam. Vestibulum rhoncus, tortor ac tincidunt suscipit, nisl purus semper risus, vel placerat diam magna porttitor turpis. Aliquam aliquam, urna ac porta tincidunt, mi ligula molestie orci, a luctus ex velit eget tortor. Nunc volutpat eros turpis, tincidunt pharetra nibh lacinia vitae.
                            </ContenedorTarjeta>
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
                        </SeccionTarjetaLectura>
                        <SeccionTarjetaLectura title='Título de la sección'>
                            <Subtitulo icon={FaFaceGrin} subtitle='Subtítulo' />
                            <p>
                                Vivamus imperdiet facilisis dui commodo euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et augue est. Etiam non metus laoreet, pellentesque lorem at, vehicula odio. Praesent quis aliquam justo, sit amet fringilla neque. Sed ut ipsum at arcu fermentum vestibulum. Etiam scelerisque ut quam ac mattis. Phasellus eleifend hendrerit nibh, in pretium leo tincidunt ac. Praesent egestas neque sem, a tristique felis facilisis eu. Fusce vulputate lacus id elit luctus porttitor. Sed aliquam sollicitudin mattis. Mauris id volutpat enim. Etiam placerat porta semper. Curabitur accumsan lobortis eleifend.
                            </p>
                            <p>
                                Vestibulum vel lorem eget lorem egestas tempus ac sed arcu. Mauris euismod rhoncus mi, sed iaculis magna. Vivamus nec bibendum felis. Vestibulum et feugiat erat. Aliquam mattis venenatis pellentesque. Mauris quis aliquam augue. Nam rutrum sit amet leo aliquam vulputate. Proin non volutpat est. Proin non ornare ligula. Curabitur eleifend, nibh eget varius semper, sem enim fermentum libero, ac porta lacus ante a turpis. Phasellus non facilisis libero.
                            </p>
                        </SeccionTarjetaLectura>
                    </>
            },
            {
                icon: FaLocationDot,
                label: 'Ubicación',
                content:
                    <SeccionTarjetaLectura title='Título de la sección'>
                        <Subtitulo icon={FaMap} subtitle='Subtítulo' />
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
                        Sed eu magna lacus. Praesent ultrices vel nulla ut varius. Pellentesque suscipit ipsum sed molestie pretium. Mauris ac elit a risus sagittis pulvinar. Morbi dapibus accumsan lobortis. Aliquam erat volutpat. Cras a mollis risus. Mauris ac faucibus lorem, non blandit justo.
                    </SeccionTarjetaLectura>
            }
        ]
    }
};
