import React from 'react'

function DebitCard() {
  return (
    <div className="cardgroupp">
      {/* <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266" alt="" className='cardLogo' /> */}
      { <img src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-d490b.appspot.com/o/Images%2Fchip-logo.png?alt=media&token=c576b3bb-0ad6-40ab-b897-2d2a03982624" alt="" className='cardChip' /> }
      <div className="cardNumber">1234 567 8901 7733</div>
      <div className="cardName">Shalini Bhatt</div>
      <div className="cardFrom">11/21</div>
      <div className="cardTo">11/25</div>
    </div>
  ) 
}

export default DebitCard