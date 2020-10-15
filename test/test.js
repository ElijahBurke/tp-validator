'use strict'

require('chai').should();
const validate = require('../index');
const mocks = require('./mocks');

describe('Should validate credit cards', function () {
  it('Should check for invalid cards', function () {
    validate(mocks.invalid).should.eql('Invalid');
  });

  it('Should return the company name for valid cards', function () {
    validate(mocks.amex).should.eql('Valid. You have a AMEX.');
    validate(mocks.visa).should.eql('Valid. You have a VISA.');
    validate(mocks.mastercard).should.eql('Valid. You have a MASTERCARD.');
  });

})
