import { useState } from 'react'

const SHOW_LIMIT = 3

interface IViewMoreProps<T> {
  arr?: T[]
  initLimit?: number
}

export default function useViewMore<T>({ arr, initLimit = SHOW_LIMIT }: IViewMoreProps<T>) {
  const [limit, setLimit] = useState<number>(3)

  const limitedImageUrls = arr?.slice(0, limit) ?? []
  const subtractedValue = (arr?.length ?? 0) - limit
  const leftOverImages = Math.max((arr?.length ?? 0) - limit, 0)

  const handleIncreaseLimit = () => {
    setLimit((prevLimit) => prevLimit + initLimit)
  }

  return {
    leftOverImages,
    limitedImageUrls,
    shouldShowButton: subtractedValue > 0,
    handleIncreaseLimit,
  }
}
