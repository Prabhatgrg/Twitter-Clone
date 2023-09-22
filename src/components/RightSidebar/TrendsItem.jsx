import { BsThreeDots } from "react-icons/bs";
import { PiSmileySad } from "react-icons/pi";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const TrendsItem = ({ topic, title, count, url }) => {
    const menuItems = [
        {
            id: "01",
            text: "Not interested in this",
        },
        {
            id: "02",
            text: "This trend is harmful or spammy",
        },
    ];

    return (
        <Link to={url} className="block text-white hover:text-white px-4 py-3 ease-in-out duration-300 hover:bg-dark-hover relative">
            <span className="font-medium text-xs text-gray-400">{topic}</span>
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="font-medium text-xs text-gray-400">{count}</span>
            <div className="absolute flex items-end flex-col right-4 top-3">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="rounded-full w-9 h-9 p-0 flex items-center justify-center border-0 bg-transparent hover:bg-primary/[.1] focus:outline-0">
                            <BsThreeDots className="text-xl" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute z-10 right-0  mt-2 w-80 origin-top-right rounded-lg bg-black shadow-lg shadow-slate-50/20 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {menuItems.map((item) => (
                                    <Menu.Item key={item.id}>
                                        <div className="hover:cursor-pointer text-white hover:text-white px-4 py-2 flex gap-3">
                                            <PiSmileySad />
                                            <span className="font-bold">{item.text}</span>
                                        </div>
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </Link>
    );
};

export default TrendsItem;
