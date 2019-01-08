import express from 'express';
import morgan from 'morgan';
/* tslint:disable-next-line */
const PORT = process.env.PORT || 3000;

export const server = express();

server.use(morgan('dev'));
server.get('/', (req, res) => {
  res.send('Hello World!');
});
/* tslint:disable */
server.listen(PORT, () => console.log('Server is listening!'));

// @ts-ignore
if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');
  // @ts-ignore
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    // @ts-ignore
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    // @ts-ignore
    currentApp = newApp;
  });
}
