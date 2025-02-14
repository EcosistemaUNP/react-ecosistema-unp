import React from 'react'
import { TabVentana, VentanaTabs } from '../../lib/shared';
import { TabElementosUi } from './TabElementosUi';
import { TabElementosModal } from './TabElementosModal';
import { TabLectura } from './TabLectura';
import { TabTarjetas } from './TabTarjetas';
import { TablaShared } from './TablaShared';
import { Tabla } from './Tabla';
import { TabPaginador } from './TabPaginador';

const Tabs: React.FC = () => {

  return (
    <VentanaTabs>
      <TabVentana eventKey="modal" title={'Elementos modal'}>
        <TabElementosModal />
      </TabVentana>
      <TabVentana eventKey="ui" title={'Elementos UI'}>
        <TabElementosUi />
      </TabVentana>
      <TabVentana eventKey="tarjetas" title={'Tarjetas'}>
        <TabTarjetas />
      </TabVentana>
      <TabVentana eventKey="lectura" title={'Tarjeta lectura'}>
        <TabLectura />
      </TabVentana>
      <TabVentana eventKey="shared" title={'Tabla compartida'}>
        <TablaShared />
      </TabVentana>
      <TabVentana eventKey="table" title={'Tabla'}>
        <Tabla />
      </TabVentana>
      <TabVentana eventKey="stepper" title={'Paginador'}>
        <TabPaginador />
      </TabVentana>
    </VentanaTabs>
  );
}

export { Tabs }