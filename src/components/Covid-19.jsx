import React, { useEffect , useState } from 'react'
import "../css/Covid19.css";
import '../css/Nav.css'


const Card = (pro) => {
    return (
        <div className=" col-md-4 mt-5   ">
        <div className="card  cards-in " className={pro.color} style={{cursor: 'pointer',}} >
        <div className="card-body text-center shadow-lg">
            <h4 className="card-title  display-5 mt-4 mb-3">
                <b> {pro.title}</b>
            </h4>
            <h6 className="card-text display-6 ">
              <b>{pro.text}</b>
            </h6>
            <i className=" mb-2" className={pro.icon} style={{fontSize:'29px'}}></i>
          
        </div>
        
        </div>
        
      
      </div>
    );
  };






export const Covid19= () => {

const [data , setData ] = useState([]);
    
        const getCovidData = async () => {
            try{
                const res = await fetch('https://api.covid19india.org/data.json');
                const acData = await res.json();
                // console.log(acData.statewise[0])
                setData(acData.statewise[0]);

            }catch(err){
                console.log(err)
            }
         
        }
   

    useEffect(()=>{getCovidData();},[]);
    return (
       
        <>
            <h5 className='text-center mt-5 live-img'> 🔴 LIVE </h5>
            <h2 className='text-center '> <span className='link display-5'>COVID-19  TRACKER</span> </h2>
            

            <section className='container mt-4'>
            <div className="row ">
                <Card 
                color ='bk-1'
                title='India'
                text='1366400000'
                icon='fas fa-globe-africa'
               
                />
                <Card
                color ='bk-3'
                title='Total Confirmed'
                text={data.confirmed}
                icon='fas fa-check-circle'
                />

                 <Card
                color ='bk-2'
                title='Total Recovered '
                text={data.recovered}
                icon='fas fa-shield-alt'
                
                />
                
                <Card
                color ='bk-4'
                title='Total Death '
                text={data.deaths}
                icon='fas fa-skull-crossbones'
                />
                <Card
                color ='bk-5'
                title='Total Active '
                text={data.active}
                icon='fas fa-syringe'
                />
                <Card
                color ='bk-6'
                title='Last Update'
                text={data.lastupdatedtime}
                icon='far fa-clock'
                />
                
                 
                
 

            </div>
            </section>
            



        </>
    )
}

export default Covid19;
