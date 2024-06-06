
import LocalCrudTable from "../../utilities/blisslib_js/custom/local_crud/LocalCrudTable"

const TableCategoriesDummy =
LocalCrudTable
.fromJSON(
  'CategoriesDummyCSV',
  'src\data\database\csv\DataCategoriesDummy.csv'
);

export default TableCategoriesDummy;