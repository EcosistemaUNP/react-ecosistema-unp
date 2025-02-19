# TarjetaLectura

## Descripción
*En desarrollo*

## Props
| Nombre                                         | Descripción                                                                | Tipo           |
| ---------------------------------------------- | -------------------------------------------------------------------------- | -------------- |
| title <span style="color:red">*</span>         | Título de la tarjeta                                                       | string         |
| subtitle <span style="color:red">*</span>      | Subtítulo de la tarjeta                                                    | string         |
| headerContent <span style="color:red">*</span> | Contenido del header de la tarjeta                                         | ReactNode      |
| <span style="color:blue">*</span> stepContent  | Se utiliza si es una tarjeta páginada. No permite `children`               | StepContent[ ] |
| <span style="color:blue">*</span> children     | Se utiliza si es una tarjeta de una única página. No permite `stepContent` | ReactNode      |

### StepContent

| Nombre                                   | Descripción            | Tipo      |
| ---------------------------------------- | ---------------------- | --------- |
| label <span style="color:red">*</span>   | Label de la página     | string    |
| icon <span style="color:red">*</span>    | Icono de la página     | IconType  |
| content <span style="color:red">*</span> | Contenido de la página | ReactNode |

## Uso

```tsx
import { TarjetaLectura } from 'react-ecosistema-unp/cards';

const MiComponente: React.FC = () => {
    const paginas = [
        {
            label: 'Uno',
            icon: FaUser,
            content: 
                <SeccionTarjetaLectura title='Sección de mi tarjeta'>
                    Contenido de la página uno...
                </SeccionTarjetaLectura>
        },
        {
            label: 'Dos',
            icon: FaUserPlus,
            content: 
                <SeccionTarjetaLectura title='Sección de mi tarjeta'>
                    Contenido de la página dos...
                </SeccionTarjetaLectura>
        },
        {
            label: 'Tres',
            icon: FaUserShield,
            content:  
                <SeccionTarjetaLectura title='Sección de mi tarjeta'>
                    Contenido de la página tres...
                </SeccionTarjetaLectura>
        },
        {
            label: 'Cuatro',
            icon: FaEnvelopesBulk,
            content:  
                <SeccionTarjetaLectura title='Sección de mi tarjeta'>
                    Contenido de la página cuatro...
                </SeccionTarjetaLectura>
        }
    ];

    return (
        <>
            {/* Tarjeta de una página */}
            <TarjetaLectura
                title='Título de la tarjeta'
                subtitle='Subtítulo de la tarjeta'
                headerContent={
                    <>
                        Contenido del encabezado
                    </>
                }
            >
                <SeccionTarjetaLectura title='Sección de mi tarjeta'>
                    Contenido de la tarjeta
                </SeccionTarjetaLectura>
            </TarjetaLectura>

            {/* Tarjeta de múltiples páginas */}
            <TarjetaLectura
                title='Título de la tarjeta'
                subtitle='Subtítulo de la tarjeta'
                headerContent={
                    <>
                        Contenido del encabezado
                    </>
                }
                stepContent={paginas}
            />
        <>
    );
}
```