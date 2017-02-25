'use strict';
/* globals $, app, socket */

define('admin/plugins/ccmtpostinfo', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
<<<<<<< HEAD
		Settings.load('ccmtpostinfo', $('.ccmtpostinfo-origins'));
=======
		Settings.load('ccmtpostinfo', $('.ccmtpostinfo-settings'));
>>>>>>> cell1

		$('#save').on('click', function() {
			Settings.save('ccmtpostinfo', $('.ccmtpostinfo-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'ccmtpostinfo-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});
