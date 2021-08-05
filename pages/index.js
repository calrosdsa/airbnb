import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediaCard from '../components/MediaCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData,cardData}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
     <Banner/>
     <main className="max-w-7xl py-5 bg-gray-100 mx-auto">
     <section>
          <h2 className="text-xl font-bold px-10">Explore Nearby </h2>
          <div className="mt-10 sm:mx-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {exploreData.map(({location,img,distance})=>(
            <SmallCard
            location={location}
            key={img}
            img={img}
            distance={distance}
            />
            ))}
            </div>
     </section>
     <section className="">
       <h2  className="text-xl px-10 py-10 font-bold">Live Aniwhere</h2>
       <div className="justify-center px-5 overflow-x-auto scrollbar-hide flex ">
       {cardData.map(({img,title})=>(
         <MediaCard
         img={img}
         title={title}
         key={title}
         />
         ))}
         </div>
     </section>
       <LargeCard
       img="https://links.papareact.com/4cj"
       title='The Greater Outdoors '
       description="WishLists Curated by Airbnb"
       bottontext='Get Inspired'
       />
     </main>
     <Footer/>
    </div>
  )
}
export async function getStaticProps(){
  const exploreData=await fetch('https://links.papareact.com/pyp').then((res)=>res.json());
  const cardData=await fetch('https://links.papareact.com/zp1').then((res)=>res.json());
  return{
    props:{
      exploreData,
      cardData,
    }
  }
}