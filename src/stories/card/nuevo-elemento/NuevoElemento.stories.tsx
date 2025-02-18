import type { Meta, StoryObj } from '@storybook/react';
import { NuevoElemento, Tarjeta } from '../../../../lib/cards';
import { Button, Col, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Subtitulo } from '../../../../lib/ui';
import { FaBook } from 'react-icons/fa6';
import { useState } from 'react';

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

export const ComponenteNuevoElemento: Story = {};

export const Ejemplo: Story = {
  decorators: [
    () => {
      const [libros, setLibros] = useState<any[]>([]);

      const handleAddLibro = () => {
        setLibros([
          ...libros,
          {
            libro: ''
          },
        ]);
      };

      const handleRemoveLibro = (index: number, libro: any) => {
        const book = libros.filter((_, i) => i !== index);
        setLibros(book);
        console.log(libro);
      };

      return (
        <Tarjeta title='Título'>
          <Subtitulo
            icon={FaBook}
            subtitle='Libro'
            extraInput={
              <Button
                variant='unp_primary'
                onClick={handleAddLibro}
              >
                Agregar
              </Button>
            }
          />
          {libros.map((libro, index) => (
            <NuevoElemento
              label={`Libro ${index + 1}`}
              onClose={() => handleRemoveLibro(index, libro)}
            >
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
            </NuevoElemento>
          ))}
        </Tarjeta>
      );
    }
  ],
  args: {
    label: 'Libro 1'
  }
};
