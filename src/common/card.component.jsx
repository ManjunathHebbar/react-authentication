import React from 'react'
const CardComponent = ({doctorData,keys}) => {
    const {CardComponent,profilePicture,Name,email,gender} = Styles;
    
    return(
    <div style={CardComponent} key={keys}>
        <div style={profilePicture}><img src={doctorData.profile_picture} alt="new"/></div>
        <div styles={Name}>
            <strong>Name:</strong> {doctorData.first_name} {doctorData.last_name}
        </div>
        <div styles={email}><strong>Email: </strong>{doctorData.email}</div>
        <div styles={gender}><strong>Gender: </strong>{doctorData.gender}</div>
    </div>
    )
}

const Styles = {
    CardComponent:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        backgroundColor: 'white',
        padding: '10px',
        width:'300px',
        border: '1px solid gray',
        borderRadius: '5px',
        cursor: 'pointer',
        margin:'20px 10px 10px 0',
        height:'180px',
        marginTop:'80px'
    },

    profilePicture:{
        margin:'0 auto 10px auto',
        width:'50px',
        height:'50px',
        boxShadow: '0 8px 6px -6px black',
    },

    Name:{
        margin:'20px 0 10px 0'
    },

    email:{
        whiteSpace: 'nowrap', 
        width: '10px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}
export default CardComponent