(function($){

    App.Widgets = App.Widgets || {};

    App.Widgets.CTCalc = can.Control.extend(
        {
            pluginName: 'appWidgetCallTrackingCalc',
            defaults: {}
        },
        {
            init: function () {
                this.exept = null;
                this.form = this.element.find('.js-calculation-ct__form');
                this.input = this.element.find('.js-calculation-ct__input');
                this.peakInput = this.element.find('.js-calculation-ct__input--peak');
                this.longInput = this.element.find('.js-calculation-ct__input--long');
                this.reserveInput = this.element.find('.js-calculation-ct__input--reserve');
                this.message = this.element.find('.js-calculation-ct__message');
                this.outputContainer = this.element.find('.js-calculation-ct__output-container');
                this.output = this.element.find('.js-calculation-ct__output');
                this.outputNumber1 = this.element.find('.js-calculation-ct__output-number1');
                this.outputNumber2 = this.element.find('.js-calculation-ct__output-number2');
                this.outputNumber3 = this.element.find('.js-calculation-ct__output-number3');
                this.outputChart1 = this.element.find('.js-calculation-ct__output-chart1');
                this.outputChart2 = this.element.find('.js-calculation-ct__output-chart2');
                this.outputChart3 = this.element.find('.js-calculation-ct__output-chart3');
                this.outputChart1Percent = this.element.find('.js-calculation-ct__output-chart1-percent');
                this.outputChart2Percent = this.element.find('.js-calculation-ct__output-chart2-percent');
                this.outputChart3Percent = this.element.find('.js-calculation-ct__output-chart3-percent');

                this.result = { // Объект с массивами результатов
                    k: [], // Количество номеров
                    Pt: [], // Вероятность покрытия
                    sP: [] // Сумма вероятности
                };

                this.firstStep = 0.80, // Значение первого шага, приближенное значение суммы к которому требуется получить (80%)
                this.secondStep = 0.95, // Значение второго шага, приближенное значение суммы к которому требуется получить (95%)
                this.thirdStep = 0.99999; // Значение третьего шага, приближенное значение суммы к которому требуется получить (99,999%)

                this.total = { // Объект, где будут храниться вычисленные значения для шагов
                    arFirstStep: {}, // Кол-во номеров и сумма вероятности первого шага
                    arSecondStep: {}, // Кол-во номеров и сумма вероятности второго шага
                    arThirdStep: {} // Кол-во номеров и сумма вероятности третьего шага
                };

                this.defaults = { // Установки по умолчанию
                    reserve: 0, // Резервирование номера после окончания сеанса, сек (по умолчанию - 0)
                    interval: 3600 // Рассматриваемый интервал (по умолчанию - 3600)
                };

                this.values = {};
                this.computed = {};

                var self = this;

                this.form.on('input', function() {
                    /**
                    * Обнуление записанных в объекты значений
                    */
                    self.exept = null;

                    self.result.k = [];
                    self.result.Pt = [];
                    self.result.sP = [];

                    self.total = {
                        arFirstStep: {},
                        arSecondStep: {},
                        arThirdStep: {}
                    };

                    self.outputContainer.removeClass('calculation-ct__right--valign-top');
                    self.output.addClass('hide');
                    self.message.removeClass('hide');
                    self.message.html( "<p class='module-h3'>Введите данные.<br> Мы всё рассчитаем.</p>");

                    /**
                    * Производим вычисления при условии, если в два поля введены значения
                    */
                    if(self.peakInput.val().length > 0 && self.longInput.val().length > 0) {
                        self.values = { // Получаемые значения
                            peak: Number(self.peakInput.val()), // Пиковое количество сеансов, в час
                            long: Number(self.longInput.val()), // Средняя длительность сеанса, секунд
                            reserve: (self.reserveInput.val().length > 0 ? Number(self.reserveInput.val()) : 0) // Резервирование номера после окончания сеанса, сек (по умолчанию, либо установленно пользователем)
                        };

                        self.computed = { // Вычисляемые значения
                            flux : self.values.peak / self.defaults.interval, // Плотность потока
                            overlap : (self.values.long + self.values.reserve) * 2 - 1, // Минимальное перекрытие
                        };

                        self.computed.factor = Math.exp(((-self.computed.flux)*self.computed.overlap)); // Множитель

                        /**
                        * В цикле увеличиваем количество номеров, до того, как не достигнем последнюю требуемую сумму вероятностей
                        */
                        for (k = 0, cursP = 0; cursP < self.thirdStep; k++) {

                            var fPt = self.Pt(k); // Вычисляем вероятность для k

                            if(!isFinite(fPt)) { // Если достигнуты пределы
                                self.exept = 'Мы не смогли посчитать количество номеров для введённых данных, подробнее в <a class="underlined-link underlined-link--red" id="scroll-to-faq" href="#faq">ответах на вопросы.</a>' // Пишем текст исключения
                                break; // Прекращаем вычисления
                            };

                            self.result.k.push(k); // Сохраняем текущий k в результаты
                            self.result.Pt.push(fPt); // Сохраняем текущий Pt в результаты

                            cursP = self.result.Pt.reduce( // Суммируем Pt
                                function(a, b) {
                                    return a + b;
                                }
                            );

                            self.result.sP.push(cursP); // Сохраняем сумму Pt в результаты

                            if($.isEmptyObject(self.total.arFirstStep) && cursP > self.firstStep ) { // Если сумма превысила первый шаг
                                if(k == 0) { // Если данные не превысили порог вычисления
                                    self.exept = 'Мы не смогли посчитать количество номеров для введённых данных, подробнее в <a class="underlined-link underlined-link--red" id="scroll-to-faq" href="#faq">ответах на вопросы.</a>' // Пишем текст исключения
                                    break; // Прекращаем вычисления
                                }
                                self.total.arFirstStep = { // Сохраняем знаяения этого цикла
                                    k: k, // Кол-во номеров
                                    Pt: (cursP*100).toFixed(1) // Вероятность в процентах, с округлением
                                };
                            }

                            if($.isEmptyObject(self.total.arSecondStep) && cursP > self.secondStep ) { // Если сумма превысила второй шаг
                                if(k == 0) { // Если данные не превысили порог вычисления
                                    self.exept = 'Мы не смогли посчитать количество номеров для введённых данных, подробнее в <a class="underlined-link underlined-link--red" id="scroll-to-faq" href="#faq">ответах на вопросы.</a>' // Пишем текст исключения
                                    break; // Прекращаем вычисления
                                }
                                self.total.arSecondStep = {  // Сохраняем знаяения этого цикла
                                    k: k, // Кол-во номеров
                                    Pt: (cursP*100).toFixed(1) // Вероятность в процентах, с округлением
                                };
                            }

                            if($.isEmptyObject(self.total.arThirdStep) && cursP > self.thirdStep ) { // Если сумма превысила третий шаг
                                if(k == 0) { // Если данные не превысили порог вычисления
                                    self.exept = 'Мы не смогли посчитать количество номеров для введённых данных, подробнее в <a class="underlined-link underlined-link--red" id="scroll-to-faq" href="#faq">ответах на вопросы.</a>' // Пишем текст исключения
                                    break; // Прекращаем вычисления
                                }
                                self.total.arThirdStep = {  // Сохраняем значения этого цикла
                                    k: k, // Кол-во номеров
                                    Pt: (cursP*100).toFixed() // Вероятность в процентах, с округлением
                                };
                            }
                        }

                        /**
                        * Применяем сохраненные значения
                        */
                        if(self.exept) { // Если возникло исключение
                            self.outputContainer.removeClass('calculation-ct__right--valign-top');
                            self.output.addClass('hide');
                            self.message.removeClass('hide');
                            self.message.html( "<p class='module-h3'>" + self.exept + "</p>" );

                            $('#scroll-to-faq').on('click', self.scrollTo);
                        } else {
                            // Первый шаг
                            self.outputNumber1.text(self.total.arFirstStep.k);
                            self.outputChart1.css('width', self.total.arFirstStep.Pt + '%')
                            self.outputChart1Percent.text(self.total.arFirstStep.Pt + ' %');

                            // Второй шаг
                            self.outputNumber2.text(self.total.arSecondStep.k);
                            self.outputChart2.css('width', self.total.arSecondStep.Pt + '%')
                            self.outputChart2Percent.text(self.total.arSecondStep.Pt + ' %');

                            // Третий шаг
                            self.outputNumber3.text(self.total.arThirdStep.k);
                            self.outputChart3.css('width', self.total.arThirdStep.Pt + '%')
                            self.outputChart3Percent.text(self.total.arThirdStep.Pt + ' %');

                            self.outputContainer.addClass('calculation-ct__right--valign-top');
                            self.output.removeClass('hide');
                            self.message.addClass('hide');
                        }
                    }
                });


                // Всплывающие подсказки
                this.tooltipBtn = this.element.find('.js-calculation-ct__show-tooltip');
                this.tooltipCloseBtn = this.element.find('.js-calculation-ct__tooltip-close');

                var self = this;

                this.tooltipBtn.tooltipster({
                    side: ['bottom'],
                    theme: ['tooltipster-light', 'calculation-ct-tooltip'],
                    trigger: 'click',
                    interactive: true,

                    functionReady: function() {
                        self.tooltipCloseBtn.click(function(){
                            self.tooltipBtn.tooltipster('hide');
                        });
                    },

                    functionBefore: function(instance, helper) {
                        var triggeredElement = $(helper.origin);
                        triggeredElement.addClass('active');
                    },

                    functionAfter: function(instance, helper) {
                        var triggeredElement = $(helper.origin);
                        triggeredElement.removeClass('active');
                    }
                });
            },

            /**
            * JavaScript не умеет в факториал, поэтому вводится функция
            */
            factorial: function(n) {
                return (n!=1 && n!=0) ? n*this.factorial(n-1) : 1;
            },

            Pt: function(k) { // Вычисляет P (покрытие) по t (длительности) от k (количество номеров). Объект App на данном этапе определен и посчитан, поэтому обращаюсь к нему напрямую, без ссылки.
                /**
                * Распишу в три действия:
                * 1. Вычисление числителя
                * 2. Вычисление знаменателя
                * 3. Итоговый расчет
                */

                this.numerator, // Числитель
                this.denominator, // Знаменатель
                this.curResult; // Результат

                this.numerator = Math.pow((this.computed.flux * this.computed.overlap), k); // Числитель

                this.denominator = this.factorial(k); // Знаменатель

                this.curResult = this.numerator / this.denominator * this.computed.factor; // Результат

                return this.curResult;
            },

            /**
            * Прокрутка к разделу с часто задаваемыми вопросами
            */
            scrollTo: function(ev) {
                ev.preventDefault();

                var targetId = $(this).attr('href').substring(1);
                var targetObject = $('#' + targetId);

                $('html, body').animate({
                    scrollTop: targetObject.offset().top
                }, 1200);

                if(!$('#calculator-error').hasClass('open')) {
                    $('#calculator-error').click();
                }
            }
        }
    );

    $(function() {
        window.application.installController('.js-calculation-ct', 'appWidgetCallTrackingCalc');
    });
}(jQuery));