import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

import AppMenu from './app/components/app-menu/app-menu';
import { EntryForm } from './app/components/EntryForm/EntryForm';
import { Feature } from './app/components/feature/Feature';
import FlipCardFigure from './app/components/flipCardFigure/flipCardFigure';
import { Footer } from './app/components/footer/Footer';
import { Home } from './app/components/home/Home';
import MessageCollector from './app/components/message-collector/message-collector';
import NotFound from './app/components/not-found/NotFound';
import { Spinner } from './app/components/spinner/spinner';
import Test from './app/components/test/test';
import TopicsMain from './app/components/topics/topics-main/topics-main';
import TodoEdit from './features/todo/todo-edit/todo-edit';
import { ToDoMain } from './features/todo/ToDoMain';
import { User } from './features/user/User';
import { BrowserRouter as Router, Route, Routes, 
    useLocation, useNavigate, Navigate} from 'react-router-dom';




function App() {
  const user = useSelector(selectUser);
  // NOTE  example of route guard navigation bellow
  const navigateToCounter = () => {
      if (user.loggedIn) {
          return <Counter />
      } else {
          window.alert('You are not logged in');
          console.log('Your are not logged in yet to access counter');
      }
  }

  return (
    <React.Fragment>
        <MessageCollector />
        <Spinner />
        <Router>
            <header className="App-header">
                <AppMenu />
            </header>
            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <Routes>
                <Route path="/home" element={<Home />}>
                </Route>
                <Route path="/counter" element= {
                <RequireAuth>
                    <Counter />
                </RequireAuth>
                }>
                </Route>
                <Route path="/feature" element= {<Feature />}>
                    
                </Route>
                <Route path="/user" element={<User />}>
                </Route>
                <Route path="/entryForm" element= {<EntryForm formName='Entry Form' />}>
                    
                </Route>
                <Route path="/todos" element={<ToDoMain />}>
                    
                </Route>
                <Route path="/todo/:id" element= {<TodoEdit />}>
                    
                </Route>
                <Route path="/topics/*" element={<TopicsMain description={'My main Topic functional component'} />}>
                    
                </Route>
                <Route path="/flipCard" element={<FlipCardFigure titleFront={'Front card'} titleBack={'Back card'} />}>
                    
                </Route>
                {/* Using the `component` prop
                see this url for mor info : https://reacttraining.com/blog/react-router-v5-1/
                */}
                <Route path="/test/:testparam" element={<Test/>}>
                </Route>
                {/* Using the `render` prop */}
                <Route path="/posts/:testparam">
                </Route>
                <Route path="/:aiurea" element={<NotFound />}>
                </Route>
            </Routes>
        </Router>
        <Footer />
    </React.Fragment>
);
}

export default App;


function RequireAuth({ children }: { children: JSX.Element }) {
    const user = useSelector(selectUser);
    let location = useLocation();
    let navigate = useNavigate();
    let from = "/home";
    if (!user.loggedIn) {
       // navigate(from, { replace: true });
        window.alert('You are not logged in!');
        console.log('Your are not logged in yet to access the resource');
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.

      return <Navigate to="/home" state={{ from: location }} replace />;
    }
  
    return children;
  }