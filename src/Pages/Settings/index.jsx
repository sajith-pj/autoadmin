import { Tabs, Tab } from "@mui/material";
import { data } from "autoprefixer";
import { useState } from "react";

const Settings = () => {
const [value,setValue] = useState(0)
  const handletabs=(e,value)=>{
console.log(value);
console.log(e);
setValue(value)
  }


  return (
    <div>
  
      <Tabs value={value} className="w-[400px]" onChange={handletabs}>
       <Tab label="Setting"/>
       <Tab label="Api"/>
      </Tabs>
      <TabPanel value={value} index={0}>Styles</TabPanel>
      <TabPanel value={value} index={1}>Api Page</TabPanel>
    </div>
  );
};

const TabPanel=(props)=>{
  const {children,value,index} = props
  {
    return(
    <div>
      {
        value ===index&&(
          <h1>{children}</h1>
        )
      }

    </div>
  )
}
}

export default Settings;
