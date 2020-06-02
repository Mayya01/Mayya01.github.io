App.Control.install({
    el: '.js-form',
    name: 'FormFabric',
    disabledModals: 'false',

    /**
     * Submit button selector
     */
    submitButton: '.js-form-submit',

    /**
     * Options for Parsley.js validation plugin
     */
    parsleyValidateOpts: {
        errorsMessagesDisabled: true,
        errorClass: '_error',
        successClass: '_success',
        classHandler: function (el) {
            return el.$element.next(".select2");
        }
    },

    $validateFalseFields: null,


    /**
     * Get control of form
     */
    initialize: function () {
        var self = this;
        this.$('input[name]').on('focus', function () {
            self.disableModals();
        });

        /**
         * UI elements initialization...
         */

        this.$('.js-select-editable').select2({
            minimumResultsForSearch: Infinity,
            theme: 'editable'
        });

        this.$('.js-form-select').select2({
            minimumResultsForSearch: Infinity,
            theme: 'form-select'
        });

        this.$('.js-form-select-trademark').select2({
            minimumResultsForSearch: Infinity,
            theme: 'form-select form-trademark'
        });


        // Select2 внутри fancybox работает некорректно, так как z-index fancybox больше.
        // Инициализируем плагин с дополнительным классом form-select-in-modal
        // для задания нужного z-index выпадающему списку
        this.$('.js-form-select-in-modal').select2({
            minimumResultsForSearch: Infinity,
            theme: 'form-select form-select-in-modal'
        });

        /**
         * Check and find UI interactive fields
         */

        this.multiSelectInputs = this.$el.find('.js-form-multiselect');
        this.choiseRadioContent = this.$el.find('.js-form-radio-choise');
        this.choiseTabsContent = this.$el.find('.js-form-tabs-changer');
        this.privacyAgree = this.$el.find('.js-form-privacy-agree');

        /**
         * More UI elements initialization...
         */

        if (this.choiseRadioContent)
            this.initRadioChoisingControl();

        if (this.choiseTabsContent)
            this.initTabsContentControl();

        if (this.privacyAgree)
            this.initPrivacyAgree();

        if (this.multiSelectInputs)
            this.initMultiSelectControl();

        if (this.$el.hasClass('js-form-hide-btn'))
            this.hideContactsBtn();

        /**
         * Add masks and validation rules for phone fields
         */

        this.$el.find('input[type=\'tel\']').inputmask({
            alias: 'phoneru'
        });
        this.$el.find('input[type=\'tel\']').parsley({
            phone: ''
        });

        /**
         * Submit by button click event handler
         */

        if (_.isElement(this.$el.find(this.submitButton)[0]))
            this.$el.find(this.submitButton).on('click', this.$el, _.bind(this.submitProcess, this));

        /**
         * Get URL to send
         */
        this.gateway = this.buildGatewayPath();

        this.$validateFalseFields = $([]);

        var formType = this.$el.find('input[name="form"]').val();

        this.$el.find('input[name="form_' + formType + '[pageH1]"]').val($('h1').html());
        this.$el.find('input[name="form_' + formType + '[pageTitle]"]').val($('title').html());
    },
    /**
     * disable jivosite, hellobar and popmechanic modals
     *
     */
    disableModals: function () {
        var self = this;
        if (!self.disableModals) {
            jivo_api.close();
            window.BlockPopMechanic = true;
            if (typeof window.hellobarSiteSettings !== 'undefined') {
                for (var index in window.hellobarSiteSettings.rules[0].site_elements) {
                    hellobar('elements').findById(window.hellobarSiteSettings.rules[0].site_elements[index].id).minimize()
                }
            }
            self.disableModals = true;
        }
    },
    /**
     * enable jivosite, hellobar and popmechanic modals
     *
     */
    enableModals: function () {
        var self = this;
        if (self.disableModals) {
            setTimeout(function(){
                if (!isInputFocused) {
                    jivo_api.open();
                    isFormHidden = false;
                }
            }, 3000);
            window.BlockPopMechanic = false;
            self.disableModals = false;
        }
    },


    /**
     * Action url definition
     *
     * @returns {URI}
     */
    buildGatewayPath: function () {

        if (this.$el.data('gateway'))
            var uri = new URI(this.$el.data('gateway'));
        else
            var uri = new URI();

        uri
            .setSearch('AJAX', 'Y')
            .toString();
        return uri;
    },

    /**
     * Vaidate active fields by Parsley.js
     *
     * @param $arInputs
     * @returns {boolean}
     */
    validateForm: function ($arInputs) {
        if (_.isEmpty(this.$el.data('novalidate'))) {
            var self = this,
                result = true,
                fieldInstance, fieldResult;

            this.$validateFalseFields = $([]);

            $arInputs.each(function (index, value) {

                var $field = $(this);

                fieldInstance = $field.parsley(self.parsleyValidateOpts);

                fieldInstance.off('field:success');
                fieldInstance.off('field:error');

                fieldInstance.on('field:success', function () {

                    self.$validateFalseFields = self.$validateFalseFields.not($field);

                    self.checkValidateState();

                });

                fieldInstance.on('field:error', function () {

                    if (!self.$validateFalseFields.filter($field).length)
                        self.$validateFalseFields.push($field.get()[0]);

                    self.checkValidateState();

                });

                fieldResult = fieldInstance.validate();

                if (_.isBoolean(fieldResult) && fieldResult === true) {
                    _.noop();
                } else {
                    result = false;
                }

            });
            return result;
        } else
            return true;
    },

    /**
     * Send button class control
     */
    checkValidateState: function () {

        if (this.$validateFalseFields.length) {
            this.$el.find(this.submitButton).addClass('_disabled');
        } else {
            this.$el.find(this.submitButton).removeClass('_disabled');
        }

    },

    /**
     * Submit initial function
     *
     * @param event
     */
    submitProcess: function (event) {
        var $initedInputs = this.collectInitedInputs();
        if (this.validateForm($initedInputs)) {
            this.waitingStateOn();
            this.submitData($initedInputs);
        }
    },

    /**
     * Request handler
     *
     * @param $initedInputs
     */
    submitData: function ($initedInputs) {

        var self = this;

        $.ajax({
            url: self.gateway,
            data: self.formData($initedInputs),
            processData: false,
            contentType: false,
            type: 'POST'
        }).always(function (data, status, xhr) {
            self.afterSubmitSuccess(data, xhr);
        });

    },

    /**
     * Simple request callback
     *
     * @param data
     * @param xhr
     */
    afterSubmitSuccess: function (data, xhr) {
        this.enableModals();
        this.waitingStateOff();
    },

    /**
     * Active fields collector
     *
     * @returns {$()}
     */
    collectInitedInputs: function () {

        var $formInputs, $tmpInputs;

        $tmpInputs = this.$el.find(':input').not('button');

        $formInputs = $tmpInputs.filter(':visible')
            .add(this.$el.find('.input-file').filter(':visible').find(':file'))
            .add(this.$el.find('.input-multifile').filter(':visible').find(':file'))
            .add($tmpInputs.filter('input[type=hidden]'))
            .add($tmpInputs.filter('[data-mustvalidate]'));

        return $formInputs;
    },

    /**
     * Form data object constructor
     *
     * @param $initedInputs
     * @returns FormData
     */
    formData: function ($initedInputs) {

        var $dinamicForm = $(document.createElement('form'));

        $initedInputs.each(function () {
            var $_cloneInput = $($(this).clone());
            if ($_cloneInput.is('select'))
                $_cloneInput.val($(this).val());
            $_cloneInput.appendTo($dinamicForm);
        });

        return new FormData($dinamicForm[0]);
    },

    /**
     * Waiting states...
     */

    waitingStateOn: function () {
        $(document.createElement('div')).addClass('ui-loader').prependTo(this.$el);
    },
    waitingStateOff: function () {
        this.$el.find('.ui-loader').remove();
    },

    /**
     * UI controls initialises...
     */

    initMultiSelectControl: function () {
        var self = this;
        _.each(this.multiSelectInputs, function (multiSelect) {

            $multiSelect = $(multiSelect);

            var emptyText = !_.isEmpty($multiSelect.data('emptyText')) ? $multiSelect.data('emptyText') : 'Ничго не выбрано';

            this.$('.js-form-multiselect').selectpicker({
                selectedTextFormat: 'count > 2',
                selectOnTab: true,
                noneSelectedText: emptyText
            });

        });
    },

    initPrivacyAgree: function () {
        var self = this;
        this.privacyAgree.find('.js-form-privacy-agree-responsive-btn').on('click', function () {
            self.privacyAgree.find('.js-form-privacy-agree-full').removeClass('hide-up-to-md hide-xs');
            self.privacyAgree.find('.js-form-privacy-agree-short').hide(0);
        });

        this.privacyAgree.find('.js-form-privacy-agree-close-btn').on('click', function () {
            self.privacyAgree.find('.js-form-privacy-agree-full').addClass('hide-xs');
            self.privacyAgree.find('.js-form-privacy-agree-short').show(0);
        });
    },

    hideContactsBtn: function () {
        var self = this;
        var isInputFocus = false;
        var isBtnHidden = false;
        this.formInputs = self.$el.find('[data-attribute]');
        self.formInputs.on('focus', function (evt) {
            isInputFocus = true;
            this.dataTarget = $(evt.currentTarget).attr('data-attribute');
            if (!isBtnHidden) {
                $('[data-target=' + this.dataTarget + ']').hide(300);
                isBtnHidden = true;
            }
        });
        self.formInputs.on('blur', function (evt) {
            isInputFocus = false;
            var self = this;
            this.dataTarget = $(evt.currentTarget).attr('data-attribute');
            if (isBtnHidden) {
                setTimeout(function () {
                    if (!isInputFocus) {
                        $('[data-target=' + self.dataTarget + ']').show(300);
                        isBtnHidden = false;
                    }

                }, 5000);
            }
        });
    },

    initTabsContentControl: function () {
        var self = this;
        _.each(this.choiseTabsContent, function (tabsContent) {
            $tabsContent = $(tabsContent);
            $controlBtns = $tabsContent.find('.js-form-tabs-changer-btns')
                .find('span');
            $controlTabs = $tabsContent.find('.js-form-tabs-changer-content')
                .find('.js-form-tabs-changer-block');

            $controlTabs.hide(0);

            if ($controlBtns.length > 0) {
                $activeBtn = $controlBtns.eq(0);
                $controlBtns.not($activeBtn)
                    .addClass('dotted cur-pointer');
                $activeTab = $controlTabs.eq(0);
                $activeTab.show(0);
            }

            $controlBtns.on('click', function () {
                self.contentTabChange($(this));
            });
        });
    },

    contentTabChange: function ($el) {
        $tabsContent = $el.closest('.js-form-tabs-changer');
        $controlBtns = $tabsContent.find('.js-form-tabs-changer-btns')
            .find('span');
        $controlTabs = $tabsContent.find('.js-form-tabs-changer-content')
            .find('.js-form-tabs-changer-block');

        $el.removeClass('dotted cur-pointer');
        $tab2Show = $controlTabs.eq($controlBtns.index($el));
        $controlTabs.not($tab2Show)
            .hide(0);
        $tab2Show.show(0);
        $controlBtns.not($el)
            .addClass('dotted cur-pointer');
    },

    initRadioChoisingControl: function () {
        var self = this;
        _.each(this.choiseRadioContent, function (radioCollection) {
            $control = $(radioCollection);
            $controlRadios = $control.find('input[type="radio"]');
            $controledBlocks = $controlled = self.findClosestChoisingBlock($control)
                .find('.js-form-radio-content-block');
            $controledBlocks.hide(0);
            $activeRadioOpt = $controlRadios.filter(':checked');
            if ($activeRadioOpt) {
                $activeOptIndex = $controlRadios.index($activeRadioOpt);
                if ($activeOptIndex >= 0) {
                    $controledBlocks.eq($activeOptIndex)
                        .show(0);
                }
            }
            $controlRadios.on('click', function () {
                self.choisingBlockChange($(this));
            });
        });
    },

    choisingBlockChange: function ($el) {
        $control = $el.closest('.js-form-radio-choise');
        $controledBlocks = this.findClosestChoisingBlock($control)
            .find('.js-form-radio-content-block');
        $block2Show = $controledBlocks.eq($control.find('input[type="radio"]')
            .index($el));
        $controledBlocks.not($block2Show)
            .hide(0);
        $block2Show.show(0);
    },

    findClosestChoisingBlock: function ($el) {
        if ($el.parent().length > 0) {
            $findRes = $el.parent()
                .find('.js-form-radio-content');
            if ($findRes.length > 0) {
                return $($findRes[0]);
            } else {
                return this.findClosestChoisingBlock($el.parent());
            }
        } else
            return $();
    }
});
