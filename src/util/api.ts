import axios from 'axios';
import { apiHost } from '../config';

const get = async <T>(func: string, params: object) => {
  const { data } = await axios.get<T>(`${apiHost}${func}`, {
    params
  });
  return data;
};

export { get };
