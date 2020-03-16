<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Блог");
?>

<div class="layout-center-wrapper">
  <div class="content-col">
    <ul class="breadcrumb">
      <li class="breadcrumb__item"><a href="#">Инфоцентр</a></li>
      <li class="breadcrumb__item"><a href="#">Блог</a></li>
    </ul>
  </div>
</div>

<section class="wa-news wa-blog content-row">
  <div class="layout-center-wrapper">
    <div class="content-col">
      <div class="wa-news__inner clearfix">
        <div class="wa-news__main">
          <div class="wa-blog-entry">
            <h1 class="module-h1 no-margin-top">Использование онлайн-консультанта на сайте повысило продажи в 8 раз</h1>
            <!-- начало блока wa-blog-entry-meta -->
            <div class="wa-blog-entry-meta">
              <div class="wa-blog-entry-meta__item wa-blog-entry-meta__item--date">
                <time datetime="2015-11-14">14 ноября 2015</time>  
              </div>
              <div class="wa-blog-entry-meta__item">
                <a href="#" title="Мнения" class="label">Мнения</a>
              </div>
              <div class="wa-blog-entry-meta__item">
                <a href="#" title="Маркетологу" class="label">Маркетологу</a>
              </div>
              <div class="wa-blog-entry-meta__item">
                <a href="#" title="Специалисту 1С" class="label">Специалисту 1С</a>
              </div>
            </div>
            <!-- конец блока wa-blog-entry-meta -->
            <div class="wa-blog-entry__content text-container">
              <img src="<?=SITE_TEMPLATE_PATH?>/images/blog/blog-entry/blog-entry-image-1.jpg" alt=""> 
            
              <div class="wa-blog-entry__caption">
                <p>Ментор рубрики «Рынок игр» Сергей Бабаев поговорил с основателями игровой компании Playrix Дмитрием и Игорем Бухманами о том, как устроено управление и производство игр в распределённой команде, сотрудники которой работают по всей стране.</p>
              </div>

              <p>Команда Fishdom сейчас состоит из более чем 40 человек. Из них около половины работают из Вологды и вторая половина — удалённо. Конкретные цифры не назвать, потому что некоторые специалисты периодически переключаются с проекта на проект и тому подобное.</p>
              
              <p>Если смотреть по городам, то география получается такая (в случайном порядке): Вологда, Ярославль, Москва, Каменск-Уральский, Мончегорск, Новосибирск, Чита, Кировоград, Партенит, Ростов-на-Дону, Харьков, Пятигорск, Таганрог, Ивано-Франковск, Чиангмай (Таиланд), Киев, Петрозаводск, Старая Русса, Львов, Киев, Новороссийск, Ереван, Минск.</p>

              <blockquote>
                <p>Если бы мы искали людей в одном конкретно взятом городе, неважно, крупном или мелком, нам точно не удалось бы собрать ту команду, которая образовалась у нас сегодня.</p>
              </blockquote>

              <p>Программисты распределены по разным городам. Из 16 программистов девять человек работают из Вологды, остальные дистанционно. Художники почти все не из Вологды. Геймдизайнеры тоже распределены.</p>

              <h2>Фриланс если и умрёт, то очень нескоро</h2>

              <p>Если серьёзно, то вопрос интересный, хотя на практике сложно вспомнить заметное количество таких примеров в Playrix. Мы платим в том числе и с учётом региона и зарплаты в крупных городах выше. У нас сотрудники из самых разных стран и городов, и мы сталкиваемся с различными ситуациями. Решаем их в частном порядке на основе здравого смысла.</p>

              <p>Программисты распределены по разным городам. Из 16 программистов девять человек работают из Вологды, остальные дистанционно. Художники почти все не из Вологды. Геймдизайнеры тоже распределены.</p>

              <img src="<?=SITE_TEMPLATE_PATH?>/images/blog/blog-entry/blog-entry-image-2.jpg" alt=""> 

              <p>Если серьёзно, то вопрос интересный, хотя на практике сложно вспомнить заметное количество таких примеров в Playrix. Мы платим в том числе и с учётом региона и зарплаты в крупных городах выше. У нас сотрудники из самых разных стран и городов, и мы сталкиваемся с различными ситуациями. Решаем их в частном порядке на основе здравого смысла.</p>
            </div>

            <div class="social-sharing">
              <script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
              <script src="https://yastatic.net/share2/share.js" async="async"></script>
              <div class="social-sharing__title">Поделиться:</div>
              <div class="ya-share2 social-sharing__list" data-services="vkontakte,facebook,odnoklassniki,twitter,linkedin,gplus" data-counter></div>
            </div>

            <div class="wa-blog-entry-links clearfix">
              <div class="wa-blog-entry-links__item wa-blog-entry-links__item--left">
                <a href="#" title="" class="underlined-link underlined-link--red">Предыдущая статья</a>
              </div>
              <div class="wa-blog-entry-links__item wa-blog-entry-links__item--right">
                <a href="#" title="" class="underlined-link underlined-link--red">Следующая статья</a>
              </div>
            </div>

            <div class="wa-comments">
              <div id="mc-container"></div>
              <script type="text/javascript">
              cackle_widget = window.cackle_widget || [];
              cackle_widget.push({widget: 'Comment', id: 47823});
              (function() {
                  var mc = document.createElement('script');
                  mc.type = 'text/javascript';
                  mc.async = true;
                  mc.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cackle.me/widget.js';
                  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
              })();
              </script>
              <a id="mc-link" href="http://cackle.me">Комментарии для сайта <b style="color:#4FA3DA">Cackl</b><b style="color:#F65077">e</b></a> 
            </div>
          </div>

        </div>

        <aside class="wa-news__additional">
          <div class="wa-blog-widget sm-hide">
            <!-- начало блока wa-vacancy-plate -->
            <div class="wa-vacancy-plate">
              <div class="wa-vacancy-plate__title">
                <a href="#" class="underlined-link underlined-link--small" title="Marketing Expert">Marketing Expert</a>
              </div>
              <div class="wa-vacancy-plate__text">
                <p>В небольшое, но гордое digital-агенство, привыкшее выдавать качественный продукт (веб-решения разного уровня сложности, рекламные кампании в интернете, фирменный стиль), требуется digital producer. </p>
              </div>
              <div class="wa-vacancy-plate__bottom-link">
                <a href="#" title="Все вакансии" class="underlined-link underlined-link--red">Все вакансии</a>
              </div>
            </div>
            <!-- конец блока wa-vacancy-plate -->
          </div>
          <div class="wa-blog-widget sm-hide">
            <h2 class="wa-blog-widget__title module-h2">Рубрики</h2>

            <div class="wa-blog-rubric">
              <div class="wa-blog-rubric__item">
                <a href="#" title="Мнения" class="label">Мнения</a>
              </div>

              <div class="wa-blog-rubric__item">
                <a href="#" title="Исследования" class="label">Исследования</a>
              </div>

              <div class="wa-blog-rubric__item">
                <a href="#" title="Тренды" class="label">Тренды</a>
              </div>

              <div class="wa-blog-rubric__item">
                <a href="#" title="Читальня" class="label">Читальня</a>
              </div>

              <div class="wa-blog-rubric__item">
                <a href="#" title="Кейсы" class="label">Кейсы</a>
              </div>
            </div>
          </div>

          <div class="wa-blog-widget sm-hide">
            <h2 class="wa-blog-widget__title module-h2">Аудитории</h2>

            <div class="wa-blog-audience">
              <div class="wa-blog-audience__item">
                <a href="#" title="Маркетологу" class="label">Маркетологу</a>
              </div>

              <div class="wa-blog-audience__item">
                <a href="#" title="Специалисту 1С" class="label">Специалисту 1С</a>
              </div>

              <div class="wa-blog-audience__item">
                <a href="#" title="HR-специалисту" class="label">HR-специалисту</a>
              </div>

              <div class="wa-blog-audience__item">
                <a href="#" title="Системному администратору" class="label">Системному администратору</a>
              </div>
            </div>
          </div>

          <div class="wa-blog-widget">
            <div class="wa-subscribe js-subscribe">
              <div class="wa-subscribe__title">Подписка</div>
              <div class="wa-subscribe__text">
                <p>Раз в месяц, без рекламы, только контент из первых рук.</p>
              </div>
              <div class="wa-subscribe__success">
                <p>Спасибо, мы отправили вам письмо со ссылкой для подтверждения рассылки. Просто перейдите по ней.</p>
              </div>
              <div class="wa-subscribe-form js-subscribe-form">
                <form action="" method="get" accept-charset="utf-8">
                  <input type="email" name="" value="" placeholder="postbox@example.com" class="wa-subscribe-form__field">
                  <input type="submit" name="" value="Подписаться" class="wa-subscribe-form__submit btn btn--red btn--with-border js-subscribe-btn">
                </form>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>

