import React from "react";
import Image from "next/image";
import contact from "../assets/contact.jpg";
import Link from "next/link";
export default function ContactPage() {
  return (
    <section>
      <Image
        src={contact}
        alt="My Image"
        width={500}
        height={300}
        className="w-full h-screen object-cover"
      />
      <form action="" className="flex justify-center items-center p-10">
        <div className="flex w-[35%] flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl mb-2">Contact Me.</h2>
            <p className="w-[250px]">
              Write me an e-mail via the form, or just send us an e-mail
              directly at{" "}
              <Link href="#" className="text-[#e09a0e]  transition-all group">
                danilo@pelzer.com
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Telephone:</p>
            <div>
              <p>1-408-555-5555</p>
              <p>1-408-555-2259</p>
            </div>
          </div>
        </div>
        <div className="w-[65%] p-4">
          <div className="flex gap-4 w-full">
            <div className="flex w-full">
              <span className="text-gray-500 border-b-orange-400 border-b-[1px]">
                Name.
              </span>
              <input
                type="text"
                placeholder=""
                className="w-full pl-1  text-sm text-gray-600 outline-none border-b-gray-300 border-b-[1px] transition-all  focus:border-b-orange-400 "
              />
            </div>
            <div className="flex w-full">
              <span className="text-gray-500 border-b-orange-400 border-b-[1px]">
                Email.
              </span>
              <input
                type="text"
                placeholder=""
                className="w-full text-sm pl-1  text-gray-600 outline-none border-b-gray-300 border-b-[1px] transition-all  focus:border-b-orange-400 "
              />
            </div>
          </div>

          <div className="flex w-full flex-col mt-4">
            <div className="flex w-full">
              <span className=" pb-1 z-100 border-b-orange-400 text-gray-500 border-b-[1px]">
                Message.
              </span>

              <span className="text-gray-500  w-full  border-b-gray-300 border-b-[1px]"></span>
            </div>
            <textarea
              className="w-full text-sm  -mx-2 px-2 text-lg bg-[length:100%_31px] bg-transparent bg-[linear-gradient(to_right,_white_10px,_transparent_10px),linear-gradient(to_left,_white_10px,_transparent_10px),repeating-linear-gradient(white,_white_30px,#ccc_30px,#ccc_31px,white_31px)] leading-[31px] rounded-md shadow-sm outline-none p-0 border-none resize-none align-top text-gray-500  "
              rows={5}
            />
          </div>
          <div className="mt-6 flex gap-2 items-center">
            <input type="checkbox" className="mt-1" />{" "}
            <span>
               I’ve read and accept the{" "}
              <Link href="#" className="text-[#e09a0e]  transition-all group">
                terms & conditions
              </Link>{" "}
              *
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}
