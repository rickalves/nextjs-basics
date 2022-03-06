import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MuiButton(props){
 
  return(
   <Button 
      variant="contained" 
      color="primary" 
      className='button'
      {...props}
    >
      <FontAwesomeIcon icon={props.icon} className='btnIcon'/>
      {props.title}
    </Button>
  )
}
  


