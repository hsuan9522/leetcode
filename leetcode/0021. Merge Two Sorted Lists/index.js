const mergeTwoLists = (l1, l2) => {
    if (l1 && !l2) {
        return l1;
    } else if (!l1 && l2) {
        return l2;
    } else if (!l1 && !l2) {
        return null;
    }

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    let right, left, ans, point;
    if (l1.val <= l2.val) {
        right = l1.next;
        left = l2;
        ans = new ListNode(l1.val);
    } else {
        right = l1;
        left = l2.next;
        ans = new ListNode(l2.val);
    }
    point = ans;


    while (right || left) {
        if (right && !left) {
            point.next = new ListNode(right.val);
            right = right.next;
            point = point.next;
        } else if (!right && left) {
            point.next = new ListNode(left.val);
            left = left.next;
            point = point.next;
        } else if (right && left) {
            if (right.val > left.val) {
                point.next = new ListNode(left.val);
                left = left.next;
            } else {
                point.next = new ListNode(right.val);
                right = right.next;
            }
            point = point.next;
        } else {
            break;
        }
    }
    return ans;
};


export default mergeTwoLists;
