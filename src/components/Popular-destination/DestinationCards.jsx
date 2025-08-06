

const DestinationCard = (props) => {

    const data = props.data


    return(
        <div className="places">
        <div className="popular-wrapper">
            <img src={data.image} alt="destination1" />
        </div>
        <div className="dest-info">
            <div className="location">
                <span>
                    <img src="/images/main/Location.png" alt="location" />
                </span>
                <p>{data.title}</p>
            </div>
            <div className="package">
                <h4>Flores Road Trip 3D2N</h4>
                <p>{data.days}</p>
            </div>
            <div className="price">
                <p>{data.price}</p>
            </div>
        </div>
    </div>
    )
}

export default DestinationCard;