import { useEffect, useState } from "react";

export function useToast(message: string | undefined) {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!message) return;
    setShowError(true);
    const timer = setTimeout(() => {
      setShowError(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [message]);
  return showError;
}
