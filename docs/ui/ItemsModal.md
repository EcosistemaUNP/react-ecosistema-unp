# ItemsModal

## Descripción
*En desarrollo*

## Props
| Nombre                                 | Descripción                                   | Tipo                |
| -------------------------------------- | --------------------------------------------- | ------------------- |
| label <span style="color:red">*</span> | Label del ítem                                | string              |
| icon <span style="color:red">*</span>  | Icono del ítem                                | IconType            |
| route <span style="color:red">*</span> | Ruta                                          | string              |
| closed                                 | Control para indicar si el item está completo | boolean             |
| handleDownload                         | Acción al presionar el botón de descarga      | ( ) => { }          |
| state                                  | Variable para enviar por la ruta              | Record<string, any> |

## Uso

```tsx
import { ItemsModal } from 'react-ecosistema-unp/ui';

const MiComponente: React.FC = () => {
    const [estado, setEstado] = useState();

    const sections = [
        { label: "Ítem uno", icon: FaPhone, route: "/", closed: true },
        { label: "Ítem dos", icon: FaClipboardUser, route: "/", closed: false, handleDownload: () => alert('Descargando...') },
        { label: "Ítem tres", icon: FaUsers, route: "/", state: { miVariable: estado } },
        { label: "Ítem cuatro", icon: FaBook, route: "/", closed: false },
        { label: "Ítem cinco", icon: FaLocationDot, route: "/", handleDownload: () => alert('Descargando...') },
    ];

    return (
        <>
            <ItemsModal sections={sections} />
        <>
    );
}
```