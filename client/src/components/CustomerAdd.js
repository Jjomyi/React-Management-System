import React from "react"
import axios from "axios"
import { useState } from "react"

const CustomerAdd = () => {
  const [file,setFile] = useState(null)
  const [fileName,setFileName] = useState('')
  const [userName,setUserName] = useState('')
  const [birthday,setBirthday] = useState('')
  const [gender,setGender] = useState('')
  const [job,setJob] = useState('')
    

  const handleSubmit = e => {
    e.preventDefault();
    addCustomer()
    .then(res => {
      let copy = res[copy]
      res = [...copy]
      console.log(res.data)
    })
    setFile(file)
    setUserName(userName)
    setBirthday(birthday)
    setGender(gender)
    setJob(job)
    setFileName(fileName)
    window.location.reload() 
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
  
  
  return(
        <form onSubmit={handleSubmit}>
          <h1>고객 추가</h1>
          프로필 이미지: <input type="file" name="file" file = {file} value = {fileName} onChange={handleFileChange}/> <br/>
          이름: <input type="text" name="userName" value={userName} onChange = {handleValueChange}/> <br/>
          생년월일: <input type="text" name="birthday" value={birthday} onChange={handleValueChange}/><br/>
          성별: <input type="text" name="gender" value={gender} onChange={handleValueChange}/><br/>
          직업: <input type="text" name="job" value={job} onChange={handleValueChange}/><br/>
          <button type="submit">추가하기</button>
        </form>
    )   
}
export default CustomerAdd;