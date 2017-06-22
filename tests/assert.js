var assert = {
  isEqual: function(firstAssertion, secondAssertion) {
    console.log(`${firstAssertion} and ${secondAssertion} are being tested for equality.`)
    if (firstAssertion !== secondAssertion) {
      throw new Error(`Expected ${firstAssertion} to equal ${secondAssertion}`)
    }
    else {
      console.log(`They are equal.`)
    };
  },

  isTrue: function(assertionToCheck) {
    console.log(`${assertionToCheck} is being tested for truthyness`)
    if (assertionToCheck) {
      console.log(`It is truthy`)
    }
    else {
      throw new Error(`Assertion failed: ${assertionToCheck} is not truthy`);
    };
  },

  isFalse: function(assertionToCheck) {
    console.log(`${assertionToCheck} is being tested for falsyness`)
    if (!assertionToCheck) {
      console.log(`It is falsy`)
    }
    else {
      throw new Error(`Assertion failed: ${assertionToCheck} is not falsy`);
    };
  },

};
