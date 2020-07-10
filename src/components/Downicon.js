import React, {Componennt} from "react"

const DownIcon = (props) => {
    return(
        <div

        onClick =  {props.onClick}
        style = {{
          display : "flex",
          flexDirection : "row",
          alignItems : "center",
          justifyContent : "center",
          marginBottom : "-40px",
          transform : "translateY(-75px)",
          color : "white"

        }}
       >
         <img
          src={props.icon}
          style={{
            width: "40px",
            color: "white"
          }}
         />
       </div>
    )
}

export default DownIcon