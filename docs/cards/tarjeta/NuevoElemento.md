# NuevoElemento

## Descripción
*En desarrollo - Contenedor utilizado en [Tarjeta](Tarjeta.md) para agregar nuevos elementos*

## Props
| Nombre                                    | Descripción                          | Tipo       |
| ----------------------------------------- | ------------------------------------ | ---------- |
| label                                     | Subtítulo de la tarjeta              | string     |
| children <span style="color:red">*</span> | Contenido del elemento               | ReactNode  |
| onClose <span style="color:red">*</span>  | Acción al presionar la basurita      | ( ) => { } |
| isGray                                    | Control para el fondo del contenedor | boolean    |

## Uso

```tsx
import { NuevoElemento } from 'react-ecosistema-unp/cards';

const MiComponente: React.FC = () => {
    return (
        <Tarjeta title="Título de la tarjeta">
            <NuevoElemento 
                label='Label'
                onClose={() => alert('Se borró el elemento!')}
            >
                Contenido del elemento
            </NuevoElemento>
        </Tarjeta>
    );
}
```