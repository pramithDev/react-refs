// export default function ResultModal({ref, result, targetTime}) {
//     return (
//         <dialog ref={ref} className="result-modal">
//             <h2>You {result}</h2>
//             <p>The target time was <strong>{targetTime} seconds.</strong></p>
//             <p>You stopped the timer with <strong>X seconds left.</strong></p>
//             <form method="dialog">
//                 <button> Close </button>
//             </form>
//         </dialog>
//     )
// }

import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button> Close </button>
            </form>
        </dialog>
    );
});

export default ResultModal;




// import React from 'react';

// import Input from './Input';

// export const userData = {
//   name: '',
//   email: '',
// };

// export function App() {
//   const name = React.useRef();
//   const email = React.useRef();
  
//   function handleSaveData() {
//     const enteredName = name.current.value;
//     const enteredEmail = email.current.value;
 
//     userData.name = enteredName;
//     userData.email = enteredEmail;

//     console.log(userData);
//   }

//   return (
//     <div id="app">
//       <Input type="text" label="Your Name" ref={name}/>
//       <Input type="email" label="Your E-Mail" ref={email} />
//       <p id="actions">
//         <button onClick={handleSaveData}>Save Data</button>
//       </p>
//     </div>
//   );
// }


// import { React, forwardRef } from "react";
 
// const Input = React.forwardRef(function Input({ label, ...props }, ref) {
//   return (
//     <p className="control">
//       <label>{label}</label>
//       <input ref={ref} {...props} />
//     </p>
//   );
// });

// export default Input;