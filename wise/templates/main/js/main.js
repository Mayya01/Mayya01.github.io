(function ($) {

	$.fn.startWaiting = function () {

		$this = $(this);

		//$this.css({position: 'relative'});

		$loaderDiv = $(document.createElement('div'));
		$loaderDiv.addClass('ui-loader');
		$loaderDiv.prependTo($this);

	};

	$.fn.endWaiting = function () {

		$this = $(this);

		$loaderDiv = $this.find('.ui-loader');
		$loaderDiv.remove();

	};

	window.App = window.App || {};
	App.Widgets = App.Widgets || {};

	/**
	 * Основной класс приложения
	 * Все методы, начинающиеся с "init" запускаются автоматически при полной загрузке страницы
	 */
	var Application = can.Control.extend({}, {
		init: function () {},

		bootstrap: function () {
			var method;

			for (method in this) {
				if (method.length > 4 && method.substr(0, 4) === 'init') {
					this[method]();
				}
			}

			can.route.ready();
		},

		/**
		 * Навешивает контроллер на DOM элемент и возвращает его instance
		 * @param selector
		 * @param controllerName
		 * @param settings
		 * @returns {*}
		 */
		installController: function (selector, controllerName, settings) {
			settings = settings || {};
			return this.element.find(selector)[controllerName](settings).control(controllerName);
		},

		/**
		 * Инициализация кастомных компонент вроде селектов, чекбоксов и прочего
		 */
		initCustomComponents: function () {
			this.runFancybox();
			this.loadUIComponents();

			var self = this;
			$(document).ajaxComplete(function () {
				self.loadUIComponents();
				self.runFancybox();
			});
		},

		loadUIComponents: function () {
			this.maskInput();
		},

		maskInput: function () {
			this.element.find('input[type=tel]').mask("+7 (999) 999-99-99");

			this.element.find('input.js-only-number').keydown(function (e) {
				if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
					(e.keyCode == 65 && e.ctrlKey === true) ||
					(e.keyCode >= 35 && e.keyCode <= 39)) {
					return;
				}
				if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
					e.preventDefault();
				}
			});
		},

		runFancybox: function () {
			$.fancybox.defaults = $.extend({}, $.fancybox.defaults, {
				//padding: 0,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});

			this.element.find('.js-fancybox-gallery').fancybox({
				//closeBtn: false,
				padding: 0,
				wrapCSS: 'wa-gallery _modal',
				//fitToView: false,
				margin: ($(window).width() > 768) ? 20 : 5,
				beforeShow: function () {
					$('.fancybox-inner').addClass('overflow-visible');
				}
			});
			this.element.find('.js-fancybox-media').fancybox({
				padding: 15,
				autoResize: true,
				maxWidth: '100%',
				helpers: {
					overlay: {
						css: {
							'background': 'rgba(27, 71, 105, 0.7)'
						}
					}
				}
			});

			this.element.find('.js-popup-form').fancybox({
				padding: 0,
				wrapCSS: 'popup-form-wrap',
				margin: ($(window).width() > 768) ? 20 : 5,
				beforeShow: function () {
					$('.fancybox-inner').addClass('overflow-visible');
					if (typeof GTMpushEventLoadForm == "function") {
						var formName = $('' + $(this).attr('href') + '>form').attr('name');
						if (typeof (formName) != 'undefined' && formName.length > 0) {
							GTMpushEventLoadForm(formName);
						}
					}

				}
			});

			this.element.find('.js-popup-vacansy-custom-form').fancybox({
				padding: 0,
				wrapCSS: 'popup-form-wrap',
				margin: ($(window).width() > 768) ? 20 : 5,
				beforeShow: function () {
					var $el = $(this.element);
					if ($el.data('vacancy-code')) {
						window.application.VacancyForm.setVacancyId($el.data('vacancy-code'));
					}
					if ($el.data('vacancy-title')) {
						window.application.VacancyForm.setVacancyTitle($el.data('vacancy-title'));
					}
					$('.fancybox-inner').addClass('overflow-visible');
					if (typeof GTMpushEventLoadForm == "function") {
						var formName = $('' + $(this).attr('href') + '>form').attr('name');
						if (typeof (formName) != 'undefined' && formName.length > 0) {
							GTMpushEventLoadForm(formName);
						}
					}

				}
			});

			this.element.find('.js-fancybox-all').fancybox({
				closeBtn: false,
				margin: ($(window).width() > 768) ? 20 : 5
			});

			this.element.find('.js-fancybox-iframe').fancybox({
				margin: ($(window).width() > 768) ? 20 : 5
			});

			this.element.find('.js-fancybox-docs').fancybox({
				//closeBtn: false,
				wrapCSS: 'popup popup-fancybox-docs',
				padding: ($(window).width() > 769) ? [50, 50, 35, 50] : 10,
				margin: ($(window).width() > 769) ? [20, 40, 20, 40] : [5, 40, 5, 40],
				helpers: {
					title: {
						type: 'inside'
					}
				}
			});
			this.element.find('.js-popup-close').click(function () {
				$.fancybox.close();
			});
		},

		/*
		 initWidgets: function () {
		 this.installController('.js-header-menu', 'appWidgetsSearchHeader');
		 this.installController('.js-header-footer', 'appWidgetsMenu', {myOption: true});
		 }
		 */

		initLayout: function () {
			this.installController('.js-main-menu', 'appWidgetsLayoutMainMenu');
			this.installController('.js-before-intelis', 'appWidgetsLayoutBeforeIntelis');
			this.installController('.js-companies-list-dd', 'appWidgetsLayoutCompaniesListDD');
		},

		initHome: function () {
			this.installController('.js-service-list-dynamic-filter', 'appWidgetHomeServiceListDynamicFilter');
		},

		initModules: function () {
			this.installController('.js-wa-news-list-2-3-col', 'appWidgetModulesWANewsListMasonry');
			this.installController('.js-slide-toggle', 'appWidgetModulesSlideToggle');
			this.installController('.js-sticky-scroll', 'appWidgetModulesStickyScroll');
			this.installController('.js-form', 'appWidgetModulesForm');
			this.installController('.js-map', 'appWidgetModulesMap');
			this.installController('.js-tabs', 'appWidgetModulesTabs');
			this.installController('.js-parallax', 'appWidgetModulesParallax');
			this.installController('.js-form-validation', 'appWidgetModulesFormValidation');
			this.installController('.js-callback-form-container', 'appWidgetModulesCallbackForm');
			this.installController('.js-form__feedback-form-wrap', 'appWidgetModulesContactForm');
			this.installController('.js-form-file', 'appWidgetModulesFormFile');
			this.installController('.js-scroll-to', 'appWidgetModulesScrollTo');
		},

		initSliders: function () {
			this.installController('.js-slider-clients', 'appWidgetSlidersClients');
			this.installController('.js-slider-mmpublication', 'appWidgetSlidersMMPublication');
			this.installController('.js-slider-service-main', 'appWidgetSlidersServiceMain');
			this.installController('.js-slider-service-main-inner', 'appWidgetSlidersServiceMainInner');
			this.installController('.js-slider-career', 'appWidgetSlidersCareer');
			this.installController('.js-photos-slider', 'appWidgetPhotosSlider');
			this.installController('.js-show-more', 'appWidgetShowMore');
			this.installController('.js-full-width-slider', 'appWidgetFullWidthSlider');
			this.installController('.js-video-slider', 'appWidgetVideoSlider');
		},

		initClients: function () {
			this.installController('.js-clients-ajax-dynamic-filter', 'appWidgetClientsAjaxDynamicFilter');
		},

		initWaNews: function () {
			this.installController('.js-news', 'appWidgetWaNews');
		},

		initWaBlog: function () {
			this.installController('.js-blog', 'appWidgetWaBlog');
		},

		initWaPrint: function () {
			this.installController('.js-print', 'appWidgetWaPrint');
		},

		initWaSubscribe: function () {
			this.installController('.js-subscribe', 'appWidgetWaSubscribe');
		},

		initSectionNav: function () {
			this.installController('.js-section-nav', 'appWidgetSectionNav');
		},

		initCareer: function () {
			this.installController('.js-success-stories', 'appWidgetSuccessStories');
			this.installController('.js-companies-section', 'appWidgetCareerCompaniesSection');
		},

		initVacancies: function () {
			this.installController('.js-vacancy', 'appWidgetVacancy');
			this.VacancyForm = this.installController('.js-vacancy-form', 'appWidgetVacancyForm');
		},

		initAboutCompany: function () {
			this.installController('.js-values', 'appWidgetValues');
		},

		initServicesScroll: function () {
			this.installController('.js-scroll-nav', 'appWidgetServicesScroll');
		},

		initLanding: function () {
			this.installController('.js-landing-oim-05', 'appWidgetOim05');
		},

		initPayment: function () {
			this.installController('.js-payment-infoform', 'appPaymentInfoform');
			this.installController('.js-payment-infoform-ya', 'appPaymentInfoformYa');
		}
	});

	$(function () {
		window.application = new Application('body');
		window.application.bootstrap();
	});

}(jQuery));

function GTMpushEvent(event){

    if (typeof dataLayer == "undefined") {
        console.log('dataLayer is undefined');
        return;
    }

    dataLayer.push({'event': event});

    console.info('GTMpushEvent: '+event);
}

function GTMpushEventLoadForm(form_name){

    if (typeof dataLayer == "undefined") {
        console.log('dataLayer is undefined');
        return;
    }

    if (form_name == 'CALLBACK_FORM'){
        dataLayer.push({'event': 'formServicesOpen'});
    }

    if (form_name == 'VACANCY_FORM'){
        dataLayer.push({'event': 'fomResumeOpen'});
    }

    console.info('GTMpushEventLoadForm: '+form_name);
}

function GTMpushEventSendForm(form_name){

    if (typeof dataLayer == "undefined") {
        console.log('dataLayer is undefined');
        return;
    }

    if (form_name == 'CALLBACK_FORM'){
        dataLayer.push({'event': 'formServicesSent'});
    }

    if (form_name == 'VACANCY_FORM'){
        dataLayer.push({'event': 'formResumeSent'});
    }

    if (form_name == 'CONTACT_FORM'){
        dataLayer.push({'event': 'formContactsSent'});
    }

    console.info('GTMpushEventSendForm: '+form_name);

}


