const numUniqueEmails = (emails) => {
  let ans = [];
  for (const i in emails) {
    let tmp = emails[i].split('@');
    tmp[0] = tmp[0].replace(/(\.|\+.*)/g, '');
    emails[i] = tmp[0] + '@' + tmp[1];
    if (!ans.includes(emails[i])) {
      ans.push(emails[i]);
    }
  }
  return ans.length;
};

export default numUniqueEmails;