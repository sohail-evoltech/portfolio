import "./productlist.css"
import Product from "../product/product"
import {product} from "../../data"

function Productlist() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> create & inspire. It's Sohail </h1>
                <p className="pl-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, animi sit explicabo maiores iusto officiis 
                    numquam reiciendis veritatis laboriosam necessitatibus repudiandae ipsa fugiat ullam fugit autem suscipit, id aspernatur nam!
                </p>
            </div>
            <div className="pl-list">
                {product.map((item) => (
                <Product key={item.id}  img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default Productlist
