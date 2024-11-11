import { useState } from "react";
export default function Form() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
  
    function handleFirstNameChange(e) {
      setfirstName(e.target.value);
    }
  
    function handleLastNameChange(e) {
      setlastName(e.target.value);
    }
  
    function handleReset() {
      setfirstName('');
      setlastName('');
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Nombre"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Apellido"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hola, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reiniciar</button>
      </form>
    );
  }