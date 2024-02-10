import React from 'react';
import { priceList } from '../data/PriceData'


const Home = () => {
    return (
    <>
        
      <div className='container pt-5'>
        <h2 className='heading'>Price Card List</h2>
          <div className="row">
            
         {priceList.map((item) =>
          <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-3">
              <div className="card-body">
                <h6 className="card-title">{item.name}</h6>
                  <h2 className="card-text">{item.title}</h2>
                  <hr/>
                  <ul className="list-group list-group-flush">
                    {item.list.map((item, index) =>
                      
                        
                        <li key={index} className="list-group-item border-bottom-0">
                          
                          {item.access=='no'?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-check"></i>}
                          <span className={`${item.access === 'no' ? 'reject' : 'access'} ${'ms-2'}`}> {item.name}</span></li>
                       
                )
                    }
                    
                    
                  </ul>
                <div className='card-foot'>
                    <a href={item.link}  className="btn btn-primary d-block" target="_blank">{item.buttonText}</a>
                </div>
              </div>
            </div>
            </div>
             )}
        </div>
      </div>
    </>
  )
}


export default Home