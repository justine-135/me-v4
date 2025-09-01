import { fetcher } from '@/util'
import useSWR from 'swr'

interface IUseCustomSWR {
  path: string
}

export default function useCustomSWR<T>({ path }: IUseCustomSWR) {
  const { data, error, isLoading } = useSWR<T>(path, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })

  return { data, error, isLoading }
}
