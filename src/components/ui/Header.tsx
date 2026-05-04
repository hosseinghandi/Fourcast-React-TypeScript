export default function Header() {
  return (
    <>
      <nav aria-label="main nav" className="h-[10vh] w-full">
        {/* logo holder */}
        <div className="flex flex-row ">
          <span>fourCast</span>
          <div className="w-[25px] h-[25px]">
            <img
              className="conatin w-full h-full "
              src="/icons/logo/logo-black.png"
              alt="Logo of the web"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
