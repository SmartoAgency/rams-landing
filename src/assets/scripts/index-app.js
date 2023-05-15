import i18next from 'i18next';
import gsap from 'gsap';
import axios from 'axios';
import * as yup from 'yup';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swiper, { EffectFade, Navigation } from 'swiper';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import { lenis } from './modules/scroll/leniscroll';


const scroller = lenis;


Swiper.use([EffectFade, Navigation]);
/** ******************************* */
/*
 * smooth scroll start
 */
global.gsap = gsap;
global.axios = axios;

/* eslint-disable-next-line */

/*
 * smooth scroll end
 */
/** ******************************* */
/** ******************************* */
/*
 * form handlers start
 */
const forms = [
  '[data-home-contact]',
  '[data-form]',
];
const formsWithRedirect = [
  '[data-popup-form]',
];

formsWithRedirect.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => { window.location.href = 'message'; },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },

          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(16, i18next.t('field_too_short', { cnt: 19 - 7 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          }
        },

      },
    });

    $form.querySelector('.js-mask-absolute').addEventListener('click', () => {
      $form.querySelector('[name="phone"]').focus();
    }, false);
  }
});

forms.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => { window.location.href = 'message'; },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },

          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 17 - 5 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
          agreement: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-agreement]') }),
            rule: yup.string().required(i18next.t('required')).nullable(),
            defaultMessage: i18next.t('agreement'),
            valid: false,
            error: [],
          },
        },

      },
    });

    // $form.querySelector('.js-mask-absolute').addEventListener('click', () => {
    //   $form.querySelector('[name="phone"]').focus();
    // }, false);
  }
});

/*
 * form handlers end
 */

// eslint-disable-next-line no-new
new Swiper('[data-section-1-slider]', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: document.querySelector('[data-section-1-slider-prev]'),
    prevEl: document.querySelector('[data-section-1-slider-next]'),
  },
});

// eslint-disable-next-line no-new
new Swiper('[data-sec-5-slider]', {
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
  slidesPerView: 1.05,
  // spaceBetween: 20,
  navigation: {
    nextEl: document.querySelector('[data-sec-5-slider-next]'),
    prevEl: document.querySelector('[data-sec-5-slider-prev]'),
  },
});


document.body.addEventListener('change', (evt) => {
  const target = evt.target.closest('[name="genplan"]');
  if (!target) return;
  const { value } = target;
  document.querySelectorAll('[data-build]').forEach((el) => {
    const regExp = new RegExp(el.dataset.build);
    el.setAttribute('stroke-opacity', regExp.test(value) ? 1 : 0);
  });

  document.querySelectorAll('[name="genplan"]').forEach((el) => {
    if (el === target) {
      el.closest('label').classList.add('active');
      return;
    }
    el.closest('label').classList.remove('active');
  });
});


document.body.addEventListener('click',function(evt){
  const target = evt.target.closest('[data-call-form]');
  if (!target) return;
  document.querySelector('[data-form-wrapper]').classList.add('active');
});
document.body.addEventListener('click',function(evt){
  const target = evt.target.closest('[data-close-form]');
  if (!target) return;
  document.querySelector('[data-form-wrapper]').classList.remove('active');
});


function screen3Effects() {
  const swiper = new Swiper('.zoom-slider-wrapper', {
      // Optional parameters
  modules: [ Navigation],
  slidesPerView: 4.5,
  loop: false,
  spaceBetween: 40,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    993: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 4.5,
      spaceBetween: 40
    }
    // when window width is >= 640px
  },
  navigation: {
    nextEl: document.querySelector('[data-screen3-next]'),
    prevEl: document.querySelector('[data-screen3-prev]'),
  },
});
  // swiper.on('touchStart', () => {
  //   document.querySelector('.zoom-slider-wrapper').classList.add('drag')

  // });
  // swiper.on('touchEnd', () => {
  //   document.querySelector('.zoom-slider-wrapper').classList.remove('drag')
  // });
}

screen3Effects();