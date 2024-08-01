// src/hooks/useApiData.ts
import { useState, useEffect } from "react";
import { ApiData } from "../types/apiData";
import { fetchApodData } from "../api/api";

export function useApiData(date: string) {
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchApodData(date);
        setApiData(data);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [date]);

  return { apiData, loading, error };
}
