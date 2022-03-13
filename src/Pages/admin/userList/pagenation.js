import { useEffect, useState } from "react";
 import ReactDOM from 'react-dom';
 const Pagenation =( {pages,setCurrentPage,currentUser, sortedUsers}) =>{
     
    const numOfPages = [];

    for (let i=1; i <= pages; i++) {
        numOfPages.push(i);
    }
    

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])

      return (<>
          <div className="clearfix">
             <div  style={{ color:'white'}}  className="hint-text">Showing <b>{currentUser.length}</b> out of <b>{sortedUsers.length}</b> entries</div>
				<ul className="pagination">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' }`}><a href="#!" className="page-link" 
                onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
            >Previous</a></li>

{
            numOfPages.map((page, index) => {
                return (
                    <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item' }`}><a href="#!" className="page-link" style={{marginLeft: '5px',}}
                        onClick = {()=>setCurrentButton(page)}
                    >{page}</a></li> 
                )
            })

}

                <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item' }`}><a href="#!" className="page-link" 
                onClick = { () => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}
                  >Next</a></li>

                
					
				</ul>
			</div>
      </>);
 }
  export default Pagenation
