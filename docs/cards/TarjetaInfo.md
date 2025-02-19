# TarjetaInfo

## Descripción
*En desarrollo*

## Props
| Nombre                                    | Descripción                                                       | Tipo      |
| ----------------------------------------- | ----------------------------------------------------------------- | --------- |
| icon <span style="color:red">*</span>     | Icono de la tarjeta                                               | IconType  |
| label <span style="color:red">*</span>    | Label de la tarjeta                                               | string    |
| children <span style="color:red">*</span> | Contenido de la tarjeta                                           | ReactNode |
| show                                      | Controla la visibilidad de la tarjeta (por defecto está en false) | boolean   |

## Uso

```tsx
import { TarjetaInfo } from 'react-ecosistema-unp/cards';

const MiComponente: React.FC = () => {
    return (
        <TarjetaInfo icon={FaBook} label='Label de la tarjeta'>
            Contenido de la tarjeta
        </TarjetaInfo>
    );
}
```