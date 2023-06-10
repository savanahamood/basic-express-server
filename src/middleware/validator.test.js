'use strict';
const validator=require('./validator');
describe("validator testing",()=>{
    
    it('call next if name is valid', () => {
        const req = { query: { name: '' } };
        const res = {};
        const next = jest.fn();
        validator(req, res, next);
    
        expect(next).toHaveBeenCalled();
      });
    
       it('call next if name is not valid', () => {
        const req = { query: {} };
        const res = {};
        const next = jest.fn();
        validator(req, res, next);
    
    expect(next).toHaveBeenCalledWith(`name not valid`);

      
    
      
    
          }) 
})
