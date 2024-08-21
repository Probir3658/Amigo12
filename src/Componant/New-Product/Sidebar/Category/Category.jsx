import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="l-display"
          title="14 Digits"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="m-display"
          title="12 Digits"
          name="test"
        />
          <Input
            handleChange={handleChange}
            value="s-display"
            title="8 Digits"
            name="test"
          />
        <Input
          handleChange={handleChange}
          value="scientific"
          title="Scientific Calculator"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
