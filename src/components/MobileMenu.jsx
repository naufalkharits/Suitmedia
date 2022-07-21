import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { FiMenu, FiX } from "react-icons/fi"

const MobileMenu = () => {
    return (
        <Popover className="md:hidden">
            <Popover.Button className="p-4">
                <FiMenu className="h-7 w-7" />
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="absolute right-0 top-0 z-50 p-2">
                    <div className="w-64 bg-white shadow-md ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center justify-between">
                            <div></div>
                            <Popover.Button className="p-3">
                                <FiX className="h-7 w-7" />
                            </Popover.Button>
                        </div>

                        <div className="[&>div]:cursor-pointer [&>div]:p-4 [&>div]:font-medium">
                            <div className="hover:bg-zinc-100">ABOUT</div>
                            <div className="hover:bg-zinc-100">OUR WORK</div>
                            <div className="hover:bg-zinc-100">OUR TEAM</div>
                            <div className="hover:bg-zinc-100">CONTACT</div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default MobileMenu
