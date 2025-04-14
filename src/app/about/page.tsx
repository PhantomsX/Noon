import React from "react";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl";
import ceo from "@/public/ceoimage.svg";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const AboutPage = () => {
  const t = useTranslations();
  return (
    <main className="flex-1 main-bg-gradient flex-col flex">
      <section className="flex max-lg:flex-col max-lg:items-center max-lg:gap-6 pt-12 sm:pt-28 md:ps-[88px] max-sm:gap-16 px-9">
        <div className="max-w-[340px] w-full text-white space-y-2.5">
          <h2 className="text-bg capitalize text-5xl tracking-tighter sm:max-w-[5ch] pb-2 font-medium shrink-0">
            {t("about")}
          </h2>
          <p className="text-justify">{t("aboutText1")}</p>
          <div className="flex items-center gap-5 before:content-['/01'] before:text-bg before:text-3xl before:font-medium after:w-full after:block after:h-px after:bg-linearGradient after:content-[''] mt-10" />

          <p className="text-justify">{t("aboutText2")}</p>

          <div className="flex items-center gap-5 before:content-['/02'] before:text-bg before:text-3xl before:font-medium after:w-full after:block after:h-px after:bg-linearGradient after:content-[''] mt-10" />

          <p className="text-justify">{t("aboutText3")}</p>
        </div>
        <div className=" ltr:border-l rtl:border-r border-bg lg:ms-[100px] flex-1 md:pe-[100px] xl:pe-[80px]  ">
          <div className="border-b w-full  border-bg flex flex-wrap items-center gap-y-6 ">
          <h3 className="text-bg italic capitalize mb-4 text-[24px]  ps-[10px]  font-medium shrink-0  lg:hidden  ">
                {t("Notes From The CEO")}
              </h3>
            <div className="relative max-w-[420px] ms-14">
              <Image
                src={ceo}
                alt="ceo"
                priority
                className="object-cover h-full"
              />
            </div>
            <div className="flex-1 text-white max-md:ps-10  md:ps-[85px] max-md:pb-4 ">
              <h3 className="text-bg italic capitalize mb-4 text-4xl tracking-tighter rtl:ps-1.5 pb-2 font-medium shrink-0 hidden lg:block">
                {t("Notes From The CEO")}
              </h3>
              <p className="italic">{t("aboutText4")}</p>
              <p className="italic">{t("aboutText5")}</p>
              <div className="mt-4">
                <p style={greatVibes.style} className="text-2xl">
                  Dr.nizar el sayed
                </p>
                <p className="uppercase">{t("CHAIRMAN")}</p>
              </div>
            </div>
          </div>
          <div className="max-md:ps-10 md:ps-[100px] pt-10 md:pt-[78px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 md:gap-14 *:[&_svg]:shrink-0 text-white">
            <div className="flex gap-8">
              <svg
                width="53"
                height="45"
                viewBox="0 0 53 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.2999 42.4904C51.916 41.9012 51.5476 41.3011 51.1471 40.7234C47.4372 35.382 43.7126 30.0508 40.0181 24.699C39.409 23.8171 38.3955 23.8653 37.7864 24.5058C36.8962 25.4423 35.9648 26.3403 35.0508 27.2542C34.9687 27.3358 34.8827 27.4128 34.7787 27.511C34.6811 27.4192 34.5964 27.3422 34.5155 27.2613C30.6035 23.3473 26.6927 19.432 22.7781 15.5213C22.6227 15.3659 22.5509 15.2106 22.5534 14.9892C22.5637 14.0174 22.5579 13.045 22.5579 12.0726C22.5579 11.977 22.5579 11.882 22.5579 11.7465C22.7222 11.7376 22.866 11.7228 23.0098 11.7228C26.8448 11.7215 30.6805 11.7215 34.5155 11.7228C34.9077 11.7228 35.2858 11.6715 35.6022 11.4179C35.9315 11.1535 36.0861 10.7947 36.0868 10.3794C36.0906 7.67659 36.0945 4.97377 36.0855 2.27094C36.0829 1.55143 35.5098 1.00329 34.7851 1.00265C30.2768 0.998802 25.7684 0.999444 21.2601 1.00265C20.572 1.00265 20.0663 1.4558 19.9738 2.14001C19.9494 2.31908 19.9398 2.50137 19.9398 2.68237C19.9379 6.80624 19.9366 10.9295 19.9424 15.0533C19.9424 15.3114 19.8801 15.5213 19.7306 15.7337C13.6106 24.4462 7.49631 33.1618 1.3795 41.8762C1.17411 42.1682 0.995033 42.4615 1.00017 42.8396C1.01044 43.5347 1.56371 44.1002 2.26076 44.1105C2.37822 44.1124 2.49567 44.1105 2.61313 44.1105C18.6484 44.1105 34.6837 44.1066 50.719 44.122C51.4738 44.1227 51.9937 43.8826 52.3011 43.1971C52.3011 42.9622 52.3011 42.7273 52.3011 42.4917L52.2999 42.4904ZM21.4174 17.8492C21.5393 17.968 21.6381 18.0611 21.7338 18.1567C25.7158 22.1349 29.6978 26.1137 33.6805 30.0919C33.771 30.1824 33.8609 30.2748 33.9597 30.3557C34.4353 30.742 35.0662 30.7555 35.5585 30.389C35.6689 30.3062 35.7697 30.2087 35.8679 30.1111C36.7152 29.2664 37.5605 28.4198 38.4064 27.5739C38.4867 27.4937 38.5701 27.4173 38.6683 27.3242C41.9584 32.0578 45.2273 36.7613 48.5213 41.5001H4.81274C10.3577 33.6015 15.8763 25.742 21.4174 17.8492ZM22.5874 9.09186V3.60856H33.461V9.09122L22.5874 9.09186Z"
                  fill="url(#paint0_linear_2_588)"
                  stroke="url(#paint1_linear_2_588)"
                  strokeWidth="1.40033"
                  strokeLinejoin="bevel"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_588"
                    x1="1.00006"
                    y1="22.561"
                    x2="52.3011"
                    y2="22.561"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_588"
                    x1="1.00006"
                    y1="22.561"
                    x2="52.3011"
                    y2="22.561"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <h4 className="text-xl font-medium">{t("OUR MISSION")}</h4>
                <p className="text-xs text-justify">{t("OUR MISSION TEXT")}</p>
              </div>
            </div>
            <div className="flex gap-8">
              <svg
                width="52"
                height="45"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.3788 11.2484L46.5939 6.21059L49.1132 7.81838L45.898 12.8562L43.3788 11.2484Z"
                  fill="url(#paint0_linear_2_593)"
                />
                <path
                  d="M34.2374 7.1983L36.1538 1.54469L38.9839 2.50398L37.0675 8.1576L34.2374 7.1983Z"
                  fill="url(#paint1_linear_2_593)"
                />
                <path
                  d="M24.3049 0H27.2934V5.9769H24.3049V0Z"
                  fill="url(#paint2_linear_2_593)"
                />
                <path
                  d="M12.624 2.48848L15.4541 1.52919L17.3705 7.1828L14.5404 8.1421L12.624 2.48848Z"
                  fill="url(#paint3_linear_2_593)"
                />
                <path
                  d="M2.48389 7.82393L5.00315 6.21614L8.21829 11.254L5.69903 12.8618L2.48389 7.82393Z"
                  fill="url(#paint4_linear_2_593)"
                />
                <path
                  d="M50.5153 24.8466L51.301 23.8744L50.4828 22.9293C50.3723 22.8017 47.7259 19.7677 43.3887 16.7094C37.5903 12.6206 31.5079 10.4594 25.7992 10.4594C20.0899 10.4594 14.0124 12.6209 8.22351 16.7102C3.89344 19.7688 1.25424 22.8033 1.14397 22.9309L0.301025 23.9074L1.14397 24.8839C1.25424 25.0115 3.89344 28.0459 8.22351 31.1047C14.0123 35.194 20.0899 37.3555 25.7992 37.3555C28.6525 37.3555 31.595 36.8267 34.5664 35.7852C34.763 36.1373 35.0096 36.4687 35.3084 36.7676L42.7044 44.1637L49.0438 37.8242L42.8223 31.6026C47.6282 28.3839 50.3884 25.0036 50.5153 24.8466ZM31.0821 26.2019C28.1691 29.1149 23.4292 29.1149 20.5163 26.2019C19.1052 24.7907 18.3281 22.9146 18.3281 20.919C18.3281 18.9234 19.1052 17.0473 20.5163 15.6361C21.9728 14.1796 23.886 13.4513 25.7992 13.4513C27.7124 13.4513 29.6256 14.1796 31.0821 15.6361C32.4932 17.0473 33.2703 18.9234 33.2703 20.919C33.2703 22.9146 32.4932 24.7907 31.0821 26.2019ZM10.0097 28.7075C7.39063 26.8647 5.40789 25.0017 4.32687 23.9074C5.40809 22.8129 7.39092 20.9499 10.0097 19.1073C11.8709 17.7977 14.26 16.3611 16.9974 15.2627C15.9185 16.9344 15.3396 18.8821 15.3396 20.9189C15.3396 23.7128 16.4276 26.3393 18.4032 28.3149C20.4423 30.3539 23.1206 31.3735 25.7992 31.3735C28.0065 31.3735 30.2134 30.6804 32.0629 29.2956L34.4336 31.6664C34.2627 32.0252 34.142 32.402 34.0718 32.7865C31.2493 33.8344 28.4705 34.3669 25.7992 34.3669C19.3969 34.367 13.679 31.2893 10.0097 28.7075ZM42.7044 39.9373L37.4216 34.6544C36.8389 34.0719 36.8389 33.1238 37.4216 32.5412C38.0055 31.9573 38.9507 31.9572 39.5347 32.5412L44.8176 37.8241L42.7044 39.9373ZM40.4598 29.5758C39.2071 28.9571 37.7514 28.9739 36.5448 29.5514L34.1769 27.1837C35.5277 25.3851 36.2587 23.2083 36.2587 20.919C36.2587 18.8811 35.6792 16.9325 34.5992 15.2603C37.3427 16.3592 39.7382 17.7973 41.6046 19.1082C44.2481 20.9649 46.2459 22.8423 47.3242 23.9332C46.1324 25.1907 43.7554 27.4753 40.4598 29.5758Z"
                  fill="url(#paint5_linear_2_593)"
                />
                <path
                  d="M25.7993 16.4364C23.3276 16.4364 21.3167 18.4474 21.3167 20.9191C21.3167 23.3909 23.3276 25.4018 25.7993 25.4018C28.2711 25.4018 30.282 23.3909 30.282 20.9191C30.282 18.4474 28.2711 16.4364 25.7993 16.4364ZM25.7993 22.4133C24.9754 22.4133 24.3051 21.743 24.3051 20.9191C24.3051 20.0952 24.9754 19.4249 25.7993 19.4249C26.6232 19.4249 27.2936 20.0952 27.2936 20.9191C27.2936 21.743 26.6232 22.4133 25.7993 22.4133Z"
                  fill="url(#paint6_linear_2_593)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_593"
                    x1="47.8536"
                    y1="7.01448"
                    x2="44.6384"
                    y2="12.0523"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_593"
                    x1="37.5688"
                    y1="2.02433"
                    x2="35.6525"
                    y2="7.67795"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2_593"
                    x1="27.2934"
                    y1="2.98845"
                    x2="24.3049"
                    y2="2.98845"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2_593"
                    x1="16.4123"
                    y1="4.356"
                    x2="13.5822"
                    y2="5.31529"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2_593"
                    x1="6.61072"
                    y1="8.73507"
                    x2="4.09146"
                    y2="10.3429"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_2_593"
                    x1="51.301"
                    y1="27.3115"
                    x2="0.301025"
                    y2="27.3115"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_2_593"
                    x1="30.282"
                    y1="20.9191"
                    x2="21.3167"
                    y2="20.9191"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                </defs>
              </svg>

              <div>
                <h4 className="text-xl font-medium">{t("OUR VISION")}</h4>
                <p className="text-xs text-justify">{t("OUR VISION TEXT")}</p>
              </div>
            </div>{" "}
            <div className="flex gap-8">
              <svg
                width="52"
                height="51"
                viewBox="0 0 52 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.4612 17.8278C35.7014 20.0681 39.3335 20.0681 41.5739 17.8278C43.814 15.5876 43.814 11.9554 41.5739 9.71514C39.3335 7.47488 35.7014 7.47488 33.4612 9.71514C31.2208 11.9554 31.2208 15.5876 33.4612 17.8278ZM35.4894 15.7997C36.6095 16.9198 38.4256 16.9198 39.5457 15.7997C40.6658 14.6795 40.6658 12.8634 39.5457 11.7433C38.4256 10.6232 36.6095 10.6232 35.4894 11.7433C34.3691 12.8634 34.3691 14.6795 35.4894 15.7997Z"
                  fill="url(#paint0_linear_2_605)"
                />
                <path
                  d="M27.5463 33.161C27.8464 33.8942 28.6535 34.3035 29.405 34.0531C30.1565 33.8027 30.5666 32.9875 30.2726 32.2521C28.1395 26.9162 24.3726 23.1496 19.0368 21.0162C18.3013 20.7222 17.4864 21.1327 17.236 21.8839C16.9855 22.6354 17.3948 23.4425 18.1279 23.7425C22.5977 25.5713 25.7175 28.6911 27.5463 33.161Z"
                  fill="url(#paint1_linear_2_605)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.6929 0.88831C41.5806 0.0206014 45.2425 -0.051335 47.4967 0.0214329C49.5716 0.0884069 51.2007 1.71767 51.2676 3.79252C51.3404 6.04649 51.2684 9.70855 50.4008 13.5962C49.5351 17.4747 47.8518 21.6908 44.6164 24.9262L44.5524 24.9901C41.9374 27.6051 39.8834 29.6591 38.1851 31.1297L38.8669 37.266C38.9633 38.132 38.6607 38.9947 38.0446 39.6108L31.957 45.6982C30.501 47.1544 28.0306 46.6473 27.2656 44.7353L24.4458 37.6857L15.3959 39.1938C13.4547 39.5173 11.7716 37.8345 12.0952 35.893L13.6035 26.843L6.55376 24.0232C4.64189 23.2586 4.13478 20.7881 5.59083 19.3319L11.6782 13.2446C12.2944 12.6284 13.1571 12.3258 14.0232 12.422L20.1592 13.1038C21.6301 11.4055 23.6837 9.35168 26.299 6.73642L26.3627 6.67266C29.5981 3.43725 33.8145 1.75401 37.6929 0.88831ZM38.3176 3.68771C34.7383 4.48664 31.1019 5.98987 28.3909 8.70084C25.3838 11.708 23.2587 13.8354 21.8681 15.525L21.3745 16.1247L13.7064 15.2728L7.61901 21.36L14.6687 24.1801C15.9202 24.6806 16.6543 25.9851 16.4327 27.3146L14.9244 36.3645L23.9743 34.8564C25.304 34.6347 26.6085 35.3687 27.109 36.6204L29.9288 43.67L36.0161 37.5827L35.1643 29.9147L35.764 29.421C37.4537 28.0302 39.5811 25.9051 42.5882 22.898C45.2993 20.1872 46.8025 16.5507 47.6014 12.9713C48.3982 9.40098 48.469 5.99956 48.401 3.88505C48.3827 3.32169 47.9673 2.90639 47.404 2.88821C45.2895 2.81994 41.8881 2.89079 38.3176 3.68771Z"
                  fill="url(#paint2_linear_2_605)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9183 50.4466C14.3583 49.8868 14.3583 48.9787 14.9183 48.4185L21.0027 42.334C21.5629 41.7742 22.471 41.7742 23.0309 42.334C23.5911 42.8942 23.5911 43.8023 23.0309 44.3622L16.9465 50.4466C16.3864 51.0068 15.4784 51.0068 14.9183 50.4466Z"
                  fill="url(#paint3_linear_2_605)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.72113 36.2497C0.161072 35.6898 0.161072 34.7817 0.72113 34.2216L6.80564 28.1371C7.36573 27.5772 8.27377 27.5772 8.83382 28.1371C9.39388 28.6973 9.39388 29.6054 8.83382 30.1653L2.74931 36.2497C2.18925 36.8099 1.28119 36.8099 0.72113 36.2497Z"
                  fill="url(#paint4_linear_2_605)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75769 47.3992C3.19763 46.8393 3.19763 45.9312 3.75769 45.371L9.8422 39.2866C10.4023 38.7267 11.3103 38.7267 11.8704 39.2866C12.4304 39.8468 12.4304 40.7548 11.8704 41.3147L5.78587 47.3992C5.22578 47.9594 4.31775 47.9594 3.75769 47.3992Z"
                  fill="url(#paint5_linear_2_605)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_605"
                    x1="43.2539"
                    y1="13.7715"
                    x2="31.7809"
                    y2="13.7715"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_605"
                    x1="30.3683"
                    y1="27.5237"
                    x2="17.1622"
                    y2="27.5237"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2_605"
                    x1="51.289"
                    y1="23.2696"
                    x2="4.74988"
                    y2="23.2696"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2_605"
                    x1="23.451"
                    y1="46.3904"
                    x2="14.4983"
                    y2="46.3904"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2_605"
                    x1="9.25387"
                    y1="32.1935"
                    x2="0.301086"
                    y2="32.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_2_605"
                    x1="12.2904"
                    y1="43.343"
                    x2="3.33765"
                    y2="43.343"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                </defs>
              </svg>

              <div>
                <h4 className="text-xl font-medium">{t("FUTURE REACH")}</h4>
                <p className="text-xs text-justify">{t("FUTURE REACH TEXT")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
