

const BASE_URL = ""

const FetchService = async() => {
  try {
    const response = await fetch(`${BASE_URL}/listar/nutricionista`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error no se encontro la ruta :/',error)
    return [];
  }
}

export {FetchService}