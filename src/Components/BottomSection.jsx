import React, {useState} from "react";
import "./BottomSection.css";
import "./newReport.css";
import Select from "react-select";
import { BsFillTrashFill } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";




function BottomSection() {
 const [data, setData] = useState([]);
 const [category, setCategory] = useState(null);
 const [rowData, setRowData] = useState({
   invoiceNo: "",
   invoiceDate: "",
   amount: "",
   category: "",
   project: "",
   receipt: "",
   description: "",
   action: "",
 });

 const [editIndex, setEditIndex] = useState(null);

 const handleChange = (event) => {
   setRowData({ ...rowData, [event.target.name]: event.target.value });
 };

 const handleCreateRow = () => {
   if (editIndex === null) {
     setData([...data, rowData]);
   } else {
     const updatedData = [...data];
     updatedData[editIndex] = rowData;
     setData(updatedData);
     setEditIndex(null);
   }
   setRowData({
     invoiceNo: "",
     invoiceDate: "",
     amount: "",
     category: "",
     project: "",
     receipt: "",
     description: "",
     action: "",
   });
 };

 const handleEditRow = (index) => {
   setRowData(data[index]);
   setEditIndex(index);
 };

 const handleDeleteRow = (index) => {
   const updatedData = [...data];
   updatedData.splice(index, 1);
   setData(updatedData);
 };


 const options = [
   { value: "MEDIDATA", label: "Medidata" },
   { value: "MSAFETY", label: "mSafety" },
   { value: "SAHASTRA", label: "Sahastra" },
   { value: "FILTERX", label: "FilterX" },
   { value: "MLITERATURE", label: "mLiterature" },
   { value: "DFEXPENSES", label: "DfExpenses" },
   { value: "OTHERS", label: "Others" },
 ];

 const options1 = [
  {
    label:"Meals & Entertainment",
    options:[
      {label:"Restaurant/Dining",
       value:"Restaurant/Dining"},
      {label:"Entertainment",
       value:"Entertainment"}
    ]
  },

  {
    label:"Office Expense & Postage",
    options:[
      {label:"Printing Expenses",
       value:"Printing Expenses"},
      {label:"Shipping Courier/Packaging",
      value:"Shipping Courier/Packaging"},
      {label:"Software expenses",
       value:"Software expenses"},
      {label:"Office Stationary",
       value:"Office Stationary"}
    ]
  },

  {
    label:"Rent or Lease",
    options:[
      {label:"Equipment Rent",
       value:"Equipment Rent"},
      {label:"Machinary Rent",
       value:"Macvhinary Rent"},
      {label:"Officespace Rent",
       value:"Officespace Rent"},
      {label:"Vechiles Rent",
       value:"Vechiles Rent"}
    ]
  },


  {
    label:"Travel",
    options:[
      {label:"Air Travel",
      value:"Air Travel"},
      {label:"Train Travel",
       value:"Train Travel"},
      {label:"Road Travel",
       value:"road Travel"}
    ]
  },

  {
    label:"Client Hosting",
    options:[
      {label:"Client Hosting Team lunch",
       value:"Client Hosting Team lunch"},
      {label:"Client Hosting Mileage Expenses",
       value:"Client Hosting Mileage Expenses"},
      {label:"Client Hosting others",
       value:"Client Hosting others"}
    ]
  },

  {
    label:"Utilities",
    options:[
      {label:"Electrical Utilities",
       value:"Electrical Utilities"},
      {label:"Phone Utilities",
       value:"Phone Utilities"}
    ]

  },

  {label:"Others", value:"Others"}
 ]


 return (
   <div>
     <table>
       <thead>
         <tr>
           <th>Invoice No</th>
           <th>Invoice Date</th>
           <th>Amount</th>
           <th>Category</th>
           <th>Project</th>
           <th>Receipt</th>
           <th>Description</th>
           <th>Action</th>
         </tr>
       </thead>

       <tbody>
         {data.map((row, index) => (
           <tr key={index}>
             <td>{row.invoiceNo}</td>
             <td>{row.invoiceDate}</td>
             <td>{row.amount}</td>
             <td>{row.category}</td>
             <td>{row.project}</td>
             <td>{row.receipt}</td>
             <td>{row.description}</td>
             <td>{row.action}</td>

             <td>
               <button onClick={() => handleEditRow(index)}>
                 <HiOutlinePencil />
               </button>
               {/* <Icon
                 name="edit"
                 theme="light"
                 size="tiny"
                 onClick={() => handleEditRow(index)}
               /> */}
               <button onClick={() => handleDeleteRow(index)}>
                 <BsFillTrashFill />
               </button>
             </td>
           </tr>
         ))}

         <tr>
           <td>
             <input
               type="text"
               name="invoiceNo"
               value={rowData.invoiceNo}
               placeholder="Invoice No"
               onChange={handleChange}
             />
           </td>

           <td>
             <input
               type="date"
               name="invoiceDate"
               value={rowData.invoiceDate}
               placeholder="Invoice Date"
               onChange={handleChange}
             />
           </td>

           <td>
             <input
               type="number"
               name="amount"
               value={rowData.amount}
               placeholder="Amount"
               onChange={handleChange}
             />
           </td>

           <td>
             <Select options={options1} defaultValue={category} onChange={setCategory} />
           </td>

           <td>
             <Select options={options} className="project" />
           </td>

           <td></td>

           <td>
             <input
               type="text"
               name="description"
               value={rowData.description}
               placeholder="Description"
               onChange={handleChange}
             />
           </td>
         </tr>
       </tbody>
     </table>

     <div className="btn">
       <button type="button" onClick={handleCreateRow} className="addUpdate">
         {editIndex === null ? " + Receipts" : "Update"}
       </button>

       <button className="save">Save Report</button>
       <button className="submit">Submit Report</button>
     </div>
   </div>
 );
}

export default BottomSection;
