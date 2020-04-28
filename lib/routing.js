/* Login */
FlowRouter.route("/", {
	name:"Login",
	action() {
		BlazeLayout.render("login");
	}
});

/* Dashboard */
FlowRouter.route("/dashboard", {
	name:"Inicio",
	action() {
		BlazeLayout.render("sidebar", {
			page: "dashboard"
		})
	}
});

/*Dashboard/configuracion/empresa */
FlowRouter.route("/dashboard/configuracion/empresa", {
	name:"Empresa",
	action() {
		BlazeLayout.render("sidebar", {
			page: "datosEmpresa"
		})
	}
});

/*Dashboard/configuracion/zonas */
FlowRouter.route("/dashboard/configuracion/zonas", {
	name:"Zonas",
	action() {
		BlazeLayout.render("sidebar", {
			page: "zonas"
		})
	}
});

/*Dashboard/configuracion/zonas/nueva-zona */
FlowRouter.route("/dashboard/configuracion/zonas/crear-zona", {
	name:" CrearZona",
	action() {
		BlazeLayout.render("sidebar", {
			page: "crearZona"
		})
	}
});

/*Dashboard/configuracion/zonas/editar-zona */
FlowRouter.route("/dashboard/configuracion/zonas/editar-zona", {
	name:"EditarZona",
	action() {
		BlazeLayout.render("sidebar", {
			page: "editarZona"
		})
	}
});

/*Dashboard/configuracion/limiteventas */
FlowRouter.route("/dashboard/configuracion/limiteventas", {
	name:"LimiteDeVentas",
	action() {
		BlazeLayout.render("sidebar", {
			page: "limiteDeVentas"
		})
	}
});

/*Dashboard/configuracion/limiteventas/editar-limite-ventas */
FlowRouter.route("/dashboard/configuracion/limiteventas/editar-limite-ventas", {
	name:"Editar-LimiteDeVentas",
	action() {
		BlazeLayout.render("sidebar", {
			page: "editarLimiteVentas"
		})
	}
});

/* Dashboard/loteria */
FlowRouter.route("/dashboard/loteria", {
	name:"Loteria",
	action() {
		BlazeLayout.render("sidebar", {
			page: "loteria"
		})
	}
});

/* Dashboard/loteria/edit */
FlowRouter.route("/dashboard/loteria/edit", {
	name:"Loteria",
	action() {
		BlazeLayout.render("sidebar", {
			page: "editLoteria"
		})
	}
});

/* Dashboard/terminales */
FlowRouter.route("/dashboard/terminales", {
	name:"Terminal",
	action() {
		BlazeLayout.render("sidebar", {
			page: "terminal"
		})
	}
});

/* Dashboard/terminales */
FlowRouter.route("/dashboard/terminales/edit-terminal", {
	name:"editTerminal",
	action() {
		BlazeLayout.render("sidebar", {
			page: "edit-terminal"
		})
	}
});

/* Dashboard/sorteos */
FlowRouter.route("/dashboard/sorteos", {
	name:"Sorteos",
	action() {
		BlazeLayout.render("sidebar", {
			page: "sorteos"
		})
	}
});

/* Dashboard/reportes/ventas */
FlowRouter.route("/dashboard/reportes/ventas", {
	name:"reporteVentas",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteVentas"
		})
	}
});

/* Dashboard/reportes/numeros */
FlowRouter.route("/dashboard/reportes/numeros", {
	name:"reporteNumeros",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteNumeros"
		})
	}
});

/* Dashboard/reportes/vendedores */
FlowRouter.route("/dashboard/reportes/vendedores", {
	name:"reporteVendedores",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteVendedores"
		})
	}
});

/* Dashboard/reportes/loterias-jugadas */
FlowRouter.route("/dashboard/reportes/loterias-jugadas", {
	name:"reporteLoteriasJugadas",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteLoteriasJugadas"
		})
	}
});

/* Dashboard/reportes/tickets-no-pagados */
FlowRouter.route("/dashboard/reportes/tickets-no-pagados", {
	name:"reporteTicketsNoPagados",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteTicketsNoPagados"
		})
	}
});

/* Dashboard/reportes/tickets-premiados */
FlowRouter.route("/dashboard/reportes/tickets-premiados", {
	name:"reporteTicketsPremiados",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteTicketsPremiados"
		})
	}
});

/* Dashboard/reportes/tickets-anulados */
FlowRouter.route("/dashboard/reportes/tickets-anulados", {
	name:"reporteTicketsAnulados",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteTicketsAnulados"
		})
	}
});

/* Dashboard/reportes/tickets-anulados */
FlowRouter.route("/dashboard/reportes/tickets-anulados", {
	name:"reporteTicketsAnulados",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteTicketsAnulados"
		})
	}
});

/* Dashboard/reportes/balances */
FlowRouter.route("/dashboard/reportes/balances", {
	name:"reporteBalances",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteBalances"
		})
	}
});

/* Dashboard/reportes/comision-supervisor */
FlowRouter.route("/dashboard/reportes/comision-supervisor", {
	name:"reporteComisionSupervisor",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteComisionSupervisor"
		})
	}
});

/* Dashboard/reportes/registro-cambios */
FlowRouter.route("/dashboard/reportes/registro-cambios", {
	name:"reporteRegistroCambios",
	action() {
		BlazeLayout.render("sidebar", {
			page: "reporteRegistroCambios"
		})
	}
});