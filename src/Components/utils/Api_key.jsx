import { useEffect } from "react";


const Api_key = () => {
    
    let api_key = "36c2731e80bedca7edd17caae5f275ce";
    
    useEffect(() => {
        fetch(``)
        .then(res => res.json())
        .then(data => console.log(data))
    })
    
  return (
    <div></div>
  )
}

export default Api_key