import Logo from "@/assets/logo/clickrwanda.png"
import Image from "next/image"
import Link from "next/link"


const Header = () => {
  return (
    <header className="main-header">
     <Image src={Logo} width={100} alt="Click rwanda logo" />
     <nav className="navbar">
          <Link href="/news">News</Link>
          <Link href="/trends">Trends</Link>
          <Link href="/biographies">Biographies</Link>
     </nav>
    </header>
  )
}

export default Header