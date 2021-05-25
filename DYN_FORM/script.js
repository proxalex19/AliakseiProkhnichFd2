"use strict";


function dynForm(array, nameOfForm) {

	var myForm = document.forms[nameOfForm];
	var field = "<table>";

	for (var i = 0; i < array.length; i++) {

		switch (array[i].type) {

			case "text":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "url":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "date":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "number":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "email":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "select":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td><select>"

				var keys = Object.keys(array[i].option);

				keys.forEach(function (val, ind, arr) {
					var temporary;

					if (ind === (arr.length - 1)) {
						temporary = "<option selected>" + arr[ind] + "</option>";
					} else {
						temporary = "<option>" + arr[ind] + "</option>";
					}

					field += temporary;
				});

				field += "</select></td></tr>";
				break;

			case "radio":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td>";

				var keys = Object.keys(array[i].radioLabel);

				keys.forEach(function (val, ind, arr) {
					var temporary = "<input type='" + array[i].type + "'>" + arr[ind];
					field += temporary;
				});
				field += "</td></tr>";
				break;

			case "checkbox":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td><input type='" + array[i].type + "' checked></td></tr>";
				break;

			case "textarea":
				field += "<tr><td colspan='2'><label>" + array[i].label + "</label><br>";

				if (array[i].width) {
					if (array[i].height) {
						field += "<textarea style='width:" + array[i].width + "px; height:" + array[i].height + "px'>" + "</textarea></td></tr>";
					} else {
						field += "<textarea style='width:" + array[i].width + "px'>" + "</textarea></td></tr>";
					}

				} else {
					field += "<textarea>" + "</textarea></td></tr>";
				}

				break;

			case "submit":
				field += "<tr><td><input type='" + array[i].type + "' value='" + array[i].label + "'></td></tr>";
				break;

			default:
				field += "<br><label>" + array[i] + "</label><br><br>";
		}
	}

	field += "</table>";
	myForm.innerHTML = field;
}


function infAboutFields(type, label, widthOfField, heightOfField) {
	return {
		type: type,
		label: label,
		width: widthOfField,
		height: heightOfField
	};
}

var arrayInfoFields = [];
arrayInfoFields.push("Для внесения вашего сайта в каталог, заполните форму:");
arrayInfoFields.push(infAboutFields("text", "Разработчики:", 450));
arrayInfoFields.push(infAboutFields("text", "Название сайта:", 450));
arrayInfoFields.push(infAboutFields("url", "URL сайта:"));
arrayInfoFields.push(infAboutFields("date", "Дата запуска сайта:"));
arrayInfoFields.push(infAboutFields("number", "Посетителей в сутки:"));
arrayInfoFields.push(infAboutFields("email", "E-mail для связи:"));
arrayInfoFields.push({ type: "select", label: "Рубрика каталога:", option: { "здоровье": true, "домашний уют": true, "бытовая техника": true } });
arrayInfoFields.push({ type: "radio", label: "Размещение:", radioLabel: { "бесплатное": true, "платное": true, "VIP": true } });
arrayInfoFields.push(infAboutFields("checkbox", "Разрешить отзывы:"));
arrayInfoFields.push(infAboutFields("textarea", "Описание сайта:", 600, 150));
arrayInfoFields.push(infAboutFields("submit", "Опубликовать"));


dynForm(arrayInfoFields, "form");

