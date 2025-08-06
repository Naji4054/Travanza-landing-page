import { info } from "../../data/ChooseData";
import Travel from "./ChooseCards";
import "./choose.css"
import "../layout/footer.css"

const Choose =() => {
    return (
        <section id="choose-us" className="container">
                <div className="left-choose-us">
                        <img src="/images/main/choose-us.png" alt="demo" />
                </div>
                <div className="right-choose-us">
                    <div className="choose-title">
                        <h3 className="h4">Why Choose Us</h3>
                        <p className="p-tag">Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                    </div>
                  <div className="travel-cards">
                    {
                        info.map((information)=><Travel  key ={information.id} data={information}/>)
                    }
                   
                  </div>
                  <div className="another-product">
                    <p>Another Product <span><img src="/images/main/chevron-right.png" alt="right arrow" /></span></p>
                </div>
                  
                </div>
                
            </section>
    )
}
export default Choose;