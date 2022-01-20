export default function CheckMark({ props }) {
  return (
    <div className="checkMark">
      {props.marked &&
        <div className="marked"></div>
      }
    </div>
  )
} 
