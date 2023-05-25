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
import axios from 'axios';
import React from 'react';
import { styled } from '@mui/material/styles';
import LogOut24Px from 'components/LogOut24Px/LogOut24Px';

const Frame31 = styled('div')({
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
});

const MacBookAir3 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1280px`,
  height: `832px`,
  left: `0px`,
  top: `0px`,
  overflow: `hidden`,
});

const Rectangle47 = styled('div')({
  backgroundColor: `rgba(229, 96, 49, 1)`,
  width: `1280px`,
  height: `92px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group1 = styled('img')({
  height: `71px`,
  width: `59.59px`,
  position: `absolute`,
  left: `51px`,
  top: `8px`,
});

const LogOut24Px1 = styled(LogOut24Px)(({ theme }) => ({
  width: `33.73px`,
  height: `33.73px`,
  position: `absolute`,
  left: `1204px`,
  top: `31px`,
}));

const Group234 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `267.15px`,
  height: `50px`,
  left: `962px`,
  top: `110px`,
});

const Group119 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `267.15px`,
  height: `50px`,
  left: `0px`,
  top: `0px`,
});

const Group122 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `267.15px`,
  height: `50px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle1 = styled('img')({
  height: `50px`,
  width: `267.15px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Search = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(171, 209, 198, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `25px`,
  top: `16px`,
});

const Vector = styled('img')({
  height: `24px`,
  width: `24px`,
  position: `absolute`,
  left: `227px`,
  top: `15px`,
});

const Rectangle48 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 0px 15px rgba(0, 0, 0, 0.25)`,
  borderRadius: `20px`,
  width: `1218px`,
  height: `629px`,
  position: `absolute`,
  left: `35px`,
  top: `180px`,
});

const Group281 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `69px`,
  height: `23px`,
  left: `263px`,
  top: `241px`,
});

const Q44 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector1 = styled('img')({
  height: `18.19px`,
  width: `19px`,
  position: `absolute`,
  left: `50px`,
  top: `2px`,
});

const Group279 = styled('div')({
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1174px`,
  height: `61px`,
  left: `59px`,
  top: `220px`,
});

const Rectangle49 = styled('div')({
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  border: `2px solid rgba(0, 70, 67, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `1174px`,
  height: `61px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group278 = styled('img')({
  height: `37.21px`,
  width: `30.1px`,
  position: `absolute`,
  left: `1111px`,
  top: `11px`,
});

const ZaeemKhan = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `82px`,
  top: `21px`,
});

const Image3 = styled('img')({
  height: `39px`,
  width: `39px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `21px`,
  top: `12px`,
});

const Group280 = styled('div')({
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1174px`,
  height: `61px`,
  left: `59px`,
  top: `300px`,
});

const Rectangle491 = styled('div')({
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  border: `2px solid rgba(0, 70, 67, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `1174px`,
  height: `61px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group2781 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `30.1px`,
  height: `37.21px`,
  left: `1111px`,
  top: `11px`,
});

const Vector2 = styled('img')({
  height: `8.43px`,
  width: `30.1px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector3 = styled('img')({
  height: `28.18px`,
  width: `25.85px`,
  position: `absolute`,
  left: `2px`,
  top: `9px`,
});

const Group2811 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `69px`,
  height: `23px`,
  left: `204px`,
  top: `19px`,
});

const Q12 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector4 = styled('img')({
  height: `18.19px`,
  width: `19px`,
  position: `absolute`,
  left: `50px`,
  top: `2px`,
});

const ZaeemKhan1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `82px`,
  top: `21px`,
});

const Image31 = styled('img')({
  height: `39px`,
  width: `39px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `21px`,
  top: `12px`,
});

