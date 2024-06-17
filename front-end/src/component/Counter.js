import './Counter.css';


export default function Counter({ rawdata, icon, amount, type }) {

    return (
        <>
            <div className='counter'>
                <img src={icon} alt="icon" />
                <div className='counter_text'>
                    <h2>{amount}</h2>
                    <p>{type}</p>
                </div>
            </div>
        </>
    )
}