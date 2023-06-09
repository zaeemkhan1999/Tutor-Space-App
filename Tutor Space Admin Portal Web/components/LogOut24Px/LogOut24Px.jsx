/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';

const LogOut24Px1 = styled('button')({
  display: `flex`,
  outline:`none`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `33.73px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Vector = styled('img')({
  height: `33.73px`,
  width: `33.73px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector1 = styled('img')({
  height: `25.3px`,
  width: `25.3px`,
  position: `absolute`,
  left: `4px`,
  top: `4px`,
});
const handlelogout=()=>{
  localStorage.removeItem('token');

  // Redirect the user to localhost:3001/
  window.location.href = 'http://localhost:3001/';

};
function LogOut24Px(props) {
  return (
    <LogOut24Px1 onClick={handlelogout} className={props.className}>
      <Vector
        src={`assets/images/LogOut24px_Vector.png`}
        loading="lazy"
        alt={'Vector'}
      />
      <Vector1
        src={`assets/images/LogOut24px_Vector_1.png`}
        loading="lazy"
        alt={'Vector'}
      />
    </LogOut24Px1>
  );
}

export default LogOut24Px;