<div class="wa-blog-similar">
  <div class="layout-center-wrapper">
      <div class="content-col clearfix">
        <div class="wa-blog-similar__title module-h1">
          Популярные статьи
        </div>
        <!-- начало блока wa-blog-list-item -->
        <div class="wa-blog-list-item clearfix wa-blog-list-item--similar">
          <div class="wa-blog-list-item__image">
            <a href="#" title="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">
              <img src="<?=SITE_TEMPLATE_PATH?>/images/blog/blog-preview-1.jpg" alt="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">
            </a>
          </div>
          <div class="wa-blog-list-item__content">
            <div class="wa-blog-list-item__category">
              <a href="#" title="Мнения" class="black-link">Мнения</a>
            </div>
            <div class="wa-blog-list-item__link">
              <a href="#" class="underlined-link underlined-link--small" title="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">Использование <nobr>онлайн-консультанта</nobr> на сайте повысило продажи в 8 раз</a>
            </div>
            <div class="wa-blog-list-item-tags clearfix">
              <div class="wa-blog-list-item-tags__item">
                <a href="#" class="label label--white" title="Маркетологу">Маркетологу</a>
              </div>
              <div class="wa-blog-list-item-tags__item">
                <a href="#" class="label label--white label--white" title="HR-специалисту">HR-специалисту</a>
              </div>
            </div>
          </div>
        </div>
        <!-- конец блока wa-blog-list-item -->
        <!-- начало блока wa-blog-list-item -->
        <div class="wa-blog-list-item clearfix wa-blog-list-item--similar">
          <div class="wa-blog-list-item__image">
            <a href="#" title="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">
              <img src="<?=SITE_TEMPLATE_PATH?>/images/blog/blog-preview-1.jpg" alt="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">
            </a>
          </div>
          <div class="wa-blog-list-item__content">
            <div class="wa-blog-list-item__category">
              <a href="#" title="Мнения" class="black-link">Мнения</a>
            </div>
            <div class="wa-blog-list-item__link">
              <a href="#" class="underlined-link underlined-link--small" title="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">Использование <nobr>онлайн-консультанта</nobr> на сайте повысило продажи в 8 раз</a>
            </div>
            <div class="wa-blog-list-item-tags clearfix">
              <div class="wa-blog-list-item-tags__item">
                <a href="#" class="label label--white" title="Маркетологу">Маркетологу</a>
              </div>
              <div class="wa-blog-list-item-tags__item">
                <a href="#" class="label label--white" title="HR-специалисту">HR-специалисту</a>
              </div>
            </div>
          </div>
        </div>
        <!-- конец блока wa-blog-list-item -->
        <!-- начало блока wa-blog-list-item -->
        <div class="wa-blog-list-item clearfix wa-blog-list-item--similar">
          <div class="wa-blog-list-item__image">
            <a href="#" title="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">
              <img src="<?=SITE_TEMPLATE_PATH?>/images/blog/blog-preview-1.jpg" alt="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">
            </a>
          </div>
          <div class="wa-blog-list-item__content">
            <div class="wa-blog-list-item__category">
              <a href="#" title="Мнения" class="black-link">Мнения</a>
            </div>
            <div class="wa-blog-list-item__link">
              <a href="#" class="underlined-link underlined-link--small" title="Использование онлайн-консультанта на сайте повысило продажи в 8 раз">Использование <nobr>онлайн-консультанта</nobr> на сайте повысило продажи в 8 раз</a>
            </div>
            <div class="wa-blog-list-item-tags clearfix">
              <div class="wa-blog-list-item-tags__item">
                <a href="#" class="label label--white" title="Маркетологу">Маркетологу</a>
              </div>
              <div class="wa-blog-list-item-tags__item">
                <a href="#" class="label label--white" title="HR-специалисту">HR-специалисту</a>
              </div>
            </div>
          </div>
        </div>
        <!-- конец блока wa-blog-list-item -->
    </div>
  </div>
</div>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>