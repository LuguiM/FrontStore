
export const Navbar = () => {
  return (
    <div className="border-b border-gray container-spacing">
        <div className=" flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
            <img src="../../assets/react.svg" alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">FrontStore</h1>
            </div>
            <nav className="flex gap-4">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
        </div>
    </div>
  )
}
