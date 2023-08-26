import React from 'react'

const Footer = () => {
  const date = new Date();
  const time = date.getHours();
  return (
    <div>
      {time >10 && time < 22 ? <p>We are happy to welcome you between 11 to 22</p>:<p>Sorry!.We are closed.</p>}
       
      
    </div>
   
  )
}

export default Footer
