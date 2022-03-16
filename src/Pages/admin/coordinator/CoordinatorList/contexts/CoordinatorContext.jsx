import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

 export const UserContext= createContext()
 const CoordinatorContext= (props)=>{
    const [users] = useState([
        {
          id: uuidv4(),
          name: "Thomas Hardy10",
          email: "thomashardy@mail.com",
          address: "89 Chiaroscuro Rd, Portland, USA",
          phone: "(171) 555-2222",
        },
        {
          id: uuidv4(),
          name: "Dominique Perrier",
          email: "dominiqueperrier@mail.com",
          address: "Obere Str. 57, Berlin, Germany",
          phone: "(313) 555-5735",
        },
        {
          id: uuidv4(),
          name: "Maria Anders",
          email: "mariaanders@mail.com",
          address: "25, rue Lauriston, Paris, France",
          phone: "(503) 555-9931",
        },
        {
          id: uuidv4(),
          name: "Fran Wilson",
          email: "franwilson@mail.com",
          address: "C/ Araquil, 67, Madrid, Spain",
          phone: "(204) 619-5731",
        },
        {
          id: uuidv4(),
          name: "Martin Blank",
          email: "martinblank@mail.com",
          address: "Via Monte Bianco 34, Turin, Italy",
          phone: "(480) 631-2097",
        },
        {
          id: uuidv4(),
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: "street: Kulas Lightsuite: Apt. 556 city: Gwenborough, zipcode:92998-3874,",
          phone: "1-770-736-8031 x56442",
        },
        {
          id: uuidv4(),
          name: "Thomas Hardy10",
          email: "thomashardy@mail.com",
          address: "89 Chiaroscuro Rd, Portland, USA",
          phone: "(171) 555-2222",
        },
        {
          id: uuidv4(),
          name: "Dominique Perrier",
          email: "dominiqueperrier@mail.com",
          address: "Obere Str. 57, Berlin, Germany",
          phone: "(313) 555-5735",
        },
        {
          id: uuidv4(),
          name: "Maria Anders",
          email: "mariaanders@mail.com",
          address: "25, rue Lauriston, Paris, France",
          phone: "(503) 555-9931",
        },
        {
          id: uuidv4(),
          name: "Fran Wilson",
          email: "franwilson@mail.com",
          address: "C/ Araquil, 67, Madrid, Spain",
          phone: "(204) 619-5731",
        },
        {
          id: uuidv4(),
          name: "Martin Blank",
          email: "martinblank@mail.com",
          address: "Via Monte Bianco 34, Turin, Italy",
          phone: "(480) 631-2097",
        },
        {
          id: uuidv4(),
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: "street: Kulas Lightsuite: Apt. 556 city: Gwenborough, zipcode:92998-3874,",
          phone: "1-770-736-8031 x56442",
        },
       
      ]) 
      const sortedUsers= users.sort((a, b) => (a.name < b.name ? -1 : 1));
      return (
           <UserContext.Provider value={{sortedUsers}}>
               {props.children}
           </UserContext.Provider>
      )
 }
  export default CoordinatorContext;