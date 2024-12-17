// @flow strict

import { researches } from "@/utils/data/research";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import {BsBookmarks} from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from "/public/lottie/reasearch_fotor.json";
import ExpandingList from "../../Expandable/ExpandingList";

function Research() {
  return (
    <div
      id="research"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Research
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
      <div className="flex justify-center items-start">
        {/* to make it back to its original self uncomment line 39  and remove line 37 as it was copied from line 40 */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">  */}
          {/* <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div> */}

          <div>
            <div className="flex flex-col gap-6">
              {researches.map((researches,key) => (
                // old experience glow card

                // <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                //   <div className="p-3 relative">
                //     <Image
                //       src="/blur-23.svg"
                //       alt="Hero"
                //       width={1080}
                //       height={200}
                //       className="absolute bottom-0 opacity-80"
                //     />
                //     <div className="flex justify-center">
                //       <p className="text-xs sm:text-sm text-[#f1ff34]">
                //         {experience.duration}
                //       </p>
                //     </div>
                //     <div className="flex items-center gap-x-8 px-3 py-5">
                //       <div className="text-pink-500  transition-all duration-300 hover:scale-925">
                //         <BsPersonWorkspace size={36} />
                //       </div>
                //       <div>
                //         <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                //           {experience.title}
                //         </p>
                //         <p className="text-sm sm:text-base">
                //           {experience.company}
                //         </p>
                //       </div>
                //     </div>
                //   </div>
                // </GlowCard>

                // new experience glow card

                <div key={experience.id} className="relative group">
                  <GlowCard
                    identifier={`experience-${experience.id}`}
                  >
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#f1ff34]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-pink-500 transition-all duration-300 hover:scale-925">
                          {/* <BsPersonWorkspace size={36} /> */}
                          <BsBookmarks size={36}/>
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {researches.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            <p>{researches.company}</p>
                          </p>
                          <p className="text-sm sm:text-base py-2 pl-4">
                            <ExpandingList items={researches.description} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
