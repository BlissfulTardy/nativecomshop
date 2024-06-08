const UTILITY_NAME = 'DynamicFilter';

/**
 * @class DynamicFilter
 * intended to apply dynamic and efficient filtering on a provided data chunk
 */
class DynamicFilter {

  /**
   * @constructor DynamicFilter
   * @param {Array} baseData base unfiltered data array to operate on
   */
  constructor (baseData = []) {
    this.baseData = baseData;
    this.currFilter = {};
    this.slices = [];
  }

  /**
   * @method getCurrent
   * @returns current resulting data from filter operation
   */
  getCurrent() {
    const index = this.slices.length - 1;
    if (index >= 0) {
      return this.slices[index].data;
    } else {
      return this.baseData;
    }
  }

  /**
   * @method setData
   * @param {*} toSet 
   */
  setData(toSet = []) {
    this.baseData = toSet;
    this.handleBaseDataChange();
  }

  /**
   * @method append
   * @param {*} addedData 
   */
  append(addedData) {
    // TODO consider implementing further validation measures
    if (Array.isArray(addedData)) {
      this.baseData = [...this.baseData, ...addedData];
      this.handleBaseDataChange();
    } else {
      console.error(`[${UTILITY_NAME}] append() expects an array`);
    }
  }

  /**
   * @method updateFilter updates filter to be applied
   * @param {*} filter 
   */
  updateFilter(filter) {
    this.handleFilterChange(filter);
  }

  /**
   * @method clearFilter clears previously applied filter
   */
  clearFilter() {
    this.handleFilterChange();
  }

  handleBaseDataChange() {
    if (this.baseData) {
      this.slices = DynamicFilter.rundownSlices(this.baseData, this.currFilter, this.slices);
    } else {
      this.baseData = [];
      this.currFilter = {};
      this.slices = [];
    }
  }

  handleFilterChange(filter = {}) {
    this.currFilter = filter;
    this.slices = DynamicFilter.rundownSlices(this.baseData, this.currFilter, this.slices);
  }

  /**
   * @method rundownSlices performs re-filtering in a slice based iterative structure
   * @param {*} baseData 
   * @param {*} currFilter 
   * @param {*} slices 
   * @returns 
   */
  static rundownSlices(baseData, currFilter, slices) {
    // [1] initiate operation variables
    const update = [...slices];
    let rundownFilter = { ...currFilter };
    let index = 0;
    // [2] rundown existing slices
    while (index < slices.length) {
      const sliceFilter = update[index].filter;
      if (!DynamicFilter.subsetOf(sliceFilter, rundownFilter)) {
        break;
      }
      rundownFilter = DynamicFilter.diffObjectFrom(rundownFilter, sliceFilter);
      index = index + 1;
    }
    // [3] apply filter from where required
    let data = (update.length > 0) ? update[index - 1].data : baseData;
    const remKeys = Object.keys(rundownFilter);
    for (const key of remKeys) {
      const { origin, popped } = DynamicFilter.popObjectFrom(key, rundownFilter);
      update[index] = {
        filter: popped,
        data: DynamicFilter.filterData(data, popped)
      };
      data = update[index].data;
      index = index + 1;
    }
    return update;
  }

  /**
   * @method subsetOf determines whether a given object is a key-value subset of another object
   * @param {*} subset 
   * @param {*} of 
   * @returns {boolean}
   */
  static subsetOf(subset, of) {
    for (const [key, value] of Object.entries(subset)) {
      if (!of.hasOwnProperty(key) || of[key] !== value) {
        return false;
      }
    }
    return true;
  }

  /**
   * @method diffObjectFrom to differentiate an object (filter) from a given subset or counterpart
   * @param {Object} from 
   * @param {Object} object 
   * @returns {Object}
   */
  static diffObjectFrom(object, from) {
    const diff = {};
    for (const key of Object.keys(object)) {
      if (from[key] !== object[key]) {
        diff[key] = object[key];
      }
    }
    return diff;
  }

  /**
   * @method popObjectFrom pops a defined subset object from another, producing two exclusive objects
   * @param {string|string[]} keys 
   * @param {Object} from 
   * @returns {Object}
   */
  static popObjectFrom(keys, from) {
    const origin = { ...from };
    const popped = {};

    if (!Array.isArray(keys)) keys = [keys];

    for (const key of keys) {
      if (key in from) {
        popped[key] = from[key];
        delete origin[key];
      }
    }
    return { origin, popped };
  }

  /**
   * @method filterData to filter a given data set per provided filter config
   * @param {Array} data 
   * @param {Object} filter 
   * @returns {Array}
   */
  static filterData(data, filter) {
    return data.filter(item => DynamicFilter.matchItem(item, filter));
  }

  /**
   * @method matchItem to validate an item per given filter configuration
   * @param {Object} item
   * @param {Object} filter
   * @returns {boolean}
   */
  static matchItem(item, filter) {
    // evaluating item per each specified key within filter config
    for (const [key, value] of Object.entries(filter)) {
      // check [boolean]
      if (typeof value === 'boolean' && item[key] !== value) {
        return false;
      }
      // check [numeric interval]
      if (Array.isArray(value) && value.length === 2 && (typeof item[key] === 'number')) {
        const [min, max] = value;
        if (item[key] < min || item[key] > max) {
          return false;
        }
      }
      // check [array]
      if (Array.isArray(value) && !value.includes(item[key])) {
        return false;
      }
      // check [substring]
      if (typeof value === 'string' && !item[key].includes(value)) {
        return false;
      }
      // check [object/enum]
      if (typeof value === 'object' && !Array.isArray(value) && !(item[key] in value)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @method matchObjectsByProp to validate both objects by a given property key
   * @param {string} key the key to check in both objects
   * @param {Object} o1 the first object
   * @param {Object} o2 the second object
   * @returns {boolean}
   */
  static matchObjectsByProp(key, o1, o2) {
    if (o1.hasOwnProperty(key) && o2.hasOwnProperty(key)) {
      return o1[key] === o2[key];
    }
    return false;
  }
}

export default DynamicFilter;