# Tarjeta

## Descripción
*En desarrollo*

## Props
| Nombre                                    | Descripción                                    | Tipo                   |
| ----------------------------------------- | ---------------------------------------------- | ---------------------- |
| title <span style="color:red">*</span>    | Título de la tarjeta                           | string                 |
| header                                    | Control para centrar el título                 | boolean                |
| children <span style="color:red">*</span> | Contenido de la tarjeta                        | ReactNode              |
| method                                    | Método del formulario                          | 'get' / 'post' / 'put' |
| validated                                 | Validación del formulario                      | boolean                |
| onSubmit                                  | Acción al presionar *Enviar*                   | ( ) => { }             |
| hasPaddingTop                             | Control para el padding superior de la tarjeta | boolean                |

## Uso

```tsx
import { Tarjeta } from 'react-ecosistema-unp/cards';

const MiComponente: React.FC = () => {
    return (
        <>
            <Tarjeta title='Título '>
                Contenido de la tarjeta
            </Tarjeta>


            <Tarjeta title='Título centrado' header={true}>
                Contenido de la tarjeta
            </Tarjeta>

            {/* Tarjeta con función para enviar datos */}
            <Tarjeta 
                title='Título de la tarjeta'
                method='post'
                validated={ /* validador (opcional) */ }
                onSubmit={() => alert('Datos enviados!!')}
            >
                Contenido de la tarjeta
            </Tarjeta>
        <>
    );
}
```