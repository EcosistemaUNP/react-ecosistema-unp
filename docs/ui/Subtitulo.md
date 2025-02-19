# Subtítulo

## Descripción
*En desarrollo*

## Props
| Nombre                                    | Descripción         | Tipo      |
| ----------------------------------------- | ------------------- | --------- |
| subtitle <span style="color:red">*</span> | Subtítulo           | string    |
| icon                                      | Icono del subtítulo | IconType  |
| extraInput                                | Elemento adicional  | ReactNode |

## Uso

```tsx
import { Subtitulo } from 'react-ecosistema-unp/ui';

const MiComponente: React.FC = () => {
    return (
        <>
            <Subtitulo icon={FaUser} subtitle='Subtítulo' />

            {/* Subtítulo sin icono */}
            <Subtitulo subtitle={'Subtítulo sin icono'} />

            {/* Subtítulo con un botón en la parte derecha */}
            <Subtitulo
                icon={FaUser}
                subtitle='Subtítulo'
                extraInput={
                    <Button variant='unp_primary'>Botón</Button>
                }
            />
        <>
    );
}
```