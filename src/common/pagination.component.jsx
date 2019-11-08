import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumber = []
    
    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul className="pagination" style={{
                display:'flex',
                justifyContent:'center',
                padding:'30px',
                backgroundColor:'#80d4ff'}}>
              {pageNumber.map((number)=>
                  <li key={number} className="page-item">
                      <div style={{ 
                       backgroundColor: number === currentPage ? '#41A3B3' : 'white',
                       cursor:'pointer'}}
                       onClick={()=> paginate(number)} 
                       className="page-link">
                             {number}
                      </div>
                  </li>)
              }
            </ul>
        </nav>
    )
}

export default Pagination