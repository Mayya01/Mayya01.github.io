$(document).ready(function () {
	// Кроссбраузерная поддержка svg спрайтов
	svg4everybody();
});

var calcCheckboxForm = {
	el: '.js-form',
	name: 'calcCheckboxForm',
	initialize: function () {
		this.formWrapper = this.$('.js-check-form');
		//this.formInner = this.$('.js-check-form__inner');
		this.insideRadio = this.$('.js-check-form__inside');
		this.resultPrice = this.$('.js-check-form__price-sum');
		this.defaultCheckbox = this.$('.js-check-form__checkbox--default');

		this.sumPrice = 0;
		this.checkBoxDefaultPrice = 0;
		this.radioDefaultPrice = 0;
		this.checkClick = false;
		this.zeroPrice = 0;



	},
	events: {
		'click .js-check-form__checkbox': 'checkBoxSum',
		'click .js-check-form__radio': 'radioSum'
	},

	//radio
	radioSum: function (evt) {
		this.target = $(evt.currentTarget);
		this.checkTarget = this.target.prop('checked');
		this.radioPriceSiblings = this.target.parent().siblings('.js-check-form__calc-price');
		this.dataRadioPrice = this.radioPriceSiblings.attr('data-price');
		this.checkRadioPrice = this.dataRadioPrice;

		if (this.checkBoxDefaultPrice === 0) {
			if (this.radioDefaultPrice === 0) {
				this.checkRadioPrice = parseInt(this.checkRadioPrice);

				this.radioSumPrice = parseInt(this.zeroPrice + this.checkRadioPrice);


				this.resultPrice.html(this.radioSumPrice + ' &#8381;');


				this.radioDefaultPrice = this.checkRadioPrice;

			} else if (this.radioDefaultPrice > 0) {

				this.checkRadioPrice = parseInt(this.checkRadioPrice);

				this.radioSumPrice = parseInt(this.zeroPrice + this.checkRadioPrice);

				this.resultPrice.html(this.radioSumPrice + ' &#8381;');

				this.radioDefaultPrice = this.checkRadioPrice;

			}
		} else {
			if (this.radioDefaultPrice === 0) {

				this.checkRadioPrice = parseInt(this.checkRadioPrice);

				this.radioSumPrice = parseInt(this.checkBoxDefaultPrice + this.checkRadioPrice);


				this.resultPrice.html(this.radioSumPrice + ' &#8381;');


				this.sumPrice = this.radioSumPrice;
			}
		}


	},

	//checkbox
	checkBoxSum: function (evt) {

		this.target = $(evt.currentTarget);
		this.checkTarget = this.target.prop('checked');
		this.checkBoxPriceSiblings = this.target.parent().siblings('.js-check-form__calc-price');
		this.radioAppearBlock = this.target.parent().siblings('.js-check-form__appear');
		this.dataPrice = this.checkBoxPriceSiblings.attr('data-price');

		if (this.radioDefaultPrice === 0) {
			if (this.checkBoxDefaultPrice === 0) {
				if ($(evt.currentTarget).is(':checked') && this.checkBoxPriceSiblings.length > 0) {

					this.checkPrice = this.dataPrice;

					this.checkPrice = parseInt(this.checkPrice);

					this.summaryPrice = parseInt(this.zeroPrice + this.checkPrice);


					this.resultPrice.html(this.summaryPrice + ' &#8381;');

					this.checkBoxDefaultPrice = this.checkPrice;
				}

			} else if (this.checkBoxDefaultPrice > 0) {
				if ($(evt.currentTarget).is(':checked') && this.checkBoxPriceSiblings.length > 0) {
					this.checkPrice = this.dataPrice;

					this.checkPrice = parseInt(this.checkPrice);

					this.summaryPrice = parseInt(this.checkBoxDefaultPrice + this.checkPrice);

					this.checkBoxDefaultPrice += this.checkPrice;

					this.resultPrice.html(this.summaryPrice + ' &#8381;');
				} else if ($(evt.currentTarget).not(':checked') && this.checkBoxPriceSiblings.length > 0) {

					this.unCheckPrice = this.dataPrice;

					this.unCheckPrice = parseInt(this.unCheckPrice);

					this.minusPrice = parseInt(this.checkBoxDefaultPrice - this.unCheckPrice);

					this.checkBoxDefaultPrice -= this.unCheckPrice;


					this.resultPrice.html(this.minusPrice + ' &#8381;');


				}
			}
		} else {
			if (this.checkBoxDefaultPrice === 0) {
				if ($(evt.currentTarget).is(':checked') && this.checkBoxPriceSiblings.length > 0) {

					this.checkPrice = this.dataPrice;

					this.checkPrice = parseInt(this.checkPrice);

					this.summaryPrice = parseInt(this.radioDefaultPrice + this.checkPrice);

					this.checkBoxDefaultPrice = this.checkPrice;

					this.sumPrice = this.summaryPrice;
					console.log(this.summaryPrice);

					this.resultPrice.html(this.summaryPrice + ' &#8381;');


				} else if (this.target.hasClass('js-check-form__checkbox--default') && $(evt.currentTarget).not(':checked')) {

					this.resultPrice.html(this.zeroPrice + ' &#8381;');
					this.sumPrice = this.checkBoxDefaultPrice;
				}

			} else if (this.checkBoxDefaultPrice > 0) {
				if ($(evt.currentTarget).is(':checked') && this.checkBoxPriceSiblings.length > 0) {
					this.checkPrice = this.dataPrice;

					this.checkPrice = parseInt(this.checkPrice);

					this.summaryPrice = parseInt(this.checkBoxDefaultPrice + this.checkPrice);

					this.checkBoxDefaultPrice += this.checkPrice;

					this.resultPrice.html(this.summaryPrice + ' &#8381;');
				} else if ($(evt.currentTarget).not(':checked') && this.checkBoxPriceSiblings.length > 0) {

					this.unCheckPrice = this.dataPrice;

					this.unCheckPrice = parseInt(this.unCheckPrice);

					this.minusPrice = parseInt(this.sumPrice - this.unCheckPrice);

					this.checkBoxDefaultPrice -= this.unCheckPrice;


					this.resultPrice.html(this.minusPrice + ' &#8381;');

				} else if (this.target.hasClass('js-check-form__checkbox--default') && $(evt.currentTarget).not(':checked')) {

					this.minusPrice = parseInt(this.sumPrice - this.radioDefaultPrice);
					this.resultPrice.html(this.minusPrice + ' &#8381;');
					this.sumPrice = this.minusPrice;
					this.radioDefaultPrice = this.zeroPrice;
				}
			}

		}

	}

};
App.Control.install(calcCheckboxForm);

var checkRadioForm = {
	el: '.js-check-form',
	name: 'checkRadioForm',
	initialize: function(){
		this.formRadio = this.$('.js-check-form__radio');
		this.radioSiblings = this.formRadio.parent().siblings('.js-check-form__calc-price');

	},
	events: {
		'click .js-check-form__radio': 'checkForm'
	},
	checkForm: function(evt) {

		this.radioSiblings.removeClass('form-block__price--active');

		this.parent = $(evt.currentTarget).parent().parent();

		this.children = this.parent.children('.form-block__price');

		this.rangeBlock = this.parent.siblings().find('.form-block__range-price');

		this.rangeBlock.removeClass('form-block__range-price--active');

		if(this.children.length>0 && $(evt.currentTarget).prop('checked')) {

			this.children.addClass('form-block__price--active');

		} else {

			this.children.removeClass('form-block__price--active');

		}
		if($(evt.currentTarget).hasClass('js-check-form__radio-for-range')) {

			this.rangeBlock.addClass('form-block__range-price--active');

		}

	}
};
App.Control.install(checkRadioForm);

