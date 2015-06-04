/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @file Code plugin.
 */

(function()
{var moreCmd =
        {
 exec : function( editor )
	                {
	                editor.insertHtml('<!--more-->');
	                }
};

var pluginName = 'more';
// Регистрируем имя плагина .
CKEDITOR.plugins.add( pluginName,
{
init : function( editor )
{//Добавляем команду на нажатие кнопки
editor.addCommand( pluginName,moreCmd);
// Добавляем кнопочку
editor.ui.addButton( 'More',
{
label : 'Добавить тег <!--more-->',//Title кнопки
command : pluginName,
icon : this.path + 'more.gif'//Путь к иконке
});
}
});
})();