 import React from 'react';
 import ErrorIcon from '@mui/icons-material/Error';

 function ErrorMessage(error: String) {
   return (
     <div style={{ display: 'flex', alignItems: 'center', color: 'red' }}>
        <ErrorIcon style={{ marginRight: '8px' }} />
        <span>{error}</span>
     </div>
   );
 }

 export default ErrorMessage;