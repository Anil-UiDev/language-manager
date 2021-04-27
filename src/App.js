import { useEffect, useState } from 'react';
import './App.css';
import Listing from './components/listing/Listing';
import fetchData from './service/service';

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    fetchData().then(res => setData(res))
  }, [])

  const filteredData = data.filter(item => {
    return item.languageNameEnglish.toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <div className="App py-3">
      <div className="container">
      <input type="text" name="search" id="search" className="form-control" placeholder="Search Language Here..." onChange={(e)=>setSearch(e.target.value)}/>
      <Listing listData={filteredData}/>
      </div>
    </div>
  );
}

export default App;
