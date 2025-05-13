import Li from "./Li";
import Button from "../Button";

const Header = ()=> {
    const navItems = ["Home", "Shopping", "Contact", "About Us"];

    return (
        <header className="w-full h-auto md:px-24 px-4 py-3 border border-solid border-gray-300 flex items-center justify-between">
            <h1 className="text-emerald-500 text-xl font-semibold cursor-pointer">Logo</h1>
            <nav>
                <ul className="flex gap-8 items-center text-sm font-semibold">
                    {navItems.map((item)=>(
                        <Li className="text-white" key={item}>{item}</Li>
                    ))}
                </ul>
            </nav>
            <Button className="px-3 py-1 bg-emerald-500 text-white">
                Login
            </Button>
        </header>
    )
}

export default Header;