import React from "react";

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    return (
        <span>
            Search:{' '}
            <input className="column-filter" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)}/>
        </span>
    )
}
