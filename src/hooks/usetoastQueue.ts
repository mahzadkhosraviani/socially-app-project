import { useState, useCallback, useRef } from "react";

type Toast = {
  message: string;
  type: "success" | "error";
};

export function useToastQueue() {
  const [queue, setQueue] = useState<Toast[]>([]);
  const [current, setCurrent] = useState<Toast | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setQueue((prev) => [...prev, { message, type }]);
  }, []);

  const processQueue = useCallback(() => {
    if (queue.length === 0) {
      setCurrent(null);
      return;
    }
    const next = queue[0];
    setCurrent(next);
    setQueue((prev) => prev.slice(1));

    // Auto‑remove after 3 seconds, then wait 1s before next
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(null);
      timeoutRef.current = setTimeout(() => processQueue(), 1000);
    }, 3000);
  }, [queue]);

  // Call processQueue whenever queue changes and no toast is showing
  if (!current && queue.length > 0) {
    processQueue();
  }

  const closeCurrent = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrent(null);
    setTimeout(() => processQueue(), 1000);
  }, [processQueue]);

  return { currentToast: current, closeToast: closeCurrent, showToast };
}