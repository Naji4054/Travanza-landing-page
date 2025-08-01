import { data } from "../../data/DestinationData";
import DestinationCard from "./DestinationCards";


const Destination =()=>{
    return (
        <section id="popular-destination">
                <div className="destination-title">
                    <h3>Polpular Destination</h3>
                    <p>Vacations to make your experience enjoyable in Indonesia!</p>
                </div>

                <div className="popular-cards">
                {
                    data.map((item)=> <DestinationCard image={item.image} title={item.title}/>)
                }
                </div>

            </section>

            
    )
}

export default Destination;