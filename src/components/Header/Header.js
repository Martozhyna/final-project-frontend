import {Headline} from "../Headline/Headline";
import {Filter} from "../Filter/Filter";

const Header = ({search, setSearch}) => {
    return (
        <div>
            <Headline/>
            <Filter search={search} setSearch={setSearch}/>
        </div>
    )
}
export {Header}