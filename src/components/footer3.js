import React from 'react'
import "../styles/footer.css"

const Footer3=()=> {
  return (
    <div>
    <h3 style={{marginLeft:"6rem"}}>Payment Partners</h3>
     <div className='payment'>

        <img   className='imgfooter' src='https://blinkit.com/5fdcf0f548fbf112eec1.png'/>
        <img className='imgfooter' src='https://blinkit.com/901d69d548e0feba09ab.png'/>
        <img className='imgfooter' src='https://blinkit.com/3a1a66a7bf0fbfd26ab8.png'/>
        <img className='imgfooter' src='https://blinkit.com/989b1a681e449677450c.png'/>
        <img className='imgfooter' src='https://blinkit.com/22eb5fa23ba3b6609751.png'/>
        <img className='imgfooter' src='https://blinkit.com/ba6f4bc10ee998b5ef4a.png'/>
        <img className='imgfooter' src='https://blinkit.com/faa9535d3774d52e399a.png'/>
        <img className='imgfooter' src='https://blinkit.com/84d7815d39258e73dcde.png'/>
        <img className='imgfooter' src='https://blinkit.com/97c6174b61b03e30fce9.png'/>
        
     </div>
     <div style={{display:"flex",gap:"2rem"}}>
     <p className='net'>Net banking</p>
     <p className='cashon'>Cash on Delivery</p>
     <p className='blink'>blinkit cash</p>
     </div>
    </div>
  )
}
export default Footer3;