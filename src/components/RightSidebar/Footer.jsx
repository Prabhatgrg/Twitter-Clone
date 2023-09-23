import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";

function Footer() {
    const footerMenu = [
        {
            id: "01",
            url: "#",
            text: "Terms of Service",
        },
        {
            id: "02",
            url: "#",
            text: "Privacy Policy",
        },
        {
            id: "03",
            url: "#",
            text: "Cookie Policy",
        },
        {
            id: "04",
            url: "#",
            text: "Accessibility",
        },
        {
            id: "05",
            url: "#",
            text: "Ads info",
        },
        {
            id: "05",
            text: "More",
            dropdown: true,
            children: [
                {
                    id: "0501",
                    url: "#",
                    text: "About",
                },
                {
                    id: "0502",
                    url: "#",
                    text: "Status",
                },
                {
                    id: "0503",
                    url: "#",
                    text: "X for Business",
                },
                {
                    id: "0504",
                    url: "#",
                    text: "Developers",
                },
            ],
        },
        {
            id: "06",
            text: "© 2023 X Corp.",
        },
    ];
    return (
        <div className="pt-3 pb-10">
            <div className="flex gap-2 flex-wrap">
                {footerMenu.map((item) =>
                    item?.url ? (
                        <Link key={item.id} to={item.url}>
                            {item?.text}
                        </Link>
                    ) : (
                        <span key={item.id} className="flex items-center">
                            <span>{item?.text}</span>
                            {item?.dropdown ? (
                                <Menu as="div" className="relative inline-block text-left">
                                    <Menu.Button className="rounded-full p-0 border-0 bg-transparent focus:outline-0">
                                        <BsThreeDots className="text-xl" />
                                    </Menu.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute z-10 right-0 bottom-0 mt-2 w-18 origin-top-right rounded-lg bg-black shadow-lg shadow-slate-50/20 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-0">
                                                {item?.children.map((item) => (
                                                    <Menu.Item key={item.id}>
                                                        <div className="hover:cursor-pointer text-white hover:text-white transition ease-out duration-300 hover:bg-dark-hover px-4 py-2 flex gap-3">
                                                            <span className="font-bold">{item.text}</span>
                                                        </div>
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            ) : null}
                        </span>
                    )
                )}
            </div>
        </div>
    );
}

export default Footer;