var CitySelection = {
	el: '.js-city-selection',
	name: 'CitySelection',

	initialize: function() {
		this.$el.select2({
			minimumResultsForSearch: Infinity,
			theme: 'city-selection',
			templateResult: this.addClassToResult,
			templateSelection: this.addClassToSelection
		});
	},

	addClassToResult: function(data, container) {
		if (data.element) {
			$(container).addClass($(data.element).data('value'));
		}

		this.resultText = $('<span>' + data.text + '</span>');
		return this.resultText;
	},

	addClassToSelection: function(data, container) {
		if (data.element) {
			$(container).removeClass();
			$(container).addClass("select2-selection__rendered " + $(data.element).data('value'));
		}
		return data.text;
	}
};

App.Control.install(CitySelection)
var EqualHeightBlocks = {
	el: '.js-equal-height-blocks',
	name: 'EqualHeightBlocks',

	initialize: function () {
		this.items = this.$('.js-equal-height-blocks__item');
		this.images = this.$('img');

		var self = this;

		$(window).bind('load', function() {
			self.setHeight();

			if($('html').hasClass('fonts-loaded')) {
				self.setHeight();
			}
		});

		$(window).bind('resize', function () {
			self.setHeight();
		});

		this.images.bind('load', function () {
			self.setHeight();
		});
	},


	setHeight: function () {
		var maxHeight = 0;
		this.items.css('height', 'auto');

		this.items.each(function (index, items) {

			var itemHeight = parseInt($(this).outerHeight());


			if (itemHeight > maxHeight) {
				maxHeight = itemHeight;
			}
		});

		this.items.css('height', maxHeight);
	}
};

App.Control.install(EqualHeightBlocks);

var EqualHeightSections = {
	el: '.js-equal-height-sections',
	name: 'EqualHeightSections',

	initialize: function () {
		this.sections = this.$('.js-equal-height-sections__item');
		this.images = this.$('img');
		this.showMoreBtn = this.$('.js-equal-height-sections__show-more-btn');
		this.sortedParentArray = [];

		this.jointSections = this.$('.js-equal-height-sections__combined-item');
		this.jointSectionsMains = this.$('.js-equal-height-sections__combined-item-main');
		this.jointSectionsFooters = this.$('.js-equal-height-sections__combined-item-footer');

		var self = this;

		this.getSortedParentArray();

		$(window).bind('load', function () {
			self.setHeight();
			self.setJointSectionsHeight();

			if ($('html').hasClass('fonts-loaded')) {
				self.setHeight();
				self.setJointSectionsHeight();
			}
		});

		$(window).bind('resize', function () {
			self.setHeight();
			self.setJointSectionsHeight();
		});

		this.images.bind('load', function () {
			self.setHeight();
			self.setJointSectionsHeight();
		});
	},

	events: {
		'click .js-equal-height-sections__show-more-btn': 'showHiddenContent'
	},

	setHeight: function () {
		for (var i = 0; i < this.sortedParentArray.length; i++) {
			this.sectionMaxHeight = 0;
			var self = this;

			$.each(this.sortedParentArray[i], function (index, value) {
				$(this).css('height', 'auto');
			});

			for (var y = 0; y < this.sortedParentArray[i].length; y++) {
				this.sectionHeight = parseInt($(this.sortedParentArray[i][y]).outerHeight());

				if (this.sectionHeight > this.sectionMaxHeight) {
					this.sectionMaxHeight = this.sectionHeight;
				}
			}

			$.each(this.sortedParentArray[i], function (index, value) {
				$(this).css('height', self.sectionMaxHeight);
			});
		}
	},

	setJointSectionsHeight: function () {
				console.log(2);
		this.jointSectionMaxHeight = 0;
		this.jointSectionsMainsHeight;
		var self = this;

		this.jointSections.filter('[data-section=solitary]').css('height', 'auto');
		this.jointSectionsMains.css('height', 'auto');

		this.jointSections.each(function (index, value) {
			self.jointSectionHeight = parseInt($(this).outerHeight());

			if (self.jointSectionHeight > self.jointSectionMaxHeight) {
				self.jointSectionMaxHeight = self.jointSectionHeight;
			}
		});

		if (this.jointSections.filter('[data-section=solitary]').outerHeight() == this.jointSectionMaxHeight) {
			this.jointSectionsMainsHeight = this.jointSectionMaxHeight - this.jointSectionsFooters.outerHeight();
			this.jointSectionsMains.css('height', this.jointSectionsMainsHeight);
		} else {
			this.jointSections.filter('[data-section=solitary]').css('height', this.jointSectionMaxHeight);

			this.jointSectionsMainsMaxHeight = 0;
			this.jointSectionsMains.css('height', 'auto');

			this.jointSectionsMains.each(function (index, value) {
				self.jointSectionsMainsHeight = parseInt($(this).outerHeight());

				if (self.jointSectionsMainsHeight > self.jointSectionsMainsMaxHeight) {
					self.jointSectionsMainsMaxHeight = self.jointSectionsMainsHeight;
				}
			});

			this.jointSectionsMains.css('height', this.jointSectionsMainsMaxHeight);
		}
	},

	getSortedParentArray: function () {
		this.sections.sort(this.sortByValue);
		this.sortedSections = Array.prototype.slice.call(this.sections);

		for (var i = 0; i < this.sortedSections.length; i++) {
			if ($(this.sortedSections[i]).data('section') !== $(this.sortedSections[i + 1]).data('section')) {

				var separator = this.sortedSections.indexOf(this.sortedSections[i]);
				this.sortedParentArray.push(this.sortedSections.splice(0, separator + 1));
				i = 0;
			}
		}
		return this.sortedParentArray;
	},

	sortByValue: function (a, b) {
		return ($(a).data('section') > $(b).data('section')) ? 1 : -1;
	},

	showHiddenContent: function (e) {
		if (!$(e.currentTarget).hasClass('is-open')) {
			this.maxHeight = $(e.currentTarget).parent().outerHeight();
		}
		this.hiddenContent = $(e.currentTarget).parent().find('.is-hide');

		$(e.currentTarget).toggleClass('is-open');
		this.hiddenContent.toggle();

		if ($(e.currentTarget).hasClass('is-open')) {
			$(e.currentTarget).parent().css('height', 'auto');
		} else {
			$(e.currentTarget).parent().css('height', this.maxHeight);
		}
	}
};

App.Control.install(EqualHeightSections);

