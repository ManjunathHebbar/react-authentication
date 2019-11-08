import React, { useState } from 'react'
import DoctorData from '../jsons/Doctor.json'
import CardComponent from '../common/card.component'
import Pagination from '../common/pagination.component'
import './doctors.styles.scss'

const Doctors = ()=> {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const [search, setSearch] = useState("")
  const [searchDoctorsData, setSearchDoctorsData] = useState(true)
  
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost =  indexOfLastPost - postsPerPage
  const currentPosts = DoctorData.slice(indexofFirstPost,indexOfLastPost)
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  const searchList = (e) => {
    return(
      e.target.value ?
      setSearch(e.target.value, setSearchDoctorsData(false)) : setSearchDoctorsData(true)
      
    )
  }
  
  const filterDoctors = DoctorData.filter( doctors => {
     return (doctors.first_name.toLowerCase().indexOf( search.toLowerCase()) !== -1)
     
  })

  const datas = searchDoctorsData === true ? currentPosts : filterDoctors
  console.log(datas)

  return(
        <div className="doctor-page">
         <div className="search-container">
            <input onChange={searchList} type="text" placeholder="Search.." name="search"/>
         </div>
         <div style={{
          display:'flex',flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:'flex-start',
          paddingLeft:'120px',
          backgroundColor: '#282828'
          }}>

           {datas.map((data,index)=>{
             return (
               <div key = {index}>
               <CardComponent
                 data= {data}
               />
               </div>
             )})}

           
           </div>
           <Pagination 
              postsPerPage={postsPerPage} 
              totalPosts={DoctorData.length}
              paginate = {paginate}
              currentPage = {currentPage}
            />
        </div>
      )
  }

export default Doctors
                  