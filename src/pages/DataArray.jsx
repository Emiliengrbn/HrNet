import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const DataArray = () => {
    const [searchText, setSearchText] = useState('');

    const users = useSelector((state) => state.RegisterEmployee)

    const rows = users.map((user, index) => ({        
        id: index + 1,
        ...user, 
        department: user.department.label,
        state: user.state.label,
      }));

    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'lastName', headerName: 'Last Name', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'startDate', headerName: 'Start Date', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'department', headerName: 'Department', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'birthDate', headerName: 'Date of Birth', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'street', headerName: 'Street', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'city', headerName: 'City', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'state', headerName: 'State', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'zipCode', headerName: 'Zip Code', width: 100, headerClassName: 'super-app-theme--header' },
    ];
   
    
    const filteredRows = rows.filter((row) => {
        return (
          row.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          row.lastName.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    
    return (
        <>
        <header>
            <h1 className='title-current-employee'>Current Employee</h1>
        </header>
        <main className='main-current-employee'>
            <TextField
                label="Search"
                variant="outlined"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ marginBottom: 20, backgroundColor: '#faf9f5', borderRadius: 5 }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        border: 'none', // Couleur de la bordure au survol
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none', // Couleur de la bordure lorsque le champ est en focus
                      },
                    },
                    '& .MuiInputLabel-root': {
                        '&.Mui-focused': {
                            color: 'grey', // Couleur du label en focus
                        },}
                  }}
            />
            <DataGrid rows={filteredRows} columns={columns} disableRowSelectionOnClick
                sx={{backgroundColor: '#faf9f5',
                    color: '#202020',
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: '#202020',
                        
                        '& .MuiDataGrid-cell': {
                            color: '#faf9f5',

                        }
                    },
                    '& .MuiDataGrid-row:focus': {
                        backgroundColor: '#202020'
                    },
                    '& .MuiDataGrid-cell:focus': {
                        outline: 'none'
                    },
                    '& .super-app-theme--header': {
                        backgroundColor: '#faf9f5',
                        fontWeight: '600'
                    },
                }}
            />
        </main>
        <footer className='data-array-footer'>
            <Link className="home-link" to="/">Home</Link>
        </footer>
    </>
    )
}

export default DataArray