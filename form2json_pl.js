//#########################################################################
//# title: form2json_pl.js                                                #
//# author: Dario Garrido                                                 #
//# date: 20200505                                                        #
//# description: iRuleLX for translating POST form to JSON                #
//#########################################################################

'use strict';
var f5 = require('f5-nodejs');
var qs = require('querystring');
var ilx = new f5.ILXServer();

ilx.addMethod('form2json', function (req, res) {
    try {
        // Set timeout counters
        var tclTimeout = (req.params() || [3000])[0];
        var ilxTimeout = tclTimeout - 300;
        console.log('TCL Timeout:',tclTimeout);
        console.log('ILX Timeout:',ilxTimeout);
        /////////////////////////////////
    } catch (e) {
        res.reply(1);
        console.error('Error with someFunction:', e.message);
        console.error('Stack trace:', e.stack);
        return;
    }
    try {
        // Parse POST form from the params
        var data = qs.parse(req.params()[1]);
        console.log('Input Data:', data);
        /////////////////////////////////
    } catch (e) {
        res.reply(2);
        console.error('Error with someFunction:', e.message);
        console.error('Stack trace:', e.stack);
        return;
    }
    try {
        // Convert form to JSON structure
        res.reply([0,JSON.stringify(data)]);
        console.log('Output Data:',JSON.stringify(data));
        /////////////////////////////////
    } catch (e) {
        res.reply(3);
        console.error('Error with someFunction:', e.message);
        console.error('Stack trace:', e.stack);
        return;
    }
});

ilx.listen();
