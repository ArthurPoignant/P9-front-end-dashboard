import './Homepage.css';
import Navbar from '../component/Navbar';
import Aside from '../component/Aside';
import UserActivityAPI from '../component/UserActivityAPI';
import UserPerformanceAPI from '../component/UserPerformanceAPI';
import UserAverageAPI from '../component/UserAverageAPI';
import CounterAPI from '../component/CounterAPI';
import ScoreAPI from '../component/ScoreAPI';

export default function Homepage() {
    const nom = 'Arthur';
    const currentUrl = window.location.href;
    const user = currentUrl.split("/").pop();
    
    return (
        <>
            <Navbar />
            <Aside />
            <main>
                <h1>Bonjour {nom}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className="stats">
                    <div className="graphs">
                        <div className='UserActivity'>
                            <UserActivityAPI userId={user} />
                        </div>
                        <div className='graphs_bottom'>
                            <div className='UserPerformance'>
                                <UserPerformanceAPI userId={user}  />
                            </div>
                            <div className='UserAverage'>
                                <UserAverageAPI userId={user}  />
                            </div>
                            <div className='UserScore'>
                                <ScoreAPI userId={user} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='counters'>
                    <CounterAPI userId={user}  />
                </div>
            </main>
        </>
    )
}