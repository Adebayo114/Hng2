import '../styles/CheckOut2.css'
import one from '../assets/icons/number-1 (1).png'
import two from '../assets/icons/two (1).png'
import { Link } from 'react-router-dom'
import cheeck from '../assets/icons/checked.png'
import ts from '../assets/pcs/topsell.png'
import googleplay from '../assets/pcs/gp.jpeg'
import apple from '../assets/pcs/ap.jpeg'
import svg from '../assets/icons/10073532_Mesa de trabajo 1.svg'
function Final() {
  return (
    <>
        <h2 className='co'>Check Out</h2>
        <hr className='lb' />
        <div className="transfer">
                <div className="trf-sec">
                    <div className="trf-img">
                    <img src={one} alt="" />
                    </div>
                    <p>Shipping Information -------------------</p>
                </div>

                <div className="trf-sec">
                    <div className="trf-img">
                        <img src={two} alt="" /></div>
                    <p className='pt'>Payment Details -------------------</p>
                </div>

                <div className="trf-sec">
                    <div className="trf-img"> <img src={cheeck} alt="" /></div>
                    <p className='pt'>Complete Order -------------------</p>
                </div>
        </div>


            <div className="final-border">
                <div className="img-f">
                    <img src={svg} alt="" />
                </div>
                    <h2>Payment Successful</h2>
                    <p>Thank you for entrusting your care to us.Please be patient 
                        <p>as we process your item as quickly as possible</p>
                    </p>
                            <Link to="/">
                            <div className="btn-t"><button className='btn3'>Back to Homepage</button></div>
                            </Link>

            </div>

            <div className="advert">
            <div className="fone-logo">
                <img src={ts} alt="" />
            </div>


            <div className="advert-details">
                <h2>Get more on our app</h2>
                <p>Unlock exclusive features save serches,track inquiries mpore with our app <p>
                    Available on IOS and Android</p></p>
                    <div className="download-option">
                        <div className="apple-version">
                            <img id='apple' src={apple} alt="" />
                        </div>


                        <div className="ios-version">
                            <img id='google' src={googleplay} alt="" />
                        </div>
                    </div>
            </div>
        </div>

    </>
    
  )
}

export default Final