(function ($) {
    App.Widgets.AboutCompany = App.Widgets.AboutCompany || {};
    App.Widgets.AboutCompany.Values = can.Control.extend(
        {
            pluginName: 'appWidgetValues',
            defaults: {}
        },
        {
            init: function () {
                this.valueItem = this.element.find('.js-values__item');
                this.slidingText = this.element.find('.js-values__text');
            },

            '.js-values__item mouseenter': function(el, ev) {
                var slidingText = this.slidingText;

            	if($(window).width() > 1006) {
            		el.find(slidingText).show();
            	}
            },

            '.js-values__item mouseleave': function(el, ev) {
                var slidingText = this.slidingText;

            	if($(window).width() > 1006) {
            		el.find(slidingText).hide();
            	}
            },

            '.js-values__item click': function(el, ev) {
                var slidingText = this.slidingText;

            	if($(window).width() < 1007) {
                    el.find(slidingText).toggle();
            	}
            }

            // '{window} load': function() {
            //     if($(window).width() < 733) {
            //         this.valueItem.each(function() {
            //             var slidingText = $(this).find( $('.js-values__text') );
            //             slidingText.insertAfter( $(this) );
            //         });
            //     }
            // },

            // '{window} resize': function() {
            //     if($(window).width() < 733) {
            //         this.valueItem.each(function() {
            //             var slidingText = $(this).find( $('.js-values__text') );
            //             slidingText.insertAfter( $(this) ).addClass('js-inserted');
            //         });
            //     } else {
            //         if(this.slidingText.hasClass('js-inserted')) {
            //             this.slidingText.each(function() {
            //                 var prevValueItem = $(this).prev();
            //                 console.log(prevValueItem)
            //                 $(this).prependTo(prevValueItem);
            //             });
            //         }
            //     }
            // }
        }
    );
}(jQuery));
(function ($) {
  App.Widgets.WaBlog = App.Widgets.WaBlog || {};
  App.Widgets.WaBlog.ShowMoreBlogItems = can.Control.extend(
    {
      pluginName: 'appWidgetWaBlog',
      defaults: {}
    },
    {
        init: function () {



            // определяем ключ доступа к компоненту по ajax
            this.ajaxKey = this.element.find('.js-blog-ajax-key').val();

            // запускаем наш ajax пейджер
            this.initAjaxPagen();
        },

        initAjaxPagen: function () {

            // наш блок, с кнопкой, находится внутри блока с элементами, мы будем заменять кнопку на элементы, полученные при ajax запросе
            this.navBlock = this.element.find('.wa-blog-list');

            // наша кнопка "Показать ещё"
            this.pagen = this.element.find('.js-show-all-blog-list-btn');

            // строим ссылку для запроса следующего набора элементов
            this.pagenGateway = this.buildPagenGatewayPath();

            // вешаем обработчик события на клик по кнопке
            this.on(this.pagen, 'click', 'showMoreEventStart');
        },

        buildPagenGatewayPath : function() {
            var uri = new URI();


            uri
                .setSearch('AJAX', 'Y')
                .setSearch('KEY', this.ajaxKey)
                .setSearch('PAGEN_'+$('.js-blog-pager-data-container').data('nav'), $('.js-blog-pager-data-container').data('page'))
                .toString();
            return uri;

            // функция возвращает ссылку на страницу со следующим набором элементов и установленными ключами для доступа к компоненту по аякс
        },

        showMoreEventStart : function() {

            // обработчик клика по кнопке
            // выполняем какие-либо действия, происходящие во время ожидания загрузки, если требуется
            this.pagenLoadState();
            // стираем обработчик события на клик по кнопке
            this.pagen.off();
            // запрашиваем аякс, проксируем функцию, которая выполнится при получении ответа
            $.get( this.pagenGateway, this.proxy('onShowMoreGatewayResponse'));
        },

        pagenLoadState : function() {
            var pagen = this.pagen;
            // например, заменяем текст на кнопке "Показать ещё" на "Загрузка..."
            pagen.find('span').html('Загрузка...');
            pagen.find('.js-show-more-icon').addClass('faa-spin animated');
        },

        onShowMoreGatewayResponse: function(data, status, xhqrObj) {

            var pagen = this.pagen;
            pagen.find('span').html('Показать ещё');
            pagen.find('.js-show-more-icon').removeClass('faa-spin animated');

            $('.js-pager-data-container').detach();
            // При получении ajax заменяем блок с нашей кнопкой на html ответа.
            // Логично, если блок с кнопкой находится в одном родителе с текущим списком элементов на странице,
            // то полученные элементы просто добавятся в конец списка.
            // Так же, если в ответе будет новая кнопка на следующую страницу, то она вновь добавится в конец.
            this.navBlock.append(data);


            if($('.wa-news__main-item--is-hidden').length !== 0) {
                $('.wa-news__main-item--is-hidden').slideDown().removeClass('wa-news__main-item--is-hidden').addClass('js-shown-item');
            }

            if ($('.js-blog-pager-data-container').data('page') > $('.js-blog-pager-data-container').data('page-total')) {
                pagen.detach();
            }

            // Если в php шаблоне была конструкция для цикла элементов,
            // для их классов <?if($isAjaxRequest):?>template-name-item--ajax<?endif;?>,
            // то есть для запрошенных по аякс элементов добавляется модификатор класса --ajax,
            // и правила стилей указывают, что элементы этого класса
            // с таким модификатором скрыты (css>display:hide), то по окончании их загрузки
            // они появятся с анимацией.

//				this.element.find('.template-name-item--ajax').slideDown(330);
            // по окончании загрузки заново запускаем наш ajax пейджер, он будет готов к работе со следующей страницей, если в текущем ответе пришла новая кнопка "Показать ещё"
            this.initAjaxPagen();
        }
    }
  );
}(jQuery));
(function ($) {
  App.Widgets.WaSubscribe = App.Widgets.WaSubscribe || {};
  App.Widgets.WaBlog.WaSubscribeForm = can.Control.extend(
    {
      pluginName: 'appWidgetWaSubscribe',
      defaults: {}
    },
    {
      init: function () {
        this.form = this.element.find('form');
        this.subscribeButton = this.element.find('.js-subscribe-btn');
      },
      '.js-subscribe-btn click': function (el, ev) {
        
        ev.preventDefault();
        console.log(this.form[0]);
        var formData = new FormData(this.form[0]),
            ob = this;

        $.ajax({url:"/ajax/subscribe-ajax.php", type: "POST", data: formData, processData: false, contentType: false, dataType: 'json'}).done(function(data){
          if (data.STATUS == 'OK') {
            ob.submit();
          } else {
            /** TODO Надо выводить popup с ошибкой! */
            console.log(data);
          }
        }).error(function(){
          /** TODO Надо выводить popup с ошибкой! */
          console.log(data);
        });
        
        
      },
      submit: function() {
        this.success();
      },
      success: function() {
        $('.js-subscribe-form, .wa-subscribe__text').hide();
        $('.wa-subscribe__success').show();
      }
    }
  );
}(jQuery));
(function ($) {
	App.Widgets.Career = App.Widgets.Career || {};
	App.Widgets.Career.CompaniesSection = can.Control.extend({
		pluginName: 'appWidgetCareerCompaniesSection',
		defaults: {}
	}, {
		init: function () {
			this.content = this.element.find('.wa-companies__content');
			var self = this;
			$(window).bind('load', function () {
				self.setEqualHeight();
			});
			$(window).bind('resize', function () {
				self.setEqualHeight();
			});
		},
		setEqualHeight: function (el) {
			var maxHeight = 0;
			this.content.css('height', 'auto');
			this.content.each(function (index) {
				var contentHeight = parseInt($(this).outerHeight());

				if (contentHeight > maxHeight) {
					maxHeight = contentHeight;
				}
			});
			this.content.css('height', maxHeight);
		}
	});
}(jQuery));


(function ($) {
	App.Widgets.Career = App.Widgets.Career || {};
	App.Widgets.Career.SuccessStories = can.Control.extend(
		{
			pluginName: 'appWidgetSuccessStories',
			defaults: {}
		},
		{
			init: function() {
				this.moreLink = this.element.find('.js-success-story-more-link');

				this.prependTarget = this.element.find('.js-success-story-inner');
				this.successStoriesNav = this.element.find('.js-success-stories-nav');
				this.successStoriesNav.prependTo(this.prependTarget);

				this.prevBtn = this.element.find('.js-prev-btn');
				this.nextBtn = this.element.find('.js-next-btn');

				this.on(this.moreLink, 'click', 'scrollOnClick');
				this.on(this.nextBtn, 'click', 'clickOnNextBtn');
				this.on(this.prevBtn, 'click', 'clickOnPrevBtn');
			},

			'scrollOnClick': function(el, ev) {
				ev.preventDefault();

			  	var fullSuccessStoryPosition = el.closest('.js-success-story-preview').siblings('.js-success-story-full').offset().top;
				$('html, body').animate({
					scrollTop: fullSuccessStoryPosition,
					easing: 'linear'
				}, 1000);
			},

			'clickOnNextBtn': function(el,ev) {
				var currentItem = el.closest(this.element).find('.success-story--active');
				var nextItem = currentItem.next();

				if(nextItem.length === 0) {
					nextItem = el.closest(this.element).find('.js-success-story').first();
				}

				currentItem.removeClass('success-story--active');
				nextItem.addClass('success-story--active');
			},

			'clickOnPrevBtn': function(el,ev) {
				var currentItem = el.closest(this.element).find('.success-story--active');
				var prevItem = currentItem.prev();

				if(prevItem.length === 0) {
					prevItem = el.closest(this.element).find('.js-success-story').last();
				}

				currentItem.removeClass('success-story--active');
				prevItem.addClass('success-story--active');
			}
		}
	);
}(jQuery));
(function ($) {
    App.Widgets.Vacancies = App.Widgets.Vacancies || {};
    App.Widgets.Vacancies.VacancyForm = can.Control.extend(
        {
            pluginName: 'appWidgetVacancyForm',
            defaults: {}
        },
        {
            init: function () {
                this.formElement = this.element.find('.js-vacancy-response-form');
                this.formName = this.formElement.attr('name');
                this.fakeFancy = this.element.find('#vacancy-code');
                this.on(this.formElement, 'submit', 'proceedForm');
                this.modalSubmitBtn = this.element.find('.js-form__submit-btn2');
                this.fakeFancy.fancybox({
                    content: '<div class="wa-form wa-form--success"><div class="wa-form__title js-form__title">Спасибо за обращение в WiseAdvice</div><p>В ближайшее время мы вам перезвоним.</p></div>',
                    padding: 0,
                    wrapCSS: 'popup-success-wrap',
                    margin: ($(window).width() > 768) ? 20 : 5,
                    beforeShow: function() {
                        $('.fancybox-inner').addClass('overflow-visible');
                    }
                });
            },

            setVacancyId: function(id) {
                this.element.find('#vacancy-code').val(id);
            },

			setVacancyTitle: function(title) {
				this.element.find('#vacancy-title').text(title);
			},

            proceedForm: function(el, ev) {
                ev.preventDefault();
                var formData = new FormData(el[0]),
                    ob = this;

                $.ajax({url:"/ajax/vacancy-ajax.php", type: "POST", data: formData, processData: false, contentType: false, dataType: 'json'}).done(function(data){
                    if (data.STATUS == 'OK') {

                        if (typeof GTMpushEventSendForm == "function"){
                            GTMpushEventSendForm(ob.formName);
                        }

                        ob.fakeFancy.click();
                    } else {
                        /** TODO Надо выводить popup с ошибкой! */
                        console.log(data);
                    }
                }).error(function(){
                    /** TODO Надо выводить popup с ошибкой! */
                    console.log(data);
                });
            },

        });
}(jQuery));
(function ($) {
    App.Widgets.Vacancies = App.Widgets.Vacancies || {};
    App.Widgets.Vacancies.Vacancy = can.Control.extend(
        {
            pluginName: 'appWidgetVacancy',
            defaults: {}
        },
        {
            init: function () {
            	this.insertElement = this.element.find('.js-vacancy__features');
                this.insertElementParent = this.element.find('.js-vacancy__col');
                this.insertAfterElement = this.element.find('.js-vacancy__intro');
            },

            '{window} resize': function() {
                if($(window).width() < 750) {
                    this.insertElement.insertAfter(this.insertAfterElement);
                } else {
                    this.insertElement.prependTo(this.insertElementParent);
                }
            },

            '{window} load': function() {
                if($(window).width() < 750) {
                    this.insertElement.insertAfter(this.insertAfterElement);
                } else {
                    this.insertElement.prependTo(this.insertElementParent);
                }
            },


        }
    );
}(jQuery));
(function ($) {
	App.Widgets.ShowMore = App.Widgets.ShowMore || {};

	App.Widgets.ShowMore = can.Control.extend({
		pluginName: 'appWidgetShowMore',
		defaults: {}
	}, {
		init: function () {
			this.item = this.element.find('.js-show-more__item');
			this.btn = this.element.find('.js-show-more__btn');
			var self = this;
			
			this.btn.on('click', function(){
				self.btn.addClass('show-more--opened');
				self.item.slideDown().removeClass('is-hidden').addClass('open');
			});
		}
	});
}(jQuery));

