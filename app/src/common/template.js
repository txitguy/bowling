/**
 * Template Factory
 *
 * The template factory manages settings for the template
 * engine and provides us with appropriate pathing for
 * templates.
 *
 * To point a file to another theme, inside the html use:
 * {{template:theme/views/module/file}}
 */

'use strict';

angular.module('Template', [])
	.constant('Settings', require('./constants'))
	.factory('Template', function factory(Settings, $templateCache) {

		let template = Settings.defaultTemplate;
		let theme = Settings.defaultTheme;

		return {
			getTemplateUrl(tpl) {

				// Get the file name from the current template and theme
				let file = '{0}/{1}/views/{2}'.format(template, theme, tpl);

				// Get the template cache
				let tplc = $templateCache.get(file);

				// Check if the template cache exists
				if (!tplc) {

					// Does not exist; Use base template
					file = '{0}/{1}/views/{2}'.format(template, 'base', tpl);
				} else {

					// It exists; Check if it's pointing to another template
					let tplm = tplc.match(/^\{\{template:(.*)\}\}$/);
					if (tplm) {

						// It's pointing to another template; use that
						file = '{0}/{1}'.format(template, tplm[1]);
					}
				}

				return file;
			},
			getTemplate(tpl) {
				return $templateCache.get(this.getTemplateUrl(tpl));
			}
		};
	}
);