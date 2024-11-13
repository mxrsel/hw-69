import React from "react";
import { Link } from "react-router-dom";
import {IShow} from "../../types.ts";

interface ShowItemProps {
    show: IShow;
}

const ShowDetails: React.FC<ShowItemProps> = ({ show }) => {
    return (
        <li>
            <Link to={`/shows/${show.id}`}>
                <img src={show.image}  alt={show.name} />
                <span>{show.name}</span>
            </Link>
        </li>
    );
};

export default ShowDetails;
