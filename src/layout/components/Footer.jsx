

export const Footer = () => {
  return (
    <div className="border-t border-gray container-spacing flex flex-col-reverse md:flex-row gap-2 justify-between items-center !py-10">
      <div className="flex items-center gap-2">
        <img src="./vite.svg" alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">FrontStore</h1>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-bodyRegular">© 2024 FrontStore. All rights reserved.</p>
      </div>
    </div>
  )
}
