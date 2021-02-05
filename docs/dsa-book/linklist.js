/**
 * 单链表翻转
 * 1 -> 2 -> 3 -> 4
 * 1 <- 2 <- 3 <- 4
 * */

const logLinkList = list => {
    cur = list;
    const rets = [];
    while(cur) {
        rets.push(cur.value);
        cur = cur.next;
    }
    console.log(rets.join(' -> '));
}

const createLinkList = arr => {
    let head;
    let cur;
    arr.forEach(e => {
        if (!head) {
            head = {
                value: e
            };
            cur = head;
        }
        else {
            cur.next = {
                value: e
            };
            cur = cur.next;
        }
    });
    return head;
};

// 单链表反转
const reverseLinkList = link => {
    let pre = null;
    let cur = link;
    while(cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}

const alinkList = createLinkList([1, 2, 3, 4, 5]);
logLinkList(alinkList);

const reverse = reverseLinkList(alinkList);
logLinkList(reverse);