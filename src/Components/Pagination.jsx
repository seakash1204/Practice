import { useState, useEffect } from "react";

const Pagination = () => {
  let [state, setState] = useState([]);
  let [page, setPage] = useState(1);  

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNo) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=11&_page=${pageNo}`);
    const data = await res.json();
    setState(data);
  };

  const handlePage = (pageAction) => {
        setPage(page = page + pageAction);
  }

  return (
    <div>
      <div>
        <h2>Users Data</h2>
        {state.length > 0 && (
          <div>
            <ol>
              {state.map((ele) => {
                return <li>{ele.title}</li>;
              })}
            </ol>
          </div>
        )}
      </div>
      {
        page > 1 ? <button onClick={()=>{handlePage(-1)}}>Prev</button> : <button disabled>Prev</button>
      }
      &nbsp; <button>{page}</button> &nbsp; 
      <button onClick={()=>{handlePage(+1)}}>Next</button>
    </div>
  );
};
export default Pagination;
