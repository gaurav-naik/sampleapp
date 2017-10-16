# -*- coding: utf-8 -*-
# Copyright (c) 2017, Gaurav Naik and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class SASampleDoc(Document):
	def validate(self):
		self.check_fullname()
		self.check_line_items()


	def check_fullname(self):
		if(self.full_name == ""):
			frappe.throw("Full Name is required.")
		
	def check_line_items(self):
		if len(self.items) == 0:
			frappe.throw("Must have at least one line item!")	
			


		