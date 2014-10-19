/* Функции скина для игры */

function qspSkinOnUpdateSkin() {
	// Когда строка ввода видна, элемент BODY получает класс "input-visible".
	// Это позволяет нам определить правила CSS, зависящие от видимости строки ввода.
	$(document.body).toggleClass('input-visible', qspGameSkin.showInput == 1);
	// Аналогично для остальных окошек
	$(document.body).toggleClass('acts-visible', qspGameSkin.showActs == 1);
	$(document.body).toggleClass('objs-visible', qspGameSkin.showObjs == 1);
	$(document.body).toggleClass('vars-visible', qspGameSkin.showVars == 1);
}
