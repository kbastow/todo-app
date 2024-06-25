import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export default StyledForm;