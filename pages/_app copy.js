import '../styles/globals.css'
import './app.css'
import Link from 'next/link'



function NFTMarketplace({Component, pageProps}) {
  return (
    <div>
      
      <nav className='border-b p-6' style={{backgroundColor:'purple'}}>
       
      
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
      </nav>
      <Component {...pageProps} />
    </div>
  ) 
}

export default NFTMarketplace 