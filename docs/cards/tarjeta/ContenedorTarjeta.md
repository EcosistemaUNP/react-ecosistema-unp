# ContenedorTarjeta

## Descripción
*En desarrollo - Contenedor gris utilizado en el componente [Tarjeta](Tarjeta.md)*

> Por defecto al ubicar varias secciones seguidas la alternancia de colores es automática, en caso de no funcionar es necesario utilizar la propiedad `isGray`

## Props
| Nombre                                    | Descripción                          | Tipo      |
| ----------------------------------------- | ------------------------------------ | --------- |
| children <span style="color:red">*</span> | Contenido del contenedor             | ReactNode |
| isGray                                    | Control para el fondo del contenedor | boolean   |

## Uso

```tsx
import { ContenedorTarjeta } from 'react-ecosistema-unp/cards';

const MiComponente: React.FC = () => {
    return (
        <Tarjeta title="Título de la tarjeta">
            <ContenedorTarjeta>
                Contenido de la sección...
            </ContenedorTarjeta>

            {/* Contenedor blanco (para fondos grises) */}
            <ContenedorTarjeta isGray={false}>
                Contenido de la sección...
            </ContenedorTarjeta>
        </Tarjeta>
    );
}
```