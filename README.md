# Librería React para el Ecosistema de Información de la UNP

<span align="center">
<a href="https://www.npmjs.com/package/react-ecosistema-unp"><img title="npm version" src="https://badgen.net/npm/v/react-ecosistema-unp?label=latest"></a>
<a href="https://www.npmjs.com/package/react-ecosistema-unp"><img title="npm version" src="https://badgen.net/npm/v/react-ecosistema-unp?label=pre"></a>
</span>

La Librería del Ecosistema de Información es una colección de componentes reutilizables y modulares para crear y gestionar el entorno digital de la Unidad Nacional de Protección. Esta librería proporciona componentes para facilitar la integración de diversas funcionalidades dentro de las aplicaciones del ecosistema.


#### Migración

Todos los proyectos que utilizan la librería [eco-unp](https://www.npmjs.com/package/eco-unp) deben realizar la migración a [react-ecosistema-unp](https://www.npmjs.com/package/react-ecosistema-unp). Para ello deben seguir los siguientes pasos:
* Desinstalar eco-unp: ```npm uninstall eco-unp```
* Cambiar el Module Resolution en los proyectos React TS a *bundler* ```"moduleResolution": "bundler"```
* Instalar la última versión de react-ecosistema-unp: ```npm install react-ecosistema-unp@latest```
* Realizar el cambio en las siguientes importaciones:
```tsx
import { AuthProvider } from 'eco-unp/Utils';               -> import { AuthProvider } from 'react-ecosistema-unp/utils';
import { UserRoute, ProtectedRoute } from 'eco-unp/Utils';  -> import { ProtectedRoute, UserRoute } from 'react-ecosistema-unp/utils';

import { VentanaLienzo } from 'eco-unp/Ui';                 -> import { VentanaLienzo } from 'react-ecosistema-unp/shared';
import { VentanaUsuario } from 'eco-unp/Ui';                -> import { VentanaTabs } from 'react-ecosistema-unp/shared';
import { TabVentana } from 'eco-unp/Ui';                    -> import { VentanaTabs } from 'react-ecosistema-unp/shared';

import { SubtituloForm } from 'eco-unp/Ui';                 -> import { Subtitulo } from "react-ecosistema-unp/ui";

import { CardForm } from 'eco-unp/Ui';                      -> import { Tarjeta } from 'react-ecosistema-unp/cards';

import { BootstrapTable } from 'eco-unp/Tables';            -> import { TablaRegistros } from 'react-ecosistema-unp/tables';
```

> El componente Subtitulo cambia el prop subtitulo a subtitle


## Instalación

```bash
npm install react-ecosistema-unp@latest
```
> Nota: El Module Resolution del proyecto debe ser *bundler* para su correcto funcionamiento
```json
"moduleResolution": "bundler"
```


## Documentación

*En desarrollo*

* [Elementos UI](docs/ui.md)
* [Tarjetas](docs/cards.md)
* [Tabla y modal](docs/table.md)
* [Utilidades](docs/utils.md)
  
<br>

* [Accesibilidad](docs/accessibility.md)

<br>

* [Estilos]()