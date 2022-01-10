const ProductCard = ({p}) => {
    const {title , subtitle , description} = p
  return (
    <div class="card bg-dark text-white">
      <img src="..." class="card-img" alt="..." />
      <div class="card-img-overlay">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          {description}
        </p>
        <p class="card-text">{subtitle}</p>
      </div>
    </div>
  );
};
export default ProductCard;
