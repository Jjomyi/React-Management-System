import './App.css';
import Customer from './components/Customer';
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import { useEffect, useState } from 'react';

function App() {

  const [customersData, setCustomersData] = useState([]);

  const callApi = async () => {
  const response = await fetch('/api/customers');
  const body = await response.json();
  return body;
  };

  useEffect(() => {
    callApi().then((data) => setCustomersData(data));
  }, [] );
  console.log(customersData); 


  return (
      <Paper>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { customersData ?
            customersData.map(c => { return ( 
            <Customer 
            key = {c.id } 
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job = {c.job}
            />)}) : ""
          }
        </TableBody>
        </Table>
      </Paper>
  );
}

export default App;
