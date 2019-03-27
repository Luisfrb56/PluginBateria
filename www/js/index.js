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
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        window.addEventListener("batterystatus", this.onBatteryStatus, false);
        window.addEventListener("batterylow", this.onBatteryLow, false);
        window.addEventListener("batterycritical", this.onBatteryCritical, false);
    },
    onBatteryStatus: function(status) {
        var parrafo=document.getElementById('bat');
        if(status.isPlugged=true){
            parrafo.innerHTML="Bateria: " + status.level + "%, CARGANDO!";
        }else{
            parrafo.innerHTML="Bateria: " + status.level + "%";
        }
        
    
    },
    onBatteryLow: function(status) {
        var parrafo=document.getElementById('bet');
        parrafo.innerHTML="Bateria baja " + status.level + "%";

    },
    onBatteryCritical: function(status) {
        alert("LA BATERIA SE NOS VA " + status.level + "%\nRECARGA!");
    }

};

app.initialize();
