import Select2 from "react-select2-wrapper";

const options = {
   placeholder: "Select District"
};


const SelectBox = ({data}) =>{
    return (
        <>
          <div className="w-full">
            <Select2
              className="form-control"
              defaultValue="1"
              options={options}
              data={data}
            />
          </div>
        </>
    );
}
export default SelectBox;