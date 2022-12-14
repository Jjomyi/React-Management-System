import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

function App() {
  const [customers, setCustomers] = useState("");
  const [completed, setCompleted] = useState(0);
  
  const stateRefresh = () => {
    setCustomers(customers)
    setCompleted(completed)
    callApi()
      .then(res => setCustomers(res))
      .catch(err => console.log(err))
  }
  const [isLoad, setIsLoad] = useState(false);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };
  const handleValueChange = (e) => {
    console.log(e.target.value)
  }

  useEffect(() => {
    let complete = 0;
    let timer = setInterval(() => {
      if (complete >= 100) {
        complete = 0
      } else {
        complete += 1;
      }
      setCompleted(complete);
      if (isLoad) {
        clearInterval(timer);
      }
    }, 20);
    callApi().then(res => {
      setCustomers(res);
    }).
      catch(err => console.log(err));
  }, [isLoad]);

  return (
    <div>
      <div className='main-title'>
        <h3>고객 관리 시스템</h3>
        <div className='main-right'>
        <input type = "text" placeholder='검색하기' onChange={handleValueChange}/>
        </div>
      </div>

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
            <TableCell>설정</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { customers ?
            customers.map(c => { return ( 
            <Customer 
            key = {c.id} 
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job = {c.job}
            stateRefresh = {stateRefresh}
            />)}) : 
            <TableRow>
              <TableCell colSpan={6} align = "center">
                <CircularProgress variant="indeterminate" value = {completed}/>
              </TableCell>
            </TableRow>
          }
        </TableBody>
        </Table>
      </Paper>
      <CustomerAdd stateRefresh = {stateRefresh} />
    </div>
  );
}
export default App;
