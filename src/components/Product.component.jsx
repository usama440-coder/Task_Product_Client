import { useSelector } from "react-redux";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import productService from "../services/productService";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const language = useSelector((state) => state.language);
  const token = useSelector((state) => state.auth.user.token);

  const handleDelete = async () => {
    try {
      await productService.deleteProduct(data.id, token);
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Product could not be deleted");
    }
  };

  return (
    <div className="product">
      <FaTrashAlt className="trashIcon" onClick={handleDelete} />
      <Link to={`/editProduct/${data.id}`}>
        <FaEdit className="editIcon" />
      </Link>

      <div className="productImg">
        <img
          src={`http://localhost:5000/public/img/${data.image}`}
          alt="images"
        />
      </div>
      <div className="productDesc">
        {language === "ar" ? (
          <p dir="rtl">{data.name_ar}</p>
        ) : (
          <p>{data.name}</p>
        )}
        <p>{data.price}</p>
      </div>
    </div>
  );
};

export default Product;
