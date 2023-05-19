import { useState } from "react";
import { cache } from "swr/_internal";

const getIsSwrLoading = () => cache.keys().some(k => k.startsWith('validating@') && cache.get(k));

export function useIsSwrLoading() {
  const [isLoading, setIsLoading] = useState(getIsSwrLoading());
  const update = () => setIsLoading(getIsSwrLoading());
  useEffect(() => cache.subscribe(update), []);
  return isLoading;
}