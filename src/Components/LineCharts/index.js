import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 const SchoolData = [
    {
        SubjectName: 'Maths',
        NumberOfStudent: 40,
        Schoolfees: 5000
    },
    {
        SubjectName: 'Bio',
        NumberOfStudent: 60,
        Schoolfees: 4000
    },
    {
        SubjectName: 'Commerce',
        NumberOfStudent: 80,
        Schoolfees: 6000
    },
    {
        SubjectName: 'Agriculture',
        NumberOfStudent: 90,
        Schoolfees: 3000
    },
 ]
 const LineCharts = () => {
     return(
         <div>
             <center>
             <h1>LineChart Using ReChart</h1>
             </center>
            <ResponsiveContainer Width = "100%" aspect={3}> 
             <LineChart 
             data={SchoolData} 
             margin={{ right: 300 }}>
            <CartesianGrid />
            <XAxis dataKey="SubjectName"/>
            <YAxis/>
            <Legend />
            <Tooltip />
            <Line dataKey = "NumberOfStudent" stroke="#8884d8" />
            <Line dataKey = "SchoolFees" stroke="#82ca9d"/>
            </LineChart>
            </ResponsiveContainer>
         </div>
     )
 }
export default LineCharts;