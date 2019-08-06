const express = require('express');
const assignmentRoutes = express.Route();

const Assignment = require('../models/Assingment');

assignmentRoutes.route('/add').post(function (res, req){
    let assignment = new Assignment(res.body);
    assignment.save()
        .then( assignment => {
            res.status(200).json({'assignment': 'Successfully Assignment Added'});
        })
        .cath(assignment => {
            res.status(400).send("Unable to Save");
        })

});

assignmentRoutes.route('/').get(function (res, req){
    Assignment.find(function (err, assignment){
        if(err){
            console.log(err);
        }else{
            res.json(assignment);
        }
    });
});

assignmentRoutes.route('/delete/:id').get(function (res, req){
    Assignment.findByIdAndRemove({id : req.param.id}, function (err, assignment){
        if(err){req.send(err);}
        else{ res.json({"delete": "assignment delete successfully"});}
    });
});

model.export = assignmentRoutes;
