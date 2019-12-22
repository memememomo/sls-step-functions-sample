'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.world = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'World',
                input: event,
            },
            null,
            2
        ),
    }
};
