import React from 'react';
import {IShow} from "../../types.ts";

interface IShowItemProps {
    show: IShow
}

const ShowItem : React.FC<IShowItemProps>= ({show}) => {
    return (
        <div key={show.id}>
            <img
                src={show.image}
                alt={show.name}
            />
            <h1>{show.name}</h1>
            <p>{show.summary}</p>
        </div>
    );
};

export default ShowItem;