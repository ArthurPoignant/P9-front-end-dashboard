import { useEffect, useState } from 'react';
import axios from 'axios';
import UserActivity from './UserActivity';

export default function UserActivityAPI({ userId }) {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        setActivity(response.data);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserActivity();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <UserActivity rawData={activity}/>
  );
};
