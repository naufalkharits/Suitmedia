import { FaRegLightbulb } from "react-icons/fa"
import { MdAccountBalance } from "react-icons/md"
import { RiScalesFill } from "react-icons/ri"

const OurValues = () => {
    return (
        <div className="container mx-auto px-2">
            <h2 className="text-center text-xl font-bold">OUR VALUES</h2>
            <div className="flex flex-wrap items-center justify-center">
                <div className="p-2 md:w-1/3">
                    <div className="bg-suit-red p-8 text-center text-white">
                        <FaRegLightbulb className="mx-auto mb-4 text-lg font-medium" />
                        <h3 className="mb-6 text-lg font-medium">INNOVATIVE</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam repellat consequuntur perspiciatis.
                        </p>
                    </div>
                </div>
                <div className="p-2 md:w-1/3">
                    <div className="bg-suit-green p-8 text-center text-white">
                        <MdAccountBalance className="mx-auto mb-4 text-lg font-medium" />
                        <h3 className="mb-6 text-lg font-medium">LOYALTY</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam repellat consequuntur perspiciatis.
                        </p>
                    </div>
                </div>
                <div className="p-2 md:w-1/3">
                    <div className="bg-suit-blue p-8 text-center text-white">
                        <RiScalesFill className="mx-auto mb-4 text-lg font-medium" />
                        <h3 className="mb-6 text-lg font-medium">RESPECT</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam repellat consequuntur perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValues
