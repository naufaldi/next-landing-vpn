import {useState, useEffect} from "react";
import { useRouter } from 'next/router';

import projectsData from '../data/projectsData'
import DISTRICT from '../data/districts';
import Card from '../components/Card'
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";

export default function Projects() {
  const router = useRouter();
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [data, setData] = useState([]);
  const optionData = DISTRICT.map((item, key)=>{return {name: item.name, value:item.url}})
  const url = typeof window !== 'undefined' ? new URL(window.location.href) : "";
  const urlDistrict = url && url.searchParams && Object.keys(url.searchParams).length ? url.searchParams.get("district") : optionData[0].value;
  useEffect(()=>{
    setSelectedDistrict(urlDistrict);
    setData(projectsData[urlDistrict]);
  },[urlDistrict])
  console.log({optionData, selectedDistrict, data})
  return (  
    <Layout>
      <SeoHead title='LaslesVPN Landing Page' />
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hostels
          </h1>
        </div>
        <div className="container py-4">
          <label className="font-bold text-lg">Selcet District -</label>
          <select value={selectedDistrict} onChange={(e) => router.push('/hostels?district='+e.target.value)} className="form-control">
            <option value="select">Select an District</option>
            {
              optionData.map((item, key)=>{
                return(
                  <option key={key} value={item.item}>{item.name}</option>
                )
              })
            }
          </select>
        </div>
        <div className="container py-4">
          <div className="w-full">
            <div className="w-full">
              <h2 className="w-full text-3xl font-bold">
                {`Hostels in ${selectedDistrict}`}
              </h2>
              <div className="m-4 flex flex-wrap">
                { data && data.length &&
                  data.map((d) => {
                    return (
                      <Card
                        key={d.title}
                        title={d.title}
                        description={d.description}
                        imgSrc={d.imgSrc}
                        href={`hostel-detail?hostel=${d.href}`}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
