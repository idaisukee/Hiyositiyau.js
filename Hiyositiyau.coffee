J = require 'julian-date';

Hiyositiyau = class Hiyositiyau
  constructor: () ->
    @name = 3

  now: () ->
    j = new J
    j.julian() - 2375839.4583333335

  printNow: () ->
    # $('#rd').text((new Hiyositiyau).now())
    alert (new Hiyositiyau).now()
