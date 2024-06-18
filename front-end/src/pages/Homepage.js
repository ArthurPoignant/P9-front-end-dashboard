import './Homepage.css';
import UserActivity from '../component/UserActivity';
import UserPerformance from '../component/UserPerformance';
import UserAverage from '../component/UserAverage';
import Counter from '../component/Counter';
import Score from '../component/Score';
import { useParams } from 'react-router';
import { useUserData, useUserActivity, useUserAverageSessions, useUserPerformance } from '../component/apiService';
import calories from '../calories-icon.png';
import carbs from '../carbs-icon.png';
import fat from '../fat-icon.png';
import protein from '../protein-icon.png';


export default function Homepage() {
    const user = useParams().id;
    const userData = useUserData(user);
    const userActivityData = useUserActivity(user).activityData;
    const UserAverageSessionsData = useUserAverageSessions(user).averageSessionsData;
    const UserPerformanceData = useUserPerformance(user).userPerformanceData;
    const nom = userData.userData ? userData.userData.userInfos.firstName : '';

    if (!userData || !userActivityData || !UserAverageSessionsData || !UserPerformanceData) {
        return <div>Loading...</div>;
    }


    console.log("aaaaa",userData)
    console.log("calorie",userData.userData.keyData.calorieCount)

    return (
        <>
            <main>
                <h1>Bonjour <span className='nameRed'>{nom}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
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