import mergeTrees from "./index";
import { arrayToTreeNode} from "../../utils/index";
describe("mergeTrees", () => {
  test("A", () =>{
    let t1 = arrayToTreeNode([1, 3, 2, 5]);
    let t2 = arrayToTreeNode([2, 1, 3, null, 4, null, 7]);
    expect(mergeTrees(t1, t2)).toEqual(arrayToTreeNode([3, 4, 5, 5, 4, null, 7]))
  })
})