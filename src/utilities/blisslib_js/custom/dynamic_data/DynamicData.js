
// IMPORT Dependency
import DynamicFilter from "../../common/DynamicFilter";

const UTILITY_NAME = 'DynamicData';

/**
 * @class DynamicData
 */
class DynamicData {

  static NULL_OPERATION = (name) =>
  {
    throw new Error(`[${UTILITY_NAME} - ${this.label}] cannot execute unimplemented ${name} operation!`)
  }

  // implement interfaces for expected specialized methods below

  static OPS =
  {
    getNextChunk: async (sizeChunk) => {
      NULL_OPERATION('getNextChunk');
    },
  }

  /**
   * @constructor
   * @param {*} source variable/function providing data source/interface
   * @param {*} shape a conversion function to be applied on each data instance
   * @param {*} config set of parameters for configuring operational behaviour
   * @param {function} init function to initialize the data source
   * @param {object} ops functions for data operations
   */
  constructor(label, source, shape, config, init, ops, typeName)
  {

    // external variables
    this.label = label;
    this.source = source;
    this.shape = shape;
    this.config = config;
    this.typeName = typeName;

    // config variables
    Object.assign(this, config); // TODO enumerate expected config variables somewhere
    /* currently utilized config variables:
    sizeChunk
    */

    // content variables // TODO currently working with a primitive implementation
    // TODO! consider and introduce advanced lazy loading and data partition implementations
    this.data = []; // complete set of data collected from source
    this.last = []; // contains last chunk of data collected from source

    // data initialization
    this.init = init;
    this.init();

    // filter initialization
    this.filterer = new DynamicFilter(this.data);

    // TODO specialized ops methods here
    Object.assign(this, {...DynamicData.OPS});
    Object.assign(this, {...ops});

  }

  // implement local methods below

  /**
   * @method getCurrent returns current results from filterer with an optional minimum resulting instances forced
   * @param {*} forceMin number of minimum instances to be seeked before return
   */
  getCurrent(forceMin = 0) {
    // TODO consider elaboration of implementation on both this and DynamicFilter level
    const current = this.filterer.getCurrent();
    while (current.size < forceMin) {
      this.fetchNextChunk();
      this.handleDataUpdate();
      current = this.filterer.getCurrent();
    }
  }

  /**
   * @method setData
   * @param {*} data toSet
   */
  setData(data = []) {
    this.handleDataUpdate(false, data);
  }

  /**
   * @method fetchNextChunk to collect next chunk
   */
  fetchNextChunk() {
    this.last = this.getNextChunk(this.sizeChunk) ?? [];
    if (this.last) {
      this.handleDataUpdate(true);
    } else {
      console.warn(`[${UTILITY_NAME} - ${this.typeName}] No more data to fetch`);
    }
  }

  /**
   * @method updateFilter to update filter
   * @param {*} filter 
   */
  updateFilter(filter) {
    this.handleFilterUpdate(filter);
  }

  /**
   * @method handleDataUpdate for when data changes
   * @param {*} fetch 
   * @param {*} data 
   */
  handleDataUpdate(fetch, data = []) {
    if(fetch && this.last.length > 0) {
      const toAdd = [...this.last];
      this.data.concat(toAdd);
      this.filterer.append(toAdd);
    } else {
      this.setData(data);
      this.filterer.setData(data);
    }
    this.last = [];
  }

  /**
   * @method handleFilterUpdate for when filter changes
   * @param {*} filter 
   */
  handleFilterUpdate(filter) {
    this.filterer.updateFilter(filter);
  }

  /////////////////////////////////////////////////////////////////////////////

  // 'FROM' CONSTRUCTOR WRAPPERS for different data gathering methodologies
  // TODO! CONTINUE WITH IMPLEMENTING INDIVIDUAL FROM CONSTRUCTOR WRAPPER FUNCTIONS
  
  /**
   * @method fromAny examplary initializer wrapper customizable for any data methodology
   * @param {*} source
   * @param {*} shape
   * @param {*} config
   */
  static fromAny(label, source, shape, config) {

    const typeName = 'fromAny'

    const init = () => {
      // specialized initialization function to be implemented here
    }

    const ops = {
      // specialized operation functions are to be implemented here
    }

    return new DynamicData(label, source, shape, config, init, ops, typeName);

  }

