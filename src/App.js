import './App.css';
import profile from "./image/bus icon.png";
import email from "./image/email.png";
import password from "./image/password.png";

function App() {
  return (
    <div className="main">
    <div className="sub-main">
    <div>
      <div className="imgs">
       <div className="container-image">
        <img src={profile} alt="profile" className="profile" />

      </div>

      </div>
      <div>
        <h1>Login Page</h1>
        <div> 
          <img src={email} alt="email" className="email"/>
          <input type="text" placeholder="Email" className="name"/>
        </div>
      
      <div className="secinput"> 
          <img src={password} alt="password" className="email"/>
          <input type="password" placeholder="Password" className="name"/>
        </div>
       <div className="loginButton">
       <button>Login</button>
        </div> 
        
      
        
    </div>
    
    </div>


    </div>
    </div>
  );
}

export default App;
