var assert = require("assert");
let chai = require("chai");
//let expect = require("chai").expect;
let chaiHttp = require("chai-http");
let server= require("../../server");
let should = chai.should();
chai.use(chaiHttp);

describe("API Indicators", function(){
    describe ("HTTP a API", function(){
        it("debe responder status 200", done=>{
            chai.request(server)
                .get("/get_last")
                .send({})
                .end((err,res)=>{
                    res.should.be.a.status(200);
                    done()
                })
        }),
        it("debe responder status 404", done=>{
            chai.request(server)
                .get("/get")
                .send({})
                .end((err,res)=>{
                    res.should.be.a.status(404);
                    done()
                })
        })
    })
    
})