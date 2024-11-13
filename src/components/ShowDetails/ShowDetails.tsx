import React from "react";
import { Link } from "react-router-dom";
import {IShow} from "../../types.ts";
import './ShowDetails.css';

interface ShowItemProps {
    show: IShow;
}

const ShowDetails: React.FC<ShowItemProps> = ({ show }) => {
    return (
        <div className='container-fluid'>

            <div className='linkItem mb-3'>
            <Link className='text-decoration-none' to={`/shows/${show.id}`}>
                <div className='listItem'>
                <img src={show.image}  alt={show.name} />
                <h1 className='me-auto ms-5 mt-5'>{show.name}</h1>
                </div>
            </Link>
            </div>
        </div>
    );
};

export default ShowDetails;
