import concurrently from 'concurrently';

// Run both the frontend and backend in parallel
const { result } = concurrently([
  { 
    command: 'vite', 
    name: 'frontend', 
    prefixColor: 'blue' 
  },
  { 
    command: 'node server.ts', 
    name: 'backend', 
    prefixColor: 'green' 
  }
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
});

result.then(
  () => console.log('All processes exited with success'),
  (error) => console.error('At least one process failed', error)
);
