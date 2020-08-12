
export default function logger(store: any) {
    return (next: (arg0: any) => void) => (action: any) => {
        next(action);
        console.log(`STATE AFTER DISPATCH: ${JSON.stringify(store.getState())}`)
    }
}
