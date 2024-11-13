import ShowMainPage from "./components/MainPage/ShowMainPage.tsx";
import {Route, Routes} from "react-router-dom";
import ShowItem from "./components/ShowItem/ShowItem.tsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ShowMainPage />}/>
                <Route path='/shows/:showId' element={<ShowItem />}/>
                <Route path='*' element={<p>Not Found</p>}/>
            </Routes>
        </div>
    );
};

export default App;