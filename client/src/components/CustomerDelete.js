import React, { useState } from "react";
import Button from "@mui/material/Button"
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions";
import { Typography } from "@mui/material";

const CustomerDelete = (props) => {
    
    let [open,setOpen] = useState(false)

   
    const deleteCustomer = (id) => {
        const url = '/api/customers/' + id
        fetch(url,{
            method : 'DELETE'
        })
        props.stateRefresh()
    }
    const handleClickOpen = () => {
        setOpen(true)
       }
      const handleClose = () => {
        setOpen(false)
      }

    return(
        <div>
            <Button variant="contained" color = "primary" onClick={handleClickOpen}>삭제</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                    삭제 경고
                </DialogTitle>
                <DialogContent>
                <Typography>
                    선택한 고객 정보가 삭제됩니다.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color = "primary" onClick={()=>{deleteCustomer(props.id)}}>삭제</Button>
                <Button variant="contained" color = "primary" onClick={handleClose}>닫기</Button>
            </DialogActions>
        </Dialog>
        </div>
        
    )
}

export default CustomerDelete