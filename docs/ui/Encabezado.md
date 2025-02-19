# Encabezado

## Descripción
*En desarrollo*

## Props
| Nombre                                    | Descripción                         | Tipo    |
| ----------------------------------------- | ----------------------------------- | ------- |
| title                                     | Título del encabezado               | string  |
| subtitle <span style="color:red">*</span> | Subtítulo del encabezado            | string  |
| hasMargin                                 | Control para la margen del elemento | boolean |

## Uso

```tsx
import { Encabezado } from 'react-ecosistema-unp/ui';

const MiComponente: React.FC = () => {
    return (
        <>
            {/* Por defecto el título es Unidad Nacional de Protección */}
            <Encabezado subtitle='Subtítulo del encabezado' />
            
            <Encabezado title='Título del encabezado' subtitle='Subtítulo del encabezado' />
        <>
    );
}
```