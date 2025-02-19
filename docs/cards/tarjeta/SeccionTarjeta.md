# SeccionTarjeta

## Descripción
*En desarrollo - Secciona el componente [Tarjeta](Tarjeta.md) alternando las secciones entre blanco y gris*

> Por defecto al ubicar varias secciones seguidas la alternancia de colores es automática, en caso de no funcionar es necesario utilizar la propiedad `isGray`

## Props
| Nombre                                    | Descripción                                    | Tipo      |
| ----------------------------------------- | ---------------------------------------------- | --------- |
| children <span style="color:red">*</span> | Contenido de la sección                        | ReactNode |
| isGray                                    | Control para el fondo de la sección            | boolean   |
| isLast                                    | Si la última sección es gris debe aplicarse    | boolean   |
| hasPaddingTop                             | Control para el padding superior de la sección | boolean   |

## Uso

```tsx
import { Tarjeta, SeccionTarjeta } from 'react-ecosistema-unp/cards';

const MiComponente: React.FC = () => {
    return (
        <Tarjeta title="Título de la tarjeta">
            <SeccionTarjeta>
                Contenido de la sección...
            </SeccionTarjeta>
            <SeccionTarjeta>
                Contenido de la sección...
            </SeccionTarjeta>
            <SeccionTarjeta>
                Contenido de la sección...
            </SeccionTarjeta>
            
            {/* Si la detección automática falla, la última sección gris debe llevar isLast en true */}
            <SeccionTarjeta isGray={true} isLast={true}>
                Contenido de la sección...
            </SeccionTarjeta>
        </Tarjeta>
    );
}
```