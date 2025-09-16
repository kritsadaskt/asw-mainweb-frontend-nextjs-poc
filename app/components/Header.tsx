import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

function Header() {
  return (
    <>
      <header className="bg-white py-4 shadow-md w-full fixed top-0 left-0 right-0 z-50 h-[70px] items-center flex">
        <div className="container flex justify-between">
          <Image src="https://assetwise.test/wp-content/themes/seed-spring/img/asw-logo_horizontal.svg" alt="AssetWise" width={160} height={17} className="w-[160px] h-[17px]" />
          <LanguageSwitcher />
        </div>
      </header>
      <div className="h-[70px]"></div>
    </>
  );
}
export default Header