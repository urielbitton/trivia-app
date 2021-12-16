import React from 'react'
import '../styles/AppInputs.css'

export function AppInput(props) {
 
  const {title, iconclass, className, descriptText} = props
   
  return ( 
    <label className={`appinput commoninput ${className?className:""} ${descriptText?"descriptinput":""}`}> 
      <h6>{title}</h6>
      <i className={iconclass}></i> 
      {
        descriptText?
        <div>
          <input style={{paddingRight: iconclass?"40px":"10px"}} {...props} />
          <span></span>
          <small className="descript">{descriptText}</small>
        </div>:
        <input style={{paddingRight: iconclass?"40px":"10px"}} {...props} />
      }
    </label>
  )   
}     

export function AppSelect(props) {
  const { options, namebased, title, onChange, onClick, value, className} = props
  let optionsdata = options?.map((data,i) =>
    <option 
      key={i} 
      selected={data.selected} 
      disabled={data.disabled} 
      value={namebased?data.value:data.name?data.name.toLowerCase():data.name} 
      name={namebased?data.name:null}
    >  
        {data.name}
    </option>
  )  
  return ( 
    <label 
      className={`appselect commoninput ${className?className:""}`} 
      onClick={(e) => onClick&&onClick(e)}
    >
      <h6>{title}</h6>
      <select 
        onChange={(e) => onChange(e)} 
        value={value}
      >
        {optionsdata}
      </select>
    </label>
  )
} 