(function ($) {
    App.Widgets.Clients = App.Widgets.Clients || {};

    App.Widgets.Clients.ClientsAjaxDynamicFilter = can.Control.extend(
        {
            pluginName: 'appWidgetClientsAjaxDynamicFilter',
            defaults: {}
        },
        {
            init: function () {

                this.currentGroup = 'all';
                this.groupsData = [];
                this.buttons = this.element.find('.js-filter-tag');
                this.grid = this.element.find('.js-clients-grid');
                this.gridWrapper = this.element.find('.js-clients-grid-wrapper');
                this.ddSelectObj = this.element.find('#clients-ajax-filter-ddslick');
                this.slickActive = false;
                this.ajaxKey = this.element.find('.js-clients-ajax-dynamic-filter-ajax-key').val();

                this.loadGroupsData();

                this.initAjaxPagen();

                /*
                this.initShuffle();
                */

                this.eventConstructor();

            },

            initAjaxPagen: function () {
                this.navBlock = this.element.find('.js-clients-ajax-dynamic-filter-show-more');
                this.pagen = this.element.find('.js-clients-ajax-dynamic-filter-nav-ajax');
                this.pagenGateway = this.buildPagenGatewayPath();
                this.on(this.pagen, 'click', 'showMoreEventStart');
            },

            buildPagenGatewayPath : function() {
                var uri = new URI();

                if(this.currentGroup !== 'all') {
                    uri.setSearch('TAGID', this.currentGroup)
                } else {
                    uri.setSearch('TAGID', 0)
                }

                uri
                    .setSearch('AJAX', 'Y')
                    .setSearch('KEY', this.ajaxKey)
                    .setSearch('PAGEN_'+this.pagen.attr('data-nav'), this.pagen.attr('data-page'))
                    .toString();
                return uri;
            },

            showMoreEventStart : function() {
                this.pagenLoadState();
                this.pagen.off();
                $.get( this.pagenGateway, this.proxy('onShowMoreGatewayResponse'));
            },

            pagenLoadState : function() {
                var pagen = this.pagen;

                pagen.addClass('btn--active');
                pagen.find('span').animate({
                    opacity: 0
                }, 330, 'linear', function() {
                    pagen.find('span').html('Загрузка...');
                    pagen.find('span').animate({
                        opacity: 1
                    }, 330, 'linear');
                });
                //this.pagen.find('span').html('Загрузка...');
                this.pagen.find('.js-show-more-icon').addClass('faa-spin animated');
            },

            onShowMoreGatewayResponse: function(data, status, xhqrObj) {
                this.navBlock.replaceWith(data);
                this.element.find('.clients-ajax-dynamic-filter-item--ajax').slideDown(330);
                this.initAjaxPagen();
            },

            eventConstructor: function () {

                if ($(window).width() <= 640 && !this.slickActive) {
                    this.initDDSlick();
                } else if($(window).width() > 640 && this.slickActive) {
                    this.destroyDDSlick();
                }

                /*
                this.grid.shuffle('update');
                */

            },

            initShuffle: function () {

                /*
                this.grid.on('done.shuffle', function() {
                    $(this).shuffle('shuffle', 'all');
                });

                this.grid.shuffle({
                    itemSelector: '.js-service-section'
                });
                */

            },

            initDDSlick: function () {

                var thisClass = this;
                this.ddSelectObj.ddslick({
                    data: this.groupsData,
                    width: '100%',
                    background: '#aa3349',
                    selectText: "Все отрасли",
                    onSelected: function (data) {
                        thisClass.filtering(data.selectedData.tagid);
                    }
                });
                this.slickActive = true;
                this.ddSelectObj = this.element.find('#clients-ajax-filter-ddslick');

            },

            destroyDDSlick: function () {

                this.ddSelectObj.ddslick('destroy');
                this.slickActive = false;
                this.ddSelectObj = this.element.find('#clients-ajax-filter-ddslick');

            },

            loadGroupsData: function () {

                var $groupsData = this.groupsData;

                this.buttons.each(function(i,o) {

                    var selectedCur = false;

                    if ($(o).hasClass('clients-ajax-dynamic-filter__btn--active'))
                        selectedCur = true;

                    $groupsData.push({
                        text: $(o).text(),
                        value: $(o).data('group'),
                        tagid: $(o).data('tagid'),
                        selected: selectedCur
                    });

                });

            },

            freezeGrid: function () {

                var freezeHeight = this.gridWrapper.outerHeight();

                this.gridWrapper.height(freezeHeight);

            },

            unFreezeGrid: function () {

                var grid = this.grid,
                    gridWrap = this.gridWrapper,
                    unFreezeHeight;

                setTimeout(function() {

                    unFreezeHeight = grid.outerHeight();
                    console.log(unFreezeHeight);

                    gridWrap.animate(
                        {height: unFreezeHeight}
                        , 330, function() {
                            gridWrap.css('height', 'auto');
                        }
                    );

                }, 330);

            },

            filtering: function (tagid) {

                this.pagenLoadState();

                this.freezeGrid();

                this.element.find('.clients-ajax-dynamic-filter-item').slideUp(330);

                this.currentGroup = tagid;

                this.filterGateway = this.buildFilterGatewayPath();

                this.pagen.off();

                $.get( this.filterGateway, this.proxy('onFilterGatewayResponse'));

                this.element.find('.clients-ajax-dynamic-filter__btn')
                    .removeClass('clients-ajax-dynamic-filter__btn--active');
                this.buttons.each(function(i,o) {
                    if ($(o).data('tagid') == tagid) {
                        $(o).addClass('clients-ajax-dynamic-filter__btn--active');
                    }
                });

                this.groupsData.forEach(function(o) {
                    if (o.tagid == tagid)
                        o.selected = true;
                    else
                        o.selected = false;
                });

                this.initAjaxPagen();

            },

            onFilterGatewayResponse: function(data, status, xhqrObj) {
                var unFreezeFn = this.unFreezeGrid;
                this.grid.html(data);
                this.element.find('.clients-ajax-dynamic-filter-item--ajax').slideDown(330);
                this.initAjaxPagen();
                //console.log(this.grid.outerHeight());
                this.unFreezeGrid();
            },

            buildFilterGatewayPath : function() {
                var uri = new URI();

                if(this.currentGroup !== 'all') {
                    uri.setSearch('TAGID', this.currentGroup)
                } else {
                    uri.setSearch('TAGID', 0)
                }

                uri
                    .setSearch('AJAX', 'Y')
                    .setSearch('KEY', this.ajaxKey)
                    .toString();
                return uri;
            },

            '.js-filter-tag click': function (o, e) {

                if (!o.hasClass('clients-ajax-dynamic-filter__btn--active')) {
                    this.filtering(o.data('tagid'));
                }

            },

            '{window} resize': function() {

                this.eventConstructor();

            }
        }
    );
}(jQuery));

(function ($) {
    App.Widgets.Home = App.Widgets.Home || {};

    App.Widgets.Home.ServiceListDynamicFilter = can.Control.extend(
        {
            pluginName: 'appWidgetHomeServiceListDynamicFilter',
            defaults: {}
        },
        {
            init: function () {

                this.currentGroup = 'all';
                this.groupsData = [];
                this.buttons = this.element.find('.service-list-dynamic-filter__btn');
                this.grid = this.element.find('.js-service-grid');
                this.ddSelectObj = this.element.find('#service-list-filter-ddslick');
                this.slickActive = false;

                this.loadGroupsData();

                this.initShuffle();

                this.eventConstructor();

            },

            eventConstructor: function () {

                if ($(window).width() <= 640 && !this.slickActive) {
                    this.initDDSlick();
                } else if($(window).width() > 640 && this.slickActive) {
                    this.destroyDDSlick();
                }
                this.grid.shuffle('update');

            },

            initShuffle: function () {

                this.grid.on('done.shuffle', function() {
                    $(this).shuffle('shuffle', 'all');
                });

                this.grid.shuffle({
                    itemSelector: '.js-service-section'
                });

            },

            initDDSlick: function () {

                var self = this;
                this.ddSelectObj.ddslick({
                    data: this.groupsData,
                    width: '100%',
                    background: '#aa3349',
                    selectText: "Все услуги",
                    onSelected: function (data) {
                        self.filtering(data.selectedData.value);
                        self.grid.shuffle('update');
                    }
                });
                this.slickActive = true;
                this.ddSelectObj = this.element.find('#service-list-filter-ddslick');

            },

            destroyDDSlick: function () {

                this.ddSelectObj.ddslick('destroy');
                this.slickActive = false;
                this.ddSelectObj = this.element.find('#service-list-filter-ddslick');

            },

            loadGroupsData: function () {

                var $groupsData = this.groupsData;

                this.buttons.each(function(i,o) {

                    var selectedCur = false;

                    if ($(o).hasClass('service-list-dynamic-filter__btn--active'))
                        selectedCur = true;

                    $groupsData.push({
                        text: $(o).text(),
                        value: $(o).data('group'),
                        selected: selectedCur
                    });

                });

            },

            filtering: function (group) {

                var filterGroup = this.currentGroup = group;

                this.grid.shuffle('shuffle', filterGroup);

                this.toggleServices(filterGroup);

                this.element.find('.service-list-dynamic-filter__btn')
                    .removeClass('service-list-dynamic-filter__btn--active');
                this.buttons.each(function(i,o) {
                    if ($(o).data('group') == filterGroup) {
                        $(o).addClass('service-list-dynamic-filter__btn--active');
                    }
                });

                this.groupsData.forEach(function(o) {
                    if (o.value == filterGroup)
                        o.selected = true;
                    else
                        o.selected = false;
                });

            },

            toggleServices: function (group) {
                var filterGroup = this.currentGroup = group;
                // Обрабатываем показ/скрытие конкретных услуг
                this.grid.find('.filtered li').each(function(i,o){
                    var bFound = false,
                        aGroup = $(o).data('groups');

                    for (var z in aGroup) {
                        if (aGroup[z] == filterGroup) {
                            $(o).addClass('service-list-dynamic-filter__item--active').removeClass('service-list-dynamic-filter__item--inactive');
                            bFound = true;
                        } else {
                            if (!bFound) {
                                $(o).addClass('service-list-dynamic-filter__item--inactive').removeClass('service-list-dynamic-filter__item--active');
                            }
                        }
                    }

                });

                // Обрабатываем показ/скрытие блоков услуг (левого/правого блока)
                this.grid.find('.filtered').each(function(i,o) {

                    $(o).find('.text-container').each(function(){
                        if ($(this).find('li.service-list-dynamic-filter__item--inactive').length == $(this).find('li').length) {
                            $(this).hide();
                        } else {
                            $(this).show();
                        }
                    });
                });
            },

            '.js-filter-tag click': function (o, e) {

                if (!o.hasClass('service-list-dynamic-filter__btn--active')) {
                    this.filtering(o.data('group'));
                }
                this.eventConstructor();

            },

            '{window} resize': function() {

                this.eventConstructor();

            }
        }
    );
}(jQuery));

