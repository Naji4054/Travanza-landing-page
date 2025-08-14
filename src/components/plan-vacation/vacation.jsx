import "./vacation.css"


const Vacation = () =>{
    return (
        <section id="plan-vacation container" className="container">
            <div className="vacation-title">
                    <h3 className="h4">Plan Your Vacation</h3>
                    <p className="p-tag">For many people organizing a trip is a headache.Register to be able to jointly determine vaction destionations and dates</p>
            </div>
            <div className="map">
                <img src="/images/main/travel-map.jpg" alt="map" />
            </div>
        </section>
    )
}
export default Vacation;