  /**
   * @method fromArray Source: Regular JavaScript Array
   * @param {*} label 
   * @param {*} array 
   * @param {*} shape 
   * @param {*} config 
   * @returns 
   */
  static fromArray(label, array, shape, config) {
    const typeName = 'fromArray';
  
    const init = () => {
      // No specific initialization required for an array
    };
  
    const ops = {
      getNextChunk: async (sizeChunk) => {
        const start = this.data.length;
        const end = Math.min(start + sizeChunk, array.length);
        return array.slice(start, end);
      }
    };
  
    return new DynamicData(label, array, shape, config, init, ops, typeName);
  }

  /**
   * @method fromCSV Source: CSV files
   * @param {*} label 
   * @param {*} filePath 
   * @param {*} shape 
   * @param {*} config 
   * @returns 
   */
  static fromCSV(label, filePath, shape, config) {
    const typeName = 'fromCSV';
  
    const init = () => {
      const csvData = fs.readFileSync(filePath, 'utf8');
      this.source = Papa.parse(csvData, { header: true, dynamicTyping: true }).data;
    };
  
    const ops = {
      getNextChunk: async (sizeChunk) => {
        const start = this.data.length;
        const end = Math.min(start + sizeChunk, this.source.length);
        return this.source.slice(start, end);
      }
    };
  
    return new DynamicData(label, null, shape, config, init, ops, typeName);
  }
  
  /**
   * @method fromJSON Source: JSON Files
   * @param {*} label 
   * @param {*} filePath 
   * @param {*} shape 
   * @param {*} config 
   * @returns 
   */
  static fromJSON(label, filePath, shape, config) {
    const typeName = 'fromJSON';
  
    const init = () => {
      const jsonData = fs.readFileSync(filePath, 'utf8');
      this.source = JSON.parse(jsonData);
    };
  
    const ops = {
      getNextChunk: async (sizeChunk) => {
        const start = this.data.length;
        const end = Math.min(start + sizeChunk, this.source.length);
        return this.source.slice(start, end);
      }
    };
  
    return new DynamicData(label, null, shape, config, init, ops, typeName);
  }
  
  /**
   * @method fromRedux Source: React Redux Data Store
   * @param {*} label 
   * @param {*} store 
   * @param {*} selector 
   * @param {*} shape 
   * @param {*} config 
   * @returns 
   */
  static fromRedux(label, store, selector, shape, config) {
    const typeName = 'fromRedux';
  
    const init = () => {
      this.source = selector(store.getState());
      store.subscribe(() => {
        this.source = selector(store.getState());
        this.handleDataUpdate(false, this.source);
      });
    };
  
    const ops = {
      getNextChunk: async (sizeChunk) => {
        const start = this.data.length;
        const end = Math.min(start + sizeChunk, this.source.length);
        return this.source.slice(start, end);
      }
    };
  
    return new DynamicData(label, null, shape, config, init, ops, typeName);
  }
  
  /**
   * @param fromLocalCrudTable Source: Custom LocalCrudTable Instance
   * @param {*} label 
   * @param {*} tableLabel 
   * @param {*} filePath 
   * @param {*} fileFormat 
   * @param {*} shape 
   * @param {*} config 
   * @returns 
   */
  static fromLocalCrudTable(label, tableLabel, filePath, fileFormat, shape, config) {
    const typeName = 'fromLocalCrudTable';
  
    const init = () => {
      if (fileFormat === 'csv') {
        this.source = LocalCrudTable.fromCSV(tableLabel, filePath).table;
      } else if (fileFormat === 'json') {
        this.source = LocalCrudTable.fromJSON(tableLabel, filePath).table;
      }
    };
  
    const ops = {
      getNextChunk: async (sizeChunk) => {
        const start = this.data.length;
        const end = Math.min(start + sizeChunk, this.source.length);
        return this.source.slice(start, end);
      }
    };
  
    return new DynamicData(label, null, shape, config, init, ops, typeName);
  }
  
  /////////////////////////////////////////////////////////////////////////////

}

export default DynamicData;