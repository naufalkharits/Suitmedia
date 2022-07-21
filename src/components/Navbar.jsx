import { Fragment, useState } from "react"
import { Menu, Transition } from "@headlessui/react"

const Navbar = () => {
    const [isShowing, setIsShowing] = useState(false)

    return (
        <nav className="container mx-auto flex items-center justify-between">
            <div className="cursor-pointer p-4 text-xl font-bold">Company</div>
            <div className="hidden items-center gap-4 md:flex [&>span]:cursor-pointer [&>span]:p-4 [&>span]:font-medium">
                <Menu as="div" className="relative z-10 hidden sm:inline-block">
                    <Transition
                        show={isShowing}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        onMouseLeave={() => setIsShowing(false)}
                    >
                        <Menu.Items className="absolute left-5 mt-6 w-56 bg-white shadow-md ring-1 ring-black ring-opacity-5">
                            <Menu.Item
                                as="div"
                                className="[&>div]:cursor-pointer [&>div]:p-4 [&>div]:font-medium"
                            >
                                <div className="hover:bg-zinc-700 hover:text-white">
                                    HISTORY
                                </div>
                                <div className="hover:bg-zinc-700 hover:text-white">
                                    VISION MISSION
                                </div>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <span
                    className="hover:bg-zinc-100"
                    onMouseEnter={() => setIsShowing(true)}
                >
                    ABOUT
                </span>
                <span className="hover:bg-zinc-100">OUR WORK</span>
                <span className="hover:bg-zinc-100">OUR TEAM</span>
                <span className="hover:bg-zinc-100">CONTACT</span>
            </div>
        </nav>
    )
}

export default Navbar
