import { CommonTable } from "@muc/components"
import { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

interface RowData {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: string;
}

const initialRows: RowData[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', lastLogin: '2023-10-01', status: 'Active' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor', lastLogin: '2023-09-25', status: 'Inactive' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Viewer', lastLogin: '2023-09-30', status: 'Active' },
  { id: 4, name: 'David', email: 'david@example.com', role: 'Admin', lastLogin: '2023-10-02', status: 'Active' },
  { id: 5, name: 'Eve', email: 'eve@example.com', role: 'Editor', lastLogin: '2023-09-28', status: 'Inactive' },
];

const columns = [
  { id: 'name', label: 'Name', sortable: true },
  { id: 'role', label: 'Role', sortable: true },
  { id: 'lastLogin', label: 'Last Login', sortable: true },
  { id: 'status', label: 'Status', sortable: true },
];

function AdminManagement() {
  const [rows, setRows] = useState(initialRows);

  const handleEdit = (row: RowData) => {
    console.log('Edit:', row);
  };

  const handleDelete = (row: RowData) => {
    setRows((prev) => prev.filter((item) => item.id !== row.id));
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom align="center">
        Admin Management
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Add New Admin
      </Button>
      <CommonTable<RowData> columns={columns} rows={rows} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
}

export default AdminManagement;