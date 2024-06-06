
import LocalCrudTable from "../../utilities/blisslib_js/custom/local_crud/LocalCrudTable"

const TableProductsDummy =
LocalCrudTable
.fromJSON(
  'CategoriesDummyCSV',
  'src\data\database\csv\DataProductsDummy.csv'
);

export default TableProductsDummy;