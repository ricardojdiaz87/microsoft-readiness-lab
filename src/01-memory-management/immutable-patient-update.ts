/**
 * REF: Nested Object Inmutability Lab
 * GOAL: pREVENT "Shallow Copy" bugs in clinical data 
 */

interface Adress {
    city: string;
    street: string;
}

interface Patient {
    readonly id: string;
    name:string;
    contact: Adress;
}

const originalPatient: Patient = {
  id: "PAT-99",
  name: "Ricardo",
  contact: {
    city: "Valencia",
    street: "Bolivar Ave"
  }
};

// MY IMPLEMENTATION:
// I'm using a double-level spread here.
//Level 1 gets 'id' and 'name'.
// Level 2 (The contact property) needs its own curlu braces to create a NEW object in the heap.
const UpdatePatient: Patient ={
    ...originalPatient,
    contact: {
      ...originalPatient.contact,
      city:"Caracas"
    }
};

//LOGIN CHECK:
// If I  only did { ...originalPatient, city: "Caracas"},
//Typescript would complain because 'city' isn't in the root of Patient.
//More importantly, the 'contact' reference would be identical to the old one.

console.log("Root check (Should be true):", originalPatient !== UpdatePatient);
console.log("Deep check (Should be true):", originalPatient.contact !== UpdatePatient.contact);

/* * During this lab, i realized that JavaScript's spread operator is 'shallow' by design.
In a real-world Azure function or React state, forgetting the second spread
would mean that modifying the 'new' patient would accidentally change the 'old' one.
This manual apoach is the foundation for undertanding how libraries like Immer.js work.
*/

