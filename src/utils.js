export const getUrl=(path)=>{
    return new URL(`/assets/${path}`,import.meta.url).href
}