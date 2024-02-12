import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName,setFirstName] = useState("");  
  // const [lastName,setLastName] = useState("");  

  // function changeFirstHandler(event){
  //   // console.log("printing first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastHandler(event){
  //   // console.log("printing last name")
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",comments:"",isVisible:false,mode:"",favCar:""})

  //console.log(formData)
  function changeHandler(event){
    const {name,value,checked,type} = event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]:type==="checkbox"? checked:value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("printing");
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text'
        placeholder='first name'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />

        <br/>
        <br/>

        <input type='text'
        placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />
        <br/>
        <br/>
        <input type='email'
        placeholder='Enter Email'
        onChange={changeHandler}
        name='email'
        value={formData.email}/>

        <br/>
        <br/>

        <textarea
        placeholder='enter your comments '
        onChange={changeHandler}
        name='comments'
        value={formData.comments}/>

        <br/>
        <br/>
        <input type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}/>
        <label htmlFor='isVisible'>Am I Visible?</label>
        <br/>
        <br/>

        <input
        type="radio"
        onChange={changeHandler}
        name='mode'
        id='Online-mode'
        value="Online-mode"
        checked={formData.mode === "Online-mode"}
        />
        <label htmlFor='Online-mode'>Online Mode</label>
        
        <input
        type="radio"
        onChange={changeHandler}
        name='mode'
        id='Offline-mode'
        value="Offline-mode"
        checked={formData.mode === "Online-mode"}
        />
        <label htmlFor='Offline-mode'>Offline Mode</label>
        <br/>
        <br/>

        <fieldset>
          <label htmlFor='favCar'>Tell me your fav car</label>
          <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}>

            <option value="scorpio">Scorpio</option>
            <option value="swift">Swift</option>
            <option value="tharr">tharr</option>
            <option value="legender">legender</option>

          </select>
        </fieldset>
        <br/>
        <br/>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
