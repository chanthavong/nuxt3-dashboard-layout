export const useDebug = () => {
    const errorLog = (...message:any) => console.error(...message)
    const debugLog = (...message:any) => console.log(...message)
    return {
        errorLog,debugLog
    }
  }