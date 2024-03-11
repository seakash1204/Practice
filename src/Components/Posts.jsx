import { useState } from "react";

const Posts = () => {
    let [state, setState] = useState([]);

  const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    setState(data)
  };
  return (
    <div>
      <h2>Post Information</h2>
      <button onClick={getPost}> Get Post</button>
      <button onClick={()=>{setState([])}}>Remove Post</button>
      {
        state.length > 0 ? <div> 
            <ol>
            {
                state.map((ele)=>{
                    return <li>{ele.title}</li>
                })
            }
            </ol>
        </div> : <div><h2>No Post Available</h2></div>
      }
      
    </div>
  );
};
export default Posts;
