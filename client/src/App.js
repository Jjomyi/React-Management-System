import './App.css';
import Customer from './components/Customer';
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

const customers = 
[{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김옴팡',
  'birthday' : '931222',
  'gender' : '남자',
  'job' : '연구원'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김나비',
  'birthday' : '913222',
  'gender' : '여자',
  'job' : '승무원'
}]

function App() {
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
          {customers.map(c => { return ( <Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job} /> ) })}
        </TableBody>
        </Table>
      </Paper>
  );
}

export default App;
