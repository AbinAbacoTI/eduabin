
export interface NotifyProps {
  message: string
  type?: 'error' | 'success' | 'warning' | 'info'
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center'
}
