sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idapp.project1.controller.View4", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View4").attachPatternMatched(this.onRouteMatch, this);


            },
            onRouteMatch: function (evt) {
             // var  KeyID2 = evt.mParameters.arguments.name1;
                var array1 = [{

                    "PinNumber": "10",
                    "Name": "Teja",
                    "Date of Birth": "01-04-2001",
                    "Age": "26",
                    "Branch": " Mechanical",
                    "Year": "4th year",
                    "Semister": "2nd",
                    "Number": "9550840453",
                    "Alternative Mobile Number": "6281245810",
                    "Email ID": "tejabhutesh@gmail.com",
                    "Address": "NKP,MADAKASIRA,INDIA"
                },
                {
                    "PinNumber": "24",
                    "Name": "Hlo",
                    "Date of Birth": "01-04-2001",
                    "Age": "26",
                    "Branch": " Mechanical",
                    "Year": "4th year",
                    "Semister": "2nd",
                    "Number": "9550840453",
                    "Alternative Mobile Number": "6281245810",
                    "Email ID": "tejabhutesh@gmail.com",
                    "Address": "NKP,MADAKASIRA,INDIA"
                },
                {
                    "PinNumber": "22",
                    "Name": "Ram",
                    "Date of Birth": "01-04-2001",
                    "Age": "26",
                    "Branch": " Mechanical",
                    "Year": "4th year",
                    "Semister": "2nd",
                    "Number": "9550840453",
                    "Alternative Mobile Number": "6281245810",
                    "Email ID": "tejabhutesh@gmail.com",
                    "Address": "NKP,MADAKASIRA,INDIA"
                }]
            
                var data = [];
                var  KeyID2 = evt.mParameters.arguments.name1;
                var  KeyID3 = evt.mParameters.arguments.name2;
               

                debugger;
                for (var i = 0; i < array1.length; i++) {
                    debugger;
                    if (KeyID2 === array1[i].PinNumber && KeyID3 === array1[i].Name  ) {
                        data.push(array1[i]);
                    
                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(data);
                        this.getView().setModel(oModel,"Data2");
                    }
                }
            },
            onSubmit: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");


            },
            onNavBack: function () {
                history.go(-1);

            }
        });
    });