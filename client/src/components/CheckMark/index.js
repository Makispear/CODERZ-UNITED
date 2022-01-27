export default function CheckMark({ props }) {
  return (
    <div className="checkMark primary-radius">
      {props.marked &&
        <div className="marked primary-radius"></div>
      }
    </div>
  )
} 
