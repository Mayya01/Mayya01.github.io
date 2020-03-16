;
function checkboxes() {
	var $wrp = $('.c-about__checkboxes');
	var $col = $('.column', $wrp);

	$col.each(function() {
		var $checkbox = $('.checkboxes__row:not(".all") input', this);
		var $checkboxAll = $('.checkboxes__row.all input', this);

		var checkAll = function() {
			$checkbox.each(function() {
				$(this).prop('checked', true);
			});
		}
		var uncheckAll = function() {
			$checkbox.each(function() {
				$(this).prop('checked', false);
			});
		}

		var check = function() {
			var flag = true;
			$checkbox.each(function() {
				if($(this).prop('checked') == false) {
					flag = false;
				}
			});

			if(flag == false && !$checkboxAll.hasClass('notall')) {
				$checkboxAll.addClass('notall');

				$checkboxAll.prop('checked', false);
			} else if(flag == true && $checkboxAll.hasClass('notall')) {
				$checkboxAll.removeClass('notall');
				$checkboxAll.prop('checked', true);
			}

		}

		if($checkboxAll.prop('checked') == true) {
			$checkboxAll.removeClass('notall');
			checkAll();
		} else {
			check();
		}

		$checkboxAll.click(function() {
			if($(this).prop('checked') == true) {
				$checkboxAll.removeClass('notall');
				checkAll();
			} else {
				uncheckAll();
			}
		});
		$checkbox.click(function() {
			check();
		});

	});

}
/**/
function equalizersec(parent, selector1, selector2) {
	var $context = $(parent);
	var $list = $context;
	var $listItems = $('.projects-list__item', $context);
	var contextWidth = $context.width();
	var plateWidth;
	var $plates = $(selector1, $context);
	var _tmp = 0;
	var heights = [];
	var iterations = 0;

	if($plates.length == 0) return;

	contextWidth = $list.width();
	plateWidth = $listItems.eq(0).outerWidth();
	_tmp = Math.round(contextWidth / plateWidth);
	iterations = $plates.length / _tmp;

	if(contextWidth == 0) return;

	setTimeout(function() {
		$(selector1, $context).css('height', 0);
		for(var r = 0; r < iterations; r++) {
			for(var i = 0; i < _tmp; i++) {
				if(heights[r] === undefined) {
					heights[r] = Math.ceil($plates.eq(r * _tmp + i).find(selector2).first().outerHeight()) + Math.ceil($plates.eq(r * _tmp + i).find(selector2).last().outerHeight());
				} else {
					heights[r] = Math.max(Math.ceil($plates.eq(r * _tmp + i).find(selector2).first().outerHeight()) + Math.ceil($plates.eq(r * _tmp + i).find(selector2).last().outerHeight()), heights[r]);
				}
			}
		}

		for(var r = 0; r < iterations; r++) {
			for(var i = 0; i < _tmp; i++) {

				$plates.eq(r * _tmp + i).css('height', heights[r]);
			}
		}
	}, 600);
}
/**/
function equalizerfirst(parent, selector1, selector2) {
	var $context = $(parent);
	var $list = $('ul', $context);
	var $listItems = $('ul > li', $context);
	var contextWidth = $context.width();
	var plateWidth;
	var $plates = $(selector1, $context);
	var _tmp = 0;
	var heights = [];
	var iterations = 0;

	if($plates.length == 0) return;

	contextWidth = $list.width();
	plateWidth = $listItems.eq(0).outerWidth();
	_tmp = Math.round(contextWidth / plateWidth);
	iterations = $plates.length / _tmp;

	if(contextWidth == 0) return;

	setTimeout(function() {
		$(selector2, $context).css('min-height', 0);
		for(var r = 0; r < iterations; r++) {
			for(var i = 0; i < _tmp; i++) {
				if(heights[r] === undefined) {
					heights[r] = $plates.eq(r * _tmp + i).find(selector2).outerHeight();
				} else {
					heights[r] = Math.max($plates.eq(r * _tmp + i).find(selector2).outerHeight(), heights[r]);
				}
			}
		}

		for(var r = 0; r < iterations; r++) {
			for(var i = 0; i < _tmp; i++) {
				$plates.eq(r * _tmp + i).find(selector2).css('min-height', heights[r]);
			}
		}
	}, 600);
}
/**/
function loader(selector, btn, q) {
	var total = $(selector).length;

	$(selector).each(function() {
		if($(this).index() < q) {
			$(this).removeClass('hide');
		}
	});

	var j = 2;

	$(btn).click(function() {
		var i;
		for(i = q * j; i <= q * j; i++) {
			$(selector).each(function() {
				if($(this).index() < i) {
					$(this).removeClass('hide');
				}
			});
			if(i == total) {
				$(this).hide();
				break;
			}
		};
		j++;

	});
}
/**/
function ellipsis(parentSelector, childSelector) {
	var parent = $(parentSelector);
	var child = $(childSelector, parent);

	child.each(function() {

		var t = $('.first', this).outerWidth();
		var p = $('.price', this).outerWidth();

		$('.t', this).width($(this).outerWidth() - t - p - 1);

	});
}
/**/
function _tabsSub() {
	$('.c-prices__tab-list').parent().each(function() {
		$(this).find('.c-prices__content[tab]').hide().first().show();
	});
}

