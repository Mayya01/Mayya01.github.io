<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
$component->SetResultCacheKeys(array('TAGS')); // чтобы в эпилоге были доступны теги
$tplType = $arParams['SECTION'];
?>
<section class="c-post js-blog-post">
    <div class="content-center">
        <header class="c-post__header">
            <h1 class="h1"><? AD_H1($arResult['NAME'])?></h1>
            <div class="clearme">
				<?$APPLICATION->IncludeComponent(
					"bitrix:main.include",
					"",
						[
							"AREA_FILE_SHOW" => "file",
							"PATH" => '/o-kompanii/blog/articles/includes/' . $arResult['CODE'] . '.php'
						]
				);?>
					<div class="c-post__header-left-col">
						<div class="clearme">
							<div class="c-post__preview-left-col">
								<div class="c-post__views">
									<?= $arResult['showCounter'] ?> просмотра
								</div>
							</div>
							<? $actualClass = (($tplType == 'articles')
											   && (!empty($arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"]))
											   && (empty($arResult['PROPERTIES']['EXPERT_ID']['VALUE']))) ? '' : ' hide-md'; ?>
								<div class="c-post__preview-right-col<?= $actualClass ?>">
									<div class="c-post__article-date _no-border">
										<div class="c-post__actual-text"><span>Актуально на: </span><time datetime="<?= $arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] ?>"><b><?= $arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] ?></b></time></div>
									</div>
								</div>
						</div>
					</div>
					<div class="c-post__header-right-col">
						<div class="c-post__share _none">
							Поделитесь:
							<script type="text/javascript" src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js" charset="utf-8"></script>
							<script type="text/javascript" src="//yastatic.net/share2/share.js" charset="utf-8"></script>
							<div class="ya-share2" data-services="vkontakte,facebook,gplus,twitter,linkedin"></div>
						</div>
					</div>
            </div>
        </header>
		<?
		if (CBXVirtualIo::GetInstance()->FileExists(__DIR__ . '/types/' . $tplType . '.php')) {
			include(__DIR__ . '/types/' . $tplType . '.php');
		} else {
			include(__DIR__ . '/types/default.php');
		}
		?>
    </div>
</section>
