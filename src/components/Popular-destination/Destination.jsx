import { data } from "../../data/DestinationData";
import DestinationCard from "./DestinationCards";
import "./destination.css"

const Destination =()=>{
    return (
        <section id="popular-destination" className="container">
                <div className="destination-title">
                    <h3>Polpular Destination</h3>
                    <p>Vacations to make your experience enjoyable in Indonesia!</p>
                </div>

                <div className="popular-cards">
                {
                    data.map((item)=> <DestinationCard key={item.id} data={item}/>) 
                }
                </div>

            </section>

            
    )
}

export default Destination;