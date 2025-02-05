import { urlRequest } from "../../utils/Url.js";

export const FinSesionService = async (accessToken: string) => {
  try {
    const response = await fetch(`${urlRequest}/inicio/salida/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
      throw new Error(data.error);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
