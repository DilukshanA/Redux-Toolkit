import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';

type CustomSnackbarProps = {
  open: boolean;
  message: string;
  severity?: 'success' | 'error' | 'info' | 'warning';
  autoHideDuration?: number;
  onClose: (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => void;
};

const CustomSnackbar = ({
  open,
  message,
  severity = 'info',
  autoHideDuration = 6000,
  onClose,
}: CustomSnackbarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
