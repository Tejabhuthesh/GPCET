sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idapp.project1.controller.View3", {
            onNavBack: function () {
                history.go(-1);

            }
        });
    });