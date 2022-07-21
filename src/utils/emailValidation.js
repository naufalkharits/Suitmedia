const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const emailValidation = (email, showError, setShowError) => {
    if (!emailFormat.test(email)) {
        return setShowError({ ...showError, email: true })
    }
    return setShowError({ ...showError, email: true })
}
