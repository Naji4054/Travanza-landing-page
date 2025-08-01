const Travel =(cards)=>{
    console.log(cards);
    return (

                    <div className="flight">
                            <span>
                            <img src={cards.image} alt="flight" />
                            </span>
                            <div>
                                <h4>{cards.title}</h4>
                                <p>Vitae donec pellentesque a aliquam et ultricies auctor. </p>
                            </div>
                    </div>
                   
    )
}

export default Travel;