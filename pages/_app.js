import "../styles/globals.css";
import "./app.css";
import logo from "../images/logo.ico";
import Link from "next/link";
import Image from "next/image";



function NFTMarketplace({Component, pageProps}) {
  return (
    <div>
      
      <nav className="grid grid-cols-12 items-center border-b p-6" style={{ backgroundColor: "purple" }}>
      <div className="col-span-2">
          <div className="mx-auto h-16 w-16">
            <Link href="/">
              <Image src={logo} className="w-full cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="col-span-8">
      
        <p className='text-2xl text-center font-bold text-white'>Rise&Fame Marketplace</p>
        

        <div className='flex mt-4 justify-center'>
        
          <Link href='/'>
            <a className='mr-4'>
              Main Marketplace
            </a>
          </Link>
          <Link href='/business-brand'>
            <a className='mr-6 text-white'>
              Business Brand
            </a>
          </Link>
          <Link href='/mint-item'>
            <a className='mr-6'>
              Mint Tokens
            </a>
          </Link>
          <Link href='/account-dashboard'>
            <a className='mr-6'>
              Account Dashboard
            </a>
          </Link>
          <Link href='/customer-collector'>
            <a className='mr-6 text-white'>
              Customer Collector
            </a>
          </Link>
          <Link href='/my-nfts'>
            <a className='mr-6'>
              My NFts
            </a>
          </Link>

          <Link href='/about'>
            <a className='mr-6 text-black font-bold'>
              About
            </a>
          </Link>
          </div>
          </div>
      </nav>
      <Component {...pageProps} />
    </div>
  ) 
}

export default NFTMarketplace 