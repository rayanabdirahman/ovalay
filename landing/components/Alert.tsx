type Props = {
  type: string
  message: string
}

const Alert: React.FunctionComponent<Props> = ({ type, message }) => (
  <div className={`alert alert-${type}`}>
    <span><strong>Status</strong>: {message}</span>
  </div>
)

export { Alert }