import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {RootState} from "../../app/store.ts";
import {fetchShows} from "../../store/thunks/showThunk.ts";
import ShowDetails from "../ShowDetails/ShowDetails.tsx";
import Spinner from "../Spinner/Spinner.tsx";


const ShowMainPage: React.FC = () => {
    const [showsList, setShowsList] = useState("");
    const dispatch = useAppDispatch();
    const { show, isLoading } = useAppSelector((state: RootState) => state.show);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowsList(event.target.value);
    };

    useEffect(() => {
        if (showsList) {
            dispatch(fetchShows(showsList));
        }
    }, [showsList, dispatch]);

    console.log('render', show);

    return (
        <div>
            <h1 className='text-center'>Movie Search</h1>
            <input
                type="text"
                value={showsList}
                onChange={handleInputChange}
                placeholder="Search for TV shows"
                className='text-center form-control mb-4'
            />

            {isLoading && <Spinner/>}
            <ul>
                {show.map((show) => (
                    <ShowDetails key={show.id} show={show}/>
                ))}
            </ul>
        </div>
    );
};

export default ShowMainPage;
