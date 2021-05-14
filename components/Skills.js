import React from 'react'

export const Skills = ({skill, porcent}) => {
    return (
        <div className="my-3">
            <p className="p-0 m-0 mb-2 font-weight-bold">{skill}</p>
            <div className="progress border border-dark">
                <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: `${porcent}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}
