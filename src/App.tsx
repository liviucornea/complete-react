import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { selectUser } from "./features/user/userSlice";

import {
    BrowserRouter as Router, Route,
    Routes 
} from "react-router-dom";
import AppMenu from "./app/components/app-menu/app-menu";
import { EntryForm } from "./app/components/EntryForm/EntryForm";
import { Feature } from "./app/components/feature/Feature";
import FlipCardFigure from "./app/components/flipCardFigure/flipCardFigure";
import { Footer } from "./app/components/footer/Footer";
import { Home } from "./app/components/home/Home";
import MessageCollector from "./app/components/message-collector/message-collector";
import NotFound from "./app/components/not-found/NotFound";
import { Spinner } from "./app/components/spinner/spinner";
import Test from "./app/components/test/test";
import TopicsMain from "./app/components/topics/topics-main/topics-main";
import TodoEdit from "./features/todo/todo-edit/todo-edit";
import { ToDoMain } from "./features/todo/ToDoMain";
import { User } from "./features/user/User";
import { RequireAuth } from "./app/utils/routingGuard";

function App() {
  const user = useSelector(selectUser);
  return (
    <React.Fragment>
      <Router>
        <header className="App-header">
          <AppMenu />
          <MessageCollector />
          <Spinner />
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/counter"
            element={
              <RequireAuth>
                <Counter />
              </RequireAuth>
            }
          ></Route>
          <Route path="/feature" element={<Feature />} />
          <Route path="/user" element={<User />}></Route>
          <Route
            path="/entryForm"
            element={<EntryForm formName="Entry Form" />}
          ></Route>
          <Route path="/todos" element={<ToDoMain />}></Route>
          <Route path="/todo/:id" element={<TodoEdit />}></Route>
          <Route
            path="/topics/*"
            element={
              <TopicsMain description={"My main Topic functional component"} />
            }
          ></Route>
          <Route
            path="/flipCard"
            element={
              <FlipCardFigure
                titleFront={"Front card"}
                titleBack={"Back card"}
              />
            }
          ></Route>
          <Route path="/test/:testparam" element={<Test />}></Route>
          {/* Using the `render` prop */}
          <Route path="/posts/:testparam"></Route>
          <Route path="/:aiurea" element={<NotFound />}></Route>
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;