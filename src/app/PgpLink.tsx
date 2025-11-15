'use client'

import { Box, Link, Tooltip } from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';

export default function PgpLink() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <Tooltip title="PGP Signature" arrow>
        <Link
          href="https://keys.openpgp.org/vks/v1/by-fingerprint/248097092B458509C508DAC0350585C4E9518F26"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
            opacity: 0.5,
            transition: 'opacity 0.2s',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <KeyIcon fontSize="small" />
        </Link>
      </Tooltip>
    </Box>
  );
}
