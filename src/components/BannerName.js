// rfce
import React from 'react'

export default function BannerName({name,discount,link}) {
  return (
    <div className="bannerContent">
            <h3>Hello {name}</h3>
            <p>
                Get free discount for every <span>Rs.{discount} </span>purchase
            </p>
            <a href='link'>Learn More</a>
    </div>
    
  )
}
