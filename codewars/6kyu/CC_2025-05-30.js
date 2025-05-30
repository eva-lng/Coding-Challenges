/* Temperature converter

Write a function convert_temp(temp, from_scale, to_scale) converting temperature from one scale to another. Return converted temp value.

Round converted temp value to an integer(!).

Reading: http://en.wikipedia.org/wiki/Conversion_of_units_of_temperature

possible scale inputs:
    "C"  for Celsius
    "F"  for Fahrenheit
    "K"  for Kelvin
    "R"  for Rankine
    "De" for Delisle
    "N"  for Newton
    "Re" for Réaumur
    "Ro" for Rømer
    
temp is a number, from_scale and to_scale are strings.

convert_temp(   100, "C",  "F") # => 212
convert_temp(    40, "Re", "C") # => 50
convert_temp(    60, "De", "F") # => 140
convert_temp(373.15, "K",  "N") # => 33
convert_temp(   666, "K",  "K") # => 666
*/

function convertTemp(temp, from_scale, to_scale) {
  const toKelvin = {
    K: (t) => t,
    C: (t) => t + 273.15,
    F: (t) => ((t + 459.67) * 5) / 9,
    R: (t) => (t * 5) / 9,
    De: (t) => 373.15 - (t * 2) / 3,
    N: (t) => (t * 100) / 33 + 273.15,
    Re: (t) => (t * 5) / 4 + 273.15,
    Ro: (t) => ((t - 7.5) * 40) / 21 + 273.15,
  };

  const fromKelvin = {
    K: (t) => t,
    C: (t) => t - 273.15,
    F: (t) => (t * 9) / 5 - 459.67,
    R: (t) => (t * 9) / 5,
    De: (t) => ((373.15 - t) * 3) / 2,
    N: (t) => ((t - 273.15) * 33) / 100,
    Re: (t) => ((t - 273.15) * 4) / 5,
    Ro: (t) => ((t - 273.15) * 21) / 40 + 7.5,
  };

  const kelvin = toKelvin[from_scale](temp);
  return Math.round(fromKelvin[to_scale](kelvin));
}
