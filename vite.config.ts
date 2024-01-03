import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'
// import { UserConfig } from 'vite'

const isProd = process.env.NODE_ENV === 'production'

const noExternal: string[] = []
if (isProd) {
  noExternal.push(
      ...[
          // MUI needs to be pre-processed by Vite in production: https://github.com/vikejs/vike/discussions/901
          '@mui/icons-material',
          '@mui/material',
          '@emotion/react',
          '@emotion/styled'
      ]
  )
}

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [
      react(), vike()
    ],
    ssr: { noExternal },
  }
})


// const config: UserConfig = {
//   plugins: [react(), vike()]
// }

// export default config
