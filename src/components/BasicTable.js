import React, {useMemo} from "react"
import { useTable, useSortBy, useFilters, usePagination } from "react-table"
import {COLUMNS} from "./columns"
import './table.css'
import { ColumnFilter } from "./ColumnFilter";
import { useSelector } from "react-redux";

const BasicTable = () => {
    const users = useSelector((state) => state.users)
    console.log(users);
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => users, [users])
    const defaultColumn = useMemo(() => {
        return{
            Filter: ColumnFilter
        }
    }, [])

    const {getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize, state, prepareRow} = useTable({columns, data, defaultColumn}, useFilters, useSortBy, usePagination)
    
    const {pageIndex, pageSize} = state
 
    return(
        <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map( column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                             <span>
                                {column.isSorted
                                ? column.isSortedDesc
                                    ? ' 🔽'
                                    : ' 🔼'
                                : ''}
                            </span>
                            <div>
                                {column.canFilter ? column.render('Filter') : null}
                            </div>
                            </th>
                        ))
                    }
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }                               
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div>
            <span>Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>
            <span>
                | Go to Page: {' '}
                <input type="number" defaultValue={pageIndex + 1} onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }}/>
            </span>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {
                    [10, 20, 25].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))
                }
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        </>
    )
}

export default BasicTable