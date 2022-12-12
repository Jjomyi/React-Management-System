import React from "react"
import post from "axios"
import { useEffect , useState } from "react"

const CustomerAdd = () => {
  const [file,setFile] = useState(null)
  const [userName,setUserName] = useState('')
  const [birthday,setBirthday] = useState('')
  const [gender,setGender] = useState('')
  const [job,setJob] = useState('')
  const [fileName,setFileName] = useState('')


 
  return(
        <form>
          <h1>고객 추가</h1>
          프로필 이미지: <input type="file" name="file"/> <br/>
          {/* 이름: <input type="text" name="userName" /><br/>
          생년월일: <input type="text" name="birthday"/><br/>
          성별: <input type="text" name="gender"  /><br/>
          직업: <input type="text" name="job" /><br/> */}
          <button type="submit">추가하기</button>
        </form>
    )   
}
export default CustomerAdd;


// import React from "react"
// import { useEffect, useState } from "react"
// import post from "axios"

// const CustomerAdd2 = () => {
//     const [file,setFile] = useState(null)
//     const [userName,setUserName] = useState("")
//     const [birthday,setBirthday] = useState("")
//     const [gender,setGender] = useState(0)
//     const [job,setJob] = useState("")
//     const [fileName,setFileName] = useState("")

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const addCustomer = () => {
//             const url = '/api/customers'
//             const formData = new FormData()
//             formData.append('image',file)
//             formData.append('name',userName)
//             formData.append('birthday',birthday)
//             formData.append('gender',gender)
//             formData.append('job',job)
//             const config = {
//                 headers: {
//                     "Contest-Type": "multipart/form-data"
//                 }
//             }
//             return post(url,formData,config)
//         }
//     }
//     const handleFileChange = (e) => ({ file : {file} , fileName : e.target.value})
//     const handleValueChange = ({ target : {value}}) => setUserName(value) , setBirthday(value)

    

//     return(
//         <form onSubmit={handleFormSubmit}>
//         <h1> 고객추가 </h1>
//         프로필 이미지 : <input type = "file" name = "file" file = {file} value = {fileName} onChange={handleFileChange} /> <br />
//         이름 : <input type = "text" name = "userName" value = {userName} onChange = {handleValueChange} /> <br />
//         생일 : <input type = "text" name = "birthday" value = {birthday} onChange = {handleValueChange} /> <br />
//         성별 : <input type = "text" name = "gender" value = {gender} onChange = {handleValueChange} /> <br />
//         직업 : <input type = "text" name = "job" value = {job} onChange = {handleValueChange} /> <br />
//         <button type = "submit">추가하기</button>
//         </form>
//     )
// }

// export default CustomerAdd2

// import React, { useState } from "react";

// function CustomerAdd() {
//   const [password, setPassword] = useState("");
//   const [disabled, setDisabled] = useState(false);

//   const handleChange = ({ target: { value } }) => setPassword(value);

//   const handleSubmit = async (event) => {
//     setDisabled(true);
//     event.preventDefault();
//     await new Promise((r) => setTimeout(r, 1000));
//     if (password.length < 8) {
//       alert("8자의 이상의 비밀번호를 사용하셔야 합니다.");
//     } else {
//       alert(`변경된 패스워드: ${password}`);
//     }
//     setDisabled(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={handleChange}
//       />
//       <button type="submit" disabled={disabled}>
//         비밀번호 변경
//       </button>
//     </form>
//   );
// }

// // import React from "react";
// // import { useState } from "react";

// // const CustomerAdd = () => {
// //     const [password,setPassword] = useState("")
// //     const [disabled, setDisabled] = useState(false)

// //     const handleChange = ({ target: { value }}) => setPassword=(value)

// //     const handleSubmit = async (e) => {
// //         setDisabled(true)
// //         e.preventDefault();
// //         await new Promise((r) => setTimeout(r,1000))
// //         alert(`변경된 패스워드' : ${password}`)
// //         setDisabled(false)
// //     }
// //     return (
// //         <form onSubmit={handleSubmit}>
// //             <h1>고객 추가</h1>
// //             <input type = "password" name = "password" value = {password} onChange = {handleChange}/>
// //             <button type="submit" disabled = {disabled}>비밀번호 변경</button>
// //         </form>
// //     )
// // }

// // class CustomerAdd extends React.Component {
    
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             file:null,
// //             userName:'',
// //             birthday:'',
// //             gender:'',
// //             job:'',
// //             fileName:''
// //         }
// //     }
// //     handleFormSubmit = (e) => {
// //         e.preventfault()
// //         this.addCustomer()
// //             .then((response) => {
// //                 console.log(response.data)
// //             })
// //     }
// //     handleFileChange = (e) => {
// //         this.state({
// //             file: e.target.files[0],
// //             fileName: e.target.value
// //         })
// //     }
// //     handleValueChange = (e) => {
// //         let nextState = {}
// //         nextState[e.target.name] = e.target.value
// //         this.setState(nextState)
// //     }
// //     addCustomer = () => {
// //         const url = '/api/customers'
// //         const formData = new FormData()
// //         formData.append('image',this.state.file)
// //         formData.append('name',this.state.userName)
// //         formData.append('birthday',this.state.birthday)
// //         formData.append('gender',this.state.gender)
// //         formData.append('job',this.state.job)
// //         const config = {
// //             headers: {
// //                 'content-type': 'multipart/form-data'
// //             }
// //         }
// //         return post(url, formData, config)
// //     }
// //     render() {
// //         return (
// //             <form onSubmit={this.handleFormSubmit}>
// //                 <h1>고객 추가</h1>
// //                 프로필 이미지 : <input type = "file" name = "file" file={this.state.file} value = {this.state.fileName} onChange={this.handleFileChange} />
// //                 이름 : <input type = "text" name = "userName" value={this.state.userName} onChange={this.handleValueChange} />
// //                 생일 : <input type = "text" name = "birthday" value={this.state.birthday} onChange={this.handleValueChange} />
// //                 성별 : <input type = "text" name = "gender" value={this.state.gender} onChange={this.handleValueChange} />
// //                 직업 : <input type = "text" name = "job" value={this.state.job} onChange={this.handleValueChange} />
// //                 <button type="submit"></button>
// //             </form>
// //         )
// //     }
// // }

// export default CustomerAdd;

// const [file,setFile] = useState(null)
//     const [userName,setUserName] = useState('')
//     const [birthday,setBirthday] = useState('')
//     const [gender,setGender] = useState('')
//     const [job,setJob] = useState('')
//     const [fileName,setFileName] = useState('')


// {
    

//   return(
//       <form onSubmit={handleFormSubmit}>
//         <h1>고객 추가</h1>
//         프로필 이미지: <input type="file" name="file" file={file} value={fileName} onChange={handleFileChange} /><br/>
//         이름: <input type="text" name="userName" value={userName} onChange={handleValueChange} /><br/>
//         생년월일: <input type="text" name="birthday" value={birthday} onChange={handleValueChange} /><br/>
//         성별: <input type="text" name="gender" value={gender} onChange={handleValueChange} /><br/>
//         직업: <input type="text" name="job" value={job} onChange={handleValueChange} /><br/>
//         <button type="submit">추가하기</button>
//       </form>
//   )   
// }
  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   const formData = new FormData()
  //   formData.append('image',file)
  //   formData.append('name',userName)
  //   formData.append('birthday',birthday)
  //   formData.append('gender',gender)
  //   formData.append('job',job)
  //  }
  //  post('/api/customers'
  
  //  ,{headers: {"Contest-Type": "multipart/form-data"}}
  //  ).then(res => {
  //   console.log(res.data)
  //  })