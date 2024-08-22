import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={200}
          title="₹0 - ₹200"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={400}
          title="₹201 - ₹400"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={500}
          title="₹401 - ₹500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={501}
          title="Over ₹501"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
