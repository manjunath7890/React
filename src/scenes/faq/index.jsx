import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LinearGauge = ({ value, min, max }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={percentage} color="primary" />
    </Box>
  );
};

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <LinearGauge value={progress} min={0} max={100} />;
}
