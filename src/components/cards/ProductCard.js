import MD from "../../images/md (2).jpg"
import {FaShareSquare} from "react-icons/fa"

const ProductCard = ({ p }) => {
  const { title, subTitle, description } = p;
  return (
    <div className="card shadow-lg" style={{margin:'10px' , borderradius:'4rem'}}>
      <div className="alignmade">
      <img className="card-img-top" src={MD} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-title">{subTitle}</h6>
        <p className="card-text">
        {description}
        </p>
        <a href="#" className="btn btn-dark">
          <FaShareSquare size={25}/>
        </a>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
