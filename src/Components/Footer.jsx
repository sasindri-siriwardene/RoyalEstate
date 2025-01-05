import './Footer.css';

const Footer = () => {
  return (
   
      <div className="footer-main">
        <div className='container'>
            <div className='row'>
                <div className='col-md-1'>
                   <h4 className='name'>Royal Estate</h4>
                   <p className='descriptionp'>Royal Estate is a premier real estate company offering a curated selection of high-end residential, commercial, and vacation properties.
                    With a focus on quality and elegance, it provides an exclusive experience for clients seeking luxurious living spaces.</p>
                </div>

                <div className='col-md-1'>
                    
                    <ul className='contact' id='contact'>
                    <h4 className='name'>Contact Information</h4>
                        <li>Address: Colombo, Sri Lanka</li>
                        <li>Mobile: +94 756413574</li>
                        <li>Email: royalestate@gmail.com</li>
                    </ul>             
            </div>

        </div>
        <p className="footer-text">&copy; 2025 Royal Estate. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;