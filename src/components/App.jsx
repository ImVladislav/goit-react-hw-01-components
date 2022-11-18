// import { Avatar } from "components/Profile/avatar/avatar";
// import { UserName } from "components/Profile/userName/UserName";
import { Profile } from './Profile/Profile';

import user from 'data/user.json';


export const App = () => {
  return (
    <>
        <Profile user={user} />
    </>
  );
};