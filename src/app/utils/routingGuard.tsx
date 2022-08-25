
import { useSelector } from "react-redux";
import {
  Navigate,
  useLocation
} from "react-router-dom";
import { selectUser } from "../../features/user/userSlice";

 /* below function is used for guarding routes
 need to know why is exected while guarding....
 */
export function RequireAuth({ children }: { children: JSX.Element }) : JSX.Element  {
  const user = useSelector(selectUser);
  let location = useLocation();
  console.log('Code from inside RequireAuth');
  if (!user.loggedIn) {
    window.alert("You are not logged in!");
    console.log("Your are not logged in yet to access the resource");
    return (<Navigate to="/home" state={{ from: location }} replace={true}/>);
  }

  return children;
}
 
