import MainMenu from './MainMenu'

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <MainMenu />
    </div>
  )
}

export default Header
