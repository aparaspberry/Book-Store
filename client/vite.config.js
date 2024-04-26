//vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      https: true,
      key: fs.readFileSync('/REACT/MERN-Bookstore/client/localhost+2-key.pem'),
      cert: fs.readFileSync('/REACT/MERN-Bookstore/client/localhost+2.pem'),
      host: '0.0.0.0', // Listen on all network interfaces
      port: 5173,
  }
}
})

//export default defineConfig({
  //plugins: [react()],
  //server: {
    //https: {
      //https: true,
      //key: fs.readFileSync('/REACT/MERN-Bookstore/client/localhost+2-key.pem'),
      //cert: fs.readFileSync('/REACT/MERN-Bookstore/client/localhost+2.pem'),
      //host: '0.0.0.0', // Listen on all network interfaces
      //port: 3001, // Use the desired port
      // Other server options...
    //},
  //},
//})
