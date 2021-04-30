import { useState, useEffect } from 'react';
import axios from 'axios';
 
export default function App() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {
    const result = await axios(
      'http://www.localhost:4000/programming-languages',
    );
 
    setData(result.data);
  });
 
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.id}>
          <a href={item.id}>{item.id}</a>
        </li>
      ))}
    </ul>
  );
}
 




