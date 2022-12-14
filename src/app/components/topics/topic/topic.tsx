import { Route, Routes, useHref, useParams } from "react-router";
import { Link, Outlet } from "react-router-dom";
import { TopicsList } from "../data-models";
import Resource from "../resource/resource";

type Props = {};
// eslint-disable-next-line
export default function Topic({}: Props) {
  // NOTE useRouteMatch example below
  // and understand the match.url and match.path
  /*
    path - (string) The path pattern used to match. Useful for building nested <Route>s
url - (string) The matched portion of the URL. Useful for building nested <Link>s
Consider the route "/users/:userId". match.path would be "/users/:userId" while match.url would have the :userId value filled in, e.g. "users/5".
     */
  let params = useParams();
  let refPath = useHref("/topics/" + params?.topicId);
  let topic = TopicsList.find((topic) => {
    // @ts-ignore
    return topic.id === params?.topicId;
  });
  return (
    <div className="topic">

        {/* <span>Router outlet here at top  as you can vae it in multiple places is same time!!!</span>
            <div className="content">
            <Outlet />
          </div> */}

      <h2>Topic: {topic?.name} </h2>
      <p>{topic?.description}</p>
      <ul>
        {topic?.resources.map((resource, index) => {
          return (
            <li key={index}>
              <Link to={`${refPath}/${resource.id}`}> {resource.name} </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      {/* use below block if you want to render nested route/component right here where the block of Routs sits */}
      {/* <Routes>
        <Route path={`/:resourceId`} element={<Resource />}></Route>
      </Routes> */}
      <div>
      <div className="content">
        <span>Router outlet here at bottom!!!</span>
        <Outlet />
        <span>After Outlet component!!!</span>
      </div>
      </div>
    </div>
  );
}
