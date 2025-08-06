

const Travel = (props) => {

    // console.log(props.data, 'prop')
    const  { infoImage :image, infoTitle: title } = props.data

    return (

            <div className="flight">
                <span>
                <img src={image} alt="flight" />
                </span>
                <div>
                    <h4 className="flight-h">{title}</h4>
                    <p className="flight-p">Vitae donec pellentesque a aliquam et ultricies auctor. </p>
                </div>
            </div>
                   
    )
}

export default Travel;