import React, { useState} from "react";
import '../css/Search.css';
export const Search = () => {
  const [search, setSearch] = useState();
  const [state, setState] = useState([]);
  const [pro,setPro]=useState(null);
  // btn for searching states result
  const searchState= async (event)=>{
    event.preventDefault();

    const res = await fetch('https://api.covid19india.org/data.json');
    const acData = await res.json();
  let data = acData.statewise;
    data.map((mpdata)=>{
      // console.log(mpdata)
      let tem =mpdata.state;
      tem = tem.toLowerCase()
      let tem2 =search.toLowerCase()
      if(tem=== tem2){
        setState(mpdata);
        setPro(true);
      }
      else{
        setPro(null);
      }
      return null;

    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <form>
            <input
              type="text"
              name="Statename"
              placeholder="Enter a State Name"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              autoComplete="off"
            />
          
            <button className='btn btn-outline-info text-secondary ' style={{fontSize:'19px'}} onClick={searchState}>Click</button>
          </form>
          
            {/* <div className="box-city">
              <h1 className="ctname  "> {search}</h1>
            </div> */}

            {!pro ? (
            <h1 className="errmsg">No state found</h1>
          ) : (
            <div className="box-city">
              <h1 className="ctname  "> {state.state}</h1>
              <div className="temp">
                <span >Confirmed :-</span> <span className='text-warning'>{state.confirmed}</span> 
              </div>
              <div className="tempm lead mt-2">
                <div >
                  <span>Recoverd :-  </span>
                  <span className='text-success'>{state.recovered}</span>
                  
                </div>
                <div>||</div>
                <div>
                  <span>Deaths :- </span>
                  <span className='text-danger'>{state.deaths}</span>
                  
                </div>
              </div>
             
            </div>
          )}
       
       
        </div>
      </div>
    </>
  );
};
export default Search;