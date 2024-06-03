import { useEffect, useState } from 'react';
import axios from 'axios';
import Counter from './Counter';
import calories from '../calories-icon.png';
import carbs from '../carbs-icon.png';
import fat from '../fat-icon.png';
import protein from '../protein-icon.png';

export default function CounterAPI({ userId }) {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}`);
                setActivity(response.data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <>
            <Counter icon={calories} amount={activity.data.keyData.calorieCount+"kCal"} type={"Calories"} />
            <Counter icon={protein} amount={activity.data.keyData.proteinCount+"g"} type={"Proteines"} />
            <Counter icon={carbs} amount={activity.data.keyData.carbohydrateCount+"g"} type={"Glucides"} />
            <Counter icon={fat} amount={activity.data.keyData.lipidCount+"g"} type={"Lipides"} />
        </>
    );
};
