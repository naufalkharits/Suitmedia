import { useState } from "react"
import {
    nameValidation,
    emailValidation,
    messageValidation,
} from "../utils/formValidation"

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

    return (
        <div className="container mx-auto mt-16 px-4">
            <h2 className="text-center text-xl font-bold">CONTACT US</h2>
            <form className="mx-auto mt-4 w-full space-y-4 sm:w-fit">
                {/* name input */}
                <label className="block space-y-1">
                    <div className="font-medium">Name</div>
                    <input
                        className="w-full border border-zinc-300 p-2 sm:w-96 lg:w-[30rem]"
                        type="text"
                        name="name"
                        value={formValue.name}
                        onChange={(e) => {
                            setFormValue({
                                ...formValue,
                                [e.target.name]: e.target.value,
                            })
                            nameValidation(
                                e.target.value,
                                showError,
                                setShowError
                            )
                        }}
                    />
                    {showError.name && (
                        <div className="text-red-500">
                            This field is required
                        </div>
                    )}
                </label>

                {/* email input */}
                <label className="block space-y-1">
                    <div className="font-medium">Email</div>
                    <input
                        className="w-full border border-zinc-300 p-2 sm:w-96 lg:w-[30rem]"
                        type="text"
                        name="email"
                        value={formValue.email}
                        onChange={(e) => {
                            setFormValue({
                                ...formValue,
                                [e.target.name]: e.target.value,
                            })
                            emailValidation(
                                e.target.value,
                                showError,
                                setShowError
                            )
                        }}
                    />
                    {showError.email && (
                        <div className="text-red-500">
                            Invalid email address
                        </div>
                    )}
                </label>

                {/* message input */}
                <label className="block space-y-1">
                    <div className="font-medium">Message</div>
                    <textarea
                        className="w-full border border-zinc-300 p-2 sm:w-96 lg:w-[30rem]"
                        type="text"
                        name="message"
                        value={formValue.message}
                        onChange={(e) => {
                            setFormValue({
                                ...formValue,
                                [e.target.name]: e.target.value,
                            })
                            messageValidation(
                                e.target.value,
                                showError,
                                setShowError
                            )
                        }}
                    />
                    {showError.message && (
                        <div className="text-red-500">
                            This field is required
                        </div>
                    )}
                </label>
                <button
                    className="w-full bg-suit-blue p-2 text-white disabled:bg-zinc-400"
                    disabled={
                        !formValue.name ||
                        !formValue.email ||
                        !formValue.message ||
                        showError.name ||
                        showError.email ||
                        showError.message
                    }
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default ContactUs