(function ($) {
	App.Widgets.Landing = App.Widgets.Landing || {};
	App.Widgets.Landing.Oim05 = can.Control.extend(
		{
			pluginName: 'appWidgetOim05',
			defaults: {}
		},
		{
			init: function () {
				this.shuffleBtn = this.element.find('.js-employees-shuffle-btn');
				this.shuffleContainer = this.element.find('.js-employees-list');
				this.employee = this.element.find('.js-employee');
				this.aboutEmployee = this.element.find('.js-about-employee');

				var self = this;

				// Сортировка сотрудников в случайном порядке
				this.initShuffle();

				this.shuffleBtn.on('click', function() {
					self.onRandomize();
				});

				// Анимация фонового цвета блока подписи сотрудника
				this.employee.on('mouseenter', function() {
					$(this).find(self.aboutEmployee).css({
						backgroundColor: 'rgba(68, 77, 85, .9)'
					});
				});

				this.employee.on('mouseleave', function() {
					$(this).find(self.aboutEmployee).animate({
						backgroundColor: 'rgba(68, 77, 85, .7)'
					}, 500 );
				});

				// Слайдер
				this.slider = this.element.find('.js-main-slider');

				this.slider.bxSlider({
    				moveSlides: 1,
    				loop: true,
    				pager: false,
    				maxSlides: 9,
    				minSlides: 1,
    				easing: 'swing'
				});

				// Вакансии
				this.vacanciesList = this.element.find('.js-oim-05-vacancies')
				this.vacancyItem = this.element.find('.js-oim-05-vacancy');
				this.countVacancies();
			},

			initShuffle: function() {
				this.shuffleContainer.shuffle({
					itemSelector: '.js-employee-item'
				});
			},

			onRandomize: function () {
			  this.sortBy();
			},

			sortBy: function() {
				var sortOptions = { randomize: true };
				this.shuffleContainer.shuffle('sort', sortOptions);
			},

			countVacancies: function() {
				if(this.vacancyItem.length == 1) {
					this.vacanciesList.addClass('oim-05__vacancies-list--one-item')
				} else if(this.vacancyItem.length == 2) {
					this.vacancyItem.addClass('oim-05__vacancies-item--one-half');
					this.vacanciesList.addClass('oim-05__vacancies-list--two-items')
				} else if(this.vacancyItem.length == 3) {
					this.vacancyItem.addClass('oim-05__vacancies-item--one-third');
				}
			}
		}
  );
}(jQuery));
(function ($) {
	App.Widgets.WaNews = App.Widgets.WaNews || {};
	App.Widgets.WaNews.ShowMoreNews = can.Control.extend(
		{
			pluginName: 'appWidgetWaNews',
			defaults: {}
		},
		{
			init: function () {
				this.newsList = this.element.find('.js-news-list');
				this.actualNewsList = this.element.find('.wa-news__list');
				this.mainNewsItem = this.element.find('.js-main-news-item');
				this.newsItem = this.element.find('.js-news-item');
				this.showAllNewsbtn = this.element.find('.js-show-all-news-btn');
				this.showActualNewsbtn = this.element.find('.js-show-actual-news-btn');
				this.showBothNewsbtn = this.element.find('.js-show-both-news-btn');
				this.showMainNewsBtn = this.element.find('.js-show-main-news-btn');
				this.showNewsBtn = this.element.find('.js-show-news-btn');

				this.mainNewsItem.slice(0, 6).removeClass('wa-news__main-item--is-hidden').addClass('js-shown-item');;
				this.newsItem.slice(0, 6).removeClass('wa-news__item--is-hidden');

				this.newColClassName = 'wa-news__half-col';
				this.defaultContainer = this.element.find('.js-items-container');

				var DOMLine1 = document.createElement('div');
				this.oLine1 = $(DOMLine1);
				this.oLine1.addClass(this.newColClassName).appendTo(this.newsList);

				var DOMLine2 = document.createElement('div');
				this.oLine2 = $(DOMLine2);
				this.oLine2.addClass(this.newColClassName).appendTo(this.newsList);

				this.defaultContainer.hide();
				this.arrangeItemsControl();

				// определяем ключ доступа к компоненту по ajax
				this.ajaxKey = this.element.find('.js-template-name-ajax-key').val();
				this.actualAjaxKey = this.element.find('.js-actual-ajax-key').val();

				// запускаем наш ajax пейджер
				this.initAjaxPagen('news');
				this.initAjaxPagen('actual');
				this.initAjaxPagen('both');

			},

			arrangeItemsControl: function () {
				this.items = $('.js-shown-item');
				this.totalItems = this.items.size();
				this.itemsInCol = Math.ceil(this.totalItems/2);

				var itemsInCol = this.itemsInCol,
					$line1 = this.oLine1,
					$line2 = this.oLine2;

				this.items.each(function(i,o) {
					if((i+1) > itemsInCol)
						$(o).detach().appendTo($line2);
					else
						$(o).detach().appendTo($line1);
				});
			},


			'{window} resize': function() {
				if($('.wa-news__main-item--is-hidden').length == 0 && $('.wa-news__item--is-hidden').length == 0) {
					this.showAllNewsbtn.addClass('wa-news__btn--is-hidden');
				}

				if($('.wa-news__main-item--is-hidden').length == 0) {
					this.showMainNewsBtn.addClass('wa-news__btn--is-hidden');
				}

				if($('.wa-news__item--is-hidden').length == 0) {
					this.showNewsBtn.addClass('wa-news__btn--is-hidden');
				}
			},

			initAjaxPagen: function (type) {

				var o1, o2, allButton;
				o1 = $('.js-pager-data-container');
				o2 = $('.js-pager-data-container-actual');
				allButton = this.element.find('.js-show-both-news-btn');
				// наш блок, с кнопкой, находится внутри блока с элементами, мы будем заменять кнопку на элементы, полученные при ajax запросе
				this.navBlock = this.element.find('.js-template-name-show-more');

				// вешаем обработчик события на клик по кнопке
				if (type == 'news') {

					// наша кнопка "Показать ещё"
					this.pagen = this.element.find('.js-show-all-news-btn');

					// строим ссылку для запроса следующего набора элементов
					this.pagenGateway = this.buildPagenGatewayPath(type);

					this.on(this.pagen, 'click', 'showMoreEventStart');
					$('.js-show-both-news-btn').data('hide-news', (o1.length == 0)).data('news-finish', true);

				} else if (type == 'actual') {

					this.pagenActual = this.element.find('.js-show-actual-news-btn');

					// строим ссылку для запроса следующего набора элементов
					this.pagenActualGateway = this.buildPagenGatewayPath(type);

					this.on(this.pagenActual, 'click', 'showMoreEventStartActual');
					$('.js-show-both-news-btn').data('hide-actual', (o2.length == 0)).data('actual-finish', true);
				} else if (type == 'both') {

					// Проверяем, надо ли скрывать кнопку, и если нет, вешаем на неё обработчик клика
					if ( o1.length == 0 && o2.length == 0) {
						this.showAllNewsbtn.addClass('wa-news__btn--is-hidden');
					} else {
						this.on(allButton, 'click', 'triggerBoth');
					}
				}

				if ($('.js-show-both-news-btn').data('news-finish') && $('.js-show-both-news-btn').data('actual-finish')) {
					allButton.find('span').html('Показать ещё');
					allButton.find('.js-show-more-icon').removeClass('faa-spin animated');

					if($('.wa-news__main-item--is-hidden').length !== 0) {
						$('.wa-news__main-item--is-hidden').slideDown().removeClass('wa-news__main-item--is-hidden').addClass('js-shown-item');
					}
					if($('.wa-news__item--is-hidden').length !== 0) {
						$('.wa-news__item--is-hidden').slideDown().removeClass('wa-news__item--is-hidden');
					}

					this.arrangeItemsControl();

				}
				if ($('.js-show-both-news-btn').data('hide-news') && $('.js-show-both-news-btn').data('hide-actual')) {
					allButton.detach();
					allButton.addClass('wa-news__btn--is-hidden').removeClass('wa-news__btn--lg-show');
				}
			},

			triggerBoth: function() {
				$('.js-show-all-news-btn').click();
				$('.js-show-actual-news-btn').click();
				$('.js-show-both-news-btn').data('hide-news', false).data('hide-actual', false).data('news-finish', false).data('actual-finish',false);
			},

			buildPagenGatewayPath : function(type) {
				var uri = new URI(),
					o, key;

				if (type == 'news') {
					o = $('.js-pager-data-container');
					key = this.ajaxKey;
				} else if (type == 'actual') {
					o = $('.js-pager-data-container-actual');
					key = this.actualAjaxKey;
				}

				uri
					.setSearch('AJAX', 'Y')
					.setSearch('KEY', key)
					.setSearch('PAGEN_'+o.data('nav'), o.data('page'))
					.toString();
				return uri;

				// функция возвращает ссылку на страницу со следующим набором элементов и установленными ключами для доступа к компоненту по аякс
			},

			showMoreEventStart : function() {

				// обработчик клика по кнопке
				// выполняем какие-либо действия, происходящие во время ожидания загрузки, если требуется
				this.pagenLoadState('news');
				// стираем обработчик события на клик по кнопке
				this.pagen.off();
				// запрашиваем аякс, проксируем функцию, которая выполнится при получении ответа
				$.get( this.pagenGateway, this.proxy('onShowMoreGatewayResponse'));
			},

			showMoreEventStartActual : function() {

				// обработчик клика по кнопке
				// выполняем какие-либо действия, происходящие во время ожидания загрузки, если требуется
				this.pagenLoadState('actual');
				// стираем обработчик события на клик по кнопке
				this.pagenActual.off();
				// запрашиваем аякс, проксируем функцию, которая выполнится при получении ответа
				$.get( this.pagenActualGateway, this.proxy('onShowMoreGatewayResponseActual'));
			},

			pagenLoadState : function(type) {
				var pagen;
				pagen = this.showBothNewsbtn;
				// if (type == 'news') {
				// 	pagen = this.pagen;
				// } else if (type == 'actual') {
				// 	pagen = this.pagenActual;
				// }
				// например, заменяем текст на кнопке "Показать ещё" на "Загрузка..."
				pagen.find('span').html('Загрузка...');
				pagen.find('.js-show-more-icon').addClass('faa-spin animated');
			},

			onShowMoreGatewayResponse: function(data, status, xhqrObj) {

				var pagen = this.pagen;

				$('.js-pager-data-container').detach();
				// При получении ajax заменяем блок с нашей кнопкой на html ответа.
				// Логично, если блок с кнопкой находится в одном родителе с текущим списком элементов на странице, 
				// то полученные элементы просто добавятся в конец списка. 
				// Так же, если в ответе будет новая кнопка на следующую страницу, то она вновь добавится в конец.
				this.newsList.append(data);

				pagen.detach();

				// Если в php шаблоне была конструкция для цикла элементов, 
				// для их классов <?if($isAjaxRequest):?>template-name-item--ajax<?endif;?>, 
				// то есть для запрошенных по аякс элементов добавляется модификатор класса --ajax, 
				// и правила стилей указывают, что элементы этого класса 
				// с таким модификатором скрыты (css>display:hide), то по окончании их загрузки 
				// они появятся с анимацией.
				
//				this.element.find('.template-name-item--ajax').slideDown(330);
				// по окончании загрузки заново запускаем наш ajax пейджер, он будет готов к работе со следующей страницей, если в текущем ответе пришла новая кнопка "Показать ещё"
				this.initAjaxPagen('news');
			},

			onShowMoreGatewayResponseActual: function(data, status, xhqrObj) {

				var pagen = this.pagenActual;

				$('.js-pager-data-container-actual').detach();
				// При получении ajax заменяем блок с нашей кнопкой на html ответа.
				// Логично, если блок с кнопкой находится в одном родителе с текущим списком элементов на странице,
				// то полученные элементы просто добавятся в конец списка.
				// Так же, если в ответе будет новая кнопка на следующую страницу, то она вновь добавится в конец.
				this.actualNewsList.append(data);



				this.arrangeItemsControl();

				pagen.detach();
				// Если в php шаблоне была конструкция для цикла элементов,
				// для их классов <?if($isAjaxRequest):?>template-name-item--ajax<?endif;?>,
				// то есть для запрошенных по аякс элементов добавляется модификатор класса --ajax,
				// и правила стилей указывают, что элементы этого класса
				// с таким модификатором скрыты (css>display:hide), то по окончании их загрузки
				// они появятся с анимацией.

//				this.element.find('.template-name-item--ajax').slideDown(330);
				// по окончании загрузки заново запускаем наш ajax пейджер, он будет готов к работе со следующей страницей, если в текущем ответе пришла новая кнопка "Показать ещё"
				this.initAjaxPagen('actual');
			}
		}
	);
}(jQuery));

(function($){
    App.Widgets.Layout = App.Widgets.Layout || {};

    App.Widgets.Layout.BeforeIntelis = can.Control.extend(
        {
            pluginName: 'appWidgetsLayoutBeforeIntelis',
            defaults: {
            }
        },
        {
            init: function () {
            },
        }
    );
}(jQuery));

(function($){
    App.Widgets.Layout = App.Widgets.Layout || {};

    App.Widgets.Layout.CompaniesListDD = can.Control.extend(
        {
            pluginName: 'appWidgetsLayoutCompaniesListDD',
            defaults: {
            }
        },
        {
            init: function () {
                var self = this;
                this.openState = false;
                $('body').append('<div class="companies-list-dd__fixed-close"></div>');
                $('.companies-list-dd__fixed-close').click(function () {
                    self.hideList();
                });
            },

            showList: function() {
                this.element.addClass('companies-list-dd--opened');
                this.element.find('.companies-list-dd__list-wrap').show( 0, function() {
                    $(this).animate({
                        opacity: 1,
                    }, 330 );
                });
                this.openState = true;
                $('.companies-list-dd__fixed-close').show();
            },

            hideList: function() {
                this.element.removeClass('companies-list-dd--opened');
                this.element.find('.companies-list-dd__list-wrap').animate({
                    opacity: 0,
                }, 330, function() {
                    $(this).hide(0);
                });
                this.openState = false;
                $('.companies-list-dd__fixed-close').hide();
            },

            '.companies-list-dd__btn click': function () {
                if(this.openState)
                    this.hideList();
                else
                    this.showList();
            }
        }
    );
}(jQuery));

(function($){
    App.Widgets.Layout = App.Widgets.Layout || {};

    App.Widgets.Layout.MainMenu = can.Control.extend(
        {
            pluginName: 'appWidgetsLayoutMainMenu',
            defaults: {
                slideAllow: true
            }
        },
        {
            init: function () {
                this.smShowBut = this.element.find('.js-main-ham');
            },

            '{window} resize': function() {
                if ($(window).width() > 698) {
                    this.smShowBut.find('.c-hamburger').removeClass('is-active');
                    this.smShowBut.parent().find('.main-menu').removeClass('is-active-sm').removeAttr('style');
                }
            },

            'toggleSmth': function(someItem, someDir, someSpeed) {
                if (this.options.slideAllow) {
                    $(someItem).toggle('slide', {direction: someDir || 'up'}, someSpeed || 300);
                    this.optionsslideAllow = false;
                }
                setTimeout(function () {
                    this.optionsslideAllow = true
                }, 500);
            },

            '.js-main-ham click': function(el, ev) {
                el.find('.c-hamburger').toggleClass('is-active');
                el.parent().find('.main-menu').toggleClass('is-active-sm');
                this.toggleSmth('.main-menu', 'up', 500);
            },
        }
    );
}(jQuery));

