Package.describe({
	name:"lepozepo:cloudinary",
	summary: "Upload files to Cloudinary",
	version:"3.0.0",
	git:"https://github.com/Lepozepo/cloudinary"
});

Npm.depends({
	cloudinary: "1.0.8",
	"stream-buffers":"0.2.5"
});

//Collection Hooks Support
// function CHexists() {
// 	var fs = Npm.require('fs');
// 	var path = Npm.require('path');
// 	var meteorPackages = fs.readFileSync(path.resolve('.meteor/packages'), 'utf8');
// 	return !!meteorPackages.match(/collection-hooks\n/);
// }

Package.on_use(function (api){
	//Need service-configuration to use Meteor.method
	api.use(["underscore@1.0.0", "ejson@1.0.0","service-configuration@1.0.0","arunoda:streams"], ["client", "server"]);
	// if (CHexists()) {
	api.use(["matb33:collection-hooks"], ["client", "server"],{weak:true});
	// }

	api.use(["ui@1.0.0","templating@1.0.0","spacebars@1.0.0"], "client");

	//Image manipulation
	api.add_files("lib/cloudinary.standalone.js","client");

	api.add_files("client/blocks.html", "client");
	api.add_files("client/helpers.js", "client");
	api.add_files("client/controllers.js","client");
	api.add_files("client/collections.js", "client");
	api.add_files("client/functions.js", "client");
	api.add_files("server.js", "server");

	//Allow user access to Cloudinary server-side
	api.export && api.export("Cloudinary","server");
	api.export && api.export("_cloudinary","client");
	api.export && api.export("C","client");
});