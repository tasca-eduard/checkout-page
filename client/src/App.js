import './scss/main.scss';
import { Mail, Phone, AccountCircle, Home, LocationCity, Public, MarkunreadMailbox, Remove, Add} from '@material-ui/icons/';
import photo1 from './media/photo1.png';
import photo2 from './media/photo2.png';

function App() {
  return (
    <>
        <div className="container">
            <h1 className="title">Checkout</h1>
            <div className="column-structure">
                <div className="form-component">
                    <form className="checkout-form">
                        <section className="section">
                            <h2 className="subtitle">Contact information</h2>
                            <label className="label">
                                <Mail className="input-icon"/>
                                <input type="email" className="input" placeholder="Enter your email..."/>
                            </label>

                            <h3 className="input-name">Phone</h3> 
                            <label className="label">
                                <Phone className="input-icon"/>
                                <input type="email" className="input" placeholder="Enter your phone..."/>
                            </label>
                        </section>
                        <section className="section">
                            <h2 className="subtitle">Contact information</h2>

                            <h3 className="input-name">Full name</h3> 
                            <label className="label">
                                <AccountCircle className="input-icon"/>
                                <input type="text" className="input" value="Rodney Cotton" readOnly/>
                            </label>

                            <h3 className="input-name">Address</h3> 
                            <label className="label">
                                <Home className="input-icon"/>
                                <input type="text" className="input" placeholder="Enter your address..."/>
                            </label>

                            <h3 className="input-name">City</h3> 
                            <label className="label">
                                <LocationCity className="input-icon"/>
                                <input type="text" className="input" placeholder="Enter your city..."/>
                            </label>

                            <div className="form-wrapper">
                                <div className="input-wrapper">
                                    <h3 className="input-name">Country</h3> 
                                    <label className="label">
                                        <Public className="input-icon"/>
                                        <select className="input">
                                            <option value="" className="option" disabled selected hidden>Your country..</option>
                                            <option value="Romania" className="option">Romania</option>
                                            <option value="Romania" className="option">Germany</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="input-wrapper">
                                    <h3 className="input-name">Postal code</h3> 
                                    <label className="label">
                                        <MarkunreadMailbox className="input-icon"/>
                                        <input type="text" className="input" placeholder="Your postal code..."/>
                                    </label>
                                </div>
                            </div>

                            <label className="label check">
                                <input type="checkbox" className="input"/>
                                Save this information for next time
                            </label>
                        </section>
                        <div className="button-wrapper">
                            <button type="submit" className="button">Continue</button>
                        </div>
                    </form>
                </div>
                <div className="cart-component">
                    <ul className="cart-list">
                        <li className="cart-item">
                            <div className="img-wrapper">
                                <img src={photo1} alt="Bag" className="img" />
                            </div>
                            <div className="item-detail">
                                <h3 className="subtitle">Vintage Backbag</h3>
                                <div className="detail-wrapper">
                                    <span className="price highlight">$54.99</span>
                                    <span className="price strikethrough">$94.99</span>
                                </div>
                                <div className="quantity-control">
                                    <button className="qty-button">
                                        <Remove className="qty-icon" />
                                    </button>
                                    <span className="quantity">1</span>
                                    <button className="qty-button">
                                        <Add className="qty-icon" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="cart-item">
                            <div className="img-wrapper">
                                <img src={photo2} alt="Shoes" className="img" />
                            </div>
                            <div className="item-detail">
                                <h3 className="subtitle">Vintage Backbag</h3>
                                <div className="detail-wrapper">
                                    <span className="price highlight">$54.99</span>
                                    <span className="price strikethrough">$94.99</span>
                                </div>
                                <div className="quantity-control">
                                    <button className="qty-button">
                                        <Remove className="qty-icon" />
                                    </button>
                                    <span className="quantity">1</span>
                                    <button className="qty-button">
                                        <Add className="qty-icon" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="general">
                        <h3 className="subtitle">Shipping</h3>
                        <span className="price">$19</span>
                    </div>
                    <div className="general">
                        <h3 className="subtitle">Total</h3>
                        <span className="price">$148.98</span>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-container container">
                <span className="copyright">
                    created by <u><strong>tasca-eduard</strong></u> - devChallenges.io
                </span>
            </div>
        </footer>     
    </>
  );
}

export default App;
