import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchDetails} from "../../store/thunks/showThunk.ts";
import {AppDispatch, RootState} from "../../app/store.ts";
import Spinner from "../Spinner/Spinner.tsx";

const ShowItem: React.FC = () => {
    const { showId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { Details, isLoading } = useSelector((state: RootState) => state.show);

    useEffect(() => {
        if (showId) {
            dispatch(fetchDetails(Number(showId)));
        }
    }, [dispatch, showId]);

    return (
        <>
        {isLoading ? <Spinner/> : (
            Details && (
                <div>
                    <h1>{Details.name}</h1>
                    <img src={Details.image} alt={Details.name}/>
                    <div>{Details.summary} </div>
                </div>
            )
            )
        }
        </>
    );
};

export default ShowItem;