var EqualHeightSection = {
	el: '.js-equal-height-section',
	name: 'EqualHeightSection',

	initialize: function () {
		this.items = this.$('.js-equal-height-section__item');
		this.innerBlock = this.$('.js-equal-height-section__inner-block');
		this.itemsImg = this.$('.js-equal-height-section__item[data-target="img"]');
		this.itemsImgBtn = this.$('.js-equal-height-section__item[data-target="img-btn"]');
		this.itemsText = this.$('.js-equal-height-section__item[data-target="text"]');
		this.itemsTextSection = this.$('.js-equal-height-section__item[data-target="text-section"]');
		this.innerBlockPrice = this.$('.js-equal-height-section__inner-block[data-target="inner-block-price"]');
		this.innerBlockLinks = this.$('.js-equal-height-section__inner-block[data-target="inner-block-links"]');
		this.innerBtn = this.$('.js-equal-height-section__inner-btn');
		this.headerWrapper = this.$('.js-equal-height-section__header-wrapper');
		this.textWrapper = this.$('.js-equal-height-section__text-wrapper');
		this.btn = this.$('.js-equal-height-section__img-btn');
		this.sectionHederHeight = 128;
		this.checkElementHeight = false;
		this.changedHeight = 0;

		this.images = this.$('img');
		var self = this;

		this.height = 0;

		if ($('html').hasClass('fonts-loaded')) {
			self.setSectionHeight();
			self.setInnerBlockHeight();
		}

		$(window).bind('resize', function () {
			self.setSectionHeight();
			self.setInnerBlockHeight();
		});

		this.images.bind('load', function () {
			self.setSectionHeight();
			self.setInnerBlockHeight();
		});

	},
	events: {
		'click .js-equal-height-section__img-btn': 'setHeight'
	},
	setHeight: function (evt) {
		var self = this;
		var finalHeight = 0;
		var sectionHederHeight = 128;
		var target = $(evt.currentTarget);
		target.toggleClass('is-open');
		var parent = target.parent().parent();
		var textHeaderWrapper = parent.find('.js-equal-height-section__hidden-contant-wrapper');
		var hiddenContent = textHeaderWrapper.find('.service-option__hidden-content');
		if (target.hasClass('is-open')) {
			hiddenContent.removeClass('is-hide');
			textHeaderWrapper.css('height', 'auto');
		} else {
			hiddenContent.addClass('is-hide');
			this.items.each(function () {
				var itemHeight = parseInt($(this).outerHeight());
				if (self.checkElementHeight) {
					textHeaderWrapper.css('height', self.changedHeight);
				}

			})

		}
	},
	setSectionHeight: function () {
		var sectionImgMaxHeight = 0;
		var sectionImgBtnMaxHeight = 0;
		var sectionTextMaxHeight = 0;
		var sectionTextSectionMaxHeight = 0;
		var sectionHeight = 298;
		var sectionHederHeight = 129;
		var minusInnerBtn = 0;
		var innerPadding = 20;
		var minusBtnImg = 0;
		this.items.css('height', 'auto');
		var self = this;

		this.items.each(function () {
			var itemHeight = parseInt($(this).outerHeight());

			if ($(this).is('[data-target="img"]')) {
				if (itemHeight > sectionImgMaxHeight) {
					sectionImgMaxHeight = itemHeight;
				}
			} else if ($(this).is('[data-target="img-btn"]')) {
				var btnImg = $(this).find('.js-equal-height-section__img-btn');
				var btnImgHeight = parseInt($(this).find('.js-equal-height-section__img-btn').outerHeight());
				var imgHeight = parseInt($(this).find('.js-equal-height-section__img').outerHeight());
				var sectionWithoutImg = itemHeight - imgHeight - innerPadding;
				if (sectionWithoutImg > sectionImgBtnMaxHeight) {
					if (sectionWithoutImg > sectionHederHeight) {
						sectionImgBtnMaxHeight = sectionWithoutImg;
						minusBtnImg = sectionWithoutImg - btnImgHeight;
						self.checkElementHeight = true;
						self.changedHeight = minusBtnImg;
					} else {
						minusBtnImg = sectionWithoutImg - btnImgHeight;
					}

				}
			} else if ($(this).is('[data-target="text"]')) {
				if (itemHeight > sectionTextMaxHeight) {
					sectionTextMaxHeight = itemHeight;
					self.height = sectionTextMaxHeight;
				}
			} else if ($(this).is('[data-target="text-section"]')) {
				var innerBtn = $(this).find('.js-equal-height-section__inner-btn');

				var innerBtnHeight = parseInt($(this).find('.js-equal-height-section__inner-btn').outerHeight(true));
				if (itemHeight > sectionTextSectionMaxHeight) {
					if (itemHeight > sectionHeight) {
						sectionTextSectionMaxHeight = itemHeight;
						minusInnerBtn = itemHeight - innerBtnHeight - innerPadding;
					} else {
						minusInnerBtn = itemHeight - innerBtnHeight - innerPadding;
					}
				}
			}
		});
		if ($(window).outerWidth() >= 650) {
			self.itemsImg.css('height', sectionImgMaxHeight);
			self.itemsText.css('height', sectionTextMaxHeight);
			self.textWrapper.css('height', minusInnerBtn);
			self.headerWrapper.css('height', minusBtnImg);
		}

	},
	setInnerBlockHeight: function () {
		var maxHeight = 0;
		var innerPriceBlockHeight = 0;
		var minusPriceBlockHeight = 0;
		var sectionThirdTextMaxHeight = 0;
		var defaultBlocksHeight = 306;
		var checkBlocks = false;
		var self = this;
		console.log(self.height);
		this.innerBlock.each(function (index) {

			var itemInnerHeight = parseInt($(this).outerHeight());

			var priceBlock = $(this).find('.js-equal-height-section__price-block');

			var priceBlockHeight = parseInt($(this).find('.js-equal-height-section__price-block').outerHeight());


			if (itemInnerHeight > maxHeight) {
				if ($(this).is('[data-target="inner-block-links"]') && innerPriceBlockHeight > 0) {
					minusPriceBlockHeight = itemInnerHeight - innerPriceBlockHeight;
					checkBlocks = true;
				} else if ($(this).is('[data-target="inner-block-price"]')) {
					if (itemInnerHeight > defaultBlocksHeight) {
						sectionThirdTextMaxHeight = itemInnerHeight;
						innerPriceBlockHeight = 0;
					} else {
						innerPriceBlockHeight = priceBlockHeight;
					}
				}

			}
		});
		if ($(window).outerWidth() >= 650) {
			if (checkBlocks) {
				self.itemsText.css('height', minusPriceBlockHeight);
			} else if (!checkBlocks) {
				self.innerBlockLinks.css('height', sectionThirdTextMaxHeight);
			}
		}

	}




};
App.Control.install(EqualHeightSection);

/*var fadeInsideForm = {
	el: '.js-form',
	name: 'fadeInnerForm',
	initialize: function () {
		this.defaultCheckbox= this.$('.js-check-form__checkbox--default');
		this.insideRadio = this.$('.js-check-form__appear');

	},
	events: {
		'click .js-check-form__checkbox--default': 'fadeForm'
	},
	fadeForm: function (evt) {
		this.targetSibling = $(evt.currentTarget).parent().siblings('.js-check-form__appear');
		if ($(evt.currentTarget).is(':checked')) {
			this.targetSibling.fadeIn(500);
			this.targetSibling.find('.js-check-form__calc-price').removeClass('form-block__price--active');

		} else {
			this.targetSibling.fadeOut(700);
			this.targetSibling.find('.js-check-form__radio').removeAttr('checked');

		}
	}
};
App.Control.install(fadeInsideForm);*/

