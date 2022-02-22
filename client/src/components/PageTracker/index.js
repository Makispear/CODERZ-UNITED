export default function PageTracker({ props }) {

  return (
    <span data-testid="pageTracker" className="text-tertiary p-style">{props.page}</span>
  )
}
