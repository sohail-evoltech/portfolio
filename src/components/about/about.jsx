import "./about.css"
import award  from "../../img/award.png"


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://img.freepik.com/premium-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?size=626&ext=jpg" 
          alt="" 
          className="a img"
           />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"> about me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum cum quidem magni ipsam, vero soluta vel eligendi totam voluptatum iusto qui corrupti laborum mollitia repellat repellendus sapiente quo esse labore.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni aperiam ipsa sunt cum necessitatibus accusamus quibusdam quas nostrum. Nisi eum nulla delectus officiis perferendis nihil ipsum at praesentium distinctio?
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award" />
          <div className="a-award-text">
            <h4 className="a-award-title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, uptatibus corporis recusandae, temporibus cupiditate iusto quis nobis molestias praesentium, ne</h4>
             <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos suscipit labore autem officia ducimus cum rerum. In labore repellat officiis aliquam, facere maxime repudiandae cupiditate explicabo, magni nemo reprehenderit.
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
