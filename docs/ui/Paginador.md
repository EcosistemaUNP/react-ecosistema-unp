# Paginador

## Descripción
*En desarrollo*

## Props
| Nombre                                       | Descripción                                  | Tipo           |
| -------------------------------------------- | -------------------------------------------- | -------------- |
| stepContent <span style="color:red">*</span> | Contenido del paginador                      | StepContent[ ] |
| onSubmit                                     | Acción al presionar *Enviar*                 | ( ) => { }     |
| canJump                                      | Control para permitir saltos en el paginador | boolean        |

### StepContent

| Nombre                                   | Descripción                     | Tipo       |
| ---------------------------------------- | ------------------------------- | ---------- |
| label <span style="color:red">*</span>   | Label de la página              | string     |
| icon <span style="color:red">*</span>    | Icono de la página              | IconType   |
| content <span style="color:red">*</span> | Contenido de la página          | ReactNode  |
| handleNextClick                          | Acción al presionar *Siguiente* | ( ) => { } |

## Uso

```tsx
import { Paginador } from 'react-ecosistema-unp/ui';

const MiComponente: React.FC = () => {
    const paginas = [
        {
            label: 'Uno',
            icon: FaUser,
            content: 
                <>
                    Contenido de la página uno...
                </>
        },
        {
            label: 'Dos',
            icon: FaUserPlus,
            content: 
                <>
                    Contenido de la página dos...
                </>
        },
        {
            label: 'Tres',
            icon: FaUserShield,
            content:  
                <>
                    Contenido de la página tres...
                </>
        },
        {
            label: 'Cuatro',
            icon: FaEnvelopesBulk,
            content:  
                <>
                    Contenido de la página cuatro...
                </>,
        }
    ];

    return (
        <>
            <Paginador
                stepContent={paginador}
                onSubmit={() => {
                    alert('Se ha enviado!!')
                }}
            />
        <>
    );
}
```