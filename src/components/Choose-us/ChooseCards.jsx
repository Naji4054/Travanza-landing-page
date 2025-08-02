

const Travel = (props) => {

    // console.log(props.data, 'prop')
    const  { infoImage :image, infoTitle: title } = props.data

    return (

            <div className="flight">
                <span>
                <img src={image} alt="flight" />
                </span>
                <div>
                    <h4>{title}</h4>
                    <p>Vitae donec pellentesque a aliquam et ultricies auctor. </p>
                </div>
            </div>
                   
    )
}

export default Travel;