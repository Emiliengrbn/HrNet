import Select from "react-dropdown-select"

const DropdownSelect = ({ options }) => {
    return (
        <Select
        options={options}
        values={[]}
        onChange={(value) => console.log(value)}
        />
    )
}

export default DropdownSelect