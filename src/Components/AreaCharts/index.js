import React from 'react';
import  {AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend,Tooltip, ResponsiveContainer} from 'recharts'; 
const Data = [
    {
        City: 'Indore',
        area: 525,
        Hospital: 1208
    },
    {
        City: 'Bhopal',
        area: 463,
        Hospital: 1189
    },
    {
        City: 'Balaghat',
        area: '25',
        Hospital: 500
    },
    {
        City: 'Banarsh',
        area: 82,
        Hospital: 700
    },
    {
        City: 'Jabalpur',
        area: 367,
        Hospital: 450
    },
    {
        City: 'Delhi',
        area: 1484,
        Hospital: 2000
    },
];    
const AreaCharts = () => {
    return(
        <div>
            <center><h1>AreaChart</h1></center>
            <ResponsiveContainer Width = "100%" aspect={3}> 
             <AreaChart 
             data={Data} 
             margin={{ right: 100 }}>
            <CartesianGrid />
            <XAxis dataKey="City"/>
            <YAxis/>
            <Legend />
            <Tooltip />
            <Area dataKey="area"stroke="#8884d8" />
            <Area dataKey="Hospital"stroke="#82ca9d"/>
            </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
export default AreaCharts;