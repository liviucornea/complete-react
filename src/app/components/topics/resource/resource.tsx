import { useParams } from "react-router";
import { TopicsList } from "../data-models";
import './_resource.scss';

type Props = {}

// eslint-disable-next-line 
export default function Resource({}: Props) {
    let params = useParams();
    let topic = TopicsList.find(topic => {
        // @ts-ignore
        return topic.id ===  params.topicId;
    });
    let resource = topic?.resources.find( res => {
        // @ts-ignore
        return res.id ===  params.resourceId;
    });
    return (
            <div className="resource">
                <h3>Resource: </h3>
                <p>{resource?.description }</p>
                <a href={resource?.url}> More Info</a>
            </div>);
}
