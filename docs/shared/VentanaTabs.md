# VentanaTabs

## Descripción
*En desarrollo*

## Props
| Nombre                                    | Descripción             | Tipo            |
| ----------------------------------------- | ----------------------- | --------------- |
| children <span style="color:red">*</span> | Contenido de la ventana | ReactNode       |
| extraInput                                | Botónes superiores      | IconoSistema[ ] |

### IconoSistema
| Nombre | Descripción       | Tipo       |
| ------ | ----------------- | ---------- |
| icon   | Icono del botón   | IconType   |
| action | Acción a realizar | ( ) => { } |

### TabVentana
| Nombre   | Descripción      | Tipo   |
| -------- | ---------------- | ------ |
| eventKey | Key de la tab    | string |
| title    | Título de la tab | string |

## Uso

```tsx
import { TabVentana, VentanaTabs } from 'react-ecosistema-unp/shared';

const MiComponente: React.FC = () => {
    const botones = [
        { icon: FaMap, action: () => alert('Acción uno!') },
        { icon: FaFile, action: () => alert('Acción dos!') },
    ];

    return (
        <VentanaTabs extraInput={botones}>
        <TabVentana eventKey="tabUno" title={'Pestaña uno'}>
            <>
                Contenido de la pestaña uno
            </>
        </TabVentana>
        <TabVentana eventKey="tabDos" title={'Pestaña dos'}>
            <>
                Contenido de la pestaña dos
            </>
        </TabVentana>
        </VentanaTabs>
    );
}
```