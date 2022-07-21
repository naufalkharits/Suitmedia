const ContactUs = () => {
    return (
        <div>
            <h2 className="text-center text-xl font-bold">CONTACT US</h2>
            <form className="mx-auto" action="">
                <label>
                    <div>Name</div>
                    <input className="border border-zinc-300 p-2" type="text" />
                </label>
                <label>
                    <div>Email</div>
                    <input className="border border-zinc-300 p-2" type="text" />
                </label>
                <label>
                    <div>Message</div>
                    <textarea
                        className="border border-zinc-300 p-2"
                        type="text"
                    />
                </label>
            </form>
        </div>
    )
}

export default ContactUs
