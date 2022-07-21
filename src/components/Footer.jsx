import { FaFacebookSquare, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-zinc-700">
            <div className="container mx-auto p-4">
                <div className="mb-2 text-center font-medium text-white">
                    Copyright © 2016. PT Company
                </div>
                <div className="flex items-center justify-center gap-2 text-white">
                    <FaFacebookSquare />
                    <FaTwitter />
                </div>
            </div>
        </footer>
    )
}

export default Footer
