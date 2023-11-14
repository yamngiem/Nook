// import logo from './logo.svg';
import './login.css';



function App() {

  // const backgroundStyle = {
  //   backgroundImage: `url(${process.env.PUBLIC_URL}/kuvat/login.jpg)`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   color: 'white',
  // };






  return (

    <div className="grid-background">
      <div className="grid-container">



        <img src="../kuvat/logo2.png" alt="Logo kuvaileva teksti" className="logo" />


        <label class="username">

          <input defaultValue={"text"} id="etunimi" type="text" placeholder="Username" />      </label>



        <label class="password">

          <input defaultValue={"password"} id="etunimi" type="text" placeholder="Enter your password" />      </label>


        <button className="loginnappi"></button>
        {/* Täällä voit lisätä grid-item-elementtejä */}
      </div>


    </div>

  );
}

export default App;