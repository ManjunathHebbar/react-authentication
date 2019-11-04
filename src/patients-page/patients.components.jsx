import React from 'react'
import PatientData from '../jsons/paitients.json'
import CardComponent from '../common/card.component'


class Patients extends React.Component{
    render(){
       const datas = PatientData;
        return(
          
          <div style={{
            display:'flex',flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-around',
            backgroundColor: '#282828'
            }}>
             {datas.map((data,index)=>{
               return (
                 <div>
                 <CardComponent
                   keys = {index}
                   doctorData= {data}
                 />
                 </div>
               )
             })}
          </div>
        )
    }
}

export default Patients