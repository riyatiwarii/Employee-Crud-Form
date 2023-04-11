import { Link} from "react-router-dom";
import { format } from 'date-fns'
import { deleteUser } from "../UserReducer";
import { useDispatch } from "react-redux";

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
        const rowIdx = parseInt(props.row.id) + 1;
        const dispatch = useDispatch();
        const handleDelete = (id) => {
            console.log(id);
            dispatch(deleteUser(id))
            
          }
        
        return (
            <div>
                <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"><Link to={`/edit/${rowIdx}`}>Edit</Link></button>
                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                    console.log(rowIdx)
                    if(window.confirm('Are you sure to delete data?')){
                      handleDelete(parseInt(props.row.id))  
                                      
                    }}}>Delete</button>
            </div>
        );
        },
        
    },
    
]