/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
    ("#btn_buscar").click(function(e){
    findContact();
    }),
    
    function findContact(){
        var opciones = new ContactFindOptions();
        opciones.filter = $("#ti_search").val();
        var field = ["name" , "displayName", "emails", "phoneNumbers"];
        navigator.contacts.find(fields, contactSuccess, contactErrir, opciones);
    }


    function contactSuccess(contacs){
        var lista = $("#listaContactos ul");
        $.contacts = [];
        lista.html("");
        for (var i = 0; i < contacts.length; i++){
            var contacto = {};
            contacto.nombre = contacts[i].name.familyName;
            
            if(contacs[i].phoneNumbers && (contacts[i].phoneNumbers.length > 0)){
                contacto.telefono = contacts[i].phoneNumbers[0].value;
            }
            
            if(contacs[i].emails && (contacts[i].emails.length > 0)){
                contacto.email = contacts[i].email[0].value;
            }
            
            $.contacts.push(contacto);
            
            lista.append($("<li > <a href='#form' class='importContact' data-uid='" +i+"'>" + contacts[i].formatted +"</a></li>"));
        }
            lista.listview('refresh');
    }

    

    function contacError(){
        navigator.notification.alert("Error buscando contactos");
    }



























};
