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

import React,{useState} from 'react';
import axios from 'axios';
//import visibilityOn from '../images/visibility-on.svg';
//import visibilityOff from '../images/visibility-off.svg';
import { useRouter } from 'next/router';
const Polygon1Image = '/MacBookAir2_Polygon_1.png';
const Group1Image = '/MacBookAir2_Group_1.png';
const VectorImage = '/MacBookAir2_Vector.png';
const Vector1Image = '/MacBookAir2_Vector_1.png';
const Vector2Image = '/MacBookAir2_Vector_2.png';
const Vector3Image = '/MacBookAir2_Vector_3.png';
const Vector4Image = '/MacBookAir2_Vector_4.png';
const Vector5Image = '/MacBookAir2_Vector_5.png';
const Vector6Image = '/MacBookAir2_Vector_6.png';
const Vector7Image = '/MacBookAir2_Vector_7.png';
const Vector8Image = '/MacBookAir2_Vector_8.png';
import { styled } from '@mui/material/styles';
//import 'typeface-roboto';

const MacBookAir21 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `832px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Polygon1 = styled('img')({
  height: `830.52px`,
  width: `717px`,
  position: `absolute`,
  left: `0px`,
  top: `1px`,
});

const Group1 = styled('img')({
  height: `260.07px`,
  width: `218.27px`,
  position: `absolute`,
  left: `451px`,
  top: `282px`,
});

const Group87 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `50px`,
  left: `790px`,
  top: `510px`,
});

const Group83 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `50px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle3 = styled('button')({
  backgroundColor: `rgba(0, 70, 67, 1)`,
  borderRadius: `15px`,
  width: `382px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Login = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 254, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `65.16px`,
  position: `absolute`,
  left: `158px`,
  top: `14px`,
});

// const Login = styled('button')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(255, 255, 254, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Roboto`,
//   fontWeight: `700`,
//   fontSize: `16px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   width: `65.16px`,
//   position: `absolute`,
//   left: `158px`,
//   top: `5px`,
//   backgroundColor: `rgba(0, 0, 0, 0.2)`,
//   border: `none`,
//   borderRadius: `5px`,
//   cursor: `pointer`,
//   padding: `8px 8px`,
//   outline: `none`,
//   transition: `background-color 0.3s ease`,
//   '&:hover': {
//     backgroundColor: `rgba(0, 0, 0, 0.3)`,
//   },
// });

const Login1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `60px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `784px`,
  top: `144px`,
});

const Group199 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `166px`,
  left: `790px`,
  top: `295px`,
});

const Group198 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `166px`,
  left: `0px`,
  top: `0px`,
});

const Group196 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `73px`,
  left: `0px`,
  top: `0px`,
});

const Group195 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `50px`,
  left: `0px`,
  top: `23px`,
});

const Group831 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `50px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle31 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `2px solid rgba(229, 96, 49, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `382px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Email = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(229, 96, 49, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `21px`,
  top: `0px`,
});

const EmailInput = styled('input')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 151, 115, 1)`,
  fontStyle: `Normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `61px`,
  top: `40px`,
  outline: `none`
});

const Group197 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `73px`,
  left: `0px`,
  top: `93px`,
});

const Group1951 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `50px`,
  left: `0px`,
  top: `23px`,
});

const Group832 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `382px`,
  height: `50px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle32 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `2px solid rgba(229, 96, 49, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `382px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Password = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(229, 96, 49, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `21px`,
  top: `0px`,
});

const EnterYourPassword = styled('input')({
  outline: `none`,
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 151, 115, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `61px`,
  top: `40px`,
});

const Group = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `19px`,
  height: `18.26px`,
  left: `23px`,
  top: `132px`,
});

const Vector = styled('img')({
  height: `18.26px`,
  width: `19px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector1 = styled('img')({
  height: `2.99px`,
  width: `3px`,
  position: `absolute`,
  left: `14px`,
  top: `2px`,
});

const Vector2 = styled('img')({
  height: `17.6px`,
  width: `22px`,
  position: `absolute`,
  left: `341px`,
  top: `134px`,
  cursor: `pointer`,
});

const Group124 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `21.81px`,
  left: `809px`,
  top: `331px`,
});

