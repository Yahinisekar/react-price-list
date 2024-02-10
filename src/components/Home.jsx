import React from 'react'


const Home = () => {
  const priceList = [{
    id: 1,
    name: "free",
    title: '$0/month',
    buttonText: "button",
    link:"https://www.google.com/",
    list: [
      { id: 1, name: 'Single User', access:'yes'},
      { id: 2, name: '50GB Storage', access:'yes'},
      { id: 3, name: 'Unlimited Public Projects', access:'yes'},
      { id: 4, name: 'Community Access', access:'yes'},
      { id: 5, name: 'Unlimited Private Projects', access:'no'},
      { id: 6, name: 'Dedicated Phone Support', access:'no'},
      { id: 7, name: 'Free Subdomain', access:'no'},
      { id: 8, name: 'Monthly Status Reports', access:'no'},]
    },
    {
    id: 2,
    name: "PLUS",
    title: '$9/month',
    buttonText: "button",
    link:"https://www.google.com/",
    list: [
      { id: 1, name: '5 Users', access:'yes'},
      { id: 2, name: '50GB Storage', access:'yes'},
      { id: 3, name: 'Unlimited Public Projects', access:'yes'},
      { id: 4, name: 'Community Access', access:'yes'},
      { id: 5, name: 'Unlimited Private Projects', access:'yes'},
      { id: 6, name: 'Dedicated Phone Support', access:'yes'},
      { id: 7, name: 'Free Subdomain', access:'yes'},
      { id: 8, name: 'Monthly Status Reports' , access:'no'},]
  },
    {
    id: 3,
    name: "Pro",
    title: '$49/month',
    buttonText: "button",
    link:"https://www.google.com/",
    list: [
      { id: 1, name: 'Unlimited users', access:'yes'},
      { id: 2, name: '50GB Storage', access:'yes'},
      { id: 3, name: 'Unlimited Public Projects', access:'yes'},
      { id: 4, name: 'Community Access', access:'yes'},
      { id: 5, name: 'Unlimited Private Projects', access:'yes'},
      { id: 6, name: 'Dedicated Phone Support', access:'yes'},
      { id: 7, name: 'Free Subdomain', access:'yes'},
      { id: 8, name: 'Monthly Status Reports', access:'yes'},]
  },
  ]
  return (
    <>
      
      <div className='container pt-5'>
        <h2 className='heading'>Price Card List</h2>
        <div className="row">
         {priceList.map((item, index) =>
          <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-3">
              <div className="card-body">
                <h6 className="card-title">{item.name}</h6>
                  <h2 className="card-text">{item.title}</h2>
                  <hr/>
                  <ul className="list-group list-group-flush">
                    {item.list.map((item, index) =>
                      <>
                        
                        <li key={index} className="list-group-item border-bottom-0">
                          
                          {item.access=='no'?<i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-check"></i>}
                          <span className={`${item.access === 'no' ? 'reject' : 'access'} ${'ms-2'}`}> {item.name}</span></li>
                       </>
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