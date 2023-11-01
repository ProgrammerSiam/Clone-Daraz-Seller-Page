import React from "react";
import icon1 from "../Assets/icon/icon-1.png";
import icon2 from "../Assets/icon/icon-2.png";
import icon3 from "../Assets/icon/icon-3.png";
import icon4 from "../Assets/icon/icon-4.png";
import icon5 from "../Assets/icon/icon-5.png";
import icon6 from "../Assets/icon/icon-6.png";

export default function SellDaraz() {
  return (
    <section>
      <div className="container">
        {/* Title section */}
        <div className="mt-12 md:mt-36 lg:mt-8">
          <h2 className="text-5xl text-center md:text-start lg:text-6xl font-medium">
            Why Sell on Daraz?
          </h2>
        </div>

        {/* Content section */}
        <div className="grid items-start grid-cols-1 gap-10 py-5 mt-9 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {/* Card 1 - Reach */}
          <div className="flex p-5 w-96">
            {/* Icon */}
            <div className="">
              <img className="mr-20 w-[55px]" src={icon1} alt="Icon 1" />
            </div>

            {/* Description */}
            <div className="">
              <h2 className="sub_text leading-24">Reach</h2>
              <p className="mt-5 text-sm leading-5">
                Millions of customers{" "}
                <span className="text-xs text-slate-600">
                  on Daraz, Bangladesh's most visited shopping destination
                </span>
              </p>
            </div>
          </div>

          {/* Card 2 - Free Registration */}
          <div className="flex p-5 w-96">
            {/* Icon */}
            <div className="">
              <img className="mr-20 w-[55px]" src={icon2} alt="Icon 2" />
            </div>

            {/* Description */}
            <div className="">
              <h2 className="sub_text leading-24">Free Registration</h2>
              <p className="mt-5 text-sm leading-5">
                <span className="text-slate-600">
                  Account registration & listing items for sale is more
                  important
                </span>{" "}
                free
              </p>
            </div>
          </div>

          {/* Card 3 - Reliable Shipping */}
          <div className="flex p-5 w-96">
            {/* Icon */}
            <div className="">
              <img className="mr-20 w-[55px]" src={icon3} alt="Icon 3" />
            </div>

            {/* Description */}
            <div className="">
              <h2 className="sub_text leading-24">Reliable Shipping</h2>
              <p className="mt-5 text-sm leading-5 text-slate-600">
                Fast, reliable and hassle-free{" "}
                <span className="text-xs">
                  delivery through Daraz logistic network
                </span>
              </p>
            </div>
          </div>

          {/* Card 4 - Timely Payments */}
          <div className="flex p-5 w-96">
            {/* Icon */}
            <div className="">
              <img className="mr-20 w-[55px]" src={icon4} alt="Icon 4" />
            </div>

            {/* Description */}
            <div className="">
              <h2 className="sub_text leading-24">Timely Payments</h2>
              <p className="mt-5 text-sm leading-5 ">
                <span className="text-slate-600">
                  Funds are safely deposited directly to your bank account on a
                </span>{" "}
                weekly basis
              </p>
            </div>
          </div>

          {/* Card 5 - Marketing Tools */}
          <div className="flex p-5 w-96">
            {/* Icon */}
            <div className="">
              <img className="mr-20 w-[55px]" src={icon5} alt="Icon 5" />
            </div>

            {/* Description */}
            <div className="">
              <h2 className="sub_text leading-24">Marketing Tools</h2>
              <p className="mt-5 text-sm leading-5">
                <span className="text-slate-600">
                  Find new customers & grow more with advertising and our whole
                  range of
                </span>{" "}
                marketing tools
              </p>
            </div>
          </div>

          {/* Card 6 - Support & Training */}
          <div className="flex p-5 w-96">
            {/* Icon */}
            <div className="">
              <img className="mr-20 w-[55px]" src={icon6} alt="Icon 6" />
            </div>

            {/* Description */}
            <div className="">
              <h2 className="sub_text leading-24">Support & Training</h2>
              <p className="mt-5 text-sm leading-5 text-slate-600">
                <span className="text-xs text-slate-600">
                  {" "}
                  Learn all about ecommerce for free and get help with
                </span>{" "}
                seller support and Daraz University
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