function tabsDropDownMobile(el) {
	var list_m = $(el);

	window.setTimeout(_tabsSub, 1000);

	$('> span', list_m).click(function() {
		$(this).toggleClass('active');
		$('> li:not(".active")', list_m).stop().toggleClass('visible');
	});

	$(' > li', list_m).click(function() {
		$attr = $(this).attr('tab');
		$(this).closest('ul').parent().find('.c-prices__content[tab]').each(function() {
			if($attr == $(this).attr('tab')) $(this).fadeIn(250);
			else $(this).hide();
		});

		if(list_m.hasClass('_w-720')) {
			if($(this).hasClass('active')) {
				$('> span', list_m).trigger('click');
				return false;
			}
			if($('> span', list_m).hasClass('active')) {
				$(' > li', list_m).removeClass('active');
				$(this).addClass('active');
				$('> span', list_m).removeClass('active');
				$('> li:not(".active")', list_m).stop().removeClass('visible');
				return false;
			}
		}
		$(' > li', list_m).removeClass('active');
		$(this).addClass('active');
		$('.items-carousel__slider').slick('setPosition');
		return false;
	});
}
/**/
function tabsMini() {
	var list = $('.maintenance-table__tab-list');

	$(' > li', list).click(function() {
		$(' > li', list).removeClass('active');
		$(this).addClass('active');
		var tabind = $(this).attr('data-index');
		$('.c-prices__maintenance-table').find('.tab-content').addClass('hide');
		$('.c-prices__maintenance-table').find('.tab-content[data-index=' + tabind + ']').removeClass('hide');
		return false;
	});
}

