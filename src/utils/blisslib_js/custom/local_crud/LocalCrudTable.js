
// IMPORT Dependencies
import IDHandler from '../../common/IDHandler';

/**
 * @class LocalCrudTable is intended as a primitive data table actualization
 * that can perform CRUD operations onto CSV and JSON database files,
 * and capture, export, and import its own states for state management
 */

// DECLARE parse and require
const Papa = require('papaparse'); // Ensure to install PapaParse via npm
const fs = require('fs');

const UTILITY_NAME = 'LocalCrudTable';

class LocalCrudTable {

  constructor(tableLabel = '', initialData, filePath = null, fileFormat = null, idRegex = null) {

    // attributes of current LocalCrudTable instance
    this.tableLabel = tableLabel;
    this.filePath = filePath;
    this.fileFormat = fileFormat;
    this.idRegex = idRegex; // Regex pattern for ID format
    this.table = [];
    this.idHandler = new IDHandler(); // Instantiate IDHandler

    this.initialize(initialData);
    
    // STATE initial
    this.initState =
    {
      tableLabel: this.tableLabel,
      table: [...this.table],
      nextId: this.idHandler.getNextId(),
      filePath: this.filePath,
      fileFormat: this.fileFormat,
      idRegex: this.idRegex,
    }

  }

  /**
   * @method initializeData to assign initial data and calculate nextId
   * @param {*} initialData 
   */
  initialize(initialData) {
    initialData.forEach(instance => {
      const id = instance.id;
      this.table.push(instance); // add instance to table
      this.idHandler.setNextId(this.idHandler.popNextId(), id + 1); // Calculate nextId
    });
  }

  /**
   * @method fromCSV
   * @param {*} filePath 
   * @returns 
   */
  static fromCSV(tableLabel, filePath) {
    const csvData = fs.readFileSync(filePath, 'utf8');
    const parsedData = Papa.parse(csvData, { header: true, dynamicTyping: true });
    const idRegexRow = parsedData.data.find(row => row.id_regex); // Look for the row containing the regex pattern
    let idRegex = null;
    let instances = parsedData.data;
    if (idRegexRow) {
      idRegex = new RegExp(idRegexRow.id_regex); // Parse the regex pattern
      instances = instances.filter(row => !row.id_regex); // Remove the row containing the regex pattern
    }
    return new LocalCrudTable(tableLabel, instances, filePath, 'csv', idRegex);
  }


  /**
   * @method fromJSON
   * @param {*} filePath 
   * @returns 
   */
  static fromJSON(tableLabel, filePath) {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const instances = JSON.parse(jsonData);
    const idRegex = instances.id_regex ? new RegExp(instances.id_regex) : null; // Parse the regex pattern
    delete instances.id_regex; // Remove the regex pattern from instances
    return new LocalCrudTable(tableLabel, instances, filePath, 'json', idRegex);
  }

  /**
   * @method fromState
   * @param {*} state 
   * @returns 
   */
  static fromState(state) {

    // verify state object
    if (!state || typeof state !== 'object') {
      throw new Error(`[${UTILITY_NAME} - ${state.tableLabel ?? 'unknown'}] Invalid state object`);
    }
  
    // verify state instance integrity
    const { tableLabel, table, nextId, filePath, fileFormat } = state;
    if (typeof tableLabel !== 'string' || !Array.isArray(table) || typeof nextId !== 'number' || typeof filePath !== 'string' || typeof fileFormat !== 'string') {
      throw new Error(`[${UTILITY_NAME} - ${tableLabel}] Invalid state properties`);
    }
  
    const tableInstance = new LocalCrudTable(tableLabel, table, filePath, fileFormat);
    tableInstance.nextId = nextId; // Assign the nextId from the state
    return tableInstance;

  }

  /**
  * @method getCurrState to collect the current state of this table
  */
  getCurrState() {
    return {
      tableLabel: this.tableLabel,
      table: [...this.table],
      nextId: this.nextId,
      filePath: this.filePath,
      fileFormat: this.fileFormat,
    };
  }

  /**
   * @method getInitState to collect initial state of this table
   */
  getInitState() { return this.initState; }

  /**
   * @method findIndex
   * @param {*} id to search for
   */
  findIndex(id) {
    return this.table.findIndex(instance => instance.id === id);
  }

  /**
   * @method create registers a given data instance to table
   * @param {*} instance object/instance to be added to table
   */
  create(instance) {
    if (!instance.id) {
      instance.id = this.idHandler.popNextId();
    }
    if (this.idRegex && !this.idRegex.test(instance.id)) {
      throw new Error(`[${UTILITY_NAME} - ${this.tableLabel}] ID does not match the specified pattern`);
    }
    this.table.push(instance); // add instance to table
    return instance.id; // Return the newly created ID
  }

  /**
   * @method read seeks and finds a data instance within table
   * @param {*} id of instance to be found
   * @returns data instance found with given id
   */
  read(id) {
    return this.table.find(instance => instance.id === id);
  }

  /**
   * @method update an instance within table with given
   * @param {*} id of instance to be updated
   * @param {*} newData containing updates to the instance
   */
  update(id, newData) {
    const index = this.findIndex(id); // Added 'this' keyword here
    if (index !== -1) {
      this.table[index] = { ...this.table[index], ...newData }; // overwrite new data
    } else {
      throw new Error(`ID ${id} not found in table`);
    }
  }

  /**
   * @method delete finds, and if exists, deletes a data instance by id
   * @param {*} id of instance to be deleted
   */
  delete(id) {
    const index = this.findIndex(id); // Added 'this' keyword here
    if (index !== -1) {
      this.table.splice(index, 1); // Remove the instance from the table
    } else {
      throw new Error(`ID ${id} not found in table`);
    }
  }

  /**
   * @method writePermanent purposed for writing current state permanently to the file
   */
  writePermanent() {
    if (!this.filePath || !this.fileFormat) {
      throw new Error(`[${UTILITY_NAME} - ${this.tableLabel}] File path or format not specified`);
    }
    if (this.fileFormat === 'csv') {
      const csvData = Papa.unparse(this.table);
      fs.writeFileSync(this.filePath, csvData, 'utf8');
    } else if (this.fileFormat === 'json') {
      const jsonData = JSON.stringify(this.table, null, 2);
      fs.writeFileSync(this.filePath, jsonData, 'utf8');
    } else {
      throw new Error(`[${UTILITY_NAME} - ${this.tableLabel}] Unsupported file format`);
    }
  }

}

export default LocalCrudTable;