(function ($) {
	App.Widgets.SectionNav = App.Widgets.SectionNav || {};
	App.Widgets.SectionNav = can.Control.extend(
		{
			pluginName: 'appWidgetSectionNav',
			defaults: {}
		},
		{
			init: function () {
				this.sectionNavLink = this.element.find('.js-section-nav__link');
				this.on(this.sectionNavLink, 'click',  'activeOnClick')
			},

			activeOnClick: function(el, ev) {
				this.sectionNavLink.removeClass('active');
				el.addClass('active');
			}
		}
	);
}(jQuery));
(function ($) {
    App.Widgets.Modules = App.Widgets.Modules || {};
    App.Widgets.Modules.CallbackForm = can.Control.extend(
        {
            pluginName: 'appWidgetModulesCallbackForm',
            defaults: {}
        },
        {
            init: function () {
                this.modalForm = this.element.find('.js-form__modal-form');
                this.modalSubmitBtn = this.element.find('.js-form__submit-btn2');
                this.fakeFancy = this.element.find('.fancy-code');
                this.formName = this.modalForm.attr('name');

                this.on(this.modalForm, 'submit', 'processForm');

                this.fakeFancy.fancybox({
                    content: '<div class="wa-form wa-form--success"><div class="wa-form__title js-form__title">Спасибо за обращение в WiseAdvice</div><p>В ближайшее время мы вам перезвоним.</p></div>',
                    padding: 0,
                    wrapCSS: 'popup-success-wrap',
                    margin: ($(window).width() > 768) ? 20 : 5,
                    beforeShow: function() {
                        $('.fancybox-inner').addClass('overflow-visible');
                    }
                });
            },

            processForm: function(el, ev) {

                var formData = new FormData(el[0]),
                    ob = this;

                $.ajax({url:"/ajax/callback-ajax.php", type: "POST", data: formData, processData: false, contentType: false, dataType: 'json'}).done(function(data){
                    if (data['STATUS'] == 'OK') {

                        if (typeof GTMpushEventSendForm == "function"){
                            GTMpushEventSendForm(ob.formName);
                        }

                        ob.fakeFancy.click();
                    } else {
                        /** TODO Надо выводить popup с ошибкой! */
                        console.log(data);
                    }
                }).error(function(){
                    /** TODO Надо выводить popup с ошибкой! */
                    console.log(data);
                });
            },
        }
    );
}(jQuery));
(function ($) {
    App.Widgets.Modules = App.Widgets.Modules || {};
    App.Widgets.Modules.ContactForm = can.Control.extend(
        {
            pluginName: 'appWidgetModulesContactForm',
            defaults: {}
        },
        {
            init: function () {
                this.contactForm = this.element.find('.js-contact-form');
                this.contactSubmitBtn = this.element.find('.js-form__feedback-submit-btn-ex');
                this.feedbackFormWrap = this.element.parent('.js-form').find('.js-form__feedback-form-wrap');
                this.formSuccess = this.element.parent('.js-form').find('.wa-form--success');
                this.formName = this.contactForm.attr('name');

                console.log(this.formSuccess);
                console.log(this.feedbackFormWrap);

                this.on(this.contactForm, 'submit', 'processForm');
            },

            processForm: function(el, ev) {

                ev.preventDefault();

                var formData = new FormData(el[0]),
                    ob = this;

                $.ajax({url:"/ajax/contact-ajax.php", type: "POST", data: formData, processData: false, contentType: false, dataType: 'json'}).done(function(data){
                    if (data['STATUS'] == 'OK') {

                        if (typeof GTMpushEventSendForm == "function"){
                            GTMpushEventSendForm(ob.formName);
                        }

                        ob.feedbackSuccessMessage();

                    } else {
                        /** TODO Надо выводить popup с ошибкой! */
                        console.log(data);
                    }
                }).error(function(){
                    /** TODO Надо выводить popup с ошибкой! */
                    console.log(data);
                });
            },
            
            feedbackSuccessMessage: function(el, ev) {
                this.feedbackFormWrap.fadeOut(250, 'linear');
                this.formSuccess.fadeIn(300, 'linear');
            },
        }
    );
}(jQuery));
(function ($) {
    App.Widgets.Modules = App.Widgets.Modules || {};
    App.Widgets.Modules.FormFile = can.Control.extend(
        {
            pluginName: 'appWidgetModulesFormFile',
            defaults: {}
        },
        {
            init: function () {
              $("input.form-file").change(function() {
                  var filename = $(this).val();
                  if (filename.substring(3,11) == 'fakepath' )    {
                      filename = filename.substring(12);
                  }
                  $(".wa-form-file__label .dotted-link").html(filename);
                  console.log(filename);
              });

              $(".wa-form-file__label").click(function() {
                  $(".form-file").trigger("click");
              });
            }
        }
    );
}(jQuery));
(function ($) {
    App.Widgets.Modules = App.Widgets.Modules || {};
    App.Widgets.Modules.FormValidation = can.Control.extend(
        {
            pluginName: 'appWidgetModulesFormValidation',
            defaults: {}
        },
        {
            init: function () {

                $.validate({
                    modules : 'toggleDisabled',
                    disabledFormFilter : this.element,
                    showErrorDialogs : false,
                    form: this.element,
                    borderColorOnError : '#AA3349'
                });
            },

        }
    );
}(jQuery));
(function ($) {
	App.Widgets.Modules = App.Widgets.Modules || {};
	App.Widgets.Modules.Map = can.Control.extend(
		{
			pluginName: 'appWidgetModulesMap',
			defaults: {}
		},
		{
			init: function () {
				ymaps.ready(init);

				function init () {
				    var myMap = new ymaps.Map("map", {
				            center: [55.71808182563174,37.797225171997056],
				            zoom: 16,
				            controls: ['zoomControl']
				        },
				        {
				        	suppressMapOpenBlock: true
				        },
				        {
				            searchControlProvider: 'yandex#search'
				        }),

				    	MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
							'<div class="wa-map__balloon">' +
						    '<a class="wa-map__balloon-close" href="#"></a>' +
						    '<div class="wa-map__balloon-arrow"></div>' +
						    '<div class="wa-map__balloon-inner">' +
						    '$[[options.contentLayout observeSize maxWidth=336]]' +
						    '</div>' +
						    '</div>', {
						    /**
						     * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
						     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
						     * @function
						     * @name build
						     */

						    build: function () {
						        this.constructor.superclass.build.call(this);

						        this._$element = $('.wa-map__balloon', this.getParentElement());

						        this.applyElementOffset();

						        this._$element.find('.wa-map__balloon-close')
						            .on('click', $.proxy(this.onCloseClick, this));
						    },

						    /**
						     * Удаляет содержимое макета из DOM.
						     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
						     * @function
						     * @name clear
						     */
						    clear: function () {
						        this._$element.find('.wa-map__balloon-close')
						            .off('click');

						        this.constructor.superclass.clear.call(this);
						    },

						    /**
						     * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
						     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
						     * @function
						     * @name onSublayoutSizeChange
						     */
						    onSublayoutSizeChange: function () {
						        MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

						        if(!this._isElement(this._$element)) {
						            return;
						        }

						        this.applyElementOffset();

						        this.events.fire('shapechange');
						    },

						    /**
						     * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
						     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
						     * @function
						     * @name applyElementOffset
						     */
						    applyElementOffset: function () {
						        this._$element.css({
						            left: -(this._$element[0].offsetWidth / 2),
						            top: -(this._$element[0].offsetHeight + this._$element.find('.wa-map__balloon-arrow')[0].offsetHeight)
						        });
						    },

						    /**
						     * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
						     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
						     * @function
						     * @name onCloseClick
						     */
						    onCloseClick: function (e) {
						        e.preventDefault();

						        this.events.fire('userclose');
						    },

						    /**
						     * Используется для автопозиционирования (balloonAutoPan).
						     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
						     * @function
						     * @name getClientBounds
						     * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
						     */
						    getShape: function () {
						        if(!this._isElement(this._$element)) {
						            return MyBalloonLayout.superclass.getShape.call(this);
						        }

						        var position = this._$element.position();

						        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
						            [position.left, position.top], [
						                position.left + this._$element[0].offsetWidth,
						                position.top + this._$element[0].offsetHeight + this._$element.find('.wa-map__balloon-arrow')[0].offsetHeight
						            ]
						        ]));
						    },

						    /**
						     * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
						     * @function
						     * @private
						     * @name _isElement
						     * @param {jQuery} [element] Элемент.
						     * @returns {Boolean} Флаг наличия.
						     */
						    _isElement: function (element) {
						        return element && element[0] && element.find('.wa-map__balloon-arrow')[0];
						    }
						}),

						MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
				            '<div class="wa-map__balloon-title">$[properties.balloonHeader]</div>' +
				            '<div class="wa-map__balloon-content">$[properties.balloonContent]</div>'
				        ),

				        myPlacemark = new ymaps.Placemark([55.71854913102785,37.79192976867827], {
				            balloonHeader: 'WiseAdvice Consulting Group',
				            balloonContent: [
								'<p>Рязанский проспект, д.75, корп.4<br> Клиентский отдел находится в первой башне (ближней к шлагбауму) на 7-м этаже</p>',
								'<p>пн-пт, 10:00—19:00</p>',
								'<div class="wa-map__balloon-phone">+7 495 995-82-58</div>'
				            ].join('')
				        }, {
				        	balloonShadow: false,
				            balloonLayout: MyBalloonLayout,
				            balloonContentLayout: MyBalloonContentLayout,
				            balloonPanelMaxMapArea: 0,
				            iconLayout: 'default#image',
				            iconImageHref: '/local/templates/main/images/wa-map-mark.png',
				            iconImageSize: [67, 51],
				            zIndex: 99,
				           	zIndexActive: 99
				        });

				    myMap.behaviors.disable('scrollZoom');
				    // маркер WA
				    myMap.geoObjects.add(myPlacemark);
				    myPlacemark.balloon.open();

				    var parkingControl = {
				        	balloonShadow: false,
			            iconLayout: 'default#image',
			            iconImageHref: '/local/templates/main/images/wa-map-mark-parking.png',
			            iconImageSize: [67, 53],
			            zIndex: 98
				        };

				   	myPlacemarkParking1 = new ymaps.Placemark([55.719134,37.793411], {}, parkingControl);
				   	myMap.geoObjects.add(myPlacemarkParking1);
				   	myPlacemarkParking2 = new ymaps.Placemark([55.719864,37.792456], {}, parkingControl);
				   	myMap.geoObjects.add(myPlacemarkParking2);
				   	myPlacemarkParking3 = new ymaps.Placemark([55.720467,37.792064], {}, parkingControl);
				   	myMap.geoObjects.add(myPlacemarkParking3);
				   	myPlacemarkParking4 = new ymaps.Placemark([55.718849,37.791661], {}, parkingControl);
				   	myMap.geoObjects.add(myPlacemarkParking4);

				    myPlacemarkParking1.options.set('visible', false);
				    myPlacemarkParking2.options.set('visible', false);
				    myPlacemarkParking3.options.set('visible', false);
				    myPlacemarkParking4.options.set('visible', false);

				    $('.js-map-placemark-control').click(function () {
				    	var placemarkID = $(this).data('id');

				    	if (placemarkID == 'drive') {
				    		myPlacemark.balloon.close();
				    		myPlacemarkParking1.options.set('visible', true);
						    myPlacemarkParking2.options.set('visible', true);
						    myPlacemarkParking3.options.set('visible', true);
						    myPlacemarkParking4.options.set('visible', true);
				    	} else if (placemarkID == 'walk') {
				    		myPlacemark.balloon.open();
				    		myPlacemarkParking1.options.set('visible', false);
						    myPlacemarkParking2.options.set('visible', false);
						    myPlacemarkParking3.options.set('visible', false);
						    myPlacemarkParking4.options.set('visible', false);
				    	}
				    });
				}

				function setCenter() {
					myMap.setCenter([57.767265, 40.925358]);
				}
				window.addEventListener('resize', function() {
					myMap.setCenter([57.767265, 40.925358]);
				});
			}
		}
	);
}(jQuery));
(function ($) {
	App.Widgets.Modules = App.Widgets.Modules || {};
	App.Widgets.Modules.Parallax = can.Control.extend(
		{
			pluginName: 'appWidgetModulesParallax',
			defaults: {}
		},
		{
			init: function () {
				this.parallaxWindow = this.element.find('.js-parallax-window');
				this.parallaxOffsetTop = this.element.offset().top;

				this.scrollYTop = $(window).scrollTop();
				this.windowHeight = $(window).height();
				this.scrollYBottom = this.scrollYTop + this.windowHeight;
				this.scrollYNew = (this.parallaxOffsetTop - this.scrollYBottom) + 300;
				this.parallaxparallaxPositionY;

				var self = this;

				if(this.scrollYBottom > this.parallaxOffsetTop || this.element.hasClass('deal-home')) {
					$(window).on('scroll', parallax);
					requestAnimationFrame(animate);
				} else {
					$(window).on('scroll', parallaxNew);
					requestAnimationFrame(animateNew);
				}

				function parallax(e) {
					self.scrollYTop = $(window).scrollTop();
					self.parallaxPositionY = self.scrollYTop / 13;
				}

				function parallaxNew(e) {
					self.scrollYTop = $(window).scrollTop();
					self.scrollYBottom = self.scrollYTop + self.windowHeight;
					self.scrollYNew = (self.parallaxOffsetTop - self.scrollYBottom) + 300;
					self.parallaxPositionY = self.scrollYNew / 13;
				}

				function animate() {
					self.parallaxWindow.css({'transform': 'translateY(-' + self.parallaxPositionY + 'px)'});

					if (self.parallaxPositionY >= 80) {
						self.parallaxWindow.css({'transform': 'translateY(-80px)'});
					}

					requestAnimationFrame(animate);
				}

				function animateNew() {
					self.parallaxWindow.css({'transform': 'translateY(' + self.parallaxPositionY + 'px)'});

					if (self.parallaxPositionY > 0) {
						self.parallaxWindow.css({'transform': 'translateY(0px)'});
					} else if (self.parallaxPositionY < -60) {
						self.parallaxWindow.css({'transform': 'translateY(-60px)'});
					}

					requestAnimationFrame(animateNew);
				}
			}
		}
	);
}(jQuery));




