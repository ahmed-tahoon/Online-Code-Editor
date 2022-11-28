import axios from "axios"


const getcode = async (lang)=>{
  try {

    const res = await axios
      .get("http://localhost:4000/api/file/"+lang)
    return (res.data)
  } catch(err) {
    return err
  }


}
export  {getcode} 