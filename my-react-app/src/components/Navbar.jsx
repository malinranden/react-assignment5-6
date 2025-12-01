import { Link } from "react-router-dom";

function Navbar () {
    return (
        <>
            <ul>
                <li><Link to="/assignment5">Assignment 5</Link></li>
                <li><Link to="/assignment6" >Assignment 6</Link></li>
            </ul>
        </>
    )
}
export default Navbar;