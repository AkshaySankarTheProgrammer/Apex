import "./index.css"
import img1 from "./Images/volvo-36.png"
import img2 from "./Images/volvo-22.png"
import img3 from "./Images/volvo-37.png"
import img4 from "./Images/logo.png"

const Home = () => {

    /*const observer = new IntersectionObserver((entries) => {
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
*/
    return ( 
        <div>
            <div className="tagline hidden show">
                <h1 className="tag"><br /><br />Elevating <br /> Automotive <br /> Excellence.<br /><br /></h1>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    );
}
export default Home;