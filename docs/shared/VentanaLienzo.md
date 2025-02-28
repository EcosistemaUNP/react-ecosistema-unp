# VentanaLienzo

## Descripción
*En desarrollo*

## Props
| Nombre                                    | Descripción             | Tipo              |
| ----------------------------------------- | ----------------------- | ----------------- |
| children <span style="color:red">*</span> | Contenido de la ventana | ReactNode         |
| items                                     | Items de la miga de pan | BreadcrumbItem[ ] |
| extraInput                                | Botónes superiores      | IconoSistema[ ]   |

### BreadcrumbItem
| Nombre | Descripción | Tipo   |
| ------ | ----------- | ------ |
| label  | Label       | string |
| link   | Link        | string |

### IconoSistema
| Nombre | Descripción       | Tipo       |
| ------ | ----------------- | ---------- |
| icon   | Icono del botón   | IconType   |
| action | Acción a realizar | ( ) => { } |
| label   | Label para el tooltip        | string |

## Uso

```tsx
import { VentanaLienzo } from 'react-ecosistema-unp/shared';

const MiComponente: React.FC = () => {
    const breadcrumbItems = [
        { label: "Inicio", link: "/" },
        { label: "Página 1", link: "/" },
        { label: "Subpágina 1" }
    ];

    const botones = [
        { icon: FaMap, action: () => alert('Acción uno!'), label: 'Acción uno' },
        { icon: FaFile, action: () => alert('Acción dos!') },
    ];

    return (
        <VentanaLienzo items={breadcrumbItems} extraInput={botones}>
            <>
                Contenido de la ventana
            <>
        </VentanaLienzo>
    );
}
```