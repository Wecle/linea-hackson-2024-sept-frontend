/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ENV_NAME: string;
    VITE_SERVER_ENDPOINT_URL: string;
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