// function Frame3(props) {
//   return (
//     <Frame31 className={props.className}>
//       <MacBookAir3>
//         <Rectangle47></Rectangle47>
//         <Group1
//           src={`assets/images/Frame3_Group_1.png`}
//           loading="lazy"
//           alt={'Group 1'}
//         />
//         <LogOut24Px1 />
//         <Group234>
//           <Group119>
//             <Group122>
//               <Rectangle1
//                 src={`assets/images/Frame3_Rectangle_1.png`}
//                 loading="lazy"
//                 alt={'Rectangle 1'}
//               />
//               <Search>{`Search`}</Search>
//             </Group122>
//           </Group119>
//           <Vector
//             src={`assets/images/Frame3_Vector.png`}
//             loading="lazy"
//             alt={'Vector'}
//           />
//         </Group234>
//         <Rectangle48></Rectangle48>
//         <Group281>
//           <Q44>{` (4.4)`}</Q44>
//           <Vector1
//             src={`assets/images/Frame3_Vector_1.png`}
//             loading="lazy"
//             alt={'Vector'}
//           />
//         </Group281>
//         <Group279>
//           <Rectangle49></Rectangle49>
//           <Group278
//             src={`assets/images/Frame3_Group_278.png`}
//             loading="lazy"
//             alt={'Group 278'}
//           />
//           <ZaeemKhan>{`Zaeem Khan`}</ZaeemKhan>
//           <Image3
//             src={`assets/images/Frame3_image_3.png`}
//             loading="lazy"
//             alt={'image 3'}
//           />
//         </Group279>
//         <Group280>
//           <Rectangle491></Rectangle491>
//           <Group2781>
//             <Vector2
//               src={`assets/images/Frame3_Vector_2.png`}
//               loading="lazy"
//               alt={'Vector'}
//             />
//             <Vector3
//               src={`assets/images/Frame3_Vector_3.png`}
//               loading="lazy"
//               alt={'Vector'}
//             />
//           </Group2781>
//           <Group2811>
//             <Q12>{` (1.2)`}</Q12>
//             <Vector4
//               src={`assets/images/Frame3_Vector_4.png`}
//               loading="lazy"
//               alt={'Vector'}
//             />
//           </Group2811>
//           <ZaeemKhan1>{`Zaeem Khan`}</ZaeemKhan1>
//           <Image31
//             src={`assets/images/Frame3_image_3_1.png`}
//             loading="lazy"
//             alt={'image 3'}
//           />
//         </Group280>
//       </MacBookAir3>
//     </Frame31>
//   );
// }

function Frame3({ userProps }) {
  const handleDelete = (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (id.hasOwnProperty('t_id')) {
      // Delete tutor
      axios.delete(`http://localhost:3000/admin/deletetutor/${id.t_id}`, config)
        .then((response) => {
          // Handle successful deletion
          console.log('Tutor deleted:', response.data);
        })
        .catch((error) => {
          // Handle deletion error
          console.error('Error deleting tutor:', error);
        });
    } else if (id.hasOwnProperty('s_id')) {
      // Delete student
      axios.delete(`http://localhost:3000/admin/deletestudent/${id.s_id}`, config)
        .then((response) => {
          // Handle successful deletion
          console.log('Student deleted:', response.data);
        })
        .catch((error) => {
          // Handle deletion error
          console.error('Error deleting student:', error);
        });
    }
  };

  return (
    <div>
      <h2>User Data</h2>
      <ul>
        {userProps.map((user) => (
          <li key={user.t_id || user.s_id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Address: {user.address}</p>
            <p>Email: {user.email}</p>
            <p>Average Rating: {user.avg_rating}</p>
            <button onClick={() => handleDelete(user)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


// function Frame3({ userProps }) {
//   return (
//     <div>
      
//       <ul>
//         {userProps.map((user) => (
//           <li key={user.t_id || user.s_id}>
//             <p>Name: {user.name}</p>
//             <p>Age: {user.age}</p>
//             <p>Address: {user.address}</p>
//             <p>Email: {user.email}</p>
//             <p>Average Rating: {user.avg_rating}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default Frame3;
