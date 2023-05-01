import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('Robert');
  return (
    <div>
      <h4>Falsy OR : {text || "Default"}</h4>
      <h4>Falsy AND : {text && "Default"}</h4>
      <h4>Truthy OR : {name || "Default"}</h4>
      <h4>Truthy AND : {name && "Default"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
