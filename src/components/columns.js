import { Link} from "react-router-dom";
import useItemAction from "../hooks/useItemAction";
import { format } from 'date-fns'


export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Cell: (props) => {
            const rowIdx = parseInt(props.row.id) + 1;
            return <span>{rowIdx}</span>
        },
        disableFilters: true,
    },
    {
        Header: 'First Name',
        accessor: 'e_firstName',
        
    },
    {
        Header: 'Last Name',
        accessor: 'e_lastName',
        
    },
    {
        Header: 'Date of Birth',
        accessor: 'e_date',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') },
        disableFilters: true,
    },
    {
        Header: 'Email ID',
        accessor: 'e_email',
        disableFilters: true,
        disableSortBy: true,
    },
    {
        Header: 'Contact',
        accessor: 'e_phone',
        disableFilters: true,
        disableSortBy: true,
    },
    {
        Header: "Actions",
        id: 'actions',
        display: "actions",
        disableFilters: true,
        Cell: (props) => {
        const [employeeData, deleteEmployee, setDataToStorage] = useItemAction()
        const rowIdx = parseInt(props.row.id);
        return (
            <div>
                <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() =>
                {
                const rowIdx = parseInt(props.row.id) + 1;
                setDataToStorage(rowIdx, props.row.original.e_firstName, props.row.original.e_lastName, props.row.original.e_gender, props.row.original.e_date, props.row.original.e_email, props.row.original.e_phone)
                }}><Link to="/edit">Edit</Link></button>
                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                    console.log(rowIdx)
                    if(window.confirm('Are you sure to delete data?')){
                      deleteEmployee(rowIdx)  
                                      
                    }}}>Delete</button>
            </div>
        );
        },
        
    },
    
]