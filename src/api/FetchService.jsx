

const BASE_URL = "http://localhost:3000"
const FetchService = async() => {
  try {
    const response = await fetch(`${BASE_URL}/nutricionista/listar`);
    const data = await response.json();
    console.log(response)
    return data;
  } catch (error) {
    console.error('Error, no se encontro la ruta :/',error)
    return [];
  }
}

export {FetchService}