App.Control.install({
	el: '.js-fancy-modal',
	name: 'FancyModal',

	initialize: function() {
		this.$el.fancybox({
			wrapCSS: 'fancy-modal',
			fitToView: false,
			padding: 0,
			helpers: {
				overlay: {
					css: {
						'background': 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		});
	}
});


App.Control.install({
	el: '.js-fancy-video',
	name: 'FancyVideo',

	initialize: function() {
		this.$el.fancybox({
			wrapCSS: 'fancy-video',
			fitToView: false,
			padding: 15,
			helpers: {
				overlay: {
					css: {
						'background': 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		});
	}
});


App.Control.install({
	el: '.js-fancy-modal-lg',
	name: 'FancyModalLg',

	initialize: function() {
		this.$el.fancybox({
			wrapCSS: 'fancy-modal-lg',
			fitToView: false,
			padding: 0,
			helpers: {
				overlay: {
					css: {
						'background': 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		});
	}
});


App.Control.install({
	el: '.js-fancy-media',
	name: 'FancyMedia',

	initialize: function() {
		this.$el.fancybox({
			wrapCSS: 'fancy-media',
			margin: ($(window).width() > 937) ? 20 : 5,
			padding: 0,
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
	}
});
App.Control.install({
	el: '.js-form',
	name: 'FormFabric',
	initialize: function () {

		this.formBlock = this.$el.find('.form-calc__block');

		//Чекбоксы
		this.formCheckBox = this.$el.find('.js-form__checkbox');
		this.formLabelCheckbox = this.$el.find('.js-form__checkbox-label');

		//Радио 
		this.formRadio = this.$el.find('.js-form__radio');
		this.radioPrice = this.$el.find('.js-form__radio-price');

		//Ссылка 
		this.formAddElementLink = this.$el.find('.js-form__link');
		this.roomNumber = 1;
		this.idCounter = this.formCheckBox
			.last()
			.attr('id')
			.substr(-1);
		
		this.labelNumber = this.formLabelCheckbox
			.last()
			.attr('for')
			.substr(-1);

		//Калькулятор
		this.radioCheckboxSum = 0;
		this.formSumPrice = this.$el.find('.js-form__price-sum');
		this.radioDefaultPrice = 0;
		this.radioDefaultPrice = 0;
		this.checkBoxDefaultPrice = 0;
		this.zeroPrice = 0;

		var self = this;
		

		self.checkDefaultCheckboxChecked();


	},
	events: {
		'click .js-form__checkbox': 'checkCheckBoxOption',
		'click .js-form__radio': 'checkRadioOption',
		'click .js-form__link': 'addElements',
		'click .js-form__checkbox--more-options': 'blockMoreOptions'
			//'click .js-form__checkbox--calc': 'getCheckBoxSum',
			//'click .js-form__radio': 'getRadioSum'
	},

	//Калькулятор
	/*getRadioSum: function (evt) {
		this.target = $(evt.currentTarget);
		this.optionPrice = this.target
			.parent()
			.siblings('.js-form__radio-price');
		this.dataRadioPrice = this.optionPrice.attr('data-price');
		this.checkRadioPrice = this.dataRadioPrice;

		if (this.checkBoxDefaultPrice === 0) {
			if (this.radioDefaultPrice === 0) {
				this.checkRadioPrice = parseInt(this.checkRadioPrice);
				this.radioSumPrice = parseInt(this.zeroPrice + this.checkRadioPrice);
				this.formSumPrice.html(this.radioSumPrice + ' &#8381;');
				this.radioDefaultPrice = this.checkRadioPrice;
			} else if (this.radioDefaultPrice > 0) {
				this.checkRadioPrice = parseInt(this.checkRadioPrice);
				this.radioSumPrice = parseInt(this.zeroPrice + this.checkRadioPrice);
				this.formSumPrice.html(this.radioSumPrice + ' &#8381;');
				this.radioDefaultPrice = this.checkRadioPrice;

			}
		} else {
			if (this.radioDefaultPrice === 0) {
				this.checkRadioPrice = parseInt(this.checkRadioPrice);
				this.radioSumPrice = parseInt(this.checkBoxDefaultPrice + this.checkRadioPrice);
				this.formSumPrice.html(this.radioSumPrice + ' &#8381;');
				this.sumPrice = this.radioSumPrice;
			}
		}

	},

	getCheckBoxSum: function (evt) {
		this.target = $(evt.currentTarget);
		this.optionPrice = this.target
			.parent()
			.siblings('.js-form__checkbox-price');
		this.dataPrice = this.optionPrice.attr('data-price');
		if (this.radioDefaultPrice === 0) {
			if (this.checkBoxDefaultPrice === 0) {
				if ($(evt.currentTarget).is(':checked') && this.optionPrice.length > 0) {
					this.checkPrice = this.dataPrice;
					this.checkPrice = parseInt(this.checkPrice);
					this.sumPrice = parseInt(this.zeroPrice + this.checkPrice);
					this.formSumPrice.html(this.sumPrice + ' &#8381;');
					this.checkBoxDefaultPrice = this.checkPrice;
				}
			} else if (this.checkBoxDefaultPrice > 0) {
				if ($(evt.currentTarget).is(':checked') && this.optionPrice.length > 0) {
					this.checkPrice = this.dataPrice;
					this.checkPrice = parseInt(this.checkPrice);
					this.sumPrice = parseInt(this.checkBoxDefaultPrice + this.checkPrice);
					this.checkBoxDefaultPrice += this.checkPrice;
					this.formSumPrice.html(this.sumPrice + ' &#8381;');
				} else if ($(evt.currentTarget).is(':not(:checked)') && this.optionPrice.length > 0) {
					this.unCheckPrice = this.dataPrice;
					this.unCheckPrice = parseInt(this.unCheckPrice);
					this.minusPrice = parseInt(this.checkBoxDefaultPrice - this.unCheckPrice);
					this.checkBoxDefaultPrice -= this.unCheckPrice;
					this.formSumPrice.html(this.minusPrice + ' &#8381;');
				}
			}
		} else {
			if (this.checkBoxDefaultPrice === 0) {
				if ($(evt.currentTarget).is(':checked') && this.optionPrice.length > 0) {
					this.checkPrice = this.dataPrice;
					this.checkPrice = parseInt(this.checkPrice);
					this.sumPrice = parseInt(this.radioDefaultPrice + this.checkPrice);
					this.checkBoxDefaultPrice = this.checkPrice;
					this.radioCheckboxSum = this.sumPrice;
					this.formSumPrice.html(this.sumPrice + ' &#8381;');
				}
			} else if (this.checkBoxDefaultPrice > 0) {
				if ($(evt.currentTarget).is(':checked') && this.optionPrice.length > 0) {
					this.checkPrice = this.dataPrice;
					this.checkPrice = parseInt(this.checkPrice);
					this.sumPrice = parseInt(this.checkBoxDefaultPrice + this.checkPrice);
					this.checkBoxDefaultPrice += this.checkPrice;
					this.formSumPrice.html(this.sumPrice + ' &#8381;');
				} else if ($(evt.currentTarget).not(':checked') && this.optionPrice.length > 0) {
					this.unCheckPrice = this.dataPrice;
					this.unCheckPrice = parseInt(this.unCheckPrice);
					this.minusPrice = parseInt(this.radioCheckboxSum - this.unCheckPrice);
					this.checkBoxDefaultPrice -= this.unCheckPrice;
					this.formSumPrice.html(this.minusPrice + ' &#8381;');
				}

			}
		}
	},*/


	blockMoreOptions: function (evt) {
		this.target = $(evt.currentTarget);
		this.parentSection = this.target
			.parent()
			.parent();
		this.moreOptionBlock = this.parentSection
			.find('.js-form__more-options');
		if (this.target.is(':checked')) {
			this.moreOptionBlock.find('input').each(function () {
				$(this).prop('disabled', false);
			});
		} else {
			this.moreOptionBlock.find('input').each(function () {
				$(this).prop('disabled', true);
			});
		}

	},
	//Подсвечивается активная цена при нажатии на чекбокс
	checkCheckBoxOption: function (evt) {
		this.checkBoxPrice = $(evt.currentTarget)
			.parent()
			.siblings('.js-form__checkbox-price');

		if (this.checkBoxPrice.length > 0 && $(evt.currentTarget).is(':checked')) {
			this.checkBoxPrice.addClass('form-calc__price--active');
		} else if (this.checkBoxPrice.length > 0 && $(evt.currentTarget).is(':not(:checked)')) {
			this.checkBoxPrice.removeClass('form-calc__price--active');
		}
	},

	//Подсвечивается активная цена при перезагрузке страницы
	checkDefaultCheckboxChecked: function () {
		this.formCheckBox.each(function (index, items) {
			this.checkBoxPrice = $(this)
				.parent()
				.siblings('.js-form__checkbox-price');

			if ($(this).is(':checked') && this.checkBoxPrice.length > 0) {
				this.checkBoxPrice.addClass('form-calc__price--active');
			}
		});
	},

	//Подсвечивается активная цена при нажатии на радиобаттон
	checkRadioOption: function (evt) {
		this.radioPrice.removeClass('form-calc__price--active');
		this.targetRadioPrice = $(evt.currentTarget)
			.parent()
			.siblings('.js-form__radio-price');

		this.targetRadioPrice.removeClass('form-calc__price--active');
		this.targetRadioPrice.addClass('form-calc__price--active');
	},

	//Добавление новых элементов формы
	addElements: function (evt) {
		var self = this;

		this.newFormInput = $(document.createElement('input'))
			.attr('type', 'checkbox')
			.attr('id', function () {
				var index = self.getIdNumber(self.idCounter);
				return 'form-input-2-' + index;
			})
			.addClass('form-calc__checkbox js-form__checkbox');

		this.newFormLabel = $(document.createElement('label'))
			.addClass('form-calc__checkbox-label js-form__checkbox-label ')
			.attr('for', function () {
				var index = self.getLabelNumber(self.labelNumber);
				return 'form-input-2-' + index;
			})
			.text(function(){
				var roomNumber = self.getRoomNumber(self.roomNumber);
				return roomNumber;
		});

		this.newFormSection = $(document.createElement('div'))
			.addClass('form-calc__section js-form__section')
			.append(this.newFormInput)
			.append(this.newFormLabel);

		this.newFormSection.insertBefore(this.formAddElementLink);

	},
	getIdNumber: function (number) {
		var self = this;
		number++;
		self.idCounter = number;
		return number;
	},
	getLabelNumber: function (number) {
		var self = this;
		number++;
		self.labelNumber = number;
		return number;
	},
	getRoomNumber: function(number){
		var self = this;
		number++;
		self.roomNumber = number;
		return 'Комната ' + number;
	}
	
});

var MainOfficeMapMoscow = {
	el: '#main-office-moscow',
	name: 'MainOfficeMapMoscow',
	initialize: function () {
		if (!_.isUndefined(window.ymaps)) {
			ymaps.ready(init);
			var myMap;

			function init() {
				myMap = new ymaps.Map("main-office-moscow", {
					center: [55.718324068999664, 37.79198949999998],
					zoom: 15,
					controls: ['zoomControl']
				});

				myPlacemark = new ymaps.Placemark([55.718324068999664, 37.79198949999998], {
					iconContent: 'A'
				}, {
					preset: 'islands#redStretchyIcon'
				});

				myMap.geoObjects.add(myPlacemark);
			}
		}
	}
};

App.Control.install(MainOfficeMapMoscow);


var MainOfficeMapSpb = {
	el: '#main-office-spb',
	name: 'MainOfficeMapSpb',
	initialize: function () {
		if (!_.isUndefined(window.ymaps)) {
			ymaps.ready(init);
			var myMap;

			function init() {
				myMap = new ymaps.Map("main-office-spb", {
					center: [59.958787, 30.291892],
					zoom: 15,
					controls: ['zoomControl']
				});

				myPlacemark = new ymaps.Placemark([59.958787, 30.291892], {
					iconContent: 'A'
				}, {
					preset: 'islands#redStretchyIcon'
				});

				myMap.geoObjects.add(myPlacemark);
			}
		}
	}
};

App.Control.install(MainOfficeMapSpb);


var MainOfficeMapNalchik = {
	el: '#main-office-nalchik',
	name: 'MainOfficeMapNalchik',
	initialize: function () {
		if (!_.isUndefined(window.ymaps)) {
			ymaps.ready(init);
			var myMap;

			function init() {
				myMap = new ymaps.Map("main-office-nalchik", {
					center: [43.474747, 43.614402],
					zoom: 15,
					controls: ['zoomControl']
				});

				myPlacemark = new ymaps.Placemark([43.474747, 43.614402], {
					iconContent: 'A'
				}, {
					preset: 'islands#redStretchyIcon'
				});

				myMap.geoObjects.add(myPlacemark);
			}
		}
	}
};

App.Control.install(MainOfficeMapNalchik);

var MainOfficeMapMytischi = {
	el: '#main-office-mytischi',
	name: 'MainOfficeMapMytischi',
	initialize: function () {
		if (!_.isUndefined(window.ymaps)) {
			ymaps.ready(init);
			var myMap;

			function init() {
				myMap = new ymaps.Map("main-office-mytischi", {
					center: [55.921003,37.702923],
					zoom: 15,
					controls: ['zoomControl']
				});

				myPlacemark = new ymaps.Placemark([55.921003,37.702923], {
					iconContent: 'A'
				}, {
					preset: 'islands#redStretchyIcon'
				});

				myMap.geoObjects.add(myPlacemark);
			}
		}
	}
};

App.Control.install(MainOfficeMapMytischi);
var News = {
	el: '.js-news',
	name: 'News',

	initialize: function() {
		//this.sliderMonths = this.$el.find('.js-slider-months');
		this.sliderMonthsItem = this.$el.find('.js-slider-months__item');
		this.newsBlock = this.$el.find('.js-news__block');
		this.newsControls = this.$el.find('.js-news__controls');
		this.newsControlsPosition = this.newsControls.offset().top;
		this.ifClicked;

		var self = this;

		$(window).bind('scroll', function () {
            self.goToActiveMonth();
            //self.stickyOnScroll();
        });

		this.sliderMonths = this.$el.find('.js-slider-months').bxSlider({
            mode: 'vertical',
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            pager: false,
            infiniteLoop: false,
            touchEnabled: false
        });

        $('.bx-controls-direction').on('click', function() {
			self.activeMonth = $(self.sliderMonthsItem).filter('[aria-hidden~="false"]').eq(1);
			self.monthValue = self.activeMonth.data('month-target');
			self.currentNews = $('[data-month=' + self.monthValue + ']')
			self.currentPosition = self.currentNews.offset().top;

			$('html, body').animate({
				scrollTop: self.currentPosition
			}, 1500);
		});
	},

	goToActiveMonth: function() {
		var self = this;
		this.currentSlideIndex = 0;

		this.newsBlock.each(function(index, element) {
			self.currentNewsBlockPosition = $(element).offset().top - 50;
			self.nextNewsBlockPosition = $(element).next().offset().top - 50;

			if($(window).scrollTop() >= self.currentNewsBlockPosition && $(window).scrollTop() < self.nextNewsBlockPosition) {
				self.currentSlideIndex = self.sliderMonths.getCurrentSlide() - 1;
				self.currentNewsBlockIndex = index - 1;

				if(self.currentNewsBlockIndex !== self.currentSlideIndex) {
					self.sliderMonths.goToSlide(parseInt(self.currentNewsBlockIndex));
				}
			}
		});
	},

	stickyOnScroll: function() {
		if($(window).scrollTop() >= this.newsControlsPosition) {
			this.newsControls.addClass('is-fixed');
		}
	}
};

App.Control.install(News);
var PartiallyHidden = {
	el: '.js-partially-hidden',
	name: 'PartiallyHidden',

	initialize: function() {
		this.hiddenContent = this.$('.is-hide');
		this.btn = this.$('.js-partially-hidden__btn');
	},

	events: {
		'click .js-partially-hidden__btn': 'showHiddenContent'
	},

	showHiddenContent: function() {
		this.hiddenContent.slideToggle().toggleClass('is-hide');
		this.btn.toggleClass('is-open');
		this.$el.toggleClass('is-hide');
	}
};

App.Control.install(PartiallyHidden);

var rangeControl = {
	el: '.js-range',
	name: 'rangeControl',

	initialize: function () {
		this.rangeSlider = this.$('.js-range__slider');
		var self = this;
		this.rangeSlider.slider({
			min: 50,
			max: 350,
			value: 0,
			step: 58,
			change: function (event, ui) {
				var rangeSlider = ui.value;
				var hundler = self.$('.ui-slider-handle');
				var activeRange = self.$('.is-active');
				var rangePrice = self.$('.js-range__price span');
				activeRange.removeClass();
				rangePrice.removeClass('active');
				rangePrice.each(function () {
					var data = $(this).data('price');
					if (rangeSlider === 108 && data == 'min') {
						activeRange.addClass('is-active is-active--min');
						$(this)
							.addClass('active')
							.next('.is-hidden')
							.addClass('active')
							.next()
							.addClass('active');
					} else if (rangeSlider === 166 && data == 'min-mid') {
						activeRange.addClass('is-active is-active--min-mid');
						$(this)
							.addClass('active')
							.next('.is-hidden')
							.addClass('active')
							.next()
							.addClass('active');
					} else if (rangeSlider === 224 && data == 'min-max') {
						activeRange.addClass('is-active is-active--min-max');
						$(this)
							.addClass('active')
							.next('.is-hidden')
							.addClass('active')
							.next()
							.addClass('active');
					} else if (rangeSlider === 282 && data == 'max') {
						activeRange.addClass('is-active is-active--max');
						$(this)
							.addClass('active')
							.next('.is-hidden')
							.addClass('active')
							.next()
							.addClass('active');
					} else if (rangeSlider === 340 && data == 'max-max') {
						activeRange.addClass('is-active is-active--max-max');
						$(this).addClass('active');
					} else if (rangeSlider === 50 && data == 'min') {
						activeRange.addClass('is-active is-active--min-min');
						$(this).addClass('active');
					}
				});
			}

		});

	}
};

App.Control.install(rangeControl);

var rangeDamageControl = {
	el: '.js-range-damage',
	name: 'rangeDamageControl',

	initialize: function () {
		this.rangeDamageSlider = this.$('.js-range-damage__slider');
		var self = this;
		this.rangeDamageSlider.slider({
			min: 0,
			max: 300,
			value: 0,
			step: 100,
			change: function (event, ui) {
				var rangeSlider = ui.value;

				var rangeDamageSlider = self.$('.js-range-damage__slider');

				var damageLevel = self.$('.js-range-damage__level label');

				var activeRange = self.$('.is-active');
				activeRange.removeClass();
				damageLevel.removeClass();
				damageLevel.each(function () {

					var data = $(this).data('range');
					if (rangeSlider === 100 && data == 'min-mid') {
						activeRange.addClass('is-active is-active--min-mid');
						$(this).addClass('active');
					} else if (rangeSlider === 200 && data == 'min-max') {
						activeRange.addClass('is-active is-active--min-max');
						$(this).addClass('active');
					} else if (rangeSlider === 300 && data == 'max') {
						activeRange.addClass('is-active is-active--max');
						$(this).addClass('active');
					} else if (rangeSlider === 0 && data == 'min') {
						activeRange.addClass('is-active is-active--min');
						$(this).addClass('active');
					}
				});
			}

		});

	}
};

App.Control.install(rangeDamageControl);

var reviewsTabs = {
	el: '.js-reviews-tabs',
	name: 'reviewsTabs',

	initialize: function () {
		this.tabsLink = this.$('.reviews-tabs__link');

	},
	events: {
		'click .js-reviews-link ': 'activeTabLink',
		'mouseover .js-reviews-link': 'addHoverClass',
		'mouseout .js-reviews-link': 'removeHoverClass'
	},
	activeTabLink: function(evt){
		evt.preventDefault();
		this.tabsLink.removeClass('reviews-tabs__link--active');
		$(evt.currentTarget).removeClass('reviews-tabs__link--hover-effect');
		$(evt.currentTarget).addClass('reviews-tabs__link--active');

	},
	addHoverClass: function(evt){
		$(evt.currentTarget).addClass('reviews-tabs__link--hover-effect');
	},
	removeHoverClass: function(evt) {
		$(evt.currentTarget).removeClass('reviews-tabs__link--hover-effect');
	}
};

App.Control.install(reviewsTabs);

var Scrollbar = {
	el: '.js-scrollbar',
	name: 'Scrollbar',

	initialize: function() {
		this.scrollBarInitPoint = 992;
		this.scrollbarIsInitialized = false;

		var self = this;

		if($(window).outerWidth() >= this.scrollBarInitPoint) {
			self.initScrollbar();
			this.scrollbarIsInitialized = true;
		}

		$(window).bind('resize', function() {
			if($(window).outerWidth() < self.scrollBarInitPoint && self.scrollbarIsInitialized) {
				self.destroyScrollbar();
				self.scrollbarIsInitialized = false;
			} else if($(window).outerWidth() >= self.scrollBarInitPoint && !self.scrollbarIsInitialized) {
				self.initScrollbar();
				self.scrollbarIsInitialized = true;
			}
		});
	},

	initScrollbar: function() {
		this.$el.mCustomScrollbar({
			axis: 'x'
		});
	},

	destroyScrollbar: function() {
        this.$el.mCustomScrollbar('destroy');
    }
};

App.Control.install(Scrollbar)
var selectForm = {
	el: '.js-form',
	name: 'selectForm',
	initialize: function () {
		this.select = this.$('.form-calc__select');
		this.select.select2({
			width: '100%',
			containerCssClass: "error",
			dropdownCssClass: "test"
		});

	}
};
App.Control.install(selectForm);

var ShowContent = {
	el: '.js-show-content',
	name: 'ShowContent',

	initialize: function () {
		this.btn = this.$('.js-show-content__btn');
		this.hiddenContent = this.$('.is-hide');
	},

	events: {
		'click .js-show-content__btn': 'showContent'
	},

	scrollTo: function () {
		var self = this;

		$('html, body').animate({
			scrollTop: $('[data-target=' + self.dataTarget + ']').offset().top - 60
		}, 1500);
	},

	showContent: function (e) {
		e.preventDefault();

		var needScroll = false;
		if (!$(e.currentTarget).hasClass('is-open') && $(e.currentTarget).data('scroll-to')) {
			needScroll = true;
		}

		$(e.currentTarget).toggleClass('is-open');
		if (this.hiddenContent.length > 0) {
			this.hiddenContent.toggle().toggleClass('is-hide');
		}

		if (this.$el.hasClass('js-show-content--toggle')) {
			if ($(e.currentTarget).hasClass('is-open')) {
				$(e.currentTarget).text('скрыть');
			} else {
				$(e.currentTarget).text('продолжение');
			}
		}

		// Если скрытую информацию и кнопку-триггер невозможно разместить в общем контейнере
		if (this.$el.filter('[data-attribute]')) {
			this.dataTarget = $(e.currentTarget).attr('data-attribute');
			$('[data-target=' + this.dataTarget + ']').slideToggle();
		}

		if (needScroll) {
			this.scrollTo();
		}
	}
};

App.Control.install(ShowContent);

var SliderBanners = {
	el: '.js-slider-banners',
	name: 'SliderBanners',

	initialize: function() {
		this.$el.bxSlider({
            mode: 'fade',
            slideWidth: 300,
            controls: false,
            adaptiveHeight: true,
            auto: true,
            pause: 3000,
            speed: 1000
        });
	}
};

App.Control.install(SliderBanners);
App.Control.install({
	el: '.js-slider-images',
	name: 'SliderImages',

	initialize: function() {
		this.$el.bxSlider({
			pager: false,
			slideWidth: 216,
			minSlides: 1,
			maxSlides: 4,
			moveSlides: 1,
			auto: false,
			slideMargin: 32,
			adaptiveHeight: true
		});
	}
});



App.Control.install({
	el: '.js-slider-images-slides-5',
	name: 'SliderImagesSlides5',

	initialize: function() {
		this.$el.bxSlider({
            pager: false,
            slideWidth: 168,
            minSlides: 1,
            maxSlides: 5,
            moveSlides: 1,
            slideMargin: 30,
            adaptiveHeight: true
        });
	}
});

var SliderNews = {
	el: '.js-slider-news',
	name: 'SliderNews',
	breakpoint: 1120,
    slider: null,

	initialize: function() {
		var self = this;

		this.renderMode();

		$(window).bind('resize', function() {
			self.renderMode();
		});
	},

	renderMode: function () {
		var self = this;

		if($(window).outerWidth() < self.breakpoint) {
			self.destroySlider();
		} else {
			self.initSlider();
		}
	},

	initSlider: function() {
		if(!this.slider) {
			this.slider = this.$el.bxSlider({
				pager: false,
				slideWidth: 465,
				minSlides: 1,
				maxSlides: 2,
				moveSlides: 1,
				slideMargin: 30,
				adaptiveHeight: true
			});
		}
	},

	destroySlider: function() {
		if(this.slider) {
			this.slider.destroySlider();
			this.slider = null;
		}
	}
};

App.Control.install(SliderNews);

var Tabs = {
	el: '.js-tabs',
	name: 'Tabs',

	initialize: function () {
		this.tab = this.$('.js-tabs__tab');
		this.tabs = this.$('.js-tabs__tabs');
		this.tabContent = this.$('.js-tabs__content');
	},

	events: {
		'click .js-tabs__tab': 'switchTabOnClick'
	},

	switchTabOnClick: function (e) {
		var dataIdContent;
		var tabContentGrayBlock;
		var self = this;
		this.tab.removeClass('is-active');
		$(e.currentTarget).addClass('is-active');

		this.targetId = $(e.currentTarget).data('id');

		this.tabContent.removeClass('is-active');
		$('#' + this.targetId).addClass('is-active');

		if (this.$el.hasClass('js-tabs--social')) {
			var dataIdArray = [];

			_.each(this.tab, function (element, index, list) {
				dataIdArray.push($(element).data('id'));
			});

			_.each(dataIdArray, function (element, index, list) {
				self.tabs.removeClass('social-tabs__tabs--' + element + '-is-active').addClass('social-tabs__tabs--' + self.targetId + '-is-active');
			});
		}
	}
};

App.Control.install(Tabs);

App.Control.install({
	el: '.js-tooltip',
	name: 'Tooltip',
	initialize: function () {
		this.$el.tooltipster({
			theme: 'tooltipster-shadow',
			contentCloning: true
		});
	}
});

/**
 *
 * Абстрактный пример виджета, как мы будем использовать backbone.js.
 *
 * Используем декларативный подход, регламенты будут позже, в составе руководства к сборщику.
 * Ниже описан и приведен пример нашего собственного шаблона проектирования, данным примером и описанными ниже директивами
 * необходимо руководствоваться при работе с проектами на основе нашего сборщика.
 *
 * Backbone свободно реализует архитектуру MVC, но типы приложений, которые мы создаем,
 * в виду специфики (seo, необходима генерация кода страницы на стороне сервера полностью), не позволяют его так использовать,
 * и мы на наших проектах используем 1С-Битрикс, у него богатая архитектура и развитые классы рендеринга, нам вполне достаточно этого.
 *
 * Наши JS приложения будут реализованы по собственному паттерну основанному на принципах Singleton с одной стороны и Functional design с другой:
 * @link https://ru.wikipedia.org/wiki/Одиночка_(шаблон_проектирования)
 * @link https://ru.wikipedia.org/wiki/Шаблон_функционального_дизайна
 * *
 * "Почти" так же как прежде мы использовали CanJS,
 * но Backbone.js, в связке с нашим новым сборщиком, - как глоток свежего воздуха, после CanJS.
 * Мы больше не связаны основным объектом приложения,
 * и контроллер на каждый блок можем писать в отдельном файле рядом с pug-разметкой этого блока, в структуре исходников, в сборщике.
 * Исчезли множественные пространства имен, больше не нужно называть контрол на разных уровнях.
 * Появился полный свободный доступ к свойствам и методам от одного контрола к другому - контролы в глобальном объекте App.Views
 * Благодаря основе Underscore.js, и использованию его событийной модели, работа с делегированием событий вообще не вызывает проблем:
 * можно обещать объект для функции, а можно и функцию для объекта, вообще не указывая это явно.
 *
 * У Backbone ещё есть Модели, Коллекции, Роутер, модуль Событий (это не клиентские события, а события Объектов),
 * и он предлагает отличный шаблонизатор, но пока мы не пользуем их, и вряд ли будем.
 *
 * Backbone.View - это не традиционное Представление, в понятии MVC, это может быть модуль, контроллер,
 * виджет или объект другого вида, в зависимости от смысла его использования.
 * Как и прежде, разметка документа в pug и описание стилей в stylus-файлах структурируется по методологии BEM (вариант предложенный Гарри Робертсом).
 * Стремимся придерживаться подхода: Контроллер создается для Блока.
 *
 * В нашей архитектуре отдельны выделяем класс свойств-функций : Плагины.
 * Плагин - свойство-функция для объекта jQuery, находящаяся в области видимости, почти всегда, ограниченная конкретным назначенным Элементом,
 * не обращающаяся к Контроллерам, выполняющая одну конкретную функцию связанную с визуальным отображением элемента,
 * влияющим на его визуальное поведение, не хранящая больше одного состояния элемента (частные случаи могут быть исключением).
 * При необходимости все опции в плагин передаем через data-атрибуты элемента, к которому применяется плагин.
 * Плагины размещаем по смыслу в структуре:
 * общий плагин в /scripts/jquery.pluginname.js,
 * плагин который явно останется в контексте одного блока - рядом с блоком в аналогичный jquery.pluginname.js файл
 * Пример плагина написан ниже.
 *
 * Код скрипта без комментариев, для наглядности находится тут
 * https://pastebin.com/raw/FjEJtnYK
 * и выглядит, на мой взгляд, очень просто для понимания, при том, что он очень функционален,
 * а в условиях нашего сборщика (файловой структуры исходников и BEM-методологии разметки),
 * мы имеем все преимущества серьёзного js-приложения, в максимально удобном для использования виде, при минимальной нагрузке на браузер.
 *
 */


/**
 * Объявляем объект (модуль/контроллер/виджет) как расширение Backbone.View.
 * Называем все наши контролы в стиле CamelCase (слитно без пробелов, при этом каждое слово внутри фразы пишется с заглавной буквы)
 * В конце названия объекта добавляем суффикс View (напр. ContactFormView, PriceTableView)
 *
 * Свободно используем jquery (и свои/сторонние плагины на его основе) в методах котроллера.
 */
var CitySelectorView = Backbone.View.extend({

    /**
     * Объявление контекста контроллера.
     * Если на текущей странице элемент отсутствует - экземпляр будет проинициализирован без ошибок,
     * но с нулевым размером и не определенными свойствами.
     */
    el: '.js-city-selector',

    /**
     * Обявляем параметры объекта по умолчанию.
     * Они будут доступны по прямой ссылке, напр. this.engCityName
     */
    engCityName: 'Mosсow',
    rusCityName: 'Москва',

    /**
     * @function initialize() вызывается всегда при включении контроллера
     */
    initialize: function () {

        /**
         * Обявляем вычисляемые параметры экземпляра объекта контроллера
         */
        this.$cityNameSpan = this.$('.dotted__text');
        this.cityName = this.$('.dotted__text').html();

        /**
         * Пример привязки события к контексту всего контроллера:
         * Сообщение пользователю при двойном клике на блок.
         */
        this.$el.dblclick(function () {
            alert('Вызванное событие двойного клика привязано к основному блоку контроллера!');
        });

        /**
         * Вызываем прочие методы контроллера
         */
        this.render();

        /**
         * Если в собственном методе контроллера возвращается ссылка на него самого,
         * то при таком замыкании мы можем сцеплять методы
         */
        this.loggingState('one').loggingState('two').loggingState('three');
    },

    events: {
        /**
         * Вешаем события на существующий элемент
         */
        'mouseover .dotted--moscow': 'changeLangToEng',
        'mouseout .dotted--moscow': 'changeLangToRus',
        /**
         * Вешаем событие на несуществующий элемент
         */
        'click p.js-added-on-the-fly-inner': 'alertEx',
        /**
         * Мы можем тут указать как несуществующий элемент,
         * так и не существующую функцию, если в будующем они появятся,
         * то событие будет работать корректно
         */
        'click .js-unexist-dull': 'unexistFunct',
        /**
         * Пробуем повесить событие на элемент созданный нашим контролом, но отправленный за рамки контекста контрола
         */
        'click p.added-on-the-fly-outer': 'alertEx'
    },

    render: function () {

        /**
         * По следующему добавленному элементу сработает как двойной щелчек, привязанный ко всему блоку (выше, в initialize()),
         * так и одинарный, обработку которого мы прописали в наборе {events}.
         * Этот пример демонстрирует привязку к несуществующим элементам, которые могут появится в контексте контрола в будущем
         */
        $('<p class="js-added-on-the-fly-inner">Этот элемент остается в области видимости текущего контрола</p>').appendTo(this.$el);

        /**
         * Следующий код будет выполнен, но добавленный элемент уйдет из области видимости контрола,
         * и событие, которые мы пытались привязать - не сработает
         */
        this.$el.after('<p class="js-added-on-the-fly-outer">Этот элемент выходит из контекста контрола, он не услышит событий, привязанных к нему тут.</p>');

        /**
         * Для примера добавил использования нашего плагина, который описан ниже.
         * Плагин применится один раз в момент выполнения этого метода контроллера, так как данный метод более нигде не вызывается повторно.
         */
        $('.js-added-on-the-fly-outer').fadingEx();
    },

    loggingState: function (stringParam) {

        /**
         * Результат работы метода видно в консоли
         */
        console.info('Метод вызван с аргументом: ' + stringParam);

        /**
         * Возвращая в методе указатель на контроллер мы имеем возможнать сцеплять методы, как показано в примере выше
         */
        return this;

    },

    /**
     * Просто alert...
     */
    alertEx: function () {
        alert('Контроллер работает! Город: ' + this.cityName);
    },

    /**
     * Ещё метод...
     * Можем перехватить объект события jquery
     */
    changeLangToEng: function (ev) {

        var $bindedElement = $(ev.currentTarget);

        $bindedElement.find('span').text(this.engCityName);

        /**
         * Для примера добавил использования нашего плагина, который описан ниже, подключить можем тут заранее,
         * так как экземпляр начнет инициализацию когда jquery соберется.
         * В итоге получится, что плагин будет выстреливать тогда, когда сработает событие описанное в контроллере.
         */
        this.$cityNameSpan.fadingEx();
    },

    /**
     * Ещё метод...
     * Можем получить объект по ссылке из нашего экземпляра
     */
    changeLangToRus: function () {
        this.$cityNameSpan.text(this.rusCityName);
    }
});

/**
 * Создадим экземпляр контрола, когда jquery и документ будут готовы.
 * Экземпляр контрола называется по имени класса, но без суффикса View.
 * Складываем экземпляры в объект Views объекта App (он определен уже в ядре сборщика)
 * В итоге мы имеем доступ к методам и свойствам экземпляра глобально:
 * напр. можем получить текущй город из App.Views.CitySelector.cityName в любом другом модуле,
 * и даже изменить его из другого модуля, если требуется.
 */
$(function () {
    App.Views.CitySelector = new CitySelectorView();
});

/**
 * Пример Плагина jquery
 *
 * В течение пяти секунд элемент гаснет, потом резко появляется.
 */
(function ($) {

    $.fn.fadingEx = function () {

        /**
         * @var this в данном контексте jquery объект к которому применяется плагин
         */

        this.animate({
            opacity: 0
        }, 5000, function() {
            /**
             * В callback-функции, имея ту же область видимости jquery уже теряет контекст
             */
            $( this ).css('opacity', '1');
        });
    };

})(jQuery);

/**
 *
 * Итого наш демо-контроллер:
 *
 * Работает в контексте '.js-city-selector'
 * Имеет два предустановленных свойства, типа Строка.
 * При загрузке получает себе ссылку на элемент с названием города, и название города в виде строки.
 * По двойному клику на блок - вызывает сообщение.
 * Рисует два блока с текстом (один в своем контексте, второй вне). Для второго блока применяет плагин.
 * Повторяет собственный метод сцепкой, с разными аргументами
 * Обрабатывает события мыши на элементы в своём контексте:
 * 1. Наведение на название города меняет само название и применяет наш плагин
 * 2. При клике на первый блок с текстом вызывает собственный метод
 *
 * В примере я постарался максимально наглядно применить техники, которыми мы, на наших проектах пользуемся чаще всего.
 *
 *
 */
var MainNav = {
	el: '.js-main-nav',
	name: 'MainNav',

	initialize: function() {
		this.btn = this.$('.js-main-nav__btn');
		this.list = this.$('.js-main-nav__list');
	},

	events: {
		'click .js-main-nav__btn': 'toggleNav'
	},

	toggleNav: function() {
		this.list.slideToggle();
	}
};

App.Control.install(MainNav)
var SliderContent = {
	el: '.js-slider-content',
	name: 'SliderContent',

	initialize: function () {
		this.$el.bxSlider({
			pager: false,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			auto: false,
			adaptiveHeight: true
		})
	},
};

App.Control.install(SliderContent);

var VerticalTabs = {
	el: '.js-vertical-tabs',
	name: 'VerticalTabs',
	cprefix: 'vtabs_',
	initialize: function () {
		this.tab = this.$('.js-vertical-tabs__tab');
		this.tabsList = this.$('.js-vertical-tabs__list');
		this.tabContent = this.$('.js-vertical-tabs__content');
		if (this.$el.data('keep')) {
			this.keepCookieId = this.cprefix + this.$el.data('keep');
			var tabCookie = Cookies.get(this.keepCookieId);
			if (tabCookie)
				this.tab[tabCookie].click();
		} else
			this.keepCookieId = false;
	},

	events: {
		'click .js-vertical-tabs__tab': 'switchTabOnClick'

	},

	switchTabOnClick: function (e) {
		console.log(1);
		e.preventDefault();
		this.tab.removeClass('is-active');
		$(e.currentTarget).addClass('is-active');

		if (this.keepCookieId)
			Cookies.set(this.keepCookieId,
				this.tab.index(e.currentTarget));

		this.targetId = $(e.currentTarget).data('id');

		this.tabContent.removeClass('is-active');
		$('#' + this.targetId).addClass('is-active');


		if($(window).outerWidth() <= 950) {
			this.tabsList.toggleClass('is-open');
			this.tab.toggleClass('is-hide');

			this.tab.not('.is-active').each(function(index, element) {
	            $(element).css({
	                'top': $(element).outerHeight() * (index + 1)
	            });
	        });
	    } else if($(window).outerWidth() > 950) {
	    	var tabGap = 2;

	    	this.tabsList.removeClass('is-open');
            this.tab.addClass('is-hide');

            this.tab.not('.is-active').each(function(index, element) {
                $(element).css({
                    'top': -tabGap
                });
            });
        }

	}
};

App.Control.install(VerticalTabs);
