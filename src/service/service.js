import axios from 'axios';

const apiUrl = "https://www.mist-one.com/pub/languages";

const fetchData = async () => {
    const result = await axios.get(apiUrl)
        .then(res => res.data.data.rows)
        .catch(err => {
            console.log(err);
        })
    return result
}

export default fetchData;