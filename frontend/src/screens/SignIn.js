import { Link } from "react-router-dom";
import showhide from "./showhide";

function SignIn(){
    return(
        
    <div>
        <div className="SignInContent">
            Log In Page
            <form action="#">
                <div className="field">
                    <span className="fa fa-user"></span>
                    <input type="text" required placeholder="Enter Email"/>
                </div>
                <div className="field space">
                    <span className="fa fa-lock"></span>
                    <input type="password" required placeholder="Password" className="pass-key"/>
                    <span className="show" onClick={showhide}>SHOW</span>
                </div>
                <div className="pass">
                    <Link to="/">Forgot Password?</Link>
                </div>
                <div className="field">
                    <input type="submit" value="LOG IN"/>
                </div>
                <div className="signup"><Link to="/">Don't Have Account? Sign Up</Link></div>
            </form>
        </div>
    </div>
    );
};
export default SignIn;