import React from 'react';
import { TopicsList } from'../data-models';
// import styles from './topics.module.scss';
import {Link, Route, Routes, useMatch, useHref} from "react-router-dom";
import Topic from "../topic/topic";
import Resource from '../resource/resource';

type Props = {
    description: string
}

export default function TopicsMain(input: Props) {
    let match = useMatch('/topics');
    let refPath = useHref('/topics');
    return (<div className={'container'}>
        <span>Topics: {input.description} </span>
        <ul>
            {TopicsList.map( (topic, id) => {
              return (
                  <li key={id}>
                      <Link to={`${refPath}/${topic.id}` } > {topic.name} </Link>
                  </li>
              )
            })}
        </ul>
        <hr />
        <Routes>
            <Route path={`/:topicId/*` } element={<Topic/>} > 

                <Route path={`:resourceId`} element={<Resource />}></Route>     
            </Route>
        </Routes>
    </div>);
}
