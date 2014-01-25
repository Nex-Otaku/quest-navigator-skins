/* Функции скина для игры */

function qspSkinOnUpdateSkin() {
	// Когда строка ввода видна, элемент BODY получает класс "input-visible".
	// Это позволяет нам определить правила CSS, зависящие от видимости строки ввода.
	$(document.body).toggleClass('input-visible', $("#qsp-input-line").is(":visible"));
	// Аналогично для остальных окошек
	var actsVisible = qspGameSkin.showActs == 1;
	$(document.body).toggleClass('acts-visible', actsVisible);
	$(document.body).toggleClass('objs-visible', $("#qsp-wrapper-objs").is(":visible"));
	$(document.body).toggleClass('vars-visible', $("#qsp-wrapper-vars").is(":visible"));
}

function qspSkinOnInitApi() {
	// Для мобильников в портретном режиме отключаем обычные скроллы.
	// Потестить на девайсах, может и не пригодится.
	if ($(window).width() <= 480) {
	/*
		if (qsp_iScroll_main != null) {
			qsp_iScroll_main.destroy();
			qsp_iScroll_main = null;
		}
		if (qsp_iScroll_acts != null) {
			qsp_iScroll_acts.destroy();
			qsp_iScroll_acts = null;
		}
		if (qsp_iScroll_vars != null) {
			qsp_iScroll_vars.destroy();
			qsp_iScroll_vars = null;
		}
		if (qsp_iScroll_objs != null) {
			qsp_iScroll_objs.destroy();
			qsp_iScroll_objs = null;
		}
		*/
	}
}


/* Собственные функции скина */ 
function skinToggleInv() {
	$("#qsp-inv").slideToggle();
	$("#skin-inv-toggle").toggleClass('open');
}