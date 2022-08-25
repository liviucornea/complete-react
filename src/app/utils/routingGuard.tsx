
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectUser } from "../../features/user/userSlice";

 /* below function is used for guarding routes
 need to know why is exected twice while guarding....
 */
export function RequireAuth({ children }: { children: JSX.Element }) : JSX.Element  {
  const user = useSelector(selectUser);
  let location = useLocation();
  let navigate = useNavigate();
  console.log('Code from inside RequireAuth');
  if (!user.loggedIn) {
    window.alert("You are not logged in!");
    console.log("Your are not logged in yet to access the resource");
    // return (<Navigate to="/home" state={{ from: location }} replace={true}/>);
    setTimeout(() =>  navigate(-1) , 0);
    return <></>
  } else {
    return children;
  }


}
 
