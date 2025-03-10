# IconoTooltip

## Descripción
*En desarrollo - Icono para los tipos de solicitudes de la tabla*

## Props
| Nombre                                       | Descripción                                                              | Tipo        |
| -------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| recordType <span style="color:red">*</span>  | Tipo de solicitud                                                        | string      |
| taken                                        | Indica el estado de la solicitud (Por gestionar, en gestión)             | boolean     |
| <span style="color:blue">*</span> customIcon | Icono personalizado. Si se usa, la propiedad `recordType` se deshabilita | IconTooltip |

### Tipos de solicitud
* Individual
* Colectivo
* Emergencia
* Jurídico
* Reasignación
* CTAR
* Inactivaciones
* Desmonte
* Implementación
* Correspondencia
* Uso indebido

### IconTooltip
| Nombre                                       | Descripción       | Tipo     |
| -------------------------------------------- | ----------------- | -------- |
| icon <span style="color:red">*</span>        | Icono             | IconType |
| color <span style="color:red">*</span>       | Color del icono   | string   |
| tooltipText <span style="color:red">*</span> | Label del tooltip | string   |

## Uso

```tsx
import { IconoTooltip } from 'react-ecosistema-unp/ui';

const MiComponente: React.FC = () => {
    return (
        <>
            <IconoTooltip recordType='Individual' />
            <IconoTooltip recordType='Individual' taken={false} />
            
            <IconoTooltip recordType='Colectivo' />
            
            <IconoTooltip recordType='Emergencia' />
            
            <IconoTooltip recordType='Jurídico' />
            
            <IconoTooltip recordType='Reasignación' />
            
            <IconoTooltip customIcon={{ icon: FaShield, color: '#e1ff00', tooltipText: 'Custom tooltip text & color' }} />
            
            <IconoTooltip customIcon={{ icon: FaMap, color: '#3b26d9', tooltipText: 'Custom tooltip text & color' }} />
        <>
    );
}
```