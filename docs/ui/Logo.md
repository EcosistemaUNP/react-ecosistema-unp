# Logo

## Descripción
*En desarrollo*

## Props
| Nombre                                   | Descripción       | Tipo      |
| ---------------------------------------- | ----------------- | --------- |
| type <span style="color:red">*</span>    | Tipo del logo     | 'entidad' / 'ecosistema' / 'ministerio'    |
| variant <span style="color:red">*</span> | Variante del logo | 'unp' / 'unidad' / 'interior' / 'escudo' / 'letras' |
| color <span style="color:red">*</span>   | Color del logo    | 'rojo' / 'gris' / 'blanco' / 'azul' / 'azul_sin_fondo' / 'blanco' / 'blanco_sin_fondo' |
| height                                   | Altura del logo   | string    |

>* Tipo `entidad`
> * Variantes:
    * `unp`
    * `unidad`
>  * Colores:
    * `rojo`
    * `gris`
    * `blanco`

>* Tipo `ministerio`
> * Variantes:
    * `interior`
> * Colores:
    * `rojo`
    * `gris`
    * `blanco`

>* Tipo `ecosistema`
> * Variante `escudo`:
    * Colores:
      * `azul`
      * `azul_sin_fondo`
      * `blanco`
      * `blanco_sin_fondo`
> * Variantes `letras`
    * Colores:
      * `azul`
      * `blanco`

## Uso

```tsx
import { Logo } from 'react-ecosistema-unp/ui';

const MiComponente: React.FC = () => {
    return (
        <>
            {/* Logos de la entidad */}
            <Logo type='entidad' variant='unp' color='rojo' />
            <Logo type='entidad' variant='unp' color='gris' />
            <Logo type='entidad' variant='unp' color='blanco' />
            
            <Logo type='entidad' variant='unidad' color='rojo' />
            <Logo type='entidad' variant='unidad' color='gris' />
            <Logo type='entidad' variant='unidad' color='blanco' />
            
            {/* Logos del ministerio */}
            <Logo type='ministerio' variant='interior' color='rojo' />
            <Logo type='ministerio' variant='interior' color='gris' />
            <Logo type='ministerio' variant='interior' color='blanco' />
            
            {/* Logos del ecosistema */}
            <Logo type='ecosistema' variant='escudo' color='azul' />
            <Logo type='ecosistema' variant='escudo' color='azul_sin_fondo' />
            <Logo type='ecosistema' variant='escudo' color='blanco' />
            <Logo type='ecosistema' variant='escudo' color='blanco_sin_fondo' />
            
            <Logo type='ecosistema' variant='letras' color='azul' height='50px' />
            <Logo type='ecosistema' variant='letras' color='blanco' height='50px' />
        <>
    );
}
```