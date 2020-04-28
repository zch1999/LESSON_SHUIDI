import React from 'react';
import {} from './style.js';

function Singers(props){
  const { route } = props;
  return (
    <div>
      Singers
    </div>
  );
}
 
export default React.memo(Singers);