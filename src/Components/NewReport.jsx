import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import {TextField,IconButton,Button,Input,InputAdornment,Box} from "@mui/material";
import UploadFileTwoToneIcon from "@mui/icons-material/UploadFileTwoTone";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./newReport.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "react-select";
import BottomSection from "./BottomSection";
import styled from "@emotion/styled";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Avatar } from "@mui/material";
import { ClassNames } from "@emotion/react";

const NewReport = () => {
  const styleObj = {
    "&:hover": {
      backgroundColor: "red",
    },
    "&:active": {
      backgroundColor: "blue",
    },
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  

    const [department, setDepartment] = React.useState("");

    const handleChanges = (event) => {
      setDepartment(event.target.value);
    };


    const StyledTextField=styled(TextField)`
    & .Mui-disabled .MuiOutlinedInput-notchedOutline{
      border-color: orange;
    }

    & {
      
      margin:50px
    }

    & {
      font-family:normal
    }

    `

    const handleClick=(e)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });

    }

    const options = [
      {value:"ACCOUNTS AND FINANCE", label:"Accounts and Finance"},
      {value:"SALES AND MARKETING", label:"Sales and Marketing"},
      {value:"INFRASTRUCTURES", label:"Infrastructure"},
      {value:"RESEARCH AND DEVELOPMENT",label:"Research and Development"},
      {value:"LEARNING", label:"Learning"},
      {value:"IT SERVICES", label:"IT services"},
      {value:"PRODUCT DEVELOPMENT", label:"Product Development"},
      {value:"ADMIN DEPARTMENT", label:"Admin Department"},
      {value:"OTHERS", label:"Others"},
    ]

  return (
    <div className="body">
      <div className="Header">
        <img
          src="https://3gbc4b.n3cdn1.secureserver.net/wp-content/themes/datafoundry/build/img/logo.svg"
          alt="company logo"
        />
        <div className="heading5">
          <h5 className="heading5in">MY REPORTS</h5>
          <h5 className="heading5in">DASHBOARD</h5>
          <h5 className="heading5in">CREATE</h5>
        </div>

        <Avatar
          src="https://media.licdn.com/dms/image/C5103AQE_E8JC1xDIdQ/profile-displayphoto-shrink_800_800/0/1574317899652?e=2147483647&v=beta&t=PJ28RUmgiDSkfW_Cl196ko4O590TFtbABAFqqYTlZhE"
          alt="Profile photo"
        />
      </div>
      <hr />

      <div>
        <div className="secondRow">
          <h3 className="heading3">Create New Report</h3>
          <button className="cancelBtn" onClick={handleClick}>
            Cancel
          </button>
        </div>

        <div className="row">
          <div className="twoSet">
            <label className="reponame">Report Name</label>
            <input
              type="text"
              className="reportName"
              name="reportName"
              required="important"
            />

            <label className="repomanager">Reporting Manager</label>
            <input
              type="text"
              className="reportingManager"
              name="reportManager"
              required="import"
            />
          </div>

          <label className="start">Start Date</label>
          <input type="date" className="startDate" required="important" />

          <label className="end">End Date</label>
          <input type="date" className="endDate" required="important" />

         
            <label className="dep" >
              Department
            <Select options={options} className="department"/>
              </label>
        
        </div>

        <div>
          <h3 className="receipt">Receipts</h3>
        </div>
        {/* <Box className="box-1">
          <table className="receiptHeading">
            <tr className="table">
              <th className="invoiceNo">Invoice No</th>
              <th className="invoiceDate">Invoice Date</th>
              <th className="amount">Amount</th>
              <th className="category">Category</th>
              <th className="project">Project</th>
              <th className="receiptPhoto">Receipt</th>
              <th className="description">Description</th>
              <th className="action">Action</th>
            </tr>
          </table>
        </Box> */}

        <BottomSection />
      </div>
    </div>
  );
};

export default NewReport;
