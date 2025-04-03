import { useEffect } from 'react';
import { useState } from 'react';
import { apiClient } from '../api/client';

export const Test = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.getTest();
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch test data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Test Endpoint</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : data ? (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">Message: {data.message}</p>
          <p className="text-gray-700">Timestamp: {data.timestamp}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};
