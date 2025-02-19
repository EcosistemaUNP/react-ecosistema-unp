# SeccionTarjetaLectura

## Descripción
*En desarrollo - Secciona el componente [TarjetaLectura](TarjetaLectura.md)*

## Props
| Nombre                                    | Descripción                                    | Tipo      |
| ----------------------------------------- | ---------------------------------------------- | --------- |
| title <span style="color:red">*</span>    | Título de la sección                           | string    |
| children <span style="color:red">*</span> | Contenido de la sección                        | ReactNode |
| hasPaddingTop                             | Control para el padding superior de la sección | boolean   |

## Uso

```tsx
import { TarjetaLectura, SeccionTarjetaLectura } from 'react-ecosistema-unp/cards';

const MiComponente: React.FC = () => {
    return (
        <TarjetaLectura
            title='Título de la tarjeta'
            subtitle='Subtítulo de la tarjeta'
            headerContent={
                <>
                    Contenido del encabezado
                </>
            }
        >
            <SeccionTarjetaLectura title='Título de la sección'>
                Contenido de la sección
            </SeccionTarjetaLectura>
            <SeccionTarjetaLectura title='Título de la sección'>
                Contenido de la sección
            </SeccionTarjetaLectura>
        </TarjetaLectura>
    );
}
```

[Documetación adicional](TarjetaLectura.md)