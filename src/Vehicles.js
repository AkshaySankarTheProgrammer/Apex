import "./index.css";
import "./Vehicles.css";
import img1 from "./Images/hatchback.png";
import img2 from "./Images/sedan.png";
import img3 from "./Images/suv.png";
import img4 from "./Images/luxury.png";
import { useNavigate } from "react-router";

const Vehicles = () => {
/*
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    });
    

    const hidden showElements = document.querySelectorAll('.hidden show');
    hidden showElements.forEach((el) => observer.observe(el));
*/

    let nv = useNavigate();

    return (  
        <div>
            <h1 className="Models hidden show show"> Models </h1>
            <br /><br /><br />
            <div className = "vehicleContainer">
                <div className="carImg cars">
                    <div className="specsCard hidden show show" id="haima">
                        <img className="cars enlarge" src={img1} width="450" height="350" id="img1"/>
                        <div className="specs">
                            <h2 className="modelName">Haima H1</h2><br /><br />
                            <ul className="accordion">
                                <li>
                                    <input type="checkbox" name="accordion" id="first" />
                                    <label for="first"> <b>Mileage</b></label>
                                    <div className="specscontent">
                                        <p> 22.35 kmpl to 25.61 kmpl </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="second" />
                                    <label for="second"> <b>Engine</b></label>
                                    <div className="specscontent">
                                        <p> 1197 cc </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="third" />
                                    <label for="third"> <b>Fuel Type</b></label>
                                    <div className="specscontent">
                                        <p> Petrol & CNG </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="fourth" />
                                    <label for="fourth"> <b>Transmission</b></label>
                                    <div className="specscontent">
                                        <p> Manual & Automatic </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="fifth" />
                                    <label for="fifth"> <b>Seating Capacity</b></label>
                                    <div className="specscontent">
                                        <p> 5 Seater </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="sixth" />
                                    <label for="sixth"> <b>Price</b></label>
                                    <div className="specscontent">
                                        <p> Rs. 6.66 Lakh onwards </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div className="specsCard hidden show" id="synope">
                        <img className="cars enlarge" id="img2" src={img2} width="450" height="350"/>
                        <div className="specs">
                            <h2 className="modelName">Synope S1</h2><br /><br />
                            <ul className="accordion">
                                <li>
                                    <input type="checkbox" name="accordion" id="first2" />
                                    <label for="first2"> <b>Mileage</b></label>
                                    <div className="specscontent">
                                        <p> 17.42 kmpl to 19.73 kmpl </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="second2" />
                                    <label for="second2"> <b>Engine</b></label>
                                    <div className="specscontent">
                                        <p> 1497 cc </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="third2" />
                                    <label for="third2"> <b>Fuel Type</b></label>
                                    <div className="specscontent">
                                        <p> Petrol & Diesel </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="fourth2" />
                                    <label for="fourth2"> <b>Transmission</b></label>
                                    <div className="specscontent">
                                        <p> Manual & Automatic </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="fifth2" />
                                    <label for="fifth2"> <b>Seating Capacity</b></label>
                                    <div className="specscontent">
                                        <p> 5 Seater </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="sixth2" />
                                    <label for="sixth2"> <b>Price</b></label>
                                    <div className="specscontent">
                                        <p> Rs. 12.49 Lakh onwards </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div className="specsCard hidden show" id="sylph">
                        <img className="cars enlarge" id="img3" src={img3} width="450" height="350"/>
                        <div className="specs">
                            <h2 className="modelName">Sylph S1</h2><br /><br />
                            <ul className="accordion">
                                <li>
                                    <input type="checkbox" name="accordion" id="first3" />
                                    <label for="first3"> <b>Mileage</b></label>
                                    <div className="specscontent">
                                        <p> 10.25 kmpl to 14.38 kmpl </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="second3" />
                                    <label for="second3"> <b>Engine</b></label>
                                    <div className="specscontent">
                                        <p> 1997 cc </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="third3" />
                                    <label for="third3"> <b>Fuel Type</b></label>
                                    <div className="specscontent">
                                        <p> Diesel </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="fourth3" />
                                    <label for="fourth3"> <b>Transmission</b></label>
                                    <div className="specscontent">
                                        <p> Manual & Automatic </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="fifth3" />
                                    <label for="fifth3"> <b>Seating Capacity</b></label>
                                    <div className="specscontent">
                                        <p> 7 Seater </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="sixth3" />
                                    <label for="sixth3"> <b>Price</b></label>
                                    <div className="specscontent">
                                        <p> Rs. 16.99 Lakh onwards </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div className="specsCard hidden show" id="lysander">
                        <img className="cars enlarge" id="img4" src={img4} width="450" height="350"/>
                        <div className="specs">
                            <h2 className="modelName">Lysander L1</h2><br /><br />
                            <ul className="accordion">
                                <li>
                                    <input type="checkbox" name="accordion" id="first4" />
                                    <label for="first4"> <b>Mileage</b></label>
                                    <div className="specscontent">
                                        <p> 11.63 kmpl to 13.29 kmpl </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="second4" />
                                    <label for="second4"> <b>Engine</b></label>
                                    <div className="specscontent">
                                        <p> 3097 cc </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="third4" />
                                    <label for="third4"> <b>Fuel Type</b></label>
                                    <div className="specscontent">
                                        <p> Petrol </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="fourth4" />
                                    <label for="fourth4"> <b>Transmission</b></label>
                                    <div className="specscontent">
                                        <p> Automatic </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="fifth4" />
                                    <label for="fifth4"> <b>Seating Capacity</b></label>
                                    <div className="specscontent">
                                        <p> 4 Seater </p>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="accordion" id="sixth4" />
                                    <label for="sixth4"> <b>Price</b></label>
                                    <div className="specscontent">
                                        <p> Rs. 69.99 Lakh onwards </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="btnContainer">
                        <a onClick={() => nv({pathname: "/booknow"})} className="loginBtn hidden show temp1" > Book Now </a>
                    </div>
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    );
}
 
export default Vehicles;