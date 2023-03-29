import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./PopularCarSlide.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "@chakra-ui/react";

// import required modules
import { Pagination } from "swiper";

export default function PopularCarSlide() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            style={{ width: "250px", height: "100px" }}
            src="data:image/png;base64,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"
            alt="hello"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ width: "250px", height: "100px" }}
            src="data:image/png;base64,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"
            alt="alamo"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            style={{ width: "250px", height: "100px" }}
            src="data:image/jpeg;base64,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"
            alt="sixt"
          />
        </SwiperSlide> */}
        <SwiperSlide >
          <Image
            style={{ width: "250px", height: "100px" }}
            src="https://play-lh.googleusercontent.com/Xy7MGF7cG7jcJAs58rI0lR_WWxqrGvgF8ntUROt_iEMcrc1V9LHh6F9kgwU2QOQumhA=w240-h480-rw"
            alt="avis"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            style={{ width: "200px", height: "100px" }}
            src="https://cdn.cookielaw.org/logos/b7f28d27-6bb9-46d7-a7f4-c89ba7faf08f/f3656954-61b3-4e33-bc64-e9c8a9fbbb73/b63c19a8-9e4b-4054-b859-680b863b8dae/enterprise_logo.png"
            alt="enterprise"
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <Image
            style={{ width: "200px", height: "100px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxvMmyLAM7whJE0fiTd3ocmOaQ9WLXUiKqiNioXw2x0RM602TFexXh4_kwAPu_PMXrpw&usqp=CAU"
            alt="dolllar"
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image
            style={{ width: "200px", height: "100px" }}
            src="data:image/png;base64,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"
            alt="thirfty"
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABBVBMVEX///8JbTfSJzMElUYAazMAZysAajEAZSj6/fwAZCQAYyAAaCubvKisxrYAYh+QtZ4sgFFPj2ns8+/j7ee/08eXAADW5d0qe0vO3tQPcT7v9PEAbjTRHywAkj9IimKIsJexy7sAkTemw7FvoIJ9qY7jxcbhdXvQECLPABcAZR0AcjplmnoAXhSbDhtXkm7RGSjcYWg8hVq6aW2lJjDUpafx4eK2XmOaABKwT1Rvuoqt2r69fYCjNDv27Oze8OVJrG/mj5PtuLvjgYUpoVrctLaDw5rebHLpnJ/Ji4/Pmp0AWQCx2cDYTlbVsLLhwcLJ5tRGqWzcWWD12NntrrGXzavQAADZQkxcnxysAAAJJ0lEQVR4nO2aa2OayBqAQYfLoIEEEBEqKpiYqDW1l81Ju5um7fac3ew23abd/v+fsnNFUWOIMcnu2ffphyIMMPMwl3dmoigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPyzMc3HzsHj4nV2dctXnr94/vLVygSunzpOvRs8oicz8Ltp2vW9+8iDqdRtzWi6ivJD4+Sk8Z/9pRRBYmFD0zTDijs0B+Gw2Wy2nBXPCuQVs8loda97a9riKUpm0t+rkTwQsBWPgpI3lcU8fe3Yqp7Q4/2Xb34kFn74qZikO9ZVATKaREJoI4SMzoqn5VdMjCh457r31nmCWrlcTuw8CyrSx6v0b85Z9W1gq6jFKtj5l/N3+29OTk4KVcG1kDpDG5GSYnqw0oElrpg1ltq43gFPUM7BCKsF7PQ2ZbyBz73eWYJUO2S/DgbHg8H7q+eNxs9zaTpa4f2Wt84Bvg8HwbioQEXx9jqFs177g0tawh7/eXBcqVSOB+8+FSQ0WTVA2NZksfKvvcSt6wEuk01HfAXNskSTwOGtyrkGs9puf/SxanT5b+agUjl8f9loXOWJWGaRGnq8QpAShkdxHNdWOpBXyjqwyuRzwktuOF4wEodbawyn7Wr79Y6hWi7/ffCEOagMDj41XshEpJ7QktfJYYvWCK1PYwnzmnBCXtmqgz1WcDSkueE9Q21bveJZr8odxOLEf4WDyuB/bxq/iJPcgeGTw4Q60Ptlnn0fDnbJYcQdaNtyQKpBtf3Nx6glTuQOKof7TxtihIysvPIlNhmg7UzxfApvkkF9lEyTrO6xX/mVmQN+yqfX+ZFvFh342bS122djfpgnEHeF6x146ShptppJlvLXR2FAoT9Mf1VbXSQi1aDaPo0stFQPKk++fGr8Ks7G9OujKS3DTrfb3QmVzhhjbFNz0WSs6TrSdWM8okXLr8wcOPQUHtM+4oIe4Qu34GDP1kmcoI1ZY7NZAlKGHXaXPV3nIBodGTqLMnTjaBSRM+mFZZG7SLDTje0yQ85v1EG1Svp9K1p0UDm8evqjSMdzMB8SsX6aZskczsZNrVm4kjuoazLTJs+/Ne8ATeQTxqEcgsjoq3QNeiQGrDkH7oWFyT+q1I3nB21tSAqxw+5CCVGI8i+7DtoUqtXeWd2QI82zmYNj0iOIxpCyB6v2rB/IS5rN5wI7GzhQdV0Md/qkjAMl4JBnJPxGXeMhnDaZOXDHNIYo4eADqwbtj5Ele5g5B09+/9S45GfNGn+JMXUXHJhH/O2YFQ41N3FQy0RNoL1SCQc5Hg+cjMzZ5fnDkXQwpYNpKQe8KVTbykibLjmoHO83XoqEXVt8KatbdBCw7pIMlj4rUC26vQOL9IWZvsIBvskBC0n5c2NeUQPhQEXsMS3lRkzhoPc6sG1vycHgMh8dlb4M10V7kCVlUaGKPTFqbuKAfiye4rb1wKfTM8SifH4bzh2w1HoJB5FwUP2gTLGz7ODnmQOlL2qCiicFB6xQ2BWR3MM6YBP45tCTNaLgQLebyV75elDtffbt5noHSjoWc0cjW+kgscmYdHFfDpJVDmQxwr6lLjowRu6qtMsIBdX2WyW2gyUHl3l/QAlaYggY+6scBCHl9n0iupuDsDO1saEtOtAn5Qwoyh9tWRHMDPcXHXzPxwWBmMPP9/4zB5LtOcA3O0hjTMZFO0m1BQe49ELTx/asMeDWgoPj8zeNhaXFDi8C6YUewsE19cBl8SOmK0kjm6YmY1VgLDiwS68ufJYdQvubZ7GR4cvxqjgxh09hSWm25+DW/cEsVk7z+Wy45KCsAkWR9aB9atbYBO/975VDruHJs3y+ECUTQkIau4dFY/tbOMgHxDs5kI2BdIo1TUTCr84PeTV4IUNld0zCWd3uKiKLZPa07CCbEnYfYFzIHUR8uKZp7+JARgikHmB9JM9eEQmHX39ZXD+gDvaudTDRSLxibRInmnLBslyfmDvw+IiI/bs5UL71RH8Q4rnh5Ovg8Pyy8VT+nFtH4vUgWYwTZYyE1znoy7ak8lmqnDc20zoPPWYOaP3mS4jFGKk156AeiNhVr6ctdAcHygc+dfzc0XhbePWVLiP+eb4/t57I11BQyzNF/RwtzBesMrGyqvv+FC3XAxUZ8iB3gPbClJ8UDsR6Iv3m4jYjlQ5UzRDh24YOXLGEECO2TnR1OPjzHfmvuK4ci3Xl2BDVcMGBnnldPmcyVzkQU28VY5HXooMc6kBYQliEPcJBX0ZBrVg+zPfshfs3dcCWFHu/1Q2VjY0Hx5Un3xWFKJgPESd64VVz8YHJ26Ru8ynr6rmzt7g5UFxDKTjoGMWkwoEvy4tkchyZC9subAq6kQPlrNp7Sz4nf9n5oHL8TFF+bRT2mfyC8UJJi2so9ZUOlEzmFi23BTTNq4NGZiJRLH2jeQfKtPgZVBrWzj6NeC5pKps5UKJTt0amoDy6/HL4nYyIlwv7jZk9+1o667Doq3Ra0tZMgkEXIZgDvehA6Vtsw9Zuim6fOxCbFY4wjFhN9HZtktbAFutgcgduy5hlgTQVejqQ0zgtceTGx4YOFBZ3yyXwn1YmqMc0Zyxve54y97UVc2QbdE1VM6yMBqhObTgcxtTB2KJcsAe7Xcep74TK7pwDhyUYZ0odY03XcCzW80K6ye973vzYSB7XIQ1OI3EKddniGyx+jdyoa3Zihhf0WfaQranSt97eAd1+v4Fwx+l0OnWfh4SmOdtk8dIsme71dxavRBxz/o87htwBGxvN2fVuf9TvmuJ++cKiAzpHTjtZlvWdnXxCZHbJGYe6c/nDFJMflJw4PxzBuEawsjxGql1vvHNE09LpuRiHswfM6D3CYywVp2KvEK35s4u6GGDCkHcdW9tOemyGYlka84585X61ILRFpydiifG2/+LksXAKIzmqRWvStgqDIB6tSfrPYmTrYhhDOh5665J6Q5yn1cb/PwpIFc+aNbpFhoeTa/ehBWY6GWK6m4ab/a39ncXfhch13ZJLXCZJGv3L/1oSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+PfwFwtA2i9wN/bsAAAAAElFTkSuQmCC"
            alt=""
            style={{ width: "200px", height: "100px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}