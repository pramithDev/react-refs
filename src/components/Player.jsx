import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnterPlayerName] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   // setSubmitted(false);
  //   setEnterPlayerName(event.target.value)
  // }

  // function handleClick() {
  //   setSubmitted(true);
  // }

  function handleClick() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input 
        ref={playerName} 
        type="text" 
        // onChange={handleChange} 
        // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}




// import React from 'react'

// function App() {
//   const filePicker = React.useRef();
//   function handleStartPickImage() {
//     filePicker.current.click();
//   }
//   return (
//     <div id="app">
//       <p>Please select an image</p>
//       <p>
//         <input 
//             data-testid="file-picker" 
//             type="file" 
//             accept="image/*"
//             ref={filePicker}
//         />
//         <button onClick={handleStartPickImage}>Pick Image</button>
//       </p>
//     </div>
//   );
// }

// export default App;