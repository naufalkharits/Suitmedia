export const nameValidation = (name, showError, setShowError) => {
    if (!name) {
        return setShowError({ ...showError, name: true })
    }
    return setShowError({ ...showError, name: false })
}

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const emailValidation = (email, showError, setShowError) => {
    if (!emailFormat.test(email)) {
        return setShowError({ ...showError, email: true })
    }
    return setShowError({ ...showError, email: false })
}

export const messageValidation = (message, showError, setShowError) => {
    if (!message) {
        return setShowError({ ...showError, message: true })
    }
    return setShowError({ ...showError, message: false })
}
