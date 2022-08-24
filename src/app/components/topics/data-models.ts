export interface IResource {
    name: string;
    id: string;
    description: string;
    url: string
}

export interface ITopic {
    name: string;
    id: string;
    description: string;
    resources: IResource[];
}

export const TopicsList: ITopic[] = [{
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative component base router',
    resources: [{
        name: 'URL parameters',
        id: 'url-parameters',
        description: 'URL parameters are parameters use to navigate',
        url: 'https://www.reactjs.org'
    }, {
        name: 'Programaticaly navigate',
        id: 'programaticaly-navigate',
        description: 'When building an app with react you can navigate programaticaly',
        url: 'https://www.reactjs.org'
    }],
},
    {  name: 'React.js',
    id: 'reactjs',
    description: 'A javascript library',
    resources: [{
        name: 'React lifecycle events',
        id: 'react-events',
        description: 'React lifecycle events allow you to control data loading an release unnecesary resources',
        url: 'https://www.reactjs.org'
    }, {
        name: 'React AHA Moments',
        id: 'react-aha-moments',
        description: 'React AHA Moments',
        url: 'https://www.reactjs.org'
    }],
},
    {  name: 'Functional Programing',
        id: 'functional-programing',
        description: 'Declarative component base router',
        resources: [{
            name: 'Imperative vs Declarative programing',
            id: 'imperative-declarative',
            description: 'A guide to understand functional programing paradigm',
            url: 'https://www.reactjs.org'
        }, {
            name: 'Build user interface with pure functions and function composite',
            id: 'fn-composite',
            description: 'A guide building UI with pure functions',
            url: 'https://www.reactjs.org'
        }],
    }];