import { useEffect, useState } from 'react';
import axios from 'axios';

import UserPerformance from './UserPerformance';

export default function UserPerformanceAPI({ userId }) {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPerformance = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        setActivity(response.data);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPerformance();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <UserPerformance rawData={activity}/>
  );
};