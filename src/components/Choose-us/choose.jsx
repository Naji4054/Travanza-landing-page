import { info } from "../../data/ChooseData";
import Travel from "./ChooseCards";

const Choose =() => {
    return (
        <section id="choose-us">
                <div className="left-choose-us">
                        <img src="/images/main/choose-us.png" alt="demo" />
                </div>
                <div className="right-choose-us">
                    <div className="choose-title">
                        <h3 id="h3">Why Choose Us</h3>
                        <p id="p">Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                    </div>
                  <div className="travel-cards">
                    {
                        info.map((information)=><Travel  key ={information.id} data={information}/>)
                    }
                   
                  </div>
                  <div>
                    <p>Another Product <span><img src="/images/main/chevron-right.png" alt="right arrow" /></span></p>
                </div>
                  
                </div>
                
            </section>
    )
}
export default Choose;