$(function() {
	tabsDropDownMobile('.js-prices__tab-list-1');
	tabsDropDownMobile('.js-prices__tab-list-2');
	tabsDropDownMobile('.js-prices__tab-list-3');
	tabsMini();

	/**/
	$('.c-prices__vnedrenye').each(function() {
		var $context = $(this);
		var adaptParams = {
			680: '_w-680'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__distance-block').each(function() {
		var $context = $(this);
		var adaptParams = {
			730: '_w-730',
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.iconic-list').each(function() {
		var $context = $(this);
		var adaptParams = {
			920: '_w-920',
			650: '_w-650'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.callback-promo').each(function() {
		var $context = $(this);
		var adaptParams = {
			550: '_w-550',
			440: '_w-440'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__hours-prices').each(function() {
		var $context = $(this);
		var adaptParams = {
			680: '_w-680'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__service-text').each(function() {
		var $context = $(this);
		var adaptParams = {
			770: '_w-770'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__exclusive-tarifs').each(function() {
		var $context = $(this);
		var adaptParams = {
			630: '_w-630'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__classic-tarifs table').each(function() {
		var $context = $(this);
		var adaptParams = {
			850: '_w-850',
			770: '_w-770'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__content ol').each(function() {
		var $context = $(this);
		var adaptParams = {
			630: '_w-630'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-price__type-progs').each(function() {
		var $context = $(this);

		var adaptParams = {
			870: '_w-870',
			560: '_w-560'
		}
		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.content__prices').each(function() {
		var $context = $(this);
		var adaptParams = {
			720: '_w-720',
			690: '_w-690',
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.product-list').each(function() {
		var $context = $(this);

		var adaptParams = {
			726: '_w-726',
			670: '_w-670',
			440: '_w-440'
		}
		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.moving__table-block').each(function() {
		var $context = $(this);
		var adaptParams = {
			700: '_w-700',
			580: '_w-580',
			480: '_w-480'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.b-advantages-plate').each(function() {
		var $context = $(this);
		var adaptParams = {
			729: '_w-729',
			455: '_w-455'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__solutions').each(function() {
		var $context = $(this);

		var adaptParams = {
			740: '_w-740',
			530: '_w-530',
			480: '_w-480'
		}
		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__maintenance-table').each(function() {
		var $context = $(this);
		var adaptParams = {
			730: '_w-730'
		};

		$context.adaptBlock(adaptParams);
	});

	/**/
	$('.c-prices__maintenance-subscribe').each(function() {
		var $context = $(this);
		var adaptParams = {
			730: '_w-730'
		};

		$context.adaptBlock(adaptParams);
	});
	/**/
	/*ellipsis('.content__prices:not("._w-700")','.prices__item');
	 ellipsis('.progs-list', '.progs-list__item');
	 ellipsis('.solution__modules','.module');*/

	$(window).resize(function() {
		ellipsis('.content__prices:not("._w-700")', '.prices__item');
		ellipsis('.progs-list', '.progs-list__item');
		ellipsis('.solution__modules', '.module');
	});
	$(window).load(function() {
		ellipsis('.content__prices:not("._w-700")', '.prices__item');
		ellipsis('.progs-list', '.progs-list__item');
		ellipsis('.solution__modules', '.module');
	});

	/**/
	equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
	equalizerfirst('.product-list', '.product-plate', '.product-plate__content');
	equalizerfirst('.c-about__trust', '.trust-item', '.trust-item__text');
	equalizerfirst('.c-prices__exclusive-tarifs', '.exclusive-tarif', '.exclusive-tarif__text');

	$(window).resize(function() {
		equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
		equalizerfirst('.product-list', '.product-plate', '.product-plate__content');
		equalizerfirst('.c-about__trust', '.trust-item', '.trust-item__text');
		equalizerfirst('.c-prices__exclusive-tarifs', '.exclusive-tarif', '.exclusive-tarif__text');
	});

	/**/
	$('.c-prices__tab-list').each(function() {
		var $context = $(this);
		var adaptParams = {
			720: '_w-720'
		};
		$context.adaptBlock(adaptParams);
	});


	/*

	BX.addCustomEvent('onAjaxSuccess', function() {

		tabsDropDownMobile();
		tabsMini();

		$(function() {
			$('.interval-changer').each(function() {
				var $context = $(this);
				var $items = $('.interval-changer__item', $context);

				var changeCurrent = function() {
					var $active = $items.filter('._active');
					var currentIndex = $active.index();

					currentIndex++;
					if(currentIndex >= $items.length) currentIndex = 0;
					if(currentIndex < 0) currentIndex = $items.length - 1;

					$items
						.eq(currentIndex).addClass('_active').removeAttr('style');

					$active.removeClass('_active');



					//$context.trigger('resize');
				}

				setInterval(function() {
					changeCurrent();
				}, 2500)

			});
		});


		$('.c-prices__vnedrenye').each(function() {
			var $context = $(this);
			var adaptParams = {
				680: '_w-680'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__distance-block').each(function() {
			var $context = $(this);
			var adaptParams = {
				730: '_w-730',
			};

			$context.adaptBlock(adaptParams);
		});

		$('.iconic-list').each(function() {
			var $context = $(this);
			var adaptParams = {
				920: '_w-920',
				650: '_w-650'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.callback-promo').each(function() {
			var $context = $(this);
			var adaptParams = {
				550: '_w-550',
				440: '_w-440'
			};

			$context.adaptBlock(adaptParams);
		});
		$('.c-price__type-progs').each(function() {
			var $context = $(this);

			var adaptParams = {
				870: '_w-870',
				560: '_w-560'
			}
			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__hours-prices').each(function() {
			var $context = $(this);
			var adaptParams = {
				680: '_w-680'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__service-text').each(function() {
			var $context = $(this);
			var adaptParams = {
				770: '_w-770'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__exclusive-tarifs').each(function() {
			var $context = $(this);
			var adaptParams = {
				630: '_w-630'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__classic-tarifs table').each(function() {
			var $context = $(this);
			var adaptParams = {
				850: '_w-850',
				770: '_w-770'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__content ol').each(function() {
			var $context = $(this);
			var adaptParams = {
				630: '_w-630'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.content__prices').each(function() {
			var $context = $(this);
			var adaptParams = {
				720: '_w-720',
				690: '_w-690',
			};

			$context.adaptBlock(adaptParams);
		});

		$('.product-list').each(function() {
			var $context = $(this);

			var adaptParams = {
				726: '_w-726',
				670: '_w-670',
				440: '_w-440'
			}
			$context.adaptBlock(adaptParams);
		});

		$('.moving__table-block').each(function() {
			var $context = $(this);
			var adaptParams = {
				700: '_w-700',
				580: '_w-580',
				480: '_w-480'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.b-advantages-plate').each(function() {
			var $context = $(this);
			var adaptParams = {
				729: '_w-729',
				455: '_w-455'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__solutions').each(function() {
			var $context = $(this);

			var adaptParams = {
				740: '_w-740',
				530: '_w-530',
				480: '_w-480'
			}
			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__maintenance-table').each(function() {
			var $context = $(this);
			var adaptParams = {
				730: '_w-730'
			};

			$context.adaptBlock(adaptParams);
		});

		$('.c-prices__maintenance-subscribe').each(function() {
			var $context = $(this);
			var adaptParams = {
				730: '_w-730'
			};

			$context.adaptBlock(adaptParams);
		});
		$('.c-prices__tab-list').each(function() {
			var $context = $(this);
			var adaptParams = {
				720: '_w-720'
			};
			$context.adaptBlock(adaptParams);
		});

		ellipsis('.content__prices:not("._w-700")', '.prices__item');
		ellipsis('.progs-list', '.progs-list__item');
		ellipsis('.solution__modules', '.module');

		$(window).resize(function() {
			ellipsis('.content__prices:not("._w-700")', '.prices__item');
			ellipsis('.progs-list', '.progs-list__item');
			ellipsis('.solution__modules', '.module');
		});
		$(window).load(function() {
			ellipsis('.content__prices:not("._w-700")', '.prices__item');
			ellipsis('.progs-list', '.progs-list__item');
			ellipsis('.solution__modules', '.module');
		});

		equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
		equalizerfirst('.product-list', '.product-plate', '.product-plate__content');
		equalizerfirst('.c-about__trust', '.trust-item', '.trust-item__text');
		equalizerfirst('.c-prices__exclusive-tarifs', '.exclusive-tarif', '.exclusive-tarif__text');

		$(window).resize(function() {
			equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
			equalizerfirst('.product-list', '.product-plate', '.product-plate__content');
			equalizerfirst('.c-about__trust', '.trust-item', '.trust-item__text');
			equalizerfirst('.c-prices__exclusive-tarifs', '.exclusive-tarif', '.exclusive-tarif__text');
		});

	});
	*/

});

$(document).ready(function() {
	// Cache the Window object
	$window = $(window);

	$('section[data-type="background"]').each(function() {
		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {
			bgtop = $bgobj.position().top - $bgobj.data('correct');
			sctop = $window.scrollTop();
			if(bgtop < sctop) {
				var yPos = (sctop - bgtop) / $bgobj.data('speed');
				var coords = '50% ' + yPos + 'px';
				$bgobj.css({
					backgroundPosition: coords
				});
			} else {
				$bgobj.css({
					backgroundPosition: "50% 0px"
				});
			}

		}); // window scroll Ends

	});
});