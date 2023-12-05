import { Alert, Snackbar } from '@mui/material';

interface SnackBarComponentProps {
  onClose: () => void;
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  autoHideDuration?: number;
}

const defaultDuration = 6000;

export const SnackBarComponent = ({ onClose, open, message, severity, vertical, horizontal, autoHideDuration = defaultDuration }: SnackBarComponentProps): JSX.Element => {
  return (
    <Snackbar open={open} onClose={onClose} autoHideDuration={autoHideDuration} anchorOrigin={{ vertical, horizontal }}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
