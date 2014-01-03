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
