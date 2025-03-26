import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
  <a href="https://youtu.be/eDqfg_LexCQ?si=GNcTjenjqreUYXTd" target="_blank" rel="noopener noreferrer" className="link flex items-center">
    Watch the film
    <img src={watchImg} alt="watch" className="ml-2" />
  </a>
  
  <a href="https://www.youtube.com/live/uarNiSl_uh4?si=_wMDg4I0Wm56ytec" target="_blank" rel="noopener noreferrer" className="link flex items-center">
    Watch the event
    <img src={rightImg} alt="right" className="ml-2" />
  </a>
</div>

        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights