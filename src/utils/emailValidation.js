const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const emailValidation = (email, setShowEmailError) => {
    if (!emailFormat.test(email)) {
        return setShowEmailError(true)
    }
    return setShowEmailError(false)
}
