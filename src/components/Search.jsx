import { useState } from "react";

const Search = (props) => {
    // const { searchList } = props;
    const { data } = props;
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value)
    }

    return (
        <form>
            <div className="form-group">
                <input type="text" name="search" id="search" value={value} className="form-control" placeholder="Search Language Here..." onChange={handleChange} />
            </div>
        </form>
    )
}

export default Search;