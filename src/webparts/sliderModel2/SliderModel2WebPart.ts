import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import {SPComponentLoader} from '@microsoft/sp-loader'
import styles from './SliderModel2WebPart.module.scss';
import * as strings from 'SliderModel2WebPartStrings';
import SliderTemplateHTML from  './templateHTML';
import * as $ from 'jquery';
import * as twinmax from 'gsap';

// require("Jquery");
// require("TwinMaxJs");
// require("SliderScript");


export interface ISliderModel2WebPartProps {
  description: string;
}

export default class SliderModel2WebPart extends BaseClientSideWebPart<ISliderModel2WebPartProps> {
  public constructor() {
      super();
      // SPComponentLoader.loadCss("./slider.css");
  }
  private slideshowDuration = 4000;

  public render(): void {
    this.domElement.innerHTML = SliderTemplateHTML.SliderTemplate
    const Thiscopy = this
    const selctor =  '.'+styles.slide
    var slideshow = $(`.${styles["main-content"]}  .${styles.slideshow}`);
      $(selctor,this.domElement).addClass( styles['is-loaded']);

      $(`.${styles.slideshow}  .${styles.arrows } .${styles.arrow} `,this.domElement).on('click', function() {
        Thiscopy.slideshowNext($(this).closest('.'+styles.slideshow), $(this).hasClass(styles.prev),false);
      });

      $(`.${styles.slideshow}  .${styles.pagination}  .${styles.item}`,this.domElement).on('click', function() {
        Thiscopy.slideshowSwitch($(this).closest(`.${styles.slideshow}`), $(this).index(),false);
      });

      $(`.${styles.slideshow}   .${styles.pagination}`,this.domElement).on('check', function() {
          var slideshow = $(this).closest(`.${styles.slideshow}`);
          var pages = $(this).find('.'+styles.item);
          var index = slideshow.find(` .${styles.slides}  .${styles["is-active"]}`).index();
          pages.removeClass(styles['is-active']);
          pages.eq(index).addClass(styles['is-active']);
      });






      /* Lazyloading
      $('.slideshow').each(function(){
        var slideshow=$(this);
        var images=slideshow.find('.image').not('.is-loaded');
        images.on('loaded',function(){
          var image=$(this);
          var slide=image.closest('.slide');
          slide.addClass('is-loaded');
        });
      */










    // this.domElement.innerHTML = `
    //   <div class="${ styles.sliderModel2 }">
    //     <div class="${ styles.container }">
    //       <div class="${ styles.row }">
    //         <div class="${ styles.column }">
    //           <span class="${ styles.title }">Welcome to SharePoint!</span>
    //           <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
    //           <p class="${ styles.description }">${escape(this.properties.description)}</p>
    //           <a href="https://aka.ms/spfx" class="${ styles.button }">
    //             <span class="${ styles.label }">Learn more</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>`;
  }
   slideshowSwitch(slideshow, index, auto) {
    if (slideshow.data('wait')) return;

    var slides = slideshow.find('.'+styles.slide);
    var pages = slideshow.find('.'+styles.pagination);
    var activeSlide = slides.filter('.'+styles['is-active']);
    var activeSlideImage = activeSlide.find('.'+styles["image-container"]);
    var newSlide = slides.eq(index);
    var newSlideImage = newSlide.find('.'+styles["image-container"]);
    var newSlideContent = newSlide.find('.'+styles["slide-content"]);
    var newSlideElements = newSlide.find(` .${styles.caption} > *`);
    if (newSlide.is(activeSlide)) return;

    newSlide.addClass('is-new');
    var timeout = slideshow.data('timeout');
    clearTimeout(timeout);
    slideshow.data('wait', true);
    var transition = slideshow.attr('data-transition');
    if (transition == 'fade') {
        newSlide.css({
            display: 'block',
            zIndex: 2
        });
        newSlideImage.css({
            opacity: 0
        });

        twinmax.TweenMax.to(newSlideImage, 1, {
            alpha: 1,
            onComplete: function() {
                newSlide.addClass(styles['is-active']).removeClass('is-new');
                activeSlide.removeClass(styles['is-active']);
                newSlide.css({ display: '', zIndex: '' });
                newSlideImage.css({ opacity: '' });
                slideshow.find('.'+styles.pagination).trigger('check');
                slideshow.data('wait', false);
                if (auto) {
                    timeout = setTimeout(function() {
                        this.slideshowNext(slideshow, false, true);
                    }, this.slideshowDuration);
                    slideshow.data('timeout', timeout);
                }
            }
        });
    } else {
        if (newSlide.index() > activeSlide.index()) {
            var newSlideRight:any = 0;
            var newSlideLeft:any = 'auto';
            var newSlideImageRight:any = -slideshow.width() / 8;
            var newSlideImageLeft:any = 'auto';
            var newSlideImageToRight:any = 0;
            var newSlideImageToLeft:any = 'auto';
            var newSlideContentLeft:any = 'auto';
            var newSlideContentRight:any = 0;
            var activeSlideImageLeft:any = -slideshow.width() / 4;
        } else {
            var newSlideRight:any = '';
            var newSlideLeft:any = 0;
            var newSlideImageRight:any = 'auto';
            var newSlideImageLeft:any = -slideshow.width() / 8;
            var newSlideImageToRight:any = '';
            var newSlideImageToLeft:any = 0;
            var newSlideContentLeft:any = 0;
            var newSlideContentRight:any = 'auto';
            var activeSlideImageLeft:any = slideshow.width() / 4;
        }

        newSlide.css({
            display: 'block',
            width: 0,
            right: newSlideRight,
            left: newSlideLeft,
            zIndex: 2
        });

        newSlideImage.css({
            width: slideshow.width(),
            right: newSlideImageRight,
            left: newSlideImageLeft
        });

        newSlideContent.css({
            width: slideshow.width(),
            left: newSlideContentLeft,
            right: newSlideContentRight
        });

        activeSlideImage.css({
            left: 0
        });

        twinmax.TweenMax.set(newSlideElements, { y: 20, force3D: true });
        twinmax.TweenMax.to(activeSlideImage, 1, {
            left: activeSlideImageLeft,
            ease: twinmax.Power3.easeInOut
        });

        twinmax.TweenMax.to(newSlide, 1, {
            width: slideshow.width(),
            ease: twinmax.Power3.easeInOut
        });

        twinmax.TweenMax.to(newSlideImage, 1, {
            right: newSlideImageToRight,
            left: newSlideImageToLeft,
            ease: twinmax.Power3.easeInOut
        });

        twinmax.TweenMax.staggerFromTo(newSlideElements, 0.8, { alpha: 0, y: 60 }, { alpha: 1, y: 0, ease: twinmax.Power3.easeOut, force3D: true, delay: 0.6 }, 0.1, function() {
            newSlide.addClass(styles["is-active"]).removeClass('is-new');
            activeSlide.removeClass(styles["is-active"]);
            newSlide.css({
                display: '',
                width: '',
                left: '',
                zIndex: ''
            });

            newSlideImage.css({
                width: '',
                right: '',
                left: ''
            });

            newSlideContent.css({
                width: '',
                left: ''
            });

            newSlideElements.css({
                opacity: '',
                transform: ''
            });

            activeSlideImage.css({
                left: ''
            });

            slideshow.find('.'+styles.pagination).trigger('check');
            slideshow.data('wait', false);
            if (auto) {
                timeout = setTimeout(function() {
                    this.slideshowNext(slideshow, false, true);
                }, this.slideshowDuration);
                slideshow.data('timeout', timeout);
            }
        });
    }
}

   slideshowNext(slideshow, previous, auto) {
    var slides = slideshow.find('.'+styles.slide);
    var activeSlide = slides.filter('.'+styles["is-active"]);
    var newSlide = null;
    if (previous) {
        newSlide = activeSlide.prev('.'+styles.slide);
        if (newSlide.length === 0) {
            newSlide = slides.last();
        }
    } else {
        newSlide = activeSlide.next('.'+styles.slide);
        if (newSlide.length == 0)
            newSlide = slides.filter('.'+styles.slide).first();
    }

    this.slideshowSwitch(slideshow, newSlide.index(), auto);
}


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
