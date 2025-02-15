# Ventana
Los componentes `VentanaLienzo` y `VentanaTabs` son componentes que agrupan todo el contenido de la página.
Deben ser utilizados por cada página creada. Incluyen el menú lateral y una barra con las notificaciones del sistema.

> **Nota:** El componente debe estar envuelto entre el componente `AuthProvider` de **react-ecosistema-unp/utils** y el componente `BrowserRouter` de **react-dom**, es de preferencia hacerlo en el componente *index.tsx* o *main.tsx*

- main.tsx
```
<AuthProvider>
    <BrowserRouter>
      <App  />
    </BrowserRouter>
</AuthProvider>
```