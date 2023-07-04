import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import { TextField, Stack, IconButton, Button, Container } from "@mui/material";
import UploadFileTwoToneIcon from "@mui/icons-material/UploadFileTwoTone";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import "./newReport.css";
import MuiSwitch from './MuiSwitch';


const NewReport = () => {

  const styleObj = {
    "&:hover": {
      backgroundColor: "red",
    },
    "&:active": {
      backgroundColor: "blue",
    },
  };

 const [startDate,setStartDate] = useState(null);
 const [endDate, setEndDate] =useState(null);
 const [invoiceDate,setInvoiceDate] = useState(null);
 const [inputData, setInputData] = useState([{ 
     index:Math.random(),
     invoiceNo:'',
     invoiceDate:'',
     amount:'',
     category:'',
     project:'',
     desc:''}]);



  const handleinputChange =(e,index)=>{
    const {name,value}=e.target;
    const list= [...inputData];
    list[index][name]=value;
    setInputData(list);
    
  }
  
  
  const handleClick= () =>{
    setInputData([
      ...inputData,
      {
        invoiceNo: "",
        invoiceDate: "",
        amount: "",
        category: "",
        project: "",
        desc: "",
      },
    ]);
  }


  const handleRemove=(index)=>{
    const list =[...inputData]
    list.splice(index,1);
    setInputData(list);

  }
  
   
  return (
    <div className="body">
      <table>
        <tr className="firsttable">
          <img
            src="https://3gbc4b.n3cdn1.secureserver.net/wp-content/themes/datafoundry/build/img/logo.svg"
            alt="company logo"
          />
          <h5 className="heading">MY REPORTS</h5>
          <h5 className="heading">DASHBOARD</h5>
          <h5 className="heading">CREATE</h5>
        </tr>

        <MuiSwitch/>
      </table>
      <hr />

      <div>
        <table className="tab2">
          <th>
            <h3 className="tab21">Create Expense Report</h3>
          </th>
          <th className="align-right">
            <Button sx={styleObj} size="small" variant="contained">
              Cancel
            </Button>
          </th>
        </table>

        <div className="row">
          <TextField
            label="Report Name"
            variant="outlined"
            name="reportName"
            size="small"
          />

          <TextField
            label="Reporting Manager"
            variant="outlined"
            size="small"
            name="reportingManager"
          />
          <div className="row">
            <div>
              <label>Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
              />

              <label>End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
              />
            </div>

            <TextField
              label="Department"
              name="department"
              size="small"
              variant="outlined"
            />
          </div>

          <hr />
        </div>
        <div>
          <h3>Receipts</h3>
          <table>
            <tr>
              {inputData.map((x, i) => {
                return (
                  <table>
                    <tr key={x.index}>
                      <TextField
                        className="ino"
                        label="Invoice No"
                        name="invoiceNO"
                        size="small"
                        onChange={(e) => handleinputChange(e, i)}
                        variant="outlined"
                      />

                      <label>Invoice Date</label>
                      <DatePicker
                        selected={invoiceDate}
                        onChange={(date) => setInvoiceDate(date)}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                      />

                      <TextField
                        className="amt"
                        label="Amount"
                        variant="outlined"
                        size="small"
                        onChange={(e) => handleinputChange(e, i)}
                        name="amount"
                      />

                      <TextField
                        className="cat"
                        label="Category"
                        variant="outlined"
                        size="small"
                        onChange={(e) => handleinputChange(e, i)}
                        name="category"
                      />

                      <TextField
                        className="pro"
                        label="Project"
                        variant="outlined"
                        size="small"
                        onChange={(e) => handleinputChange(e, i)}
                        name="project"
                      />

                      <TextField
                        className="desc"
                        label="Description"
                        variant="outlined"
                        size="small"
                        onChange={(e) => handleinputChange(e, i)}
                        name="desc"
                      />

                      <Button sx={styleObj} component="label">
                        <UploadFileTwoToneIcon />
                        <input type="file" hidden />
                      </Button>

                      <IconButton>
                        <Button sx={styleObj}>
                          <EditIcon />
                        </Button>
                      </IconButton>
                      {inputData.length !== 1 && (
                        <IconButton>
                          <Button
                            sx={styleObj}
                            onClick={() => handleRemove(Math.random())}
                          >
                            <DeleteIcon />
                          </Button>
                        </IconButton>
                      )}
                    </tr>
                  </table>
                );
              })}
            </tr>
          </table>
        </div>

        <IconButton>
          <Button sx={styleObj}  onClick={handleClick}>
            <AddCardIcon />
          </Button>
        </IconButton>
      </div>
    </div>
  );
}

export default NewReport;
