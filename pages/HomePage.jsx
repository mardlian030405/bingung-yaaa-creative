import React from "react";
import icon from "../public/assets/reactjs.png";
import icon1 from "../public/assets/pyhton.png";
import icon2 from "../public/assets/js.png";
import icon3 from "../public/assets/laravel.png";
import icon4 from "../public/assets/php.png";
import project1 from "../public/assets/project 1.png";
import project2 from "../public/assets/project 2.png";
import project3 from "../public/assets/project 3.png";

const HomePage = () => {
  return (
    <div className="pt-16">
      <section
        style={{
          backgroundImage: "url('/assets/bgroket.jpg')",
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
      <section className="bg-black h-full pt-16">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 gap-4 md:grid-cols-3 max-sm:px-6">
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <img alt="" src={project1} className="h-72 w-full object-cover" />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-bold text-gray-900">
                  Project sistem pakar mental health checker
                </h3>
              </a>
              <a
                href="https://mental-health-test-expert-system.vercel.app/"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                View website
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <img alt="" src={project2} className="h-72 w-full object-cover" />

            <div className="p-4 sm:p-6">
              <a href="https://game-pinball-football-uas-adpl.vercel.app/">
                <h3 className="text-lg font-medium text-gray-900">
                  Project Website game pinball
                </h3>
              </a>
              <a
                href="https://game-pinball-football-uas-adpl.vercel.app/"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                View website
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <img alt="" src={project3} className="h-72 w-full object-cover" />

            <div className="p-4 sm:p-6">
              <a href="https://kelfast-fc.vercel.app/">
                <h3 className="text-lg font-medium text-gray-900">
                  Project website profile futsal team
                </h3>
              </a>
              <a
                href="https://kelfast-fc.vercel.app/"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                View website
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-black">
        <div className="space-y-4 mx-auto max-w-screen-xl max-sm:px-8 py-12">
          <h1 className="text-3xl text-center font-extrabold text-white sm:text-5xl">
            LAYANAN YANG KAMI BERIKAN
            <strong className="font-extrabold text-white sm:block">
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
              2.Pengembangan Strategi Digital: Bersama-sama, kami akan
              merumuskan strategi digital yang tepat untuk menumbuhkan bisnis
              Anda secara online.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700 text-justify">
              3.Riset Keyword Komprehensif: Kami akan mengidentifikasi kata
              kunci yang relevan untuk meningkatkan visibilitas website Anda di
              mesin pencari.
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
              yang tidak hanya indah, tetapi juga mudah dinavigasi dan
              memberikan pengalaman pengguna yang luar biasa.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Custom Design: Desain website akan disesuaikan dengan identitas
              merek Anda, sehingga memberikan kesan yang unik dan profesional.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              {" "}
              Responsif di Semua Perangkat: Website Anda akan terlihat sempurna
              di berbagai perangkat, mulai dari desktop hingga smartphone.
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
      </section>
      <div className="bg-black bg-opacity-5 items-center justify-center w-full h-fit px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              Cari solusi cepat untuk proyek coding Anda?
            </h2>

            <p className="mt-4 text-white text-justify">
              "Kami menyediakan source code berkualitas dengan harga terjangkau,
              mulai dari hanya 30 ribu! 💻✨ ✅ Beragam pilihan source code siap
              pakai ✅ Mudah untuk di-custom sesuai kebutuhan ✅ Cocok untuk
              belajar atau mempercepat proyek Anda 💬 Ayo cek koleksi kami
              sekarang! Jangan lewatkan kesempatan ini untuk mendapatkan source
              code terbaik dengan harga hemat! 🎯"
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Cek Sekarang
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

              <h2 className="mt-2 font-bold">React JS</h2>

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

              <h2 className="mt-2 font-bold">Pyhton</h2>

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

              <h2 className="mt-2 font-bold">Javascript</h2>

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

              <h2 className="mt-2 font-bold">Laravel</h2>

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

              <h2 className="mt-2 font-bold">PHP</h2>

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
