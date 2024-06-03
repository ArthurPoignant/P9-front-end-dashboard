import { useEffect, useState } from 'react';
import axios from 'axios';
import UserAverage from './UserAverage';

export default function UserAverageAPI({ userId }) {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserAverage = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        setActivity(response.data);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAverage();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <UserAverage rawData={activity}/>
  );
};