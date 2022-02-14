import { NotifyProps } from 'interfaces/notify.interface'
import { toast } from 'react-toastify'

const Notify = ({
  message = '',
  type = 'info',
  position = 'top-right'
}: NotifyProps) => {
  toast(message, {
    type,
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

export default Notify
