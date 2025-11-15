'use client'

import { Box, Link, Tooltip, Typography } from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';

export default function PgpLink() {
  const commitHash = process.env.NEXT_PUBLIC_COMMIT_HASH || 'unknown';
  
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
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
      
      <Link
        href={`https://github.com/PatrizioColomba/patriziocolomba.github.io/commit/${commitHash}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            opacity: 0.5,
            transition: 'opacity 0.2s',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.7rem',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          {commitHash}
        </Typography>
      </Link>
    </Box>
  );
}
