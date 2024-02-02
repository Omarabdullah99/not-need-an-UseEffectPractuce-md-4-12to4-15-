import { useState } from "react";


export default function Exam1() {
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');
  
    // 🔴 Avoid: redundant state and unnecessary Effect
    // const [fullName, setFullName] = useState('');
    // useEffect(() => {
    //   setFullName(firstName + ' ' + lastName);
    // }, [firstName, lastName]);

      // ✅ Good: calculated during rendering
  const fullName = firstName + ' ' + lastName;
  return (
    <div>{fullName}</div>
  )
}
