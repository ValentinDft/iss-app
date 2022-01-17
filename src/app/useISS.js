import { useQuery } from 'react-query'
import { getPosition } from './api';

export default function useWeather() {
    return useQuery('iss', () => getPosition(), { staleTime: 60_000 });
}