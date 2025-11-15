'use client'

import { Box, Typography } from "@mui/material";

export default function CommitHash() {
  const commitHash = process.env.NEXT_PUBLIC_COMMIT_HASH || 'unknown';
  
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        zIndex: 1000,
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
    </Box>
  );
}
