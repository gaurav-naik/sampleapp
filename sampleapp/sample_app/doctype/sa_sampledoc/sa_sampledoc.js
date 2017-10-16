// Copyright (c) 2017, Gaurav Naik and contributors
// For license information, please see license.txt

frappe.ui.form.on('SA SampleDoc', {

	setup: function(frm){

		frm.add_fetch("user", "full_name", "user_name");
	},

	refresh: function(frm) {

		console.log("refreshed");

		frappe.show_alert("Refresh event called.");


	},

	first_name: function(frm)
	{

		var local_full_name =  build_full_name(frm.doc.first_name, frm.doc.last_name);
		frm.set_value("full_name", local_full_name);

	},

	last_name: function(frm)
	{
		var local_full_name =  build_full_name(frm.doc.first_name, frm.doc.last_name);
		frm.set_value("full_name", local_full_name);

	}


});


function build_full_name(first_name, last_name)
{
	if(last_name == null)
		return first_name;
	else
		return first_name + " "+ last_name;

}