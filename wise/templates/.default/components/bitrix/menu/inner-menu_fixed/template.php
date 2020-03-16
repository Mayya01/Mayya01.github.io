<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
?>

<? if (!empty($arResult)): ?>
    <!-- Начало блока: Верхнее меню-->
    <ul class="vertical-inner-menu__main-level">
        <? foreach ($arResult as $arItem):
            if ($arParams['MAX_LEVEL'] == 1 && $arItem['DEPTH_LEVEL'] > 1)
                continue;
            ?>
				<?if($arItem['DEPTH_LEVEL'] == 1){?>
            <li class="vertical-inner-menu__main-item content-area <? if ($arItem['SELECTED']):?>_active<? endif ?> <? if ($arItem['PARAMS']['ROOT']):?>_pseudo-parent<? endif ?>">
                <a href="<?= $arItem['LINK'] ?>" class="vertical-inner-menu__link default-link">
                    <?= $arItem['TEXT'] ?>
                </a>
            
					<?if($arItem['CHILDS']){?>
					<ul class="vertical-inner-menu__inner-menu">
						
						 <? foreach ($arItem['CHILDS'] as $arItem2){?>
						<li class="<? if ($arItem2['SELECTED']):?>_active<? endif ?>">
							<a href="<?= $arItem2['LINK'] ?>"  class="default-link">
								<?= $arItem2['TEXT'] ?>
							</a>
						</li>
						<?}?>
					</ul>
					<?}?>
			</li>
		<?}?>
	
        <? endforeach ?>
    </ul>
    <!-- Конец блока: Верхнее меню-->
<? endif ?>
