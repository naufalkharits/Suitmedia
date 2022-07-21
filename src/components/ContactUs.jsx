import { useState } from "react"
import { emailValidation } from "../utils/emailValidation"
import { emptyValidation } from "../utils/emptyValidation"

const ContactUs = () => {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [showError, setShowError] = useState({
        name: false,
        email: false,
        message: false,
    })
    const [showEmptyError, setShowEmptyError] = useState(false)
    const [showEmailError, setShowEmailError] = useState(false)

    return (
        <div>
            <h2 className="text-center text-xl font-bold">CONTACT US</h2>
            <form className="flex flex-col items-center" action="">
                {/* name input */}
                <label>
                    <div>Name</div>
                    <input
                        className="w-64 border border-zinc-300 p-2"
                        name="name"
                        type="text"
                        onChange={(e) => {
                            setFormValue({
                                ...formValue,
                                [e.target.name]: emptyValidation(
                                    e.target.value,
                                    setShowEmptyError
                                ),
                            })
                        }}
                    />
                    {showEmptyError && (
                        <div className="text-red-500">
                            This field is required
                        </div>
                    )}
                </label>

                {/* email input */}
                <label>
                    <div>Email</div>
                    <input
                        className="w-64 border border-zinc-300 p-2"
                        name="email"
                        type="text"
                        onChange={(e) => {
                            setFormValue({
                                ...formValue,
                                [e.target.name]: emailValidation(
                                    e.target.value,
                                    showError,
                                    setShowError
                                ),
                            })
                        }}
                    />
                    {showEmailError && (
                        <div className="text-red-500">
                            Invalid email address
                        </div>
                    )}
                </label>

                {/* message input */}
                <label>
                    <div>Message</div>
                    <textarea
                        className="w-64 border border-zinc-300 p-2"
                        name="message"
                        type="text"
                        onChange={(e) => {
                            setFormValue({
                                ...formValue,
                                [e.target.name]: emptyValidation(
                                    e.target.value,
                                    setShowEmptyError
                                ),
                            })
                        }}
                    />
                    {showEmptyError && (
                        <div className="text-red-500">
                            This field is required
                        </div>
                    )}
                </label>
            </form>
        </div>
    )
}

export default ContactUs
