
import LocalCrudTable from "../../utilities/blisslib_js/custom/local_crud/LocalCrudTable"

const TableUsersDummy =
LocalCrudTable
.fromJSON(
  'CategoriesDummyCSV',
  'src\data\database\csv\DataUsersDummy.csv'
);

export default TableUsersDummy;