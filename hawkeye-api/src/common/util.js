const getRequestBasicData = ctx => {
  const { request } = ctx;
  return {
    ip: request.ip,
    userAgent: request.headers['user-agent'],
    st: Date.now()
  };
};

module.exports = {
  getRequestBasicData
};