(function ($) {
  App.Widgets.WaPrint = App.Widgets.WaPrint || {};
  App.Widgets.WaPrint.Print = can.Control.extend(
    {
      pluginName: 'appWidgetWaPrint',
      defaults: {}
    },
    {
      init: function () {},
      '.js-print-btn click': function(el, ev) {
          ev.preventDefault();

          var printElement = el.data('print');
          $('.'+printElement).print();
      },
    }
  );
}(jQuery));


(function ($) {
	App.Widgets.Modules = App.Widgets.Modules || {};
	App.Widgets.Modules.ScrollTo = can.Control.extend(
		{
			pluginName: 'appWidgetModulesScrollTo',
			defaults: {}
		},
		{
			init: function () {
				this.animationTime = 1500;
				this.on(this.element, 'click', 'scrollTo');
			},

			scrollTo: function(el, ev) {
				ev.preventDefault();

				this.targetId = el.attr('href').substring(1);
				this.targetObject = $('#' + this.targetId);

		        if(this.element.hasClass('js-scroll-to--pool-optimization')) {
		        	this.animationTime = 800;

		        	if(!this.targetObject.hasClass('open')) {
		        		this.targetObject.click();
		        	}
		        }

				$('html, body').animate({
		            scrollTop: this.targetObject.offset().top
		        }, this.animationTime);
			}
		}
	);
}(jQuery));
(function ($) {
	App.Widgets.Modules = App.Widgets.Modules || {};
	App.Widgets.Modules.SlideToggle = can.Control.extend(
		{
			pluginName: 'appWidgetModulesSlideToggle',
			defaults: {}
		},
		{
			init: function () {
				this.slideToggleBtn = this.element.find('.js-slide-toggle__btn');
				this.on(this.slideToggleBtn, 'click', 'slideToggleOnClick');
			},

			slideToggleOnClick: function(el, ev) {
				if(this.element.hasClass('js-slide-toggle--accordion')) {
					el.toggleClass('open');
					el.next('.js-slide-toggle__target').slideToggle(225, 'linear');
				} else {
					el.siblings('.js-slide-toggle__target').slideToggle(450, 'linear');
				}

			}
		}
	);
}(jQuery));
(function ($) {
    App.Widgets.Modules = App.Widgets.Modules || {};
    App.Widgets.Modules.StickyScroll = can.Control.extend(
        {
            pluginName: 'appWidgetModulesStickyScroll',
            defaults: {}
        },
        {
            init: function () {
                this.topSpace = 30;
            },

            '{window} scroll': function() {
                var windowTop = $(window).scrollTop();
                this.stickyPoint = this.element.find('.js-sticky-scroll__sticky-point').offset().top;
                this.stickyElement = this.element.find('.js-sticky-scroll__sticky-element');
                this.stickyElementTop = this.stickyElement.offset().top;
                this.stickyElementHeight = this.stickyElement.outerHeight();
                this.stickyBlockerTop = this.element.next().offset().top;
                this.stickyStopPoint = this.stickyBlockerTop - this.stickyElementHeight

                if(this.element.hasClass('js-sticky-scroll--active')) {
                    if(windowTop > this.stickyPoint) {
                        this.stickyElement.addClass('wa-vacancy__features--sticky');
                    } else {
                        this.stickyElement.removeClass('wa-vacancy__features--sticky');
                    }

                    if (this.stickyStopPoint < windowTop) {
                        this.diff = this.stickyStopPoint - windowTop - 70;
                        this.stickyElement.css({top: this.diff});
                    } else {
                        this.stickyElement.css({top: this.topSpace});
                    }
                } else {
                    this.stickyElement.removeClass('wa-vacancy__features--sticky');
                }
            },

            '{window} resize': function() {
                if($(window).width() < 750) {
                    this.element.removeClass('js-sticky-scroll--active');
                } else {
                    this.element.addClass('js-sticky-scroll--active');
                }
            },

            '{window} load': function() {
                if($(window).width() < 750) {
                    this.element.removeClass('js-sticky-scroll--active');
                } else {
                    this.element.addClass('js-sticky-scroll--active');
                }
            }
        }
    );
}(jQuery));
(function ($) {
    App.Widgets.Modules = App.Widgets.Modules || {};
    App.Widgets.Modules.Form = can.Control.extend(
        {
            pluginName: 'appWidgetModulesForm',
            defaults: {}
        },
        {
            init: function () {
                this.modalForm = this.element.find('.js-form__modal-form');
                this.feedbackForm = this.element.find('.js-form__feedback-form');
                this.feedbackFormWrap = this.element.find('.js-form__feedback-form-wrap')
                this.modalSubmitBtn = this.element.find('.js-form__submit-btn');
                this.feedbackSubmitBtn = this.element.find('.js-form__feedback-submit-btn');
                this.formSuccess = this.element.find('.js-form__success');

                this.on(this.modalForm, 'submit', 'successMessage');
/*                this.on(this.feedbackForm, 'submit', 'feedbackSuccessMessage'); */

                this.modalSubmitBtn.fancybox({
                    content: '<div class="wa-form wa-form--success"><div class="wa-form__title js-form__title">Спасибо за обращение в WiseAdvice</div><p>В ближайшее время мы вам перезвоним.</p></div>',
                    padding: 0,
                    wrapCSS: 'popup-success-wrap',
                    margin: ($(window).width() > 768) ? 20 : 5,
                    beforeShow: function() {
                        $('.fancybox-inner').addClass('overflow-visible');
                    }
                });
            },

            successMessage: function(el, ev) {
                ev.preventDefault();
            },

            feedbackSuccessMessage: function(el, ev) {
                this.feedbackFormWrap.fadeOut(250, 'linear');
                this.formSuccess.fadeIn(300, 'linear');
                ev.preventDefault();
            },
        }
    );
}(jQuery));
(function ($) {
	App.Widgets.Modules = App.Widgets.Modules || {};
	App.Widgets.Modules.Tabs = can.Control.extend(
		{
			pluginName: 'appWidgetModulesTabs',
			defaults: {}
		},
		{
			init: function () {
			    this.tab = this.element.find('.js-tabs__tab');
			    this.tabContent = this.element.find('.js-tabs__content');

			    this.on(this.tab, 'click', 'switchTabOnClick');
			},

			switchTabOnClick: function(el, ev) {
				this.tab.removeClass('active');
				el.addClass('active');

				var targetId = el.attr('data-id');
				this.tabContent.removeClass('show').addClass('hide').removeClass('active');

				$('#' + targetId).removeClass('hide').addClass('show').delay(150).addClass('active');
			}
		}
	);
}(jQuery));
(function ($) {
    App.Widgets.Modules = App.Widgets.Modules || {};

    App.Widgets.Modules.WANewsListMasonry = can.Control.extend(
        {
            pluginName: 'appWidgetModulesWANewsListMasonry',
            defaults: {}
        },
        {
            init: function () {

                this.maxMediumWidth = 849;
                this.mediumWidthItems = 4;
                this.maxSmallWidth = 749;
                this.smallWidthItems = 3;
                this.newColClassName = 'wa-news-list-2-3-col-grid__1-2-col clearfix';
                this.defaultContainer = this.element.find('.js-items-container');
                this.items = this.defaultContainer.find('.js-item');
                this.totalItems = this.items.size();
                this.itemsInCol = Math.ceil(this.totalItems/2);

                var DOMLine1 = document.createElement('div');
                this.oLine1 = $(DOMLine1);
                this.oLine1.addClass(this.newColClassName).appendTo(this.element);

                var DOMLine2 = document.createElement('div');
                this.oLine2 = $(DOMLine2);
                this.oLine2.addClass(this.newColClassName).appendTo(this.element);

                this.defaultContainer.hide();

                this.arrangeItemsControl();

            },

            arrangeItemsControl: function () {

                if ($(window).width() <= this.maxSmallWidth) {
                    return this.arrangeItemsSmallWidth();
                } else if ($(window).width() <= this.maxMediumWidth) {
                    return this.arrangeItemsMediumWidth();
                } else {
                    return this.arrangeItemsFullWidth();
                }

            },

            arrangeItemsSmallWidth: function () {

                var $line1 = this.oLine1,
                    itemsMapSmall = $(this.items).slice(0, this.smallWidthItems);

                this.items.each(function(i,o) {
                    if(i+1 <= itemsMapSmall.size()) {
                        $(o).detach().appendTo($line1);
                    } else {
                        $(o).detach();
                    }
                });

            },

            arrangeItemsMediumWidth: function () {

                var $line1 = this.oLine1,
                    $line2 = this.oLine2,
                    itemsMapMedium = $(this.items).slice(0, this.mediumWidthItems),
                    itemsInColMedium = Math.ceil(itemsMapMedium.size()/2);

                this.items.each(function(i,o) {
                    if(i+1 <= itemsMapMedium.size()) {
                        if ((i + 1) > itemsInColMedium)
                            $(o).detach().appendTo($line2);
                        else
                            $(o).detach().appendTo($line1);
                    } else {
                        $(o).detach();
                    }
                });

            },

            arrangeItemsFullWidth: function () {

                var itemsInCol = this.itemsInCol,
                    $line1 = this.oLine1,
                    $line2 = this.oLine2;

                this.items.each(function(i,o) {
                    if((i+1) > itemsInCol)
                        $(o).detach().appendTo($line2);
                    else
                        $(o).detach().appendTo($line1);
                });

            },

            '{window} resize': function() {

                this.arrangeItemsControl();

            }
        }
    );
}(jQuery));

/**
 * Created by Web.Inkoder on 14.11.2016.
 */

