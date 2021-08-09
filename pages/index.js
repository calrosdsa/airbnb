import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import Image from 'next/image'
import MediaCard from '../components/MediaCard'
import SmallCard from '../components/SmallCard'
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";
export default function Home({exploreData,cardData}) {
  const [loading, setLoading] = useState(false);

  const override = css`
    width: 350px;
    height: 200px;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3400);
    // 3400
  }, []);
  return (
    <div>
       {loading ? (
          <div className="w-screen g h-screen bg-gray-50 flex justify-center place-items-center flex-col">
            <div className="relative -mb-10 flex flex-col justify-center place-items-center w-[250px] h-[250px]">
              <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <BarLoader color={"pink"} loading={loading} css={override} />
          </div>
        ) : (
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
          <Fade>
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
            </Fade>
     </section>
     <section className="">
       <h2  className="text-xl px-10 py-10 font-bold">Live Aniwhere</h2>
       <Fade duration={3000}>
       
       <div className="px-5 overflow-x-auto scrollbar-hide flex ">
       {cardData.map(({img,title})=>(
         <MediaCard
         img={img}
         title={title}
         key={title}
         />
         ))}
         </div>
         </Fade>
     </section>
     <Fade duration={3000}>
       <LargeCard
       img="https://links.papareact.com/4cj"
       title='The Greater Outdoors '
       description="WishLists Curated by Airbnb"
       bottontext='Get Inspired'
       />
       </Fade>
     </main>
     <Footer/>
    </div>
  )}
  </div>
  );
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