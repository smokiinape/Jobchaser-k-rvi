import React from "react";
import Dropzone from "react-dropzone";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



function Userinterface() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [cv, setCv] = useState(null);
    const [personalLetter, setPersonalLetter] = useState("");
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleBioChange = (e) => {
      setBio(e.target.value);
    };
  
    const handleProfilePictureDrop = (acceptedFiles) => {
      setProfilePicture(acceptedFiles[0]);
    };
  
    const handleCvDrop = (acceptedFiles) => {
      setCv(acceptedFiles[0]);
    };
  
    const handlePersonalLetterChange = (value) => {
      setPersonalLetter(value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Skicka data till servern här
  
      // Nollställ formuläret
      setName("");
      setAddress("");
      setEmail("");
      setPhone("");
      setBio("");
      setProfilePicture(null);
      setCv(null);
      setPersonalLetter("");
    };
  

    return (
        <div className="user-inter">
          <form>
            <h1>Min profil</h1>
            <div className="form-user">
              <label htmlFor="name">Namn</label>
              <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
            </div>
            <div className="form-user">
              <label htmlFor="address">Adress</label>
              <input type="text" id="address" name="address" value={address} onChange={handleAddressChange} />
            </div>
            <div className="form-user">
              <label htmlFor="phone">Telefonnummer</label>
              <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} />
            </div>
            <div className="form-user">
              <label htmlFor="profilePicture">Profilbild</label>
              <Dropzone onDrop={handleImageDrop}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Klicka här eller släpp en fil för att ladda upp en profilbild</p>
                    </div>
                  </section>
                )}
              </Dropzone>
              {image && (
                <div>
                  <p>{image.name}</p>
                  <img src={URL.createObjectURL(image)} alt={image.name} style={{ maxWidth: "200px" }} />
                </div>
              )}
            </div>
            <div className="form-user">
              <label htmlFor="cv">CV</label>
              <Dropzone onDrop={handleCvDrop}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Klicka här eller släpp en fil för att ladda upp ditt CV</p>
                    </div>
                  </section>
                )}
              </Dropzone>
              {cv && (
                <div>
                  <p>{cv.name}</p>
                  <a href={URL.createObjectURL(cv)} download>
                    Ladda ner
                  </a>
                </div>
              )}
            </div>
            <div className="form-user">
              <label htmlFor="personalLetter">Personligt brev</label>
              <ReactQuill value={letter} onChange={handleLetterChange} />
            </div>
            <button type="submit">Spara</button>
          </form>
        </div>
      );
    
      
};

export default Userinterface;




/**
 * Detta är en funktion som adderar två tal.
 * Den här koden skapar en enkel användargränssnitt med ett formulär där användaren kan fylla i namn, adress, telefonnummer, ladda upp en profilbild, en CV-fil och ett personligt brev med hjälp av Dropzone och ReactQuill.
 * Det finns också olika funktioner för att hantera användarens inmatning och uppladdningar, t.ex. handleNameChange, handleAddressChange, handlePhoneChange, handleImageDrop, handleCvDrop, handleLetterDrop, handlePersonalLetterChange. 
 * Till sist finns det en Submit-knapp för att spara informationen som användaren har skrivit in.
 * 
 * 
 * @author Smokin Ape
 * jag avskyr usehistory
 * 
 * 
 */