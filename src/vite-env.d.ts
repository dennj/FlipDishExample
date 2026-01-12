/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPENAI_API_KEY: string;
    readonly VITE_FLIPDISH_APP_ID: string;
    readonly VITE_FLIPDISH_STORE_ID: string;
    readonly VITE_FLIPDISH_BEARER_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
