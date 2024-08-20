import './Counter.css'
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className='container name13 mt-3'>
      <div class="row row-cols row-cols-md-4 ">
        <div class="col name12">
          <div className="card12">
              <h2><CountUp start={0} end={2000} duration={10}/> K+</h2>
          </div>
          <div className='name1'>
          &nbsp;Customer
          </div>
        </div>
        <div class="col name12">
          <div className="card12">
              <h2><CountUp start={0} end={150} duration={10}/> K+</h2>
          </div>
          <div className='name2'>
          &nbsp;  Retailers
          </div>
        </div>
        <div class="col name12">
          <div className="card12">
              <h2><CountUp start={0} end={100} duration={10}/>+</h2>
          </div>
          <div className='name3'>
            Distributors
          </div>
        </div>
        <div class="col name12"> 
          <div className="card12">
              <h2><CountUp start={0} end={500} duration={10}/>+</h2>
          </div>
          <div className='name4'>
          &nbsp;&nbsp;&nbsp;&nbsp;Team
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Counter
