/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IMAGEKIT_URL: string
  readonly VITE_SITE_URL: string
  readonly VITE_DEVELOPER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
