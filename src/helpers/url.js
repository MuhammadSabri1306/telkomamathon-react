
export const config = {
    mode: process.env.REACT_APP_MODE,
    basePath: process.env.REACT_APP_BASE_PATH,
    publicUrl: process.env.REACT_APP_PUBLIC_URL
};

export const publicUrl = (requestUrl = "") => {
    return (!config.publicUrl) ? requestUrl : config.publicUrl + requestUrl;
};

export const basePath = (requestPath = "") => {
    return (!config.basePath) ? requestPath : config.basePath + requestPath;
};

export const isModeDev = () => config.mode === "dev";
export const isModeProd = () => config.mode === "prod";