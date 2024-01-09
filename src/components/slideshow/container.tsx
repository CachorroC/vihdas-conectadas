import Image from 'next/image';

export function SlideshowContainer () {
      return (
        <>
          <div className="slideshow-container">

            <div className="mySlides fade">
              <div className="numbertext">1 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_1.jpg'}/>
              <p>Pienso Luego Excito</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_2.jpg'}/>
              <p>Caption Two</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_3.jpg'}/>
              <p>Mito 1</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">4 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_4.jpg'}/>
              <p>Mito 2</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">5 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_5.jpg'}/>
              <p>Mito 3</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">6 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_6.jpg'}/>
              <p>Mito 4</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">7 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_7.jpg'}/>
              <p>Mito 5</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">8 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_8.jpg'}/>
              <p>Mito 6</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">9 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_9.jpg'}/>
              <p>Mito 7</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">10 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_10.jpg'}/>
              <p>Mito 8</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">11 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_11.jpg'}/>
              <p>Mito 9</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">12 / 12</div>
              <Image width={250} height={250} alt={''} src={'/img/PLE_12.jpg'}/>
              <p>Mito 10</p>
            </div>



            <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a className="next" onclick="plusSlides(1)">&#10095;</a>

          </div>
          <div className="puntos">
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
            <span className="dot" onclick="currentSlide(4)"></span>
            <span className="dot" onclick="currentSlide(5)"></span>
            <span className="dot" onclick="currentSlide(6)"></span>
            <span className="dot" onclick="currentSlide(7)"></span>
            <span className="dot" onclick="currentSlide(8)"></span>
            <span className="dot" onclick="currentSlide(9)"></span>
            <span className="dot" onclick="currentSlide(10)"></span>
            <span className="dot" onclick="currentSlide(11)"></span>
            <span className="dot" onclick="currentSlide(12)"></span>
          </div>
        </>
      );
}