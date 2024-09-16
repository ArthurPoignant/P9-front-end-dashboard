import './Homepage.css';
import UserActivity from '../component/UserActivity';
import UserPerformance from '../component/UserPerformance';
import UserAverage from '../component/UserAverage';
import Counter from '../component/Counter';
import Score from '../component/Score';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useUserData, useUserActivity, useUserAverageSessions, useUserPerformance } from '../api/apiService';
import calories from '../assets/calories-icon.png';
import carbs from '../assets/carbs-icon.png';
import fat from '../assets/fat-icon.png';
import protein from '../assets/protein-icon.png';

export default function Homepage() {
    const user = useParams().id;
    const [isTimeout, setIsTimeout] = useState(false);
    const userData = useUserData(user);
    const userActivityData = useUserActivity(user).activityData;
    const UserAverageSessionsData = useUserAverageSessions(user).averageSessionsData;
    const UserPerformanceData = useUserPerformance(user).userPerformanceData;
    const nom = userData.userData ? userData.userData.userInfos.firstName : '';

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsTimeout(true);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    if (isTimeout && (!userData || !userActivityData || !UserAverageSessionsData || !UserPerformanceData)) {
        return <div className='error'>Request timeout: The server took too long to respond.</div>;
    }

    if (!userData || !userActivityData || !UserAverageSessionsData || !UserPerformanceData) {
        return <div className='error'>Loading...</div>;
    }

    return (
        <>
            <main>
                <h1 className='homepage-title'>Bonjour <span className='nameRed'>{nom}</span></h1>
                <p className='homepage-text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className="stats">
                     <div className='UserActivity'>
                        <UserActivity rawData={userActivityData} />
                    </div>
                    <div className='graphs_bottom'>
                        <div className='UserAverage'>
                            <p className='UserAverage_text'>Durée moyenne des sessions</p>
                            <UserAverage rawData={UserAverageSessionsData} />
                        </div>
                        <div className='UserPerformance'>
                            <UserPerformance rawData={UserPerformanceData} />
                        </div>
                        <div className='UserScore'>
                            <Score rawData={userData} />
                        </div>
                     </div>
                </div>
                <div className='counters'>
                    <Counter icon={calories} amount={userData.userData.keyData.calorieCount + "kCal"} type={"Calories"} />
                     <Counter icon={protein} amount={userData.userData.keyData.proteinCount + "g"} type={"Proteines"} />
                    <Counter icon={carbs} amount={userData.userData.keyData.carbohydrateCount + "g"} type={"Glucides"} />
                    <Counter icon={fat} amount={userData.userData.keyData.lipidCount + "g"} type={"Lipides"} />
                </div>
            </main>
        </>
    )
}
