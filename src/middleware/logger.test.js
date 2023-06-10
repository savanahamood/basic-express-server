'use strict';
//const { describe } = require('yargs');
const logger=require('./logger');
//const { test, it, beforeEach } = require('node:test');
//const { exportAllDeclaration } = require('@babel/types');
describe("logger testing",()=>{
    let consoleSpy;
    let req={};
    let res={};
    let next=jest.fn();
    beforeEach(()=>{
        consoleSpy=jest.spyOn(console,"log")
    });

    test('it is logging things',()=>{ 
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('it calls next',()=>{
        logger(req,res,next);
        expect(next).toHaveBeenCalled();
     })
})