import "./intro.css"
import me from "../../img/inogration.png"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                      <h2 className="i-intro">hello, my name is</h2>
                      <h1 className="i-name"> MD moosa sohail</h1>
                      <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">web developer</div>
                            <div className="i-title-item">manual tester</div>
                            <div className="i-title-item">content creator</div>
                            <div className="i-title-item">writer</div>
                        </div>
                      </div>
                      <p className="i-desc">I started my coding journey almost exactly a year ago and now
                        I love creating pages where I am able to actually create enjoyable interactions 
                        and experiences for everyone! but still exploring other technologies and frameworks
                        that catch my interest.
                     </p>
                  </div>

                </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>
            
        </div>
    )
}

export default Intro