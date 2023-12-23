import { modal } from "../../Modal"
import CreateHeader from "./CreateHeader"


const CreateTable = () => {
  const createHeader = ()=>{
    modal({
      maxWidth:450,
      component:()=><CreateHeader />,
      header:{heading:"Create Header"}
     
    })
  }
  return (
    <div>
      <div className="flex justify-end">

      <button type="button" className="bg-primary text-white px-4 py-2 rounded-md text-sm"
      onClick={createHeader}>Add Headers</button>
      </div>
    </div>
  )
}

export default CreateTable