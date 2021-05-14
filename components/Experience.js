import React from 'react'

export const Experience = ({job,time}) => {
    return (
        <div className="my-3">
            <ul>
                <li><h5 className="m-0">{job}</h5></li>
                <p className="m-0 py-2">{time}</p>
                <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, error quibusdam pariatur doloribus quae consequatur inventore eveniet vel vitae corporis optio labore sed. Rerum </p>
            </ul>
        </div>
    )
}
