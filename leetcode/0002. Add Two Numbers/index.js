import { ListNode } from '../../utils/index';

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

const addTwoNumbers = (l1, l2) => {
  let rootA = l1;
  let rootB = l2;
  if (!rootA && !rootB) return false;

  if (rootA && rootB) {
    const sum = rootA.val + rootB.val;
    if (sum >= 10) {
      rootA.val = sum - 10;
      if (rootA.next) {
        rootA.next.val++;
      } else {
        rootA.next = new ListNode(1)
      }
    } else {
      rootA.val = sum;
    }
  } else if (rootA) {
    const sum = rootA.val;
    if (sum >= 10) {
      rootA.val = sum - 10;
      if (rootA.next) {
        rootA.next.val++;
      } else {
        rootA.next = new ListNode(1)
      }
    } else {
      rootA.val = sum;
    }
  } else if (rootB) {
    rootA = new ListNode(rootB.val)
  }
  rootA.next = addTwoNumbers((rootA || {}).next, (rootB || {}).next);
  return rootA;
};


export default addTwoNumbers;