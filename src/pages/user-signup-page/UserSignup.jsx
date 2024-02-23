
import "./usersignup.css";
//import Button from "../../components/button/Button";
import wallpaper from "../../assets/welcome2.jpg";
import logo from "../../assets/image 6.png";
import nav from "../../assets/Vector2.png";

const UserSignup = () => {
  return (
    <main className="signup-container">
      <form className="signup-form">
        <section className="left-sec">
          <div className="signup-inside-div">
            <img src={wallpaper} alt="wall" className="signup-wallpaper" />
          </div>
          <div className="signup-middle-div"></div>
          <div className="signup-upper-div">
            <header className="signup-logo-div">
              <img src={logo} alt="logo" className="signup-logo" />
            </header>
            <nav className="signup-navigation">
              <img src={nav} alt="nav" className="signup-nav-img" />
            </nav>
            <div className="signup-headertext">
              Please enter your details to signup and be part of our great
              community
            </div>
            <div className="signup-subtext">
              Already have an account ?
              <span className="signup-subtext-span"> Login</span>
            </div>
          </div>
        </section>
        <section className="right-sec">
          <header className="signup-logo-div2">
            <img src={logo} alt="logo" className="signup-logo2" />
          </header>
          <header className="head-signup">Sign Up</header>
          <div className="signup-input-label-div">
            <label className="signup-label">Company Name</label>
            <input
              type="text"
              className="signup-input"
              placeholder="company name"
            />
          </div>
          <div className="signup-input-label-div">
            <label className="signup-label">Email </label>
            <input type="text" className="signup-input" placeholder="Email" />
          </div>
          <div className="signup-input-label-div">
            <label className="signup-label">Password</label>
            <input
              type="text"
              className="signup-input"
              placeholder="Password"
            />
          </div>
          <div className="signup-input-label-div">
            <label className="signup-label">Confirm Password</label>
            <input
              type="text"
              className="signup-input"
              placeholder="Confirm Password"
            />
          </div>
          <button className="signup-btn">Signup</button>
          <div className="signup-subtext-down">
            Already have an account ?
            <span className="signup-subtext-span-down"> Login</span>
          </div>
        </section>
      </form>
    </main>
  );
};

