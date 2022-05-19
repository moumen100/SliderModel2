import styles from './SliderModel2WebPart.module.scss'
export default class SliderTemplateHTML {
  public static SliderTemplate : string =
  `
  <main class="${styles["main-content"]}">
  <section class="${ styles.slideshow }">
    <div class="${ styles["slideshow-inner"]}">
      <div class="${ styles.slides}">
        <div class="${ styles.slide} ${styles["is-active"]} ">
          <div class="${ styles["slide-content"]}">
            <div class="${ styles.caption}">
              <div class="${ styles.title}">Slide title 1</div>
              <div class="${ styles.text}">
                <p>Slide description 1</p>
              </div>
              <a href="#" class="${ styles.btn}">
                <span class="${ styles["btn-inner"]}">Learn More</span>
              </a>
            </div>
          </div>
          <div class="${ styles["image-container"]}">
            <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-1.jpg" alt="" class="${ styles.image}" />
          </div>
        </div>
        <div class="${ styles.slide}">
          <div class="${ styles['slide-content']}">
            <div class="${ styles.caption}">
              <div class="${ styles.title}">Slide title 2</div>
              <div class="${ styles.text}">
                <p>Slide description 2</p>
              </div>
              <a href="#" class="${ styles.btn}">
                <span class="${ styles['btn-inner']}">Learn More</span>
              </a>
            </div>
          </div>
          <div class="${ styles['image-container']}">
            <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-4-1.jpg" alt="" class="${ styles.image}" />
          </div>
        </div>
        <div class="${ styles.slide}">
          <div class="${ styles["slide-content"]}">
            <div class="${ styles.caption}">
              <div class="${ styles.title}">Slide title 3</div>
              <div class="${ styles.text}">
                <p>Slide description 3</p>
              </div>
              <a href="#" class="${ styles.btn}">
                <span class="${ styles["btn-inner"]}">Learn More</span>
              </a>
            </div>
          </div>
          <div class="${ styles["image-container"]}">
            <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/11.jpg" alt="" class="${ styles.image}" />
          </div>
        </div>
        <div class="${ styles.slide}">
          <div class="${ styles["slide-content"]}">
            <div class="${ styles.caption}">
              <div class="${ styles.title}">Slide title 4</div>
              <div class="${ styles.text}">
                <p>Slide description 4</p>
              </div>
              <a href="#" class="${ styles.btn}">
                <span class="${ styles["btn-inner"]}">Learn More</span>
              </a>
            </div>
          </div>
          <div class="${ styles["image-container"]}">
            <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/20mars17-sans-typo.jpg" alt="" class="${ styles.image}" />
          </div>
        </div>
      </div>
      <div class="${ styles.pagination}">
        <div class="${ styles.item} ${["is-active"]}">
          <span class="icon">1</span>
        </div>
        <div class="${ styles.item}">
          <span class="icon">2</span>
        </div>
        <div class="${ styles.item}">
          <span class="icon">3</span>
        </div>
        <div class="${ styles.item}">
          <span class="icon">4</span>
        </div>
      </div>
      <div class="${ styles.arrows}">
        <div class="${ styles.arrow} ${styles.prev}">
          <span class="${ styles.svg} svg-arrow-left">
            <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve"> <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"/> </svg>
            <span class="alt sr-only"></span>
          </span>
        </div>
        <div class="${ styles.arrow} ${styles.next}">
          <span class="${ styles.svg} svg-arrow-right">
            <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve"> <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"/> </svg>
            <span class="alt sr-only"></span>
          </span>
        </div>
      </div>
    </div>
  </section>
</main>
   `


//   public static SliderTemplate : string = `
//   <main class="main-content">
//   <section class="slideshow">
//     <div class="slideshow-inner">
//       <div class="slides">
//         <div class="slide is-active ">
//           <div class="slide-content">
//             <div class="caption">
//               <div class="title">Slide title 1</div>
//               <div class="text">
//                 <p>Slide description 1</p>
//               </div>
//               <a href="#" class="btn">
//                 <span class="btn-inner">Learn More</span>
//               </a>
//             </div>
//           </div>
//           <div class="image-container">
//             <img src="https://pngimg.com/uploads/mario/mario_PNG125.png" alt="" class="image" />
//           </div>
//         </div>
//         <div class="slide">
//           <div class="slide-content">
//             <div class="caption">
//               <div class="title">Slide title 2</div>
//               <div class="text">
//                 <p>Slide description 2</p>
//               </div>
//               <a href="#" class="btn">
//                 <span class="btn-inner">Learn More</span>
//               </a>
//             </div>
//           </div>
//           <div class="image-container">
//             <img src="https://pngimg.com/uploads/mario/mario_PNG125.png" alt="" class="image" />
//           </div>
//         </div>
//         <div class="slide">
//           <div class="slide-content">
//             <div class="caption">
//               <div class="title">Slide title 3</div>
//               <div class="text">
//                 <p>Slide description 3</p>
//               </div>
//               <a href="#" class="btn">
//                 <span class="btn-inner">Learn More</span>
//               </a>
//             </div>
//           </div>
//           <div class="image-container">
//             <img src="https://pngimg.com/uploads/mario/mario_PNG125.png" alt="" class="image" />
//           </div>
//         </div>
//         <div class="slide">
//           <div class="slide-content">
//             <div class="caption">
//               <div class="title">Slide title 4</div>
//               <div class="text">
//                 <p>Slide description 4</p>
//               </div>
//               <a href="#" class="btn">
//                 <span class="btn-inner">Learn More</span>
//               </a>
//             </div>
//           </div>
//           <div class="image-container">
//             <img src="https://pngimg.com/uploads/mario/mario_PNG125.png" alt="" class="image" />
//           </div>
//         </div>
//       </div>
//       <div class="pagination">
//         <div class="item is-active">
//           <span class="icon">1</span>
//         </div>
//         <div class="item">
//           <span class="icon">2</span>
//         </div>
//         <div class="item">
//           <span class="icon">3</span>
//         </div>
//         <div class="item">
//           <span class="icon">4</span>
//         </div>
//       </div>
//       <div class="arrows">
//         <div class="arrow prev">
//           <span class="svg svg-arrow-left">
//             <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve"> <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"/> </svg>
//             <span class="alt sr-only"></span>
//           </span>
//         </div>
//         <div class="arrow next">
//           <span class="svg svg-arrow-right">
//             <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve"> <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"/> </svg>
//             <span class="alt sr-only"></span>
//           </span>
//         </div>
//       </div>
//     </div>
//   </section>
// </main>
//   `

}
