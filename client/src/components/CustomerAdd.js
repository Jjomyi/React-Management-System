import React, { useEffect } from "react"
import axios from "axios"
import Button from "@mui/material/Button"
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react"


const CustomerAdd = (props) => {
  const [file,setFile] = useState(null)
  const [fileName,setFileName] = useState('')
  const [userName,setUserName] = useState('')
  const [birthday,setBirthday] = useState('')
  const [gender,setGender] = useState('')
  const [job,setJob] = useState('')
  const [open,setOpen] = useState(false)
  
  
  const handleSubmit = e => {
    e.preventDefault();
    addCustomer()
    .then(res => {
      console.log(res.data)
      props.stateRefresh()
    })
    setFile(file)
    setUserName(userName)
    setBirthday(birthday)
    setGender(gender)
    setJob(job)
    setFileName(fileName)
    setOpen(false)
  }

  const handleFileChange = e => {
    setFile(e.target.files[0])
    setFileName(e.target.value)
  }
  const handleValueChange = e => {
    const {name,value} = e.target
    if(name === "userName") {
      setUserName(value)
    } else if (name === "birthday") {
      setBirthday(value)
    } else if (name === "gender") {
      setGender(value)
    } else {
      setJob(value)
    }
  }
  const addCustomer = () => {
    const url = '/api/customers';
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', userName)
    formData.append('birthday', birthday)
    formData.append('gender', gender)
    formData.append('job', job)
    return axios.post(url, formData)
  }

  const handleClickOpen = () => {
    setOpen(true)
   }
  const handleClose = () => {
    setOpen(false)
  }
  
  return(
    <div className="marginoo">
      <Button variant="contained" color = "primary" onClick={handleClickOpen}> 고객 추가하기 </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>고객 추가</DialogTitle>
        <DialogContent>
          <input type="file" name="file" file = {file} value = {fileName} onChange={handleFileChange}/> <br/>
          <br/>
          <TextField label = "이름" type="text" name="userName" value={userName} onChange = {handleValueChange}/> <br/>
          <TextField label = "생년월일" type="text" name="birthday" value={birthday} onChange={handleValueChange}/> <br/>
          <TextField label = "성별" type="text" name="gender" value={gender} onChange={handleValueChange}/> <br/>
          <TextField label = "직업" type="text" name="job" value={job} onChange={handleValueChange}/> <br/> 
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color = "primary" onClick={handleSubmit}> 추가 </Button>
          <Button variant="outlined" color = "primary" onClick={handleClose}> 닫기 </Button>
        </DialogActions>
      </Dialog>        
    </div>
    )   
}
export default CustomerAdd;