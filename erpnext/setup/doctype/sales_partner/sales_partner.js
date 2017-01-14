// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Sales Partner', {
	refresh: function(frm) {
		frappe.contact_link = {doc: frm.doc, fieldname: 'name', doctype: 'Sales Person'}

		if(doc.__islocal){
			hide_field(['address_html', 'contact_html']);
			erpnext.utils.clear_address_and_contact(frm);
		}
		else{
			unhide_field(['address_html', 'contact_html']);
			erpnext.utils.render_address_and_contact(frm);
		}
	}
});
