import './App.css';
import {ResponsiveContainer, LineChart, Line,XAxis,YAxis, CartesianGrid ,Legend, Tooltip,BarChart, Bar } from "recharts"
import React from "react";
import exportFromJSON from 'export-from-json'
import Button from '@mui/material/Button';
import ppdata from './ppdata.json'
import ButtonGroup from '@mui/material/ButtonGroup';

const col= ["#ff0000","#000000","#ff0000","#000000","#ff0000","#000000"]

function exxportcsv(){
  console.log('export clicked')
  let fileName = 'csv-example'
  let exportType = exportFromJSON.types.csv;
  console.log(fileName)
  exportFromJSON({ data: ppdata, fileName: fileName, exportType: exportType })
}
function exxportxls(){
  console.log('export clicked')
  let fileName = 'xls-example'
  let exportType = exportFromJSON.types.xls;
  console.log(fileName)
  exportFromJSON({ data: ppdata, fileName: fileName, exportType: exportType })
}

   const CustomBar = (props) => {
      const { x, y, width, height, value } = props;
    
      let color;
      // Customize the color based on the value
      if (value < 250) {
        color = '#ff0000'; // Red
      } else if (value < 450) {
        color = '#0000ff'; // Blue
      } else {
        color = '#00ff00'; // Green
      }
    
      return <rect x={x} y={y} width={width} height={height} fill={color} />;
    };




  export const xApp = () => (
    <div >
    <h1 align= 'center'>Inventory Bar Chart</h1>
    <ResponsiveContainer aspect={3} width="100%">
    <BarChart width={500} height={300} data={ppdata}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="product_name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Quantity" shape={<CustomBar />} />
    </BarChart>

    </ResponsiveContainer>
    <ButtonGroup variant="text" aria-label="outlined primary button group">
  <Button onClick={exxportcsv}>Export to CSV</Button>
  <Button onClick={exxportxls}>Export to xls</Button>
</ButtonGroup>
  
    </div>
  );
export default xApp;















{/*
function xApp(){
   const CustomBar = (props) => {
      const { x, y, width, height, value } = props;
    
      let color;
      // Customize the color based on the value
      if (value < 250) {
        color = '#ff0000'; // Red
      } else if (value < 450) {
        color = '#0000ff'; // Blue
      } else {
        color = '#00ff00'; // Green
      }
    
      return <rect x={x} y={y} width={width} height={height} fill={color} />;
    };
  return (
    <div >
    <h1>Line Chart</h1>
    <ResponsiveContainer aspect={3} width="100%">
    <BarChart width={500} height={300} data={ppdata}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="product_name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Quantity" shape={<CustomBar />} />
    </BarChart>

    </ResponsiveContainer>
    <ButtonGroup variant="text" aria-label="outlined primary button group">
  <Button onClick={exxportcsv}>Export to CSV</Button>
  <Button onClick={exxportxls}>Export to xls</Button>
</ButtonGroup>
  
    </div>
  );
}
export default xApp;*/}