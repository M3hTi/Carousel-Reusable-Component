import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Carousel.jsx'),
      name: 'CarouselReusableComponent',
      fileName: 'carousel-reusable-component'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-icons': 'ReactIcons'
        }
      }
    }
  }
})