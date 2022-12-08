/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'

// images
import cableImg from "../../assets/images/cta-image.png"
const CTASection = () => {
  return (
    <div className='ctaSection__wrap '>
        
        <div className="ctaSection row">
            <div className="ctaSection__content">
                <h1 className="ctaSection__content--heading">Cables CTA Heading</h1>
            <p className="ctaSection__content--para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quibusdam.</p>
            <button className="ctaSection__content--btn-quote btn">Get a Quote</button>
            </div>
{/* <div className="cableImgDiv"> */}

<Image src={cableImg} position="absolute" className="cableimg" />
{/* </div> */}

        </div>
    </div>
  )
}

export default CTASection