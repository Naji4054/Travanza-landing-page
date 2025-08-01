

const DestinationCard = (props) => {


    return(
        <div className="places">
        <div className="popular-wrapper">
            <img src={props.image} alt="destination1" />
        </div>
        <div className="dest-info">
            <div className="location">
                <span>
                    <img src="/images/main/Location.png" alt="location" />
                </span>
                <p>{props.title}</p>
            </div>
            <div className="package">
                <h4>Flores Road Trip 3D2N</h4>
                <p>3 Days</p>
            </div>
            <div className="price">
                <p>Rp 6.705.000 /orang</p>
            </div>
        </div>
    </div>
    )
}

export default DestinationCard;