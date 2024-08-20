import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Key Features</h2>
        <Input
          handleChange={handleChange}
          value="tgtkey"
          title="Tax + GT"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value="tax"
          title="Tax-Calculation"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value="gtkey"
          title="GT"
          name="test1"
        />
      </div>
    </>
  );
};

export default Colors;
