var NodeHelper = require('node_helper');
var fs=require('fs');

module.exports = NodeHelper.create({
	start: function () {
		console.log('MMM-Chart helper started...');
	},

	getJson: function (url) {
		var self = this;
		console.log("MMM-Chart getJson url:" + url);

		var data=fs.readFileSync(url, 'utf8');
		var json=JSON.parse(data);
		self.sendSocketNotification("MMM-Chart_JSON_RESULT", {url: url, data: json});
	},

	socketNotificationReceived: function (notification, url) {
		if (notification === "MMM-Chart_GET_JSON") {
			console.log("MMM-Chart_GET_JSON received for url:" + url);
			this.getJson(url);
		}
	}
});