(function ($) {
    App.Widgets.Modules = App.Widgets.Modules || {};
    App.Widgets.Modules.Services = can.Control.extend(
        {
            pluginName: 'appWidgetServicesScroll',
            defaults: {}
        },
        {
            init: function () {
                if (typeof $('.js-scroll-nav').offset() != 'undefined') {
                    var iTop = $('.js-scroll-nav').offset().top - 40;
                    $('html, body').animate({'scrollTop': iTop}, 150, 'swing');
                }
            },

        }
    );
}(jQuery));
(function ($) {
    App.Payment = App.Widgets.Payment || {};
    App.Payment.AjaxFormYa = can.Control.extend(
        {
            pluginName: 'appPaymentAjaxFormYa',
            defaults: {
                gateway: '/ajax/payment-ajax-ya.php'
            }
        },
        {
            init: function () {
                this.AjaxForm = this.element.find('form');
                this.on(this.AjaxForm, 'submit', 'submitForm');
            },

            submitForm: function(el, ev) {
                ev.preventDefault();

                var postData = this.AjaxForm.serializeArray();

                $.post(this.options.gateway, postData, function(){})
                    .done(this.proxy('doneSubmit'))
                    .fail(this.proxy('failSubmit'));

            },

            failSubmit: function (res){
                alert('К сожалению, мы не смогли выполнить ваш запрос. Пожалуйста, перезагрузите страницу и попробуйте ещё раз.')
                console.error(res);
            },

            doneSubmit: function (res){
                $.fancybox({
                    padding: 0,
                    wrapCSS: 'popup-form-wrap',
                    margin: ($(window).width() > 768) ? 20 : 5,
                    'content' : $(res)
                });
            }
        }
    );
}(jQuery));
(function ($) {
    App.Payment = App.Widgets.Payment || {};
    App.Payment.AjaxForm = can.Control.extend(
        {
            pluginName: 'appPaymentAjaxForm',
            defaults: {
                gateway: '/ajax/payment-ajax.php'
            }
        },
        {
            init: function () {
                this.AjaxForm = this.element.find('form');
                this.on(this.AjaxForm, 'submit', 'submitForm');
            },

            submitForm: function(el, ev) {
                ev.preventDefault();

                var postData = this.AjaxForm.serializeArray();

                $.post(this.options.gateway, postData, function(){})
                    .done(this.proxy('doneSubmit'))
                    .fail(this.proxy('failSubmit'));

            },

            failSubmit: function (res){
                alert('К сожалению, мы не смогли выполнить ваш запрос. Пожалуйста, перезагрузите страницу и попробуйте ещё раз.')
                console.error(res);
            },

            doneSubmit: function (res){
                $.fancybox({
                    padding: 0,
                    wrapCSS: 'popup-form-wrap',
                    margin: ($(window).width() > 768) ? 20 : 5,
                    'content' : $(res)
                });
            }
        }
    );
}(jQuery));
(function ($) {
    App.Payment = App.Widgets.Payment || {};
    App.Payment.InfoformYa = can.Control.extend(
        {
            pluginName: 'appPaymentInfoformYa',
            defaults: {
                gateway: '/ajax/payment-ajax-ya.php'
            }
        },
        {
            init: function () {
                this.infoForm = this.element.find('form');
                this.on(this.infoForm, 'submit', 'processForm');
            },

            processForm: function(el, ev) {

                ev.preventDefault();

                var postData = { action: 'getForm', sum: this.element.find('#pay_sum').val() };

                $.post(this.options.gateway, postData, function(){})
                    .done(this.proxy('doneSubmit'))
                    .fail(this.proxy('failSubmit'));

            },

            failSubmit: function (res){
                alert('К сожалению, мы не смогли выполнить ваш запрос. Пожалуйста, перезагрузите страницу и попробуйте ещё раз.')
                console.error(res);
            },

            doneSubmit: function (res){
                $.fancybox({
                    padding: 0,
                    wrapCSS: 'popup-form-wrap',
                    margin: ($(window).width() > 768) ? 20 : 5,
                    beforeShow: function() {
                        window.application.installController('.js-form-validation', 'appWidgetModulesFormValidation');
                        window.application.installController('.js-form-ajax-payment-ya', 'appPaymentAjaxFormYa');
                    },
                    'content' : $(res)
                });
            }
        }
    );
}(jQuery));
(function ($) {
    App.Payment = App.Widgets.Payment || {};
    App.Payment.Infoform = can.Control.extend(
        {
            pluginName: 'appPaymentInfoform',
            defaults: {
                gateway: '/ajax/payment-ajax.php'
            }
        },
        {
            init: function () {
                this.infoForm = this.element.find('form');
                this.on(this.infoForm, 'submit', 'processForm');
            },

            processForm: function(el, ev) {

                ev.preventDefault();

                var postData = { action: 'getForm', sum: this.element.find('#pay_sum').val() };

                $.post(this.options.gateway, postData, function(){})
                    .done(this.proxy('doneSubmit'))
                    .fail(this.proxy('failSubmit'));

            },

            failSubmit: function (res){
                alert('К сожалению, мы не смогли выполнить ваш запрос. Пожалуйста, перезагрузите страницу и попробуйте ещё раз.')
                console.error(res);
            },

            doneSubmit: function (res){
                $.fancybox({
                    padding: 0,
                    wrapCSS: 'popup-form-wrap',
                    margin: ($(window).width() > 768) ? 20 : 5,
                    beforeShow: function() {
                        window.application.installController('.js-form-validation', 'appWidgetModulesFormValidation');
                        window.application.installController('.js-form-ajax-payment', 'appPaymentAjaxForm');
                    },
                    'content' : $(res)
                });
            }
        }
    );
}(jQuery));
(function ($) {
	App.Widgets.Sliders = App.Widgets.Sliders || {};

	App.Widgets.Sliders.Career = can.Control.extend({
		pluginName: 'appWidgetSlidersCareer',
		defaults: {}
	}, {
		init: function () {
			this.careerSlider = this.element.find('.js-slider-career-bx');
			this.buildSlider();
		},
		buildSlider: function () {
			this.careerSlider.bxSlider({
				adaptiveHeight: false,
				speed: 600,
				slideMargin: 0,
				easing: 'swing',
				responsive: true,
				pager: false,
				auto: false,
				pause: 4000,
				autoStart: false,
				autoHover: true,
				autoDelay: 0,
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 0,
				controls: false
			});
		},
		'.js-slider-career-bx-next click': function (o, e) {
			this.careerSlider.goToNextSlide();
		},
		'.js-slider-career-bx-prev click': function (o, e) {
			this.careerSlider.goToPrevSlide();
		}
	});
}(jQuery));

(function ($) {
    App.Widgets.Sliders = App.Widgets.Sliders || {};

    App.Widgets.Sliders.Clients = can.Control.extend(
        {
            pluginName: 'appWidgetSlidersClients',
            defaults: {}
        },
        {
            init: function () {

                this.wrapContainer = this.element.find('.js-slider-clients-container');
                this.slideLine = this.element.find('.slider-clients-container__col');
                this.sliderElements = this.element.find('.js-slider-clients-item');
                this.sliderObj = {};
                this.sliderSizeMap = {
                    1 : 1,
                    460 : 2,
                    650 : 3,
                    840 : 4,
                    1030 : 5
                };
                this.sliderWidthMap = {
                    5 : 956,
                    4 : 766,
                    3 : 574,
                    2 : 383,
                    1 : 285
                };
                this.slideWidth = 0;
                this.curSplitLineItems = 0;
                this.splitLineItems = 5;

                this.checkViewportSlider();

                this.buildSlider();

            },

            buildSlider: function() {

                this.sliderElements.detach();

                var $slideLine = this.slideLine,
                    slideDirect = 'horizontal',
                    splitLineItems = this.splitLineItems,
                    splitColItems,
                    $spareItems = $(),
                    $nativeSlide,
                    f = 0,
                    curLineBlocks = 0,
                    curSlideBlocks = 0;

                if(splitLineItems < 2) {
                    splitLineItems = 2;
                }

                if(splitLineItems <= 2) {
                    splitColItems = splitLineItems*3;
                } else {
                    splitColItems = splitLineItems * 2;
                }

                $nativeSlide = $(document.createElement('div')).addClass('slider-clients-container__native-slide');

                this.sliderElements.each(function(i,o) {

                    if ($spareItems.size() > 0) {

                        $spareItems.each(function(is,os) {
                            var bside = 0;
                            if ($(os).data('wide')) {
                                bside = 2;
                            } else {
                                bside = 1;
                            };

                            if (curLineBlocks + bside > splitLineItems) {
                                return;
                            } else {
                                curLineBlocks = curLineBlocks + bside;
                                curSlideBlocks = curSlideBlocks + bside;
                                $(os).appendTo($nativeSlide);
                                $spareItems = $spareItems.not($(os));
                            }

                            if (curLineBlocks == splitLineItems)
                                curLineBlocks = 0;

                            if (curSlideBlocks == splitColItems) {
                                curSlideBlocks = 0;
                                $nativeSlide.appendTo($slideLine);
                                $nativeSlide = $(document.createElement('div')).addClass('slider-clients-container__native-slide');
                            }
                        });

                    }

                    var bside = 0;
                    f++;
                    if ($(o).data('wide')) {
                        bside = 2;
                    } else {
                        bside = 1;
                    };

                    if (curLineBlocks + bside > splitLineItems) {
                        $spareItems = $spareItems.add($(o));
                    } else {
                        curLineBlocks = curLineBlocks + bside;
                        curSlideBlocks = curSlideBlocks + bside;
                        $(o).appendTo($nativeSlide);
                    }

                    if (curLineBlocks == splitLineItems)
                        curLineBlocks = 0;

                    if (curSlideBlocks == splitColItems) {
                        curSlideBlocks = 0;
                        $nativeSlide.appendTo($slideLine);
                        $nativeSlide = $(document.createElement('div')).addClass('slider-clients-container__native-slide');
                    }

                });

                this.sliderObj = this.slideLine.bxSlider({
                    mode: slideDirect,
                    adaptiveHeight: false,
                    speed: 330,
                    slideMargin: 0,
                    easing: 'swing',
                    responsive: false,
                    pager: false,
                    auto: false,
                    pause: 4000,
                    autoStart: false,
                    autoHover: true,
                    autoDelay: 0,
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 0,
                    slideWidth: this.slideWidth,
                    controls: false
                });

            },

            checkViewportSlider: function () {

                var curViewportWidth = $(window).width();
                var splitLineItems = this.splitLineItems;
                var sliderWidthMap = this.sliderWidthMap;
                var slideWidth = this.slideWidth;

                $.each( this.sliderSizeMap, function( mapWidth, blocks ) {
                    if(curViewportWidth > mapWidth) {
                        splitLineItems = blocks;
                        slideWidth = sliderWidthMap[blocks];
                    }
                });

                this.splitLineItems = splitLineItems;
                this.slideWidth = slideWidth;

                if (this.splitLineItems !== this.curSplitLineItems) {
                    if (!$.isEmptyObject(this.sliderObj)) {
                        this.destroySlider();
                        this.buildSlider();
                    }
                }

                this.curSplitLineItems = this.splitLineItems;
            },

            destroySlider: function() {
                this.slideLine.empty();
                this.sliderObj.destroySlider();
            },

            slideNext: function() {
                this.sliderObj.goToNextSlide();
            },

            slidePrev: function() {
                this.sliderObj.goToPrevSlide();
            },

            '{window} resize': function() {
                this.checkViewportSlider();
            },

            '.js-nav-next click': function (o, e) {
                this.slideNext();
            },
            '.js-nav-prev click': function (o, e) {
                this.slidePrev();
            }

        }
    );
}(jQuery));

(function ($) {
	App.Widgets.FullWidthSlider = App.Widgets.FullWidthSlider || {};

	App.Widgets.FullWidthSlider = can.Control.extend({
		pluginName: 'appWidgetFullWidthSlider',
		defaults: {}
	}, {
		init: function () {
			var self = this;

			var gallery = this.element.find('.js-full-width-slider__slides').bxSlider({
				controls: false,
				onSlideBefore: function ($slideElement, oldIndex, newIndex) {
					var linkPosition = $('.full-width-slider__pager-link').eq(newIndex).position().left;
					$('.full-width-slider__pager-link').removeClass('active');
					$('.full-width-slider__pager-link').eq(newIndex).addClass('active');
					$('.full-width-slider__pager-wrapper').css('transform', 'translate3d(' + -linkPosition + 'px,0px,0px)')
				}
			});

			$('.js-full-width-slider__pager .full-width-slider__pager-link').on('click', function (evt) {
				evt.preventDefault();
				$('.full-width-slider__pager-link').removeClass('active');
				$(evt.currentTarget).addClass('active');
				var dataIndex = $(evt.currentTarget).data('slide-index');
				gallery.goToSlide(dataIndex);
			});
		}
	});
}(jQuery));

