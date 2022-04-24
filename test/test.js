'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const expect = require('chai').expect;
const server = require('../app');

const {fakeContext, errorContext} = require('./testData');

chai.should()
chai.use(chaiHttp);

describe("POST /", () => {
    it("It should POST ", (done) => {
        const context = fakeContext.data
        chai.request(server)
            .post("/api/formatter/context")
            .send(context)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.duplicatedData.should.be.a('array');
                response.body.uniqueData.should.be.a('array');
                expect(JSON.stringify(response.body)).to.equal(JSON.stringify(fakeContext.result));
                done();
            });
    });

    // middleware will return 400
    it("It should not POST ", (done) => {
        const context = errorContext.data
        chai.request(server)
            .post("/api/formatter/context")
            .send(context)
            .end((err, response) => {
                response.should.have.status(400);
                response.should.have.property('error');
                response.body.should.be.a('object');
                done();
            });
    });
});