import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthId } from "../../auth/hooks/AuthHook";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  access_midu: string;
  access_url: string[];
}

const ProtectedRoute: React.FC = () => {
  const { authToken, userToken } = useAuthId();
  const location = useLocation();

  // Obtener el token directamente desde el localStorage si no está disponible en el contexto
  const token = userToken || localStorage.getItem("user_token");
  const auth = authToken || localStorage.getItem("access_token");

  if (!auth || !token) {
    return <Navigate to="/" replace />;
  }

  let decodedToken: DecodedToken;
  try {
    decodedToken = jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to="/" replace />;
  }

  const accessUrls = decodedToken.access_url;
  const locationUrl = location.pathname;

  const formattedUrls = accessUrls.map((url) =>
    url.startsWith("/") ? url : `/${url}`
  );
  const formattedLocationUrl = locationUrl.startsWith("/")
    ? locationUrl
    : `/${locationUrl}`;

  // Verificar si la ruta actual está en la lista de rutas permitidas
  if (!formattedUrls.includes(formattedLocationUrl)) {
    return <Navigate to="/sistema/pagina-no-permitida" replace />;
  }

  return <Outlet />;
};

export { ProtectedRoute };
