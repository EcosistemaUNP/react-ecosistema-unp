# ContenedorVentana

## Descripción
*En desarrollo - Contenedor responsive para el contenido de cada página*

## Props
| Nombre   | Descripción              | Tipo          |
| -------- | ------------------------ | ------------- |
| children | Contenido del contenedor | ReactNode     |
| style    | Propiedad de estilos CSS | CSSProperties |

## Uso

```tsx
import { ContenedorVentana } from 'react-ecosistema-unp/ui';

const MiComponente: React.FC = () => {
    return (
        <>
            <ContenedorVentana>
                <>
                    Contenido del contenedor
                </>
            </ContenedorVentana>
        <>
    );
}
```