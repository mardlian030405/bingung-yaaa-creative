import React from "react";
import icon from "../src/assets/reactjs.png";
import icon1 from "../src/assets/pyhton.png";
import icon2 from "../src/assets/js.png";
import icon3 from "../src/assets/laravel.png";
import icon4 from "../src/assets/php.png";

const HomePage = () => {
  return (
    <div className="pt-16">
      <section
        style={{
          backgroundImage: "url('/src/assets/bgroket.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "70vh",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-600 lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              BINGUNG YAAA
              <strong className="font-extrabold text-white sm:block">
                {" "}
                CREATIVE.{" "}
              </strong>
            </h1>

            <p className="mt-4 text-xl font-thin sm:text-xl/relaxed text-white">
              "Lebih dari sekadar website, kami bangun bisnis Anda di dunia
              digital." Tingkatkan Bisnis Anda dengan Website Profesional!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Order Now
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-white shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="space-y-4 mx-auto max-w-screen-xl py-12">
        <h1 className="text-3xl text-center font-extrabold text-black sm:text-5xl">
          LAYANAN YANG KAMI BERIKAN
          <strong className="font-extrabold text-indigo-950 sm:block">
            {" "}
            UNTUK ANDA{" "}
          </strong>
        </h1>
        <details className="group border-s-4 border-indigo-950 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Konsultasi Mendalam dan Strategi Jitu:
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700 text-justify">
            1.Analisis Bisnis Mendalam: Kami akan menggali lebih dalam tentang
            bisnis Anda, target pasar, dan tujuan yang ingin Anda capai.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700 text-justify">
            2.Pengembangan Strategi Digital: Bersama-sama, kami akan merumuskan
            strategi digital yang tepat untuk menumbuhkan bisnis Anda secara
            online.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700 text-justify">
            3.Riset Keyword Komprehensif: Kami akan mengidentifikasi kata kunci
            yang relevan untuk meningkatkan visibilitas website Anda di mesin
            pencari.
          </p>
        </details>
        <details className="group border-s-4 border-indigo-950 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Desain Website yang Memukau dan Responsif:
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            UI/UX Design yang Menarik: Kami akan menciptakan tampilan website
            yang tidak hanya indah, tetapi juga mudah dinavigasi dan memberikan
            pengalaman pengguna yang luar biasa.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Custom Design: Desain website akan disesuaikan dengan identitas
            merek Anda, sehingga memberikan kesan yang unik dan profesional.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            {" "}
            Responsif di Semua Perangkat: Website Anda akan terlihat sempurna di
            berbagai perangkat, mulai dari desktop hingga smartphone.
          </p>
        </details>
        <details className="group border-s-4 border-indigo-950 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Peluncuran dan Pemeliharaan Website:
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Testing Mendalam: Sebelum diluncurkan, website Anda akan melalui
            proses pengujian yang ketat untuk memastikan semuanya berjalan
            dengan baik.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Peluncuran yang Lancar: Kami akan meluncurkan website Anda sesuai
            dengan jadwal yang telah ditentukan.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Pemeliharaan Berkala: Kami akan melakukan pemeliharaan rutin untuk
            menjaga performa dan keamanan website Anda.
          </p>
        </details>
        <details className="group border-s-4 border-indigo-950 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Free Domain dan Hosting selama 1 tahun
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            untuk domain co.id, id, dan com dapat biaya tambahan
          </p>
        </details>
      </div>
      <div className="bg-black bg-opacity-5 items-center justify-center w-full h-fit px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find your career path
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
              aliquid sint distinctio iure ipsum cupiditate? Quis, odit
              assumenda? Deleniti quasi inventore, libero reiciendis minima
              aliquid tempora. Obcaecati, autem.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <img className="h-6 w-6" src={icon} alt="Icon" />
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <img className="h-6 w-6" src={icon1} alt="Icon" />
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <img className="h-6 w-6" src={icon2} alt="Icon" />
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <img className="h-6 w-6" src={icon3} alt="Icon" />
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <img className="h-6 w-6" src={icon4} alt="Icon" />
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