const Group2 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `14.18px`,
  left: `0px`,
  top: `8px`,
});

const Vector3 = styled('img')({
  height: `14.18px`,
  width: `25px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group3 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `17.28px`,
  height: `10.11px`,
  left: `4px`,
  top: `0px`,
});

const Vector4 = styled('img')({
  height: `10.11px`,
  width: `17.28px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group4 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  height: `8.37px`,
  left: `0px`,
  top: `8px`,
});

const Vector5 = styled('img')({
  height: `8.37px`,
  width: `25px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group5 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `3.86px`,
  height: `2.99px`,
  left: `21px`,
  top: `5px`,
});

const Vector6 = styled('img')({
  height: `2.99px`,
  width: `3.86px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group6 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `3.86px`,
  height: `2.99px`,
  left: `0px`,
  top: `5px`,
});

const Vector7 = styled('img')({
  height: `2.99px`,
  width: `3.86px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector8 = styled('img')({
  height: `11.14px`,
  width: `10.43px`,
  position: `absolute`,
  left: `7px`,
  top: `2px`,
});

export default function MacBookAir2(props) {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const router=useRouter();

  const handleLogin = async () => {
    try 
    {
      
      const response = await axios.post('http://localhost:3000/admin/login', {
        email: email,
        password: password
      });
      //console.log(response.data['Login Successful']);
      const token = response.data['Login Successful'];
      localStorage.setItem('token', token); // Store the authentication token in local storage
      router.push('/dashboard'); // Redirect to /dashboard page
    } 
    catch (error) 
    {
      console.log(error);
      if (error.response && error.response.status === 401 || 400) 
      {
        alert('Invalid email or password');
      } 
      else 
      {
        alert('Could not connect to server. Please try again later.');
      }
    }
  };
  
  


  return (
    <MacBookAir21 className={props.className}>
      <Polygon1 src={Polygon1Image} loading="lazy" alt={'Polygon 1'} />
      <Group1 src={Group1Image} loading="lazy" alt={'Group 1'} />
      <Group87>
        <Group83>
          <Rectangle3 onClick={handleLogin}><Login>{`Login `}</Login></Rectangle3>
        </Group83>
        
      </Group87>
      <Login1>{`Login`}</Login1>
      <Group199>
        <Group198>
          <Group196>
            <Group195>
              <Group831>
                <Rectangle31></Rectangle31>
              </Group831>
            </Group195>
            <Email>{`Email`}</Email>
            <EmailInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {/* <EnterYourEmail>{`Enter your email`}</EnterYourEmail> */}
          </Group196>
          <Group197>
            <Group1951>
              <Group832>
                <Rectangle32></Rectangle32>
              </Group832>
            </Group1951>
            <Password>{`Password`}</Password>
            <EnterYourPassword
            type={showPassword ? 'text' : 'password'}
          // type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder='Enter your password'
        />
            {/* <EnterYourPassword>{`Enter your password`}</EnterYourPassword> */}
          </Group197>
        </Group198>
        <Group>
          <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
          <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
        </Group>
        <Vector2 src={Vector2Image}
        
        onClick={handlePasswordToggle}
         loading="lazy" alt={'Vector'} />
      </Group199>
      <Group124>
        <Group2>
          <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
        </Group2>
        <Group3>
          <Vector4 src={Vector4Image} loading="lazy" alt={'Vector'} />
        </Group3>
        <Group4>
          <Vector5 src={Vector5Image} loading="lazy" alt={'Vector'} />
        </Group4>
        <Group5>
          <Vector6 src={Vector6Image} loading="lazy" alt={'Vector'} />
        </Group5>
        <Group6>
          <Vector7 src={Vector7Image} loading="lazy" alt={'Vector'} />
        </Group6>
        <Vector8 src={Vector8Image} loading="lazy" alt={'Vector'} />
      </Group124>
    </MacBookAir21>
  );
}

