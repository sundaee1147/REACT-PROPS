
import Profile from "./Profile/Profile";
import photo from "./Assets/Sunday.jpg"


function App() {

  const handleName = (fullName) => alert(fullName);

  const styleProfile = {

    margin: 20,
    padding: 20,
    fontFamily: "Akaya Kanadaka",
    textAlign: "center",
    border: "5px solid #320d3e",
    backgroundColor: "#684444",
    borderRadius: 25,

  };

  //handleName sends an alert message with the name of the profile user.
  return (
    <div style={styleProfile}>
      <Profile
        fullName="Ogbodu Sunday"
        profession="FullStack Developer"
        handleName={handleName}
      >
        <img src={photo} alt="Profilepic" ></img>  
      </Profile>  
    </div>
  );        // Profile photo as children props
}

export default App;