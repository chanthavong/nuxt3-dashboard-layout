export const useApp = () => {

    const appTitle = useState('appTitle', () => 'Dashboard')

    return {
        appTitle
    }
}