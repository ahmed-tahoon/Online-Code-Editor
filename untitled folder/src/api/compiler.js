import axios from "axios"


const compile =  async (data)=>{

 

  try {

console.log(data)
    const res = await axios
      .post("http://localhost:4000/api/run",data)
      console.log(res.data)
    return (res.data)
  } catch(err) {
    return err
  }


}
export  {compile} 