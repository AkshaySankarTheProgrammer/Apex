import "./Login.css";
import "./index.css";

import img from "./Images/logo2.png";

const Login = () => {

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

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    return (  
        <div className="page">
            <div className="loginForm">
                <form>
                    <div className="heading">
                        <p id="signin">Sign in</p>
                    </div>
                    <div className="username">
                        <p id="signin">Enter Username (Email):</p>
                        <input type="text" placeholder="Username" id="email" name="email" required />
                    </div>
                    <br /><br />

                    <div className="pwd">
                        <p id="signin">Enter Password:</p>
                        <input type="password" placeholder="Password" id="pwd" name="pwd" required />
                    </div>
                    <br /><br /><br />

                    <div className="forgotpwd">
                        <a href="./register.html">Forgot Password?</a>
                    </div>
                    <br />

                    <button type="submit" className="loginBtn">Login</button>

                    <div className="Register">
                        <p>Don't have an account?<br />
                        <a href="register.html">Register</a></p>
                    </div>
                    <div className="image">
                        <img src={img} className="hidden" />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;