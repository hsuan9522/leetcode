const encode = (longUrl) => {
  return `http://tinyurl.com/${Buffer.from(longUrl, 'binary').toString('base64')}`
};

const decode = (shortUrl) => {
  let string = shortUrl.split('http://tinyurl.com/')[1];
  return Buffer.from(string, 'base64').toString()
};

export { encode, decode };