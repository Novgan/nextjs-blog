export const requiredField = (value: any) => {
    if (value){
        return undefined
    }
    return 'Field is required'
}
