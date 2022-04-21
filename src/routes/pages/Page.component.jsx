import './page.style.scss';
import { useParams } from 'react-router-dom';

const Page = ()=>{
    const Params = useParams();
    return (
        <div className="page-container">
            <p>{`Page ${Params.id}`}</p>
        </div>
    )
}

export default Page;