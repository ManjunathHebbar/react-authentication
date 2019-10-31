import React from 'react'
import DoctorData from '../jsons/Doctor.json'
import CardComponent from '../common/card.component'


class Doctors extends React.Component{
    render(){
       const datas = DoctorData;
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
                   doctorData={data}
                 />
                 </div>
               )
             })}
          </div>
        )
    }
}

export default Doctors