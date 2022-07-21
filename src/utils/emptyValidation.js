export const emptyValidation = (value, setShowEmptyError) => {
    if (!value) {
        return setShowEmptyError(true)
    }
    return setShowEmptyError(false)
}
