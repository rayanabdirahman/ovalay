type Props = {
  type: string
  message: string
}

const Alert: React.FunctionComponent<Props> = ({ type, message }) => (
  <div className={`alert alert-${type}`}>
    <div className="page-container">
      <span><strong>status</strong>: {message}</span>
    </div>
  </div>
)

export { Alert }