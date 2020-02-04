export const formatters = {
  getIssueName: value => {
    const regex = new RegExp(/\[(.*?)\]/, 'g');

    return {
      cleanString: value.replace(regex, '').trim(),
      matches:
        value.match(regex) !== null
          ? value
              .match(regex)
              .map(item => item.replace(/\[|(.*?)\]/g, '$1').trim())
          : ''
    };
  }
};
