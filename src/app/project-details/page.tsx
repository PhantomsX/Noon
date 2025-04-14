"use client"
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const Page = () => {
    const [project, setProject] = useState<any>(null)

    const t = useTranslations("projects");
    useEffect(() => {
        const pro = localStorage.getItem("selectedProject")
        console.log(pro)
        if (pro) {

            setProject(JSON.parse(pro))
        }



    }, []);
    return (
        <main className='bg-black min-h-[100vh]'>
            <figure className='w-full max-sm:h-[50vh]'>
                <img className='object-cover h-[50vh]' src="/images/rectangelImage.svg" alt="" />
            </figure>
            <section className='flex  flex-wrap my-5 justify-between items-center gap-y-10'>
                <aside className=" md:w-[30%] w-full text-white px-5 md:ps-10 ">
                    <p className="font-bold text-[23px]  ">
                        {project?.title}
                    </p>
                    <p className="font-normal text-[14px]  mb-3 ">
                        {project?.description}
                    </p>
                    <div className='hidden md:block'>

                        <RowLine name={t('location')} value={project?.location} name2={t('scope')} value2={project?.scope} />
                        <RowLine name={t('area')} value={project?.area} name2={t('status')} value2={project?.status} />
                    </div>

                    <section className="mt-5 block  md:hidden ">
                        <RowLine2 name={t('location')} value={project?.location} />
                        <RowLine2 name={t('area')} value={project?.area} />
                        <RowLine2 name={t('scope')} value={project?.scope} />
                        <RowLine2 name={t('status')} value={project?.status} />

                    </section>

                </aside>
                <figure className='md:w-[33%] w-full '>
                    <img src="/images/Rectangle -img.svg" className='w-full' alt="" />
                </figure>

                <figure className='md:w-[33%] w-full'>
                    <img src="/images/Rectangle -img.svg" className='w-full' alt="" />
                </figure>


            </section>
            <section className='flex flex-wrap px-5 md:px-10 my-5 justify-between items-center gap-y-10'>

                <figure className='md:w-[25%] w-full'>
                    <img src="/images/square-img.svg" className='w-full' alt="" />
                </figure>

                <figure className='md:w-[25%] w-full'>
                    <img src="/images/square-img.svg" className='w-full' alt="" />
                </figure>

                <p className='md:w-[45%] w-full text-white'>
                   {t('description')}

                </p>


            </section>
            <Footer />
        </main>
    );
}

export default Page;
const RowLine = ({ name, value, name2, value2 }: any) => {
    return (
        <>
            <main className='w-full flex gap-x-5'>

                <div className=" flex justify-between my-[8px] text-[14px] w-[40%]" >
                    <p className="text-white  md:text-start"> {name}
                    </p>
                    <p className=" md:text-start text-[#BE7B2C]">
                        {value}
                    </p>

                </div>
                <div className=" flex justify-between my-[8px] text-[14px] w-[60%]" >
                    <p className="text-white  md:text-start"> {name2}
                    </p>
                    <p className=" md:text-center text-[#BE7B2C]">
                        {value2}
                    </p>

                </div>


            </main>
            <div className="h-[1px] gradient-gold-line w-full"></div>
        </>
    )
}


const RowLine2 = ({ name, value }: any) => {
    return (
        <>
            <div className="h-[1px] gradient-gold-line w-full"></div>
            <div className=" flex justify-between my-[8px] text-[14px]" >
                <p className="text-white  md:text-start"> {name}
                </p>
                <p className="text-white md:text-start">
                    {value}
                </p>

            </div>

        </>
    )
}