(function ($) {
    App.Widgets.Sliders = App.Widgets.Sliders || {};

    App.Widgets.Sliders.MMPublication = can.Control.extend(
        {
            pluginName: 'appWidgetSlidersMMPublication',
            defaults: {}
        },
        {
            init: function () {

                this.wrapContainer = this.element.find('.js-slider-mmpublication-container');
                this.slideLine = this.element.find('.slider-mmpublication-container__col');
                this.sliderElements = this.element.find('.js-slider-mmpublication-item');
                this.sliderObj = {};
                this.sliderSizeMap = {
                    1 : 1,
                    460 : 2,
                    650 : 3,
                    840 : 4,
                    1030 : 5
                };
                this.sliderWidthMap = {
                    5 : 956,
                    4 : 766,
                    3 : 574,
                    2 : 383,
                    1 : 285
                };
                this.slideWidth = 0;
                this.curSplitLineItems = 0;
                this.splitLineItems = 5;

                this.checkViewportSlider();

                this.buildSlider();

            },

            buildSlider: function() {

                this.sliderElements.detach();

                var $slideLine = this.slideLine,
                    slideDirect = 'horizontal',
                    splitLineItems = this.splitLineItems,
                    splitColItems,
                    $spareItems = $(),
                    $nativeSlide,
                    f = 0,
                    curLineBlocks = 0,
                    curSlideBlocks = 0;

                if(splitLineItems < 2) {
                    splitLineItems = 2;
                }

                if(splitLineItems <= 2) {
                    splitColItems = splitLineItems*3;
                } else {
                    splitColItems = splitLineItems * 2;
                }

                $nativeSlide = $(document.createElement('div')).addClass('slider-mmpublication-container__native-slide');

                this.sliderElements.each(function(i,o) {

                    if ($spareItems.size() > 0) {

                        $spareItems.each(function(is,os) {
                            var bside = 0;
                            if ($(os).data('wide')) {
                                bside = 2;
                            } else {
                                bside = 1;
                            };

                            if (curLineBlocks + bside > splitLineItems) {
                                return;
                            } else {
                                curLineBlocks = curLineBlocks + bside;
                                curSlideBlocks = curSlideBlocks + bside;
                                $(os).appendTo($nativeSlide);
                                $spareItems = $spareItems.not($(os));
                            }

                            if (curLineBlocks == splitLineItems)
                                curLineBlocks = 0;

                            if (curSlideBlocks == splitColItems) {
                                curSlideBlocks = 0;
                                $nativeSlide.appendTo($slideLine);
                                $nativeSlide = $(document.createElement('div')).addClass('slider-mmpublication-container__native-slide');
                            }
                        });

                    }

                    var bside = 0;
                    f++;
                    if ($(o).data('wide')) {
                        bside = 2;
                    } else {
                        bside = 1;
                    };

                    if (curLineBlocks + bside > splitLineItems) {
                        $spareItems = $spareItems.add($(o));
                    } else {
                        curLineBlocks = curLineBlocks + bside;
                        curSlideBlocks = curSlideBlocks + bside;
                        $(o).appendTo($nativeSlide);
                    }

                    if (curLineBlocks == splitLineItems)
                        curLineBlocks = 0;

                    if (curSlideBlocks == splitColItems) {
                        curSlideBlocks = 0;
                        $nativeSlide.appendTo($slideLine);
                        $nativeSlide = $(document.createElement('div')).addClass('slider-mmpublication-container__native-slide');
                    }

                });

                this.sliderObj = this.slideLine.bxSlider({
                    mode: slideDirect,
                    adaptiveHeight: false,
                    speed: 330,
                    slideMargin: 0,
                    easing: 'swing',
                    responsive: false,
                    pager: false,
                    auto: false,
                    pause: 4000,
                    autoStart: false,
                    autoHover: true,
                    autoDelay: 0,
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 0,
                    slideWidth: this.slideWidth,
                    controls: false
                });

            },

            checkViewportSlider: function () {

                var curViewportWidth = $(window).width();
                var splitLineItems = this.splitLineItems;
                var sliderWidthMap = this.sliderWidthMap;
                var slideWidth = this.slideWidth;

                $.each( this.sliderSizeMap, function( mapWidth, blocks ) {
                    if(curViewportWidth > mapWidth) {
                        splitLineItems = blocks;
                        slideWidth = sliderWidthMap[blocks];
                    }
                });

                this.splitLineItems = splitLineItems;
                this.slideWidth = slideWidth;

                if (this.splitLineItems !== this.curSplitLineItems) {
                    if (!$.isEmptyObject(this.sliderObj)) {
                        this.destroySlider();
                        this.buildSlider();
                    }
                }

                this.curSplitLineItems = this.splitLineItems;
            },

            destroySlider: function() {
                this.slideLine.empty();
                this.sliderObj.destroySlider();
            },

            slideNext: function() {
                this.sliderObj.goToNextSlide();
            },

            slidePrev: function() {
                this.sliderObj.goToPrevSlide();
            },

            '{window} resize': function() {
                this.checkViewportSlider();
            },

            '.js-nav-next click': function (o, e) {
                this.slideNext();
            },
            '.js-nav-prev click': function (o, e) {
                this.slidePrev();
            }

        }
    );
}(jQuery));

(function ($) {
	App.Widgets.Photos = App.Widgets.Photos || {};

	App.Widgets.Photos.Slider = can.Control.extend({
		pluginName: 'appWidgetPhotosSlider',
		defaults: {}
	}, {
		init: function () {
			var self = this;
			this.slider = null;
			this.renderMode();
			$(window).bind('resize', function () {
				self.renderMode();
			});
		},
		renderMode: function () {
			var self = this;
			if ($(window).outerWidth() < 991) {
				self.destroySlider();
			} else {
				self.initSlider();
			}
		},
		initSlider: function () {
			if (!this.slider) {
				this.slider = this.element.bxSlider({
					pager: false,
				});
			}
		},
		destroySlider: function () {
			if (this.slider) {
				this.slider.destroySlider();
				this.slider = null;
			}
		}
	});
}(jQuery));

(function ($) {
    App.Widgets.Sliders = App.Widgets.Sliders || {};

    App.Widgets.Sliders.ServiceMain = can.Control.extend(
        {
            pluginName: 'appWidgetSlidersServiceMain',
            defaults: {}
        },
        {
            init: function () {

                this.wrapContainer = this.element.find('.js-slider-service-main-container');
                this.slideLine = this.element.find('.slider-service-main-container__col');
                this.sliderElements = this.element.find('.js-slider-service-main-item');
                this.sliderObj = {};
                this.sliderSizeMap = {
                    1020 : 4,
                    748  : 4,
                    1    : 0
                };
                this.sliderWidthMap = {
                    1020 : 240,
                    748  : 169.5,
                    1    : 0
                };
                this.slideWidth = 0;

                this.checkViewportSlider();

            },

            buildSlider: function() {

                this.sliderElements.detach();

                var $slideLine = this.slideLine,
                    slideDirect = 'horizontal',
                    splitLineItems = this.splitLineItems,
                    splitColItems,
                    $spareItems = $(),
                    $nativeSlide,
                    f = 0,
                    curLineBlocks = 0,
                    curSlideBlocks = 0;

                splitColItems = 2;

                $nativeSlide = $(document.createElement('div')).addClass('slider-service-main-container__native-slide');

                this.sliderElements.each(function(i,o) {

                    if ($spareItems.size() > 0) {

                        $spareItems.each(function(is,os) {
                            var bside = 0;
                            if ($(os).data('wide')) {
                                bside = 2;
                            } else {
                                bside = 1;
                            };

                            if (curLineBlocks + bside > splitLineItems) {
                                return;
                            } else {
                                curLineBlocks = curLineBlocks + bside;
                                curSlideBlocks = curSlideBlocks + bside;
                                $(os).appendTo($nativeSlide);
                                $spareItems = $spareItems.not($(os));
                            }

                            if (curLineBlocks == splitLineItems)
                                curLineBlocks = 0;

                            if (curSlideBlocks == splitColItems) {
                                curSlideBlocks = 0;
                                $nativeSlide.appendTo($slideLine);
                                $nativeSlide = $(document.createElement('div')).addClass('slider-service-main-container__native-slide');
                            }
                        });

                    }

                    var bside = 0;
                    f++;
                    if ($(o).data('wide')) {
                        bside = 2;
                    } else {
                        bside = 1;
                    };

                    if (curLineBlocks + bside > splitLineItems) {
                        $spareItems = $spareItems.add($(o));
                    } else {
                        curLineBlocks = curLineBlocks + bside;
                        curSlideBlocks = curSlideBlocks + bside;
                        $(o).appendTo($nativeSlide);
                    }

                    if (curLineBlocks == splitLineItems)
                        curLineBlocks = 0;

                    if (curSlideBlocks == splitColItems) {
                        curSlideBlocks = 0;
                        $nativeSlide.appendTo($slideLine);
                        $nativeSlide = $(document.createElement('div')).addClass('slider-service-main-container__native-slide');
                    }

                });

                this.sliderObj = this.slideLine.bxSlider({
                    mode: slideDirect,
                    adaptiveHeight: false,
                    speed: 330,
                    slideMargin: 0,
                    easing: 'swing',
                    responsive: false,
                    pager: false,
                    auto: false,
                    pause: 4000,
                    autoStart: false,
                    autoHover: true,
                    autoDelay: 0,
                    minSlides: 4,
                    maxSlides: 24,
                    moveSlides: 1,
                    slideWidth: this.slideWidth,
                    controls: false
                });

            },

            checkViewportSlider: function () {

                var curViewportWidth = $(window).width();
                var sliderWidthMap = this.sliderWidthMap;
                var newSlideWidth = 0;

                $.each( this.sliderWidthMap, function( mapWidth, slideWidth ) {
                    if(curViewportWidth > mapWidth) {
                        newSlideWidth = slideWidth;
                    }
                });

                if (newSlideWidth !== this.slideWidth) {
                    this.slideWidth = newSlideWidth;
                    if (!$.isEmptyObject(this.sliderObj)) {
                        this.destroySlider();
                    }

                    if(newSlideWidth > 0) {
                        this.buildSlider();
                    }
                }

            },

            destroySlider: function() {
                this.slideLine.empty();
                this.sliderObj.destroySlider();
            },

            slideNext: function() {
                this.sliderObj.goToNextSlide();
            },

            slidePrev: function() {
                this.sliderObj.goToPrevSlide();
            },

            '{window} resize': function() {
                this.checkViewportSlider();
            },

            '.js-nav-next click': function (o, e) {
                this.slideNext();
            },
            '.js-nav-prev click': function (o, e) {
                this.slidePrev();
            }

        }
    );
}(jQuery));

(function ($) {
    App.Widgets.Sliders = App.Widgets.Sliders || {};

    App.Widgets.Sliders.ServiceMainInner = can.Control.extend(
        {
            pluginName: 'appWidgetSlidersServiceMainInner',
            defaults: {}
        },
        {

            init: function () {

                var $this = this,
                    $slider;

                $(document).on('click','.bx-pager-link',function() {
                    $this.sliderStopper();
                });

                this.slider = this.element.find('.js-slider-service-main-inner-container').bxSlider({
                    mode: 'horizontal',
                    adaptiveHeight: false,
                    speed: 330,
                    slideMargin: 0,
                    easing: 'swing',
                    responsive: true,
                    pager: true,
                    auto: true,
                    pause: 7500,
                    autoStart: false,
                    autoHover: false,
                    autoDelay: 0,
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 1,
                    controls: false
                });

                $slider = this.slider;

                this.firstMoveTimer = setTimeout(function(){
                    $slider.goToNextSlide();
                    $slider.startAuto();
                }, 4000);

            },

            sliderStopper: function() {
                clearTimeout(this.firstMoveTimer);
                this.slider.stopAuto();
            }

        }
    );
}(jQuery));

(function ($) {
	App.Widgets.VideoSlider = App.Widgets.VideoSlider || {};

	App.Widgets.VideoSlider = can.Control.extend({
		pluginName: 'appWidgetVideoSlider',
		defaults: {}
	}, {
		init: function () {
			var self = this;
			var onSliderload = function () {
				self.element.find('.video-slider__slide').filter('[data-slide-index="0"]').addClass('active');
			};
			var onSlideBefore = function ($slideElement, oldIndex, newIndex) {
				self.element.find('.video-slider__slide').removeClass('active');
				$slideElement.addClass('active');
			}

			var settingsHandler = function () {
				var sliderOptsDesktop = {
					slideWidth: 960,
					minSlides: 2,
					maxSlides: 3,
					moveSlides: 1,
					pager: false,
					controls: false,
					auto: true,
					onSliderLoad: onSliderload,
					onSlideBefore: onSlideBefore
				};
				var sliderOptsMobile = {
					maxSlides: 1,
					moveSlides: 1,
					controls: false,
					pager: true,
					auto: true,
					onSliderLoad: onSliderload,
					onSlideBefore: onSlideBefore
				};
				return ($(window).width() <= 768) ? sliderOptsMobile : sliderOptsDesktop;
			};
			var gallery;

			function enableGallery() {
				gallery.reloadSlider(settingsHandler());
			}

			gallery = this.element.bxSlider(settingsHandler());
			$(window).on('resize', enableGallery);

			/*$('.video-slider__slide').on('click', function (evt) {
				evt.preventDefault();
				if (!$(evt.currentTarget).hasClass('active')) {
					var dataIndex = $(evt.currentTarget).data('slide-index');
					gallery.goToSlide(dataIndex);
				}
			});*/

			/*var gallery = this.element.bxSlider({
				controls: false,
				//slideWidth: 960,
				adaptiveHeight:false,
				onSliderLoad: function (currentIndex) {
					//console.log(currentIndex);
					self.element.find('.video-slider__slide').eq(currentIndex+1).addClass('active');
				},
				onSlideBefore: function ($slideElement, oldIndex, newIndex) {
					self.element.find('.video-slider__slide').removeClass('active');
					$slideElement.addClass('active');
				},
				onSlideAfter: function ($slideElement) {
					$slideElement.addClass('js-fancybox-media');
					var pathToVideo = $slideElement.data('href');
					$slideElement.attr('href', pathToVideo);
					self.element.find('.video-slider__slide').not('.active').removeClass('js-fancybox-media').attr('href', '');

				}
			});*/
		}

	});
}(jQuery));
