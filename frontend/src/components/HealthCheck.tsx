import { 
  useEffect, 
  useState 
} from 'react';
import { 
  apiClient 
} from '../api/client';

export const HealthCheck = () => {
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await apiClient.getHealth();
        setStatus(response.data.status);
      } catch (err) {
        setError('Failed to fetch health check');
      }
    };

    fetchHealth();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Backend Status</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-green-500">{status}</p>
      )}
    </div>
  );
};
