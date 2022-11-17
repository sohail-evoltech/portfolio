import "./intro.css"
import me from "../../img/inogration.png"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                      <h2 className="i-intro">hello, my name is</h2>
                      <h1 className="i-name"> MD Moosa Sohail</h1>
                      <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Manual Tester</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Writer</div>
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