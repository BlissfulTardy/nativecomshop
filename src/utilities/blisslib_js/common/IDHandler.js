
const UTILITY_NAME = 'IDHandler';

/**
 * The `IDHandler` class provides functionality to handle IDs,
 * including tracking, validation, comparison, and manipulation
 * of ID values based on data type and regex patterns.
 * @class IDHandler
 */
class IDHandler {

  constructor(dataType = 'number', idRegex = null, nextId = 0) {
    this.dataType = dataType; // ID data type
    this.idRegex = idRegex; // Regex pattern for ID format
    this.nextId = nextId; // Next available ID
  }

  /**
   * @method getNextId
   * @returns {*} Current nextId value
   */
  getNextId() {
    return this.nextId;
  }

  /**
   * @method popNextId
   * @returns {*} The current nextId and calculates the next valid ID value
   */
  popNextId() {
    const curr = this.nextId;
    const next = this.calcNextId(curr);
    this.nextId = next;
    return curr;
  }

  /**
   * @method calcNextId
   * @param {*} currId The current nextId
   * @returns {*} Next valid id
   */
  calcNextId(currId) {
    // If the current id is a number, simply return the incremented value
    if (typeof currId === 'number') {
      return currId + 1;
    } else if (typeof currId === 'string') { // If the current id is a string
      // Convert the string to an array of characters
      let idArray = currId.split('');

      // Extract minimum and maximum digit values from the regex
      const minDigit = this.idRegex ? parseInt(this.idRegex.source.match(/[0-9]/g).sort()[0]) : 0;
      const maxDigit = this.idRegex ? parseInt(this.idRegex.source.match(/[0-9]/g).sort().reverse()[0]) : 9;

      // Iterate over the characters from right to left
      for (let i = idArray.length - 1; i >= 0; i--) {
        let char = idArray[i];

        // If the character is a digit or uppercase letter
        if (/[0-9A-Z]/.test(char)) {
          // Increment the character by 1
          let nextChar = String.fromCharCode(char.charCodeAt(0) + 1);

          // Check if the next character exceeds the maximum digit value
          if (/[A-Z0-9]/.test(nextChar) && parseInt(nextChar) <= maxDigit) {
            idArray[i] = nextChar;
            break; // Exit loop once incremented
          } else {
            idArray[i] = /[0-9]/.test(char) ? String(minDigit) : 'A'; // Reset to minimum digit value or 'A'
          }
        }
      }

      // If the first character is '0', insert the minimum digit value at the beginning
      if (idArray[0] === '0') {
        idArray.unshift(String(minDigit));
      }

      // Convert the array back to a string and return it
      return idArray.join('');
    } else {
      throw new Error(`[${UTILITY_NAME}] Invalid ID data type`);
    }
  }

  /**
   * @method validate
   * @param {*} id ID value to validate
   * @returns {boolean} True if the ID value is valid, otherwise false
   */
  validate(id) {
    if (this.idRegex && !this.idRegex.test(id)) {
      return false;
    }
    if (this.dataType === 'number') {
      return !isNaN(Number(id));
    } else {
      return typeof id === 'string';
    }
  }

  /**
   * @method compare
   * @param {*} id1 First ID value to compare
   * @param {*} id2 Second ID value to compare
   * @returns {number} Numerical value based on the comparison result
   */
  compare(id1, id2) {
    if (!this.validate(id1) || !this.validate(id2)) {
      return NaN; // Return NaN if at least one ID is not valid
    }

    if (this.dataType === 'number') {
      return Number(id1) - Number(id2);
    } else {
      return id1.localeCompare(id2);
    }
  }

  /**
   * @method setRegex
   * @param {RegExp} idRegex Regex pattern to set
   */
  setRegex(idRegex) {
    if (idRegex instanceof RegExp) {
      this.idRegex = idRegex;
    } else {
      console.error(`[${UTILITY_NAME}] Invalid regex pattern provided`);
    }
  }

  /**
   * @method setNextId
   * @param {number} nextId Next ID value to set
   */
  setNextId(nextId) {
    if (this.validate(nextId)) {
      this.nextId = nextId;
    } else {
      console.error(`[${UTILITY_NAME}] Invalid nextId value provided`);
    }
  }

  /**
   * @method getState
   * @returns {object} Object containing the current state of this ID handler
   */
  getState() {
    return {
      dataType: this.dataType,
      idRegex: this.idRegex ? this.idRegex.source : null,
      nextId: this.nextId,
    };
  }

}

export default IDHandler;
