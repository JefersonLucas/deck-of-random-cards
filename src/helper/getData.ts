import { IData } from "../interfaces/types";

async function getData(number: number): Promise<IData[]> {
  // https://zoo-animal-api.herokuapp.com/
  const API = `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`;

  const request = await fetch(API);

  const response = await request.json();

  if (!request.ok) throw new Error(response.error);

  return response;
}